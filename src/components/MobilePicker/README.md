# MobilePicker
vuejs picker component for mobile

## MultiPicker
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 额外的class | String | - |
| prefixCls | 样式前缀 | String | vmc-multi-picker |
| defaultSelectedValue | 初始化默认选中的值 | Array | - |
| selectedValue | 当前选中的值，可用v-model双向绑定 | Array | - |
| onValueChange | 选择完成，当选中的值变化执行的回调函数 | Function | - |
| onScrollChange | 选择（滚动）过程中值改变时的回调函数 | Function | - |

## Picker
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 额外的class | String | - |
| prefixCls | 样式前缀 | String | vmc-multi-picker |
| defaultSelectedValue | 初始化默认选中的值 | String/Number | - |
| selectedValue | 当前选中的值，可用v-model双向绑定 | String/Number | - |
| onValueChange | 选择完成，当选中的值变化执行的回调函数 | Function | - |
| disabled | 选择器是否禁用 | Boolean | false |
| indicatorClassName | indicator的class | String | - |
| indicatorStyle | indicator的样式 | Object | - |
| onScrollChange | 选择（滚动）过程中值改变时的回调函数 | Function | - |

## Picker.Item
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 元素根节点的额外的class | String | - |
| value | item的值 | String | - |

## MobilePopup
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 额外的class | String | - |
| prefixCls | 样式前缀 | String | vmc-picker-popup |
| wrapStyle | 最外围dom元素的样式 | Object | - |
| transitionName | popup 主体过渡动画class名称 | String | - |
| maskTransitionName | popup 遮罩层过渡动画class名称 | String | - |
| popupTransitionName | popup 主体的动画class名称 | String | - |
| dismissText | 取消按钮的文字 | String | Dismiss |
| okText | 确认按钮的文字 | String | Ok |
| title | 弹出内容的标题 | String | - |
| disabled | 是否禁用 | Boolean | false |
| visible | 弹框是否显示 | Boolean | false |
| onVisibleChange | 弹框显示或隐藏时的回调函数 | Function | - |
| onDismiss | 点击取消按钮的回调函数 | Function | - |
| onOk | 点击确认按钮的回调函数 | Function | - |
| maskClosable | 是否开启点击遮罩关闭 | Boolean | true |

