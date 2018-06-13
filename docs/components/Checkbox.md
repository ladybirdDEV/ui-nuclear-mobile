# Checkbox 复选框

复选框

## Checkbox


#### Code Example
```vue
<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
    </WingBlank>
    <List renderHeader="CheckboxItem demo">
      <CheckboxItem Title="Barcelona" defaultChecked></CheckboxItem>
      <CheckboxItem Title="Stuttgart" ></CheckboxItem>
      <CheckboxItem Title="Paris" extra="extra content"></CheckboxItem>
      <CheckboxItem Title="Liverpool" disabled defaultChecked subtitle="Disable options"></CheckboxItem>
    </List>
    <AgreeItem>Agree 
      <a @click="onClick">agreement</a></AgreeItem>
  </div>
</template>

<script>
  import Button from '@/components/Button'
  import { Checkbox, CheckboxItem, AgreeItem } from '@/components/Checkbox'
  import WingBlank from '@/components/WingBlank'
  import WhiteSpace from '@/components/WhiteSpace'
  import { Flex, FlexItem } from '@/components/Flex'
  import { List, ListItem, ListItemBrief } from '@/components/List'

  export default {
    components: {
      WingBlank,
      WhiteSpace,
      Checkbox,
      List,
      ListItem,
      ListItemBrief,
      CheckboxItem,
      Button,
      AgreeItem,
      Flex,
      FlexItem
    },
    data () {
      return {
        checked: ''
      }
    },
    methods: {
      stuOnChange (value) {
        console.log(value)
      },
      onClick () {
        console.log(234)
      }
    }
  }
</script>

<style>

</style>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | name | String | 无 |
| defaultChecked  | 初始是否选中| Boolean | 无 |
| checked | 指定当前是否选中 | Boolean | 无 |
| disabled  | 	禁用 | Boolean | false |
| onChange  | change 事件触发的回调函数 | Function | 无 |


## CheckboxItem

基于`ListItem`对`Checkbox`进行封装,`ListItem`的`thumb`属性固定传入`Checkbox`,其他属性和`ListItem`一致。 其他 `API`和 `Checkbox` 相同。

## AgreeItem

用于同意协议这种场景的复选框

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/checkbox" />