# Tabs 标签页

用于让用户在不同的视图中进行切换。

### 规则
- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。
- 在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突，eg：详情页中 Tabs。


#### Code Example
```vue
<template>
  <div>
    <Tabs :tabs="tabs" :initialPage="1" @onTabClick="(obj, index) => log(obj, index)" @onChange="(obj, index) => log(obj, index)">
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of first tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of second tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
    <Tabs :tabs="tabs2" :initialPage="1" tabBarPosition="bottom">
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of first tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of second tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
    <h2>无动画</h2>
    <Tabs :tabs="tabs2" :initialPage="1" :animated="false">
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }">
        Content of first tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }">
        Content of second tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }">
        Content of third tab
      </div>
    </Tabs>
    <h2>固定高度</h2>
    <div style="height:200px;">
      <Tabs :tabs="tabs2" :initialPage="1">
        <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }">
          Content of first tab
        </div>
        <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }">
          Content of second tab
        </div>
        <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }">
          Content of third tab
        </div>
      </Tabs>
    </div>
    <h2>垂直样式</h2>
    <div style="height:200px;">
      <Tabs :tabs="tabs3" :initialPage="1" tabBarPosition="left" tabDirection="vertical">
        <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }">
          Content of first tab
        </div>
        <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }">
          Content of second tab
        </div>
        <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }">
          Content of third tab
        </div>
      </Tabs>
    </div>
    <h2>超出界面宽度，多于5个标签</h2>
    <Tabs :tabs="tabs4">
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of 1st tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of 2nd tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of 3rd tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of 4th tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of 5th tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of 6th tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of 7th tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of 8th tab
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }">
        Content of 9th tab
      </div>
    </Tabs>
  </div>
</template>
<script>
import Tabs from '@/components/Tabs'
import Badge from '@/components/Badge'
import WhiteSpace from '@/components/WhiteSpace'
import Sticky from 'vue-sticky-position'
export default {
  components: {
    Badge,
    Tabs,
    WhiteSpace,
    Sticky
  },
  data () {
    return {
      tabs: [
        {
          render () {
            return (
              <Badge text="3">First Tab</Badge>
            )
          }
        },
        {
          render () {
            return (
              <Badge text="今日(20)">Second Tab</Badge>
            )
          }
        },
        {
          render () {
            return (
              <Badge dot>Third Tab</Badge>
            )
          }
        }
      ],
      tabs2: [
        { title: 'First Tab', sub: '1' },
        { title: 'Second Tab', sub: '2' },
        { title: 'Third Tab', sub: '3' }
      ],
      tabs3: [
        { title: '1 Tab', sub: '1' },
        { title: '2 Tab', sub: '2' },
        { title: '3 Tab', sub: '3' }
      ],
      tabs4: [
        { title: '1st Tab' },
        { title: '2nd Tab' },
        { title: '3rd Tab' },
        { title: '4th Tab' },
        { title: '5th Tab' },
        { title: '6th Tab' },
        { title: '7th Tab' },
        { title: '8th Tab' },
        { title: '9th Tab' }
      ]
    }
  },
  methods: {
    log (obj, index) {
      console.log(obj, index)
    }
  }
}
</script>


```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tabs | tab数据 | Array `见下表` | - |
| tabBarPosition | TabBar位置 | String `'top'` \| `'bottom'` \| `'left'` `(web only)` \| `'right'` `(web only)` | `'top'` |
| renderTabBar | 替换TabBar | Function (h) | - |
| initialPage | 初始化Tab, index | Number | `0` |
| animated | 是否开启切换动画 | Boolean | `true` |
| swipeable | 是否可以滑动内容切换 | Boolean | `true` |
| distanceToChangeTab	| 滑动切换阈值(宽度比例) | Number | `0.3` |
| tabDirection | Tab方向 `(web only)` | String `'horizontal'` \| `'vertical'` | `'horizontal'` |


### props
| 属性 | 说明 |
| ---- | ---- |
| title | 标签文字 |
| render | 自定义渲染标签中的内容 |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onChange `尚未实现` | tab变化时触发 | index |
| onTabClick | tab 被点击的回调 | obj, index |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/tabs" />