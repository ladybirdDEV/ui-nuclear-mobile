# TabBar 标签栏

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。
###  规则
- 用作 APP 的一级分类，数量控制在 3-5 个之间。
- 即使某个 Tab 不可用，也不要禁用或者移除该 Tab。
- 使用 Badge 进行提示，足不出户也能知道有内容更新。

## TabBar

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| barTintColor | tabbar 背景色 | String | `'white'` |
| tintColor | 选中的字体颜色	 | String | `'#108ee9'` |
| unselectedTintColor | 未选中的字体颜色 | String | `'#888'` |
| hidden ( `web only` )| 是否隐藏 | Boolean | `false` |
| prefixCls ( `不支持` )| 样式前缀	| String | `'um-tab-bar'` |
| noRenderContent ( `未实现` )| 不渲染内容部分 | Boolean | `false` |

## TabBarItem

### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| badge | 徽标数 | String \/ Number | - |
| dot( `Web Only` ) | 是否在右上角显示小红点（在设置badge的情况下失效） | Boolean | false |
| dot( `Web Only` ) | 是否在右上角显示小红点（在设置badge的情况下失效） | Boolean | false |
| selected | 是否选中 | Boolean | Boolean |
| icon | 默认展示图片 | String | - |
| selectedIcon | 选中后的展示图片 | String | - |
| title | 标题文字 | String | - |
| key	| 唯一标识 | String | - |
| iconStyle ( `不支持` )	| icon 样式 | String | - |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onPress | bar 点击触发 | - |
