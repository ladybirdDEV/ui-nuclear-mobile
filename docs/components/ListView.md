# ListView 长列表

适用于显示同类的长列表数据类型。



#### Code Example
```vue
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
import WhiteSpace from '@/components/WhiteSpace'

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




```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| listData | 用于列表渲染的数据 | Array | [] |
| direction | 滚动方向 | String | 'vertical' |
| pullUpLoad | pullUpLoad的子配置项 | Object | flase |
| refreshDelay | listData 的刷新延时 | Number | 20 |
| probeType | 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。如果没有设置该值，其默认值为 0，即不派发 scroll 事件。| Number | 2 |

 > `pullUpLoad`子配置项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| threshold | 上拉刷新动作的上拉距离阈值 | Number | 0 |
| txt | 上拉加载的相关文案 | Object | { more: '', noMore: '' } |

### 插槽

| 名字 | 说明 | 作用域参数 |
| --- | --- | --- |
|  default  | 基于`listData`属性渲染的列表 | - |
|  pullup  | 位于列表下方，会在上拉加载时显示 | pullUpLoad: 是否开启了上拉加载功能 isPullUpLoad: 是否正在加载据 |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onScroll | 屏幕滑动的过程中实时的派发 scroll 事件 | Object {x, y} - 滚动的实时坐标 |
| onPullingUp | 当 pullUpLoad 属性为 true 时，在上拉超过阈值时触发 | - |

## IndexList 索引列表（标题吸顶）

### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- |
|  title  | 索引列表标题 | String | ‘’ |
|  data  | 列表数据| Array |  |
| anchorColor | 索引标题背景色 | String | #f7f7f7 |

### sample

```html
<IndexList :data="data" :title="title"></IndexList>
```

```js
      title: '当前城市: 北京市',
      cityData: [
        {
          name: '★热门城市',
          cities: [
            {
              name: '北京市',
              tags: 'BEIJING,北京市',
              cityid: 1
            },
            {
              name: '上海市',
              tags: 'SHANGHAI,上海市',
              cityid: 2
            }
          ]
        },
        {
          name: 'A',
          cities: [
            {
              name: '鞍山市',
              tags: 'ANSHAN,鞍山市',
              cityid: 3
            },
            {
              name: '安庆市',
              tags: 'ANQING,安庆市',
              cityid: 4
            }
          ]
        },
        {
          name: 'B',
          cities: [
            {
              name: '北京市',
              tags: 'BEIJING,北京市',
              cityid: 1
            },
            {
              name: '巴音郭楞州',
              tags: 'BAYINGUOLENGZHOU,巴音郭楞州',
              cityid: 5
            },
            {
              name: '博尔塔拉州',
              tags: 'BOERTALAZHOU,博尔塔拉州',
              cityid: 6
            }
          ]
        },
      ]
```

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/list-view" />