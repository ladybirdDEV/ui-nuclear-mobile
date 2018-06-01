# PickerView 选择器

PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 额外的class | String | - |
| prefixCls | 样式前缀 | String | vmc-multi-picker |
| data | 展示的数据，二维数组格式，数组内元素{label: xxx, value: xx} | Array | - |
| value | v-model绑定选中的数据 | Array | - |
| disabled | 是否禁用 | Boolean | false |
| indicatorStyle | `indicator`的样式 | Object | - |
| pickerItemStyle | `picker-item`的样式 | Object | - |
| cascade | 数据是否级联 | Boolean | false |
| col | 数据的列数 | Number | - |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| change | 选中的数据改变时触发，接收参数`(value)` | 选中的数据 |
| scroll-change | 滚动引起数据改变时触发，接收参数`(value, index)` value-Array、index-操作列的索引 | 当前展示的数据 |
