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
import { Flex, FlexItem } from '../Flex'
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
<style>
.um-grid .um-flexbox {
  background: #fff;
}

.um-grid .um-flexbox .um-flexbox-item {
  margin-left: 0;
}

.um-grid .um-flexbox .um-flexbox-item.um-grid-item {
  position: relative;
}

.um-grid .um-flexbox .um-flexbox-item .um-grid-item-active .um-grid-item-content {
  background-color: #ddd;
}

.um-grid .um-flexbox .um-flexbox-item .um-grid-item-content {
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 15px 0;
}

.um-grid .um-flexbox .um-flexbox-item .um-grid-item-content .um-grid-item-inner-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.um-grid
  .um-flexbox
  .um-flexbox-item
  .um-grid-item-content
  .um-grid-item-inner-content
  .um-grid-icon {
  max-width: 100%;
}

.um-grid
  .um-flexbox
  .um-flexbox-item
  .um-grid-item-content
  .um-grid-item-inner-content
  .um-grid-text {
  margin-top: 9px;
  font-size: 12px;
  color: #000;
  text-align: center;
}

.um-grid
  .um-flexbox
  .um-flexbox-item
  .um-grid-item-content
  .um-grid-item-inner-content.column-num-3
  .um-grid-text {
  font-size: 16px;
}

.um-grid
  .um-flexbox
  .um-flexbox-item
  .um-grid-item-content
  .um-grid-item-inner-content.column-num-2
  .um-grid-text {
  margin-top: 15px;
  font-size: 18px;
}

.um-grid.um-grid-line {
  position: relative;
}

.um-grid.um-grid-line:not(.um-grid-carousel) {
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  html:not([data-scale]) .um-grid.um-grid-line:not(.um-grid-carousel) {
    border-top: none;
  }
  html:not([data-scale]) .um-grid.um-grid-line:not(.um-grid-carousel)::before {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    z-index: 1;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: 1px;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3),
  (min-resolution: 2dppx) and (min-resolution: 3dppx) {
  html:not([data-scale]) .um-grid.um-grid-line:not(.um-grid-carousel)::before {
    -webkit-transform: scaleY(0.33);
    -ms-transform: scaleY(0.33);
    transform: scaleY(0.33);
  }
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  html:not([data-scale]) .um-grid.um-grid-line:not(.um-grid-carousel) {
    border-right: none;
  }
  html:not([data-scale]) .um-grid.um-grid-line:not(.um-grid-carousel)::after {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: 1px;
    height: 100%;
    background: #ddd;
    -webkit-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: scaleX(0.5);
    -ms-transform: scaleX(0.5);
    transform: scaleX(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3),
  (min-resolution: 2dppx) and (min-resolution: 3dppx) {
  html:not([data-scale]) .um-grid.um-grid-line:not(.um-grid-carousel)::after {
    -webkit-transform: scaleX(0.33);
    -ms-transform: scaleX(0.33);
    transform: scaleX(0.33);
  }
}

.um-grid.um-grid-line .um-flexbox {
  position: relative;
  border-bottom: 1px solid #ddd;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  html:not([data-scale]) .um-grid.um-grid-line .um-flexbox {
    border-bottom: none;
  }
  html:not([data-scale]) .um-grid.um-grid-line .um-flexbox::after {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    z-index: 1;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3),
  (min-resolution: 2dppx) and (min-resolution: 3dppx) {
  html:not([data-scale]) .um-grid.um-grid-line .um-flexbox::after {
    -webkit-transform: scaleY(0.33);
    -ms-transform: scaleY(0.33);
    transform: scaleY(0.33);
  }
}

.um-grid.um-grid-line .um-flexbox .um-flexbox-item {
  position: relative;
}

.um-grid.um-grid-line .um-flexbox .um-flexbox-item:first-child {
  border-left: 1px solid #ddd;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  html:not([data-scale]) .um-grid.um-grid-line .um-flexbox .um-flexbox-item:first-child {
    border-left: none;
  }
  html:not([data-scale]) .um-grid.um-grid-line .um-flexbox .um-flexbox-item:first-child::before {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    z-index: 1;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 1px;
    height: 100%;
    -webkit-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: scaleX(0.5);
    -ms-transform: scaleX(0.5);
    transform: scaleX(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3),
  (min-resolution: 2dppx) and (min-resolution: 3dppx) {
  html:not([data-scale]) .um-grid.um-grid-line .um-flexbox .um-flexbox-item:first-child::before {
    -webkit-transform: scaleX(0.33);
    -ms-transform: scaleX(0.33);
    transform: scaleX(0.33);
  }
}

.um-grid.um-grid-line .um-flexbox .um-flexbox-item:not(:last-child) {
  border-right: 1px solid #ddd;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  html:not([data-scale]) .um-grid.um-grid-line .um-flexbox .um-flexbox-item:not(:last-child) {
    border-right: none;
  }
  html:not([data-scale])
    .um-grid.um-grid-line
    .um-flexbox
    .um-flexbox-item:not(:last-child)::after {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: 1px;
    height: 100%;
    background: #ddd;
    -webkit-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: scaleX(0.5);
    -ms-transform: scaleX(0.5);
    transform: scaleX(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3),
  (min-resolution: 2dppx) and (min-resolution: 3dppx) {
  html:not([data-scale])
    .um-grid.um-grid-line
    .um-flexbox
    .um-flexbox-item:not(:last-child)::after {
    -webkit-transform: scaleX(0.33);
    -ms-transform: scaleX(0.33);
    transform: scaleX(0.33);
  }
}

.um-grid.um-grid-carousel .um-grid-carousel-page {
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  html:not([data-scale]) .um-grid.um-grid-carousel .um-grid-carousel-page {
    border-top: none;
  }
  html:not([data-scale]) .um-grid.um-grid-carousel .um-grid-carousel-page::before {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    z-index: 1;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: 1px;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3),
  (min-resolution: 2dppx) and (min-resolution: 3dppx) {
  html:not([data-scale]) .um-grid.um-grid-carousel .um-grid-carousel-page::before {
    -webkit-transform: scaleY(0.33);
    -ms-transform: scaleY(0.33);
    transform: scaleY(0.33);
  }
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  html:not([data-scale]) .um-grid.um-grid-carousel .um-grid-carousel-page {
    border-right: none;
  }
  html:not([data-scale]) .um-grid.um-grid-carousel .um-grid-carousel-page::after {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: 1px;
    height: 100%;
    background: #ddd;
    -webkit-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: scaleX(0.5);
    -ms-transform: scaleX(0.5);
    transform: scaleX(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3),
  (min-resolution: 2dppx) and (min-resolution: 3dppx) {
  html:not([data-scale]) .um-grid.um-grid-carousel .um-grid-carousel-page::after {
    -webkit-transform: scaleX(0.33);
    -ms-transform: scaleX(0.33);
    transform: scaleX(0.33);
  }
}

.um-grid .um-carousel .um-carousel-wrap-dot > span {
  background: #dcdee3;
}

.um-grid .um-carousel .swiper-pagination-bullet-active {
  background: #0ae;
}

.um-grid.um-grid-square .um-grid-item:before {
  display: block;
  content: ' ';
  padding-bottom: 100%;
}

.um-grid.um-grid-square .um-grid-item .um-grid-item-content {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.um-grid.um-grid-square .um-grid-item .um-grid-item-inner-content {
  height: 100%;
}

.um-grid.um-grid-square .um-grid-item .um-grid-item-inner-content .um-grid-icon {
  margin-top: 9px;
  width: 28% !important;
}
</style>
