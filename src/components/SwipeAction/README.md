# SwipeAction 滑动操作

### 规则
1. 一次只可滑动一行列表
2. 点击任意按钮之外处或往回滑动该列表可隐藏操作。


### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| left | 左侧按钮组 | Array | [] |
| right | 右侧按钮组 | Array | [] |
| autoClose | 点击按钮是否自动关闭 | Boolean | false |
| disabled | 是否禁用 | Boolean | false |
| onOpen | 打开时回调函数 | Function | - |
| onClose | 关闭时回调函数 | Function | - |

### Button

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文案 | String | `Click` |
| style | 按钮样式 | Object | {} |
| onPress | 按钮点击事件 | Function | - |
| className(`web only`) | 按钮样式类 | String | - |

