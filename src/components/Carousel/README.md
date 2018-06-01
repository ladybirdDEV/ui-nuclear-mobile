# Carousel 走马灯

走马灯，轮播图


### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| selectedIndex | 手动设置当前显示的索引 | Number | 0 |
| dots | 是否显示面板指示点 | Boolean | true |
| vertical | 垂直显示 | Boolean | false |
| autoplay | 是否自动切换 | Boolean | false |
| infinite | 是否循环播放 | Boolean | false |
| dotStyle `暂不支持` | 指示点样式  | Object | false |
| dotActiveStyle `暂不支持` | 当前激活的指示点样式  | Object | false |
| easing `暂不支持` | 缓动函数  | Function | - |


### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| afterChange | 切换面板后的回调函数 | - |
| beforeChange | 切换面板前的回调函数 | - |
