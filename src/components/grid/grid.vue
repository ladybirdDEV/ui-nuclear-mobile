<template>
 <div :class="cls">
    <template v-if="isCarousel">
      <Carousel>
        <div :class="`${prefixCls}-carousel-page`" v-for="(page, pageIndex) in pageArr" :key="pageIndex">
          <Flex v-for="(row, rowIndex) in page" :key="rowIndex" justify="center" align="stretch">
            <FlexItem v-for="(col, colIndex) in row" :key="colIndex" :style="colStyle" class="um-grid-item" :class="{'um-grid-null-item': col === false}">
              <Feedback :activeClassName="`${prefixCls}-item-active`" :disabled="!activeStyle" :onMouseUp="() => {click(col, pageIndex * columnNum * carouselMaxRow + rowIndex * columnNum + colIndex) }">
              <div class="um-grid-item-content" v-if="col !== false">
                <div class="um-grid-item-inner-content" :class="'column-num-' + columnNum">
                  <img class="um-grid-icon" :src="col.icon" >
                  <div class="um-grid-text">{{ col.text }}</div>
                </div>
              </div>
              </Feedback>
            </FlexItem>
          </Flex>
        </div>
      </Carousel>
    </template>
    <template v-else>
      <Flex v-for="(row, index) in rowArr" :key="index" justify="center" align="stretch">
        <FlexItem v-for="(col, index) in row" :key="index" :style="colStyle" class="um-grid-item" :class="{'um-grid-null-item': col === false}">
          <Feedback :activeClassName="`${prefixCls}-item-active`" :disabled="!activeStyle" :onMouseUp="() => {click(col, index)}">
          <div class="um-grid-item-content" v-if="col !== false">
            <div class="um-grid-item-inner-content" :class="'column-num-' + columnNum">
              <Render :render="(h) => renderItem(h, col)" v-if="renderItem"></Render>
              <template v-else>
                <img class="um-grid-icon" :src="col.icon" >
                <div class="um-grid-text">{{ col.text }}</div>
              </template>
            </div>
          </div>
          </Feedback>
        </FlexItem>
      </Flex>
    </template>
  </div>
</template>
<script>
import Render from '../base/render'
import Flex from '../flex'
import FlexItem from '../flex-item'
import Carousel from '../carousel'
import Feedback from '../feedback/feedback.vue'
const prefixCls = 'um-grid'
export default {
  name: 'Grid',
  components: {
    Flex,
    FlexItem,
    Feedback,
    Carousel,
    Render
  },
  data () {
    return {
      rowArr: [],
      pageArr: [],
      prefixCls: prefixCls
    }
  },
  created () {
    this.splitData()
  },
  watch: {
    data () {
      this.splitData()
    }
  },
  methods: {
    click (el, index) {
      if (this.onClick) {
        this.onClick(el, index)
      }
    },
    splitData () {
      const data = []
      if (this.isCarousel) {
        let pageCount = Math.ceil(this.dataLength / (this.carouselMaxRow * this.columnNum))
        let perPage = this.carouselMaxRow * this.columnNum
        // 计算一共有多少页
        for (let page = 1; page <= pageCount; page++) {
          let pageData = []
          for (let i = 0; i < perPage; i++) {
            if (i % this.columnNum === 0) {
              pageData[Math.floor(i / this.columnNum)] = []
            }
            let dataIndex = i + (page - 1) * perPage
            pageData[Math.floor(i / this.columnNum)].push(
              dataIndex < this.dataLength ? this.data[dataIndex] : false
            )
          }
          data.push(pageData)
        }
        this.pageArr = data
      } else {
        let itemNumber = this.rowCount * this.columnNum
        for (let i = 0; i < itemNumber; i++) {
          if (i % this.columnNum === 0) {
            data[Math.floor(i / this.columnNum)] = []
          }
          data[Math.floor(i / this.columnNum)].push(i < this.dataLength ? this.data[i] : false)
        }
        this.rowArr = data
      }
    }
  },
  computed: {
    colStyle () {
      return {
        width: this.colWidth,
        ...this.itemStyle
      }
    },
    cls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-square`]: this.square,
        [`${prefixCls}-line`]: this.hasLine,
        [`${prefixCls}-carousel`]: this.isCarousel
      }
    },
    dataLength () {
      if (this.data || this.data.length === 0) {
        return this.data.length
      } else {
        return 0
      }
    },
    rowCount () {
      return Math.ceil(this.data.length / this.columnNum)
    },
    colWidth () {
      return `${100 / this.columnNum}%`
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    columnNum: {
      type: Number,
      default: 4
    },
    hasLine: {
      type: Boolean,
      default: true
    },
    isCarousel: {
      type: Boolean,
      default: false
    },
    carouselMaxRow: {
      type: Number,
      default: 2
    },
    square: {
      type: Boolean,
      default: true
    },
    activeStyle: {
      type: [Boolean, Object],
      default: () => {
        return {}
      }
    },
    activeClassName: {
      type: String
    },
    itemStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    onClick: {
      type: Function
    },
    renderItem: {
      type: Function
    }
  }
}
</script>
