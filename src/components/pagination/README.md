# Pagination 分页器

分隔长列表，每次只加载一个页面。

### 规则

当加载/渲染所有数据将花费很多时间或者流量时使用

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 形态，可选 `button`,`number`,`pointer` | String | `'button'` |
| current | 当前页号 双向绑定 | Number | 1 |
| v-model | 当前页号 | Number | 1 |
| total | 数据总数 | Number | 0 |
| simple | 是否隐藏数值 | Boolean | `false` |
| disabled | 禁用状态	 | Boolean | `false` |
| locale | 国际化, 可以覆盖全局`LocaleProvider`的配置	 | Object: {prevText, nextText} | - |

### event
| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onChange | change 事件触发 | value |
