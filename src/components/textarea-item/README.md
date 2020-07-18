# TextareaItem 多行输入

用于接受多行文本。

### 规则
 * 支持通过键盘或者剪切板输入文本。
 * 通过光标可以在垂直或者水平方向进行移动。

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | value 值 | String | 无 |
| placeholder | placeholder | String | '' |
| editable | 是否可编辑	 | Boolean | true |
| disabled | 是否禁用	 | Boolean | false |
| clear | 是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效) | Boolean | false |
| rows | 显示几行 | number | 1 |
| count | 计数功能,兼具最大长度,默认为0,代表不开启计数功能 | number | 无 |
| error | 报错提示 | Boolean | false |
| autoHeight | 高度自适应, autoHeight 和 rows 请二选一 | Boolean | false |
| labelNumber | 定宽枚举值：num * @input-label-width: 34px，可用2-7之间的数字，一般(不能保证全部)能对应显示出相应个数的中文文字(不考虑英文字符) | number | 5 |
| name | textarea 的 name | String | 无 |
| prefixListCls | 列表 class 前缀 | String | `um-list` |
| title | 文案说明 | String \/ Slot | '' |


### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| change | change 事件触发 | currentValue |
| blur | blur 事件触发 | currentValue |
| focus | focus 事件触发 | currentValue |
| error-click | 点击报错 icon 触发 | - |
