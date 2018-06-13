# Button 按钮

点击后会触发一个操作。



#### Code Example
```vue
<template>
  <div>
    <WingBlank>
      <WhiteSpace></WhiteSpace>
      <Button :onClick="log">default</Button>
      <WhiteSpace></WhiteSpace>
      <Button disabled>default disabled</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="primary">primary</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="primary" disabled>primary disabled</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="warning">warning</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="warning" disabled>warning disabled</Button>
      <WhiteSpace></WhiteSpace>
      <Button :loading="loading" :onClick="handleLoading">loading button</Button>
      <WhiteSpace></WhiteSpace>
      <Button icon="check-circle-o">with icon</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="primary" inline style="margin-right:4px;">inline primary</Button>
      <Button type="ghost" inline class="um-button-borderfix">inline ghost</Button>
      <!-- use `um-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display -->
      <WhiteSpace></WhiteSpace>
      <Button type="primary" inline size="small" style="margin-right:4px;">primary</Button>
      <Button type="primary" inline size="small" disabled>primary disabled</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="ghost" inline size="small" style="margin-right:4px;">ghost</Button>
      <Button type="ghost" inline size="small" class="um-button-borderfix" disabled>ghost disabled</Button>
      <!-- use `um-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display -->
    </WingBlank>
    <List>
      <ListItem>
        <template slot="extra" multipleLine><Button type="ghost" size="small" inline>small</Button></template>
        Regional manager
        <ListItemBrief>Can be collected, refund, discount management, view data and other operations</ListItemBrief>
      </ListItem>
      <ListItem>
        <template slot="extra" multipleLine><Button type="primary" size="small" inline>small</Button></template>
        Regional manager
        <ListItemBrief>Can be collected, refund, discount management, view data and other operations</ListItemBrief>
      </ListItem>
    </List>
  </div>
</template>
<script>
import Button from '@/components/Button'
import WingBlank from '@/components/WingBlank'
import WhiteSpace from '@/components/WhiteSpace'
import { List, ListItem, ListItemBrief } from '@/components/List'
export default {
  components: {
    Button,
    WingBlank,
    WhiteSpace,
    List,
    ListItem,
    ListItemBrief
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    log (ev) {
      console.log(ev)
    },
    handleLoading () {
      this.loading = !this.loading
    }
  }
}
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设 | String | - |
| size | 按钮大小，可选值为`large`、`small` | String | `large` |
| activeStyle `暂不提供` | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | Object | {} |
| activeClassName `暂不提供` | 点击反馈的自定义类名 | String | - |
| disabled | 设置禁用 | Boolean | false |
| onClick | 点击按钮的点击回调函数 | Function | - |
| style `暂不提供` | 自定义样式 | Object | - |
| inline `WEB only` | 是否设置为行内按钮 | Boolean | false |
| loading `WEB only` | 设置按钮载入状态 | Boolean | false |
| icon `WEB only` |  [Icon](../Icon/) 组件里内置的某个 icon 的 type 值(注意: `loading`设置后此项设置失效) | String | false |
| prefixCls `暂不提供` | class前缀 | String | `um-button` |
| className `暂不提供` | 样式类名 | String | - |

### events
| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onClick | 按钮被单击时触发 | - |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/button" />