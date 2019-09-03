# Button 按钮

点击后会触发一个操作。


### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设 | String | - |
| size | 按钮大小，可选值为`large`、`small` | String | `large` |
| activeStyle | 点击反馈的自定义样式 (~~设为 false 时表示禁止点击反馈~~) | Object | {} |
| activeClassName | 点击反馈的自定义类名 | String | - |
| disabled | 设置禁用 | Boolean | false |
| inline | 是否设置为行内按钮 | Boolean | false |
| loading | 设置按钮载入状态 | Boolean | false |
| icon |  [Icon](../Icon/) 组件里内置的某个 icon 的 type 值(注意: `loading`设置后此项设置失效) | String \| Slot | false |
| prefixCls | class前缀 | String | `um-button` |

### events
| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| click | 按钮被单击时触发 | event |
