# Radio 单选框

单选框

## Radio

#### Code Example
```vue
<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
    </WingBlank>
    <List renderHeader="RadioItem demo">
      <RadioItem value="doctor" Title="doctor" defaultChecked ></RadioItem>
      <RadioItem value="bachelor" Title="bachelor" @onChange="baOnChange"></RadioItem>
    </List>
    <WhiteSpace></WhiteSpace>
    <List>
      <RadioItem value="baseketball" Title="baseketball" defaultChecked subtitle="details"></RadioItem>
      <RadioItem value="football" Title="football" subtitle="details"></RadioItem>
    </List>
    <WhiteSpace></WhiteSpace>
    <List renderHeader="Disabled">
      <RadioItem value="doctor" Title="doctor" disabled></RadioItem>
      <RadioItem value="bachelor" Title="bachelor" disabled defaultChecked></RadioItem>
    </List>
    <WhiteSpace></WhiteSpace>
    <List>
      <RadioItem value="doctor" Title="doctor" disabled defaultChecked subtitle="details"></RadioItem>
      <RadioItem value="bachelor" Title="bachelor" disabled subtitle="details"></RadioItem>
    </List>
  </div>
</template>

<script>
  import { Radio, RadioItem } from '@/components/Radio'
  import WingBlank from '@/components/WingBlank'
  import WhiteSpace from '@/components/WhiteSpace'
  import { List, ListItem, ListItemBrief } from '@/components/List'

  export default {
    components: {
      WingBlank,
      WhiteSpace,
      Radio,
      List,
      ListItem,
      ListItemBrief,
      RadioItem
    },
    methods: {
      baOnChange (value) {
        console.log(value)
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
|  defaultChecked  | 初始是否选中| Boolean | 无 |
| name | name | String | 无 |
|  checked  | 指定当前是否选中| Boolean | 无 |
|  disabled  | 	是否禁用 | Boolean | false |
|  onChange  | 	change 事件触发的回调函数		 | Function | 无 |


## RadioItem

基于`ListItem`对`Radio`进行封装,`ListItem`的`thumb`属性固定传入`Radio`,其他属性和`ListItem`一致。 其他 `API`和 `Radio` 相同。

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/radio" />