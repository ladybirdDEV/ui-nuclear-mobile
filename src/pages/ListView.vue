<template>
  <div class="wrapper">
    <WhiteSpace></WhiteSpace>
    <h3>Scroll</h3>
    <WhiteSpace></WhiteSpace>
    <ListView ref="scroll" :listData="items" :pullUpLoad="pullUpLoad" @onPullingUp="onPullingUp" @onScroll="onScroll">
      <div class="list">
        <div class="item" v-for="(item, index) in items" :key="index">
          {{item}}
        </div>
      </div>
    </ListView>
  </div>
</template>

<script>
import { ListView, IndexList } from '@/components/ListView'
import WhiteSpace from '@/components/white-space'

export default {
  components: {
    ListView,
    WhiteSpace,
    IndexList
  },
  data () {
    return {
      items: [
        'I am line 1',
        'I am line 2',
        'I am line 3',
        'I am line 4',
        'I am line 5',
        'I am line 6',
        'I am line 7',
        'I am line 8'
      ],
      itemIndex: 8,
      pullUpLoad: {
        threshold: 50,
        txt: {
          more: 'Load more',
          noMore: 'No more data'
        }
      }
    }
  },
  methods: {
    scrollEnd (scrollY) {
      console.log('obj', scrollY)
    },
    onScroll (pos) {
      // console.log('pos', pos)
    },
    onLayout () {
      console.log(234)
    },
    onBeforeScrollStart () {
      console.log('onBeforeScrollStart')
    },
    onPullingUp () {
      // 更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = [
            'I am line ' + ++this.itemIndex,
            'I am line ' + ++this.itemIndex,
            'I am line ' + ++this.itemIndex,
            'I am line ' + ++this.itemIndex,
            'I am line ' + ++this.itemIndex
          ]
          // this.items = this.items.unshift(newPage)
          this.items = this.items.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    }
  }
}
</script>

<style>
h3 {
  margin-left: 8px;
}
.item {
  background-color: #fff;
  border-bottom: 1px solid rgb(246, 246, 246);
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  padding-left: 20px;
}
.wrapper {
  height: 480px;
}
</style>



