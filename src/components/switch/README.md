# Switch 滑动开关

在两个互斥对象进行选择，eg：选择开或关。

### 注意

因`Switch`与保留标签有冲突，在引用时使用`uSwitch`替代

### 规则
- 只在 List 中使用。
- 避免增加额外的文案来描述当前 Switch 的值。


### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否默认选中 | Boolean | `false` |
| disabled | 是否不可修改 | Boolean | `false` |
| color | 开关打开后的颜色 | String | `#4dd865` |
| name | switch 的 name | String | - |
| platform | 设定组件的平台特有样式, 可选值为 `'android'`, `'ios'`， 默认为 `'ios'` | String | `'ios'` |

### events

| 事件 | 说明 | 返回 |
| --- | --- | --- |
| change | switch 状态发生改变 | `checked` |
| click |switch 被点击时, 当 switch为 disabled 时,返回值始终是默认传入的 checked 值 | `checked` |
