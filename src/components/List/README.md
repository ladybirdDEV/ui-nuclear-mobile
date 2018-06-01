# List 列表

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

### 规则

- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。


## List
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| renderHeader | list header | String / Slot `name="renderHeader"` | - |
| renderFooter | list footer | String / Slot `name="renderFooter"` | - |

## ListItem
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| thumb | 缩略图 (作为 `img src`) | String / Slot `name="thumb"` | - |
| extra | 右边内容 | String / Slot `name="extra"` | - |
| arrow | 箭头方向(右,上,下), 可选`horizontal`,`up`,`down`,`empty`，如果是empty则存在对应的dom,但是不显示	 | String | - |
| align | 子元素垂直对齐，可选`top`,`middle`,`bottom` | String | - |
| onClick | 点击事件的回调函数 | Function | - |
| error `不支持` (`web only`) | 报错样式,右侧文字颜色变成橙色 | Boolean | false |
| multipleLine | 多行 | Boolean | false |
| wrap | 是否换行，默认情况下，文字超长会被隐藏 | Boolean | false |
| activeStyle `不支持` (`web only`)	 | 自定义active的样式	| Object | - |
| platform (`web only`) | 设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios` | String | - |

## ListItemBrief

辅助说明，提供一个slot

