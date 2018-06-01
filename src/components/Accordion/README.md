# Accordion 手风琴

可以折叠/展开的内容区域。

### 规则

- 对复杂区域进行分组和隐藏。

- 通常，一次只允许单个内容区域展开；特殊情况，多个内容区域可以同时展开。

## Accordion

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前激活tab面板中的key，可用v-model双向绑定 | Array | 默认无，accordion模式下默认为第一个元素 |
| defaultActiveKey | 初始化选中面板的key | String|Array(正常模式下，可以多选) |  |
| onChange | 切换面板的回调函数 | function(key){} | 无 |
| accordion | 手风琴模式 | Boolean | false |
| openAnimation | 设置是否开启切换动画| Boolean | true |


## Accordion.Panel

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 当前面板的name，与Accordion的activeKey对应，不填为索引值 | String | index |
| header | 面板头内容 | String |  |
