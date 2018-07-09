# Button 按钮

点击后会触发一个操作。


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
