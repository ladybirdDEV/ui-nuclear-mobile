# DatePickerView 选择器

DatePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口。


### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 显示模式，可选项`date`、`datetime`、`time`、`month`、`year` | String | date |
| value | v-model绑定的值 | Date | - |
| minDate | 最小日期 | Date | new Date('2000-1-1') |
| maxDate | 最大日期 | Date | new Date('2030-1-1') |
| minuteStep | 分钟的步阶 | Number | 1 |
| use12Hours | 是否使用12小时制 | Boolean | false |
| locale | 国际化 | Object | - |
| disabled | 是否禁用 | Boolean | false |
| onDateChange | 日期改变的回调函数，传参`date`-Date类型。对应events中的`date-change`，二者选其一，建议使用event。 | Function | - |
| onValueChange | value改变时的回调，传参`value`-Array类型、`index`-操作的列的索引。对应events中的`value-change`，二者选其一，建议使用event。 | Function | - |
| onScrollChange | 滚动列时的回调函数，传参`date`-Date类型、`value`-Array类型、`index`-操作列的索引。对应events中的`scroll-change`，二者选其一，建议使用event。 | - |

### events
| 属性 | 说明 |
| --- | --- |
| date-change | 日期时间改变的event，接收参数`(date)`-Date类型 |
| value-change | value值改变对应的event，接收参数`(value, index)`，`value`-Array类型、`index`-操作的列的索引 |
| scroll-change | 滚动列时对应的event，接收参数`(date, value, index)`，`date`-Date类型、`value`-Array类型、`index`-操作列的索引 |
