# Switch 滑动开关

在两个互斥对象进行选择，eg：选择开或关。

### 注意

因`Switch`与保留标签有冲突，在引用时使用`uSwitch`替代

### 规则
- 只在 List 中使用。
- 避免增加额外的文案来描述当前 Switch 的值。



#### Code Example
```vue
<template>
  <div>
    <List>
      <template slot="renderHeader">Form switch</template>
      <ListItem>
        On
        <template slot="extra">
          <uSwitch checked :onClick="(v) => {log(v)}"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Off
        <template slot="extra">
          <uSwitch :onClick="(v) => {log(v)}"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Off disabled
        <template slot="extra">
          <uSwitch disabled :onClick="(v) => {log(v)}"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        On disabled
        <template slot="extra">
          <uSwitch checked disabled :onClick="(v) => {log(v)}"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Style for Android
        <template slot="extra">
          <uSwitch checked platform="android"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Color for Android
        <template slot="extra">
          <uSwitch checked platform="android" color="red"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Color for iOS
        <template slot="extra">
          <uSwitch checked platform="ios" color="red"></uSwitch>
        </template>
      </ListItem>
    </List>
  </div>
</template>
<script>
import { List, ListItem } from '@/components/List'
import uSwitch from '@/components/Switch'
export default {
  components: {
    List,
    ListItem,
    uSwitch
  },
  methods: {
    log (v) {
      console.log(v)
    }
  }
}
</script>


```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否默认选中 | Boolean | `false` |
| disabled | 是否不可修改 | Boolean | `false` |
| onChange | change 事件触发的回调函数 | Function (checked: bool) | - |
| color | 开关打开后的颜色 | String | `#4dd865` |
| name(`web only`) | switch 的 name | String | - |
| platform (`web only`) | 设定组件的平台特有样式, 可选值为 `'android'`, `'ios'`， 默认为 `'ios'` | String | `'ios'` |
| onClick | click事件触发的回调函数，当switch为disabled时，入参的值始终是默认传入的checked值。 | Function (checked: bool) | - |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/switch" />