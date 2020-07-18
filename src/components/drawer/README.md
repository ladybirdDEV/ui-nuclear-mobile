# Drawer 抽屉

### 规则

是 Android 推荐的导航方式，常见于该平台应用。

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| sidebar | 抽屉里的内容 | Slot `name="sidebar"` | - |
| open | 开关状态 | Boolean | - |
| position | 抽屉所在位置	 | String `'left' 'right' 'top' 'bottom'`| `'left'` |
| sidebarStyle | 抽屉的样式 | Object | - |
| contentStyle | 内容样式 | Object | - |
| overlayStyle | 遮罩样式 | Object | - |
| dragHandleStyle	| 拖动条样式 | Object | - |
| touch | 是否开启触摸手势 | Boolean | true |
| transitions | 是否开启动画 | Boolean | true |
| docked	| 是否嵌入到正常文档流里	 | Boolean | false |
| enableDragHandle	| 是否禁止 dragHandle | Boolean | false |
| dragToggleDistance	| 打开关闭抽屉时距 `sidebar` 的拖动距离	 | Number | 30 |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onOpenChange | open 状态切换时 | open |
