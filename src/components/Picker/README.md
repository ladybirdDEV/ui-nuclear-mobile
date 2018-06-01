# Picker 选择器

在一组预设数据中进行选择，e.g. 省市区选择。

### 规则

- 尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。
- DatePicker 是 Picker 的特定模式。


### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据源 | ```Array<{value, label, children: Array}>``` | - |
| value | 选中的值，可用```v-model```双向绑定，格式是`[value1, value2, value3]`，对应数据源相应级层`value` | Array | - |
| format | 格式化选中值的函数 | ```Function (labels: string[]): any``` | ```(labels) => { return labels.join(','); }``` |
| cols | 列数 | Number | 3 |
| onChange | 选中后的回调函数 | ```Function (val): void``` | - |
| onPickerChange | 每列数据选择变化后的回调函数 | ```Function (val): void``` | - |
| onVisibleChange | 弹出层状态变化后的回调函数 | ```Function (visible: bool): void``` | - |
| itemStyle | `picker-item`的样式 | Object | - |
| indicatorStyle | `indicator`的样式 | Object | - |
| okText | 选中按钮的文字 | String | `确定` |
| dismissText | 取消按钮的文字 | String | `取消` |
| onOk | 点击选中时执行的回调 | ```Function (val): void``` | - |
| onDismiss | 点击取消时执行的回调 | Function | - |
| title | 大标题 | String | - |
| disabled | 是否禁用 | Boolean | false |
| cascade | 是否级联 | Boolean | true |

### 插槽

| 名字 | 说明 | 作用域参数 |
| --- | --- | --- | --- |
| list-item | 通常是 ```List.Item```| ```extra='props.extra' onClick='props.onClick'``` |

### events
| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| change | 选中的值发生变化时触发的事件 | ```value``` 当前选中的值 |
| ok | 点击确认按钮触发的事件 | ```value``` 当前选中的值 |
| dismiss | 点击取消按钮触发的事件 | - |
| visible-change | 显隐状态变化触发的事件 | ```value, visible```(当前选中的值，显隐状态) |
| picker-change | 每列数据变化触发的事件 | ```value``` 当前选中的值 |

