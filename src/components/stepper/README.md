# Stepper 步进器

用作增加或者减少当前数值。

### 规则

当想要对数值进行小幅度调整时，可以使用 Stepper，eg：将年化收益从 4.00% 调整到 4.05%。

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min | 最小值 | Number | -Infinity |
| min | 最大值	 | Number | Infinity |
| v-model | 当前值 支持双向绑定	 | Number | - |
| defaultValue | 初始值 | Number | - |
| disabled | 禁用 | Boolean	| false |
| readOnly | input 只读 | Boolean	| false |
| showNumber(`web only`) | 是否显示数值，默认不显示 | Boolean	| false |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onChange | 变化时 | value |
