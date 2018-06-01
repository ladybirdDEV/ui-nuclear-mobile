# Popover 气泡

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。


### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 当前显隐状态 | Boolean | false |
| onVisibleChange | 当显隐状态变化时回调函数 | Function | |
| placement | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} | String | 'bottomRight' |
| mask | 是否显示遮罩背景层 | Boolean | false |
| triggerStyle | 触发元素外围容器样式 | Object | |
| overlayStyle | 弹出层外围容器样式 | Object | |
| contextStyle | 最外围容器样式 | Object | |
| name | menu 名字，用于手动触发开关 menu | String | |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| on-close | 点击遮罩层关闭后的回调函数 |  |

# Popover.Item
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | Boolean | false |
| icon | icon图标类型 | String | |
| value | 可作为选中的条目ID | string/number | |
| onMouseUp | 选中某选项时的回调函数 | Function | |

