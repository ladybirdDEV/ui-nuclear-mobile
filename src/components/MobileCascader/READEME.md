# MobileCascader
vuejs cascader component for mobile

## MobileCascader
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 额外的class | String | - |
| prefixCls | 样式前缀 | String | mobile-cascader |
| pickerPrefixCls | `mobile-picker`组件样式前缀 | String | mobile-picker |
| pickerItemStyle | `picker-item`的样式 | Object | - |
| indicatorStyle | `indicator`的样式 | Object | - |
| multiStyle | `multi-picker`的样式 | Object | - |
| col | 列数 | Number | 3 |
| data | 数据 | Array | - |
| value | 当前选中的值，对应数据源的相应级层 value，可用v-model双向绑定 | Array | - |
| defaultValue | 格式化默认选中的值 | Array | - |
| disabled | 是否禁用 | Boolean | false |
| onChange | 选择完成，若选中的值变化执行的回调函数 | Function | - |
| onScrollChange | 选择（滚动）过程中值改变时的回调函数 | Function | - |

## Cascader.Popup
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 弹出框额外的class | String | - |
| prefixCls | 样式前缀 | String | mobile-picker-popup |
| styles | 弹出框组件额外的样式 | Object | - |
| value | 选中的值，与数据源中的`value`对应 | Object | - |
| data | 数据 | Array | - |
| onOk | 确认按钮的回调函数 | Function | - |
| onDismiss | 取消按钮的回调函数 | Function | - |
| okText | 确认按钮的文字 | String | Ok |
| dismissText | 取消按钮的文字 | String | Dismiss |
| title | 弹出框的标题 | String | - |
| visible | 弹出框当前的显隐状态，可用v-model双向绑定 | Boolean | false |
| disabled | 是否禁用 | Boolean | false |
| maskClosable | 是否开启点击遮罩关闭 | Boolean | true |
| onChange | 选择完成，若选中的值变化执行的回调函数 | Function | - |
| onVisibleChange | 弹框状态变化时的回调函数 | Function | - |
| onScrollChange | 选择（滚动）过程中值改变时的回调函数 | Function | - |
