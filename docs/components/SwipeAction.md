# SwipeAction 滑动操作

### 规则
1. 一次只可滑动一行列表
2. 点击任意按钮之外处或往回滑动该列表可隐藏操作。



#### Code Example
```vue
<template>
  <div>
    <div class="demoTitle">Basic</div>
    <List>
      <SwipeAction :left="demo1Left" :right="demo1Right" :onOpen="open" :onClose="close" :autoClose="true">
        <ListItem extra="More" arrow="horizontal">Have left and right buttons</ListItem>
      </SwipeAction>
      <SwipeAction :left="demo1Left">
        <ListItem extra="More" arrow="horizontal">Only left buttons</ListItem>
      </SwipeAction>
      <SwipeAction :right="demo1Left">
        <ListItem extra="More" arrow="horizontal">Only right buttons</ListItem>
      </SwipeAction>
      <SwipeAction :right="demo2Right">
        <ListItem extra="More" arrow="horizontal">Different button width</ListItem>
      </SwipeAction>
      <SwipeAction :right="demo1Left">
        <ListItem extra="More" arrow="horizontal" :onClick="() => {}">List.Item with onClick</ListItem>
      </SwipeAction>
    </List>
  </div>
</template>
<script>
import SwipeAction from '@/components/SwipeAction'
import {List, ListItem} from '@/components/List'
export default {
  components: {
    SwipeAction,
    List,
    ListItem
  },
  data () {
    return {
      demo1Left: [
        {
          text: 'edit',
          style: {
            backgroundColor: '#c8c7ce'
          },
          onPress: this.edit
        },
        {
          text: 'hide',
          style: {
            backgroundColor: '#0d8ee9'
          }
        }
      ],
      demo1Right: [
        {
          text: 'remove',
          style: {
            backgroundColor: '#ff3a2e'
          }
        }
      ],
      demo2Right: [
        {
          text: 'edit',
          style: {
            backgroundColor: '#c8c7ce'
          },
          onPress: this.edit
        },
        {
          text: 'long text',
          style: {
            backgroundColor: '#0d8ee9'
          }
        }
      ]
    }
  },
  methods: {
    edit () {
      console.log('edit')
    },
    open () {
      console.log('open buttons')
    },
    close () {
      console.log('close buttons')
    }
  }
}
</script>
<style>
.demoTitle {
  padding: 15px 0 9px 15px;
  color: #000;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  font-weight: bolder;
  position: relative;
}
</style>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| left | 左侧按钮组 | Array | [] |
| right | 右侧按钮组 | Array | [] |
| autoClose | 点击按钮是否自动关闭 | Boolean | false |
| disabled | 是否禁用 | Boolean | false |
| onOpen | 打开时回调函数 | Function | - |
| onClose | 关闭时回调函数 | Function | - |

### Button

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文案 | String | `Click` |
| style | 按钮样式 | Object | {} |
| onPress | 按钮点击事件 | Function | - |
| className(`web only`) | 按钮样式类 | String | - |


<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/swipe-action" />