# DatePicker 日期选择

用于选择日期或者时间。

### 规则
- 最多展示 5 个独立滚轮，每个滚轮表示一个不同的值。

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode  | 日期选择的类型, 可以是日期`date`,时间`time`,日期+时间`datetime`,年`year`,月`month` | String | `date` |
| value | `v-model`当前选中时间 | Date | 无 |
| minDate   | 最小可选日期 | Date  |  2000-1-1  |
| maxDate   | 最大可选日期 | Date  |  2030-1-1  |
| use12Hours (`WEB only`) | 是否使用12小时制 | Boolean | false |
| minuteStep |  分钟数递增步长设置   | Number | 1 |
| locale   | 国际化，可覆盖全局的配置 | Object: {datePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText } | - |
| disabled   | 是否不可用      | Boolean |    false  |
| onChange   | 日期时间发生变化的回调函数。对应events中的`change`，二者选其一，建议使用event。 | (date: Object): void | - |
| onValueChange | 每列 picker 改变时的回调。对应events中的`value-change`，二者选其一，建议使用event。 | (vals: Array, index: number) => void | - |
| format  | 格式化选中的值，具体传值参考`dateformat`package | String (对应 mode 下格式分别为:`yyyy-mm-dd`,`HH:MM`,`yyyy-mm-dd HH:MM`) | - |
| title  | 弹框的标题 | String |  无  |
| extra   | 显示文案，不传且value非`null`时，显示format过的value | String  |  `请选择`  |
| prefixCls (`WEB only`) `暂不支持` |  class前缀 | string | `am-picker` |
| className (`WEB only`) `暂不支持` |  样式类名 | string | - |
| onOk  | 点击选中时执行的回调。对应events中的`ok`，二者选其一，建议使用event。 | (val): void  |  无 |
| onDismiss  | 点击取消时执行的回调。对应events中的`dismiss`，二者选其一，建议使用event。 | (): void  |  无  |

### events
| 属性 | 说明 |
| --- | --- |
| change | 日期时间改变的event，接收参数`(date)`-Date类型 |
| value-change | value值改变对应的event，接收参数`(value, index)`，`value`-Array类型、`index`-操作的列的索引 |
| ok | 点击选中（确定）的event，接收参数`(value)`-Array类型 |
| dismiss | 点击取消的event |
