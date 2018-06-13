# DatePickerView 选择器

DatePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口。



#### Code Example
```vue
<template>
  <div>
    <WhiteSpace />
    <div class="sub-title">StartTime</div>
    <DatePickerView
      mode="time"
      :minDate="new Date('2011-1-2 16:00:02')"
      :maxDate="new Date('2030-1-2 18:00:02')"
      v-model="startTime"
      :minuteStep="2"
      :onValueChange="startTimeValueChanged"
      :onChange="startTimeChangedDate"
      :onScrollChange="startTimeScrollChange"
    ></DatePickerView>
    <div class="sub-title">EndTime</div>
    <DatePickerView
      mode="datetime"
      :minDate="new Date('2011-1-2 16:00:02')"
      :maxDate="new Date('2030-1-2 02:00:02')"
      v-model="endTime"
      :minuteStep="2"
      :onValueChange="endTimeValueChanged"
      :onChange="endTimeChangedDate"
      :onScrollChange="endTimeScrollChange"
    ></DatePickerView>
  </div>
</template>
<script>
import WhiteSpace from '@/components/WhiteSpace'
import DatePickerView from '@/components/DatePickerView'
export default {
  name: 'DatepickerViewPage',
  components: {
    WhiteSpace,
    DatePickerView
  },
  data () {
    return {
      startTime: new Date('2015-3-16 9:00:05'),
      endTime: new Date('2018-3-16 9:00:05')
    }
  },
  methods: {
    startTimeValueChanged (value, index) {
    },
    startTimeChangedDate (date) {
      this.startTime = date
      if (date > this.endTime) {
        this.endTime = date
      }
    },
    startTimeScrollChange (date, value, index) {

    },
    endTimeValueChanged (value, index) {

    },
    endTimeChangedDate (date) {
      this.endTime = date
      if (date < this.startTime) {
        this.startTime = date
      }
    },
    endTimeScrollChange (date, value, index) {}
  }
}
</script>
<style lang="less">
.sub-title {
  margin: 8px;
}
</style>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 显示模式，可选项`date`、`datetime`、`time`、`month`、`year` | String | date |
| value | v-model绑定的值 | Date | - |
| minDate | 最小日期 | Date | new Date('2000-1-1') |
| maxDate | 最大日期 | Date | new Date('2030-1-1') |
| minuteStep | 分钟的步阶 | Number | 1 |
| use12Hours | 是否使用12小时制 | Boolean | false |
| locale | 国际化 | Object | 英文国际化 |
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

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/date-picker-view" />