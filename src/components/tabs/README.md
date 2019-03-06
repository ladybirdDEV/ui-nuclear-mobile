# Tabs 标签页

用于让用户在不同的视图中进行切换。

### 规则
- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。
- 在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突，eg：详情页中 Tabs。

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tabs | tab数据 | Array `见下表` | - |
| tabBarPosition | TabBar位置 | String `'top'` \| `'bottom'` \| `'left'` `(web only)` \| `'right'` `(web only)` | `'top'` |
| renderTabBar | 替换TabBar | Function (h) | - |
| initialPage | 初始化Tab, index | Number | `0` |
| animated | 是否开启切换动画 | Boolean | `true` |
| swipeable | 是否可以滑动内容切换 | Boolean | `true` |
| distanceToChangeTab	| 滑动切换阈值(宽度比例) | Number | `0.3` |
| tabDirection | Tab方向 `(web only)` | String `'horizontal'` \| `'vertical'` | `'horizontal'` |
| tabHeight | Tab 高度，仅在 `verticle` 下有效 | Number | - |


### tabs.tab
| 属性 | 说明 |
| ---- | ---- |
| title | 标签文字 |
| render | 自定义渲染标签中的内容 |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onChange `尚未实现` | tab变化时触发 | index |
| onTabClick | tab 被点击的回调 | obj, index |
