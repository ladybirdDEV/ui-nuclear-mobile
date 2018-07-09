# MobileDatePicker
vuejs date-picker component for mobile

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 额外的class | String | mobile-date-picker |
| prefixCls | 样式前缀 | String | mobile-date-picker |
| pickerPrefixCls | picker的样式前缀 | String | mobile-picker |
| mode | 显示模式，可选项`date`、`datetime`、`time`、`month`、`year` | String | date |
| disabled | 是否禁用 | Boolean | false |
| minuteStep | 分钟的步阶 | Number | 1 |
| use12Hours | 是否使用12小时制 | Boolean | false |
| minDate | 最小日期 | Date | new Date('2000-1-1') |
| maxDate | 最大日期 | Date | new Date('2030-1-1') |
| date | 选中日期 | Date | - |
| defaultDate | 默认日期 | Date | - |
| locale | 国际化 | Object | 英文国际化 |
| onDateChange | 日期时间改变的回调函数，传参`date`-Date类型。对应events中的`date-change`，二者选其一，建议使用event。 | Function | - |
| onValueChange | value改变时的回调，传参`value`-Array类型、`index`-操作的列的索引。对应events中的`value-change`，二者选其一，建议使用event。 | Function | - |
| onScrollChange | 滚动列时的回调函数，传参`date`-Date类型、`value`-Array类型、`index`-操作列的索引。对应events中的`scroll-change`，二者选其一，建议使用event。 | - |

### events
| 属性 | 说明 |
| --- | --- |
| date-change | 日期时间改变的event，接收参数`(date)`-Date类型 |
| value-change | value值改变对应的event，接收参数`(value, index)`，`value`-Array类型、`index`-操作的列的索引 |
| scroll-change | 滚动列时对应的event，接收参数`(date, value, index)`，`date`-Date类型、`value`-Array类型、`index`-操作列的索引 |
