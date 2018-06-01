
# ActionSheet 动作面板
 弹出类动作面板

## ActionSheet

 ### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  title  | 顶部标题 | String | 无 |
|  message  | 顶部标题下的简要消息 | String | 无 |
|  cancelButtonIndex  | 按钮列表中取消按钮的索引位置 | Int | 无 |
|  destructiveButtonIndex  | 按钮列表中破坏性按钮（一般为删除）的索引位置 | Int | 无 |
|  maskClosable  | 点击蒙层是否允许关闭，默认允许 | Boolean | true |
|  btnGroup  | 按钮标题列表 (required) | Array | 无 |
|  callback  | 函数支持返回 Promise | Function | 无 |

## ActionSheet.share
动作面板，分享模式

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  title  | 顶部标题 | String | 无 |
|  message  | 顶部标题下的简要消息 | String | 无 |
|  cancelButtonText  | 取消按钮文案 | String | 取消 |
|  maskClosable  | 点击蒙层是否允许关闭，默认允许 | Boolean | true |
|  iconGroup  | 按钮标题列表 (required)，可以是二维数组，能显示多行按钮，例如[[{icon,title},...],...]表示两行两列。当为二维数组时callback有两个参数，第一个为列序列、第二个为行序列。 | Array | 无 |
|  callback  | 函数支持返回 Promise | Function | 无 |

