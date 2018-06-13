# DatePicker 日期选择

用于选择日期或者时间。

### 规则
- 最多展示 5 个独立滚轮，每个滚轮表示一个不同的值。


#### Code Example
```vue
<template>
  <div class="date-picker-list">
    <div class="demoTitle">Basic</div>
    <List>
      <DatePicker
        :onDismiss="dismiss"
        mode="datetime"
        v-model="date">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :extra="props.extra">Datetime</ListItem>
        </template>
      </DatePicker>

      <DatePicker
        :onDismiss="dismiss"
        v-model="dateA">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :extra="props.extra">Date</ListItem>
        </template>
      </DatePicker>

      <DatePicker
        :onDismiss="dismiss"
        :use12Hours="true"
        mode="time"
        v-model="dateB">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :extra="props.extra">Time (am/pm)</ListItem>
        </template>
      </DatePicker>

      <DatePicker
        :onDismiss="dismiss"
        mode="time"
        :minDate="minDate"
        :maxDate="maxDate"
        v-model="dateC">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :extra="props.extra">Limited time</ListItem>
        </template>
      </DatePicker>

      <DatePicker
        :onDismiss="dismiss"
        mode="time"
        format="'UTC time: 'HH:MM"
        v-model="dateD">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :extra="props.extra">UTC time</ListItem>
        </template>
      </DatePicker>

      <DatePicker
        :onDismiss="dismiss"
        :locale="localCN"
        extra=" "
        mode="datetime"
        v-model="dateE"
        :visible="datePickerVisible"
        @ok="okCallback"
        @dismiss="dismissCallback">
        <template slot-scope="props" slot="list-item">
          <ListItem :onClick="clickControlVisible" :extra="props.extra">External control visible state</ListItem>
        </template>
      </DatePicker>

      <DatePicker
        :onDismiss="dismiss"
        :locale="localCN"
        :onValueChange="valueChange"
        @change="change"
        mode="time"
        extra="click to choose"
        title="Select Time"
        v-model="dateChild">
        <template slot-scope="props">
          <div style="background-color: rgb(255, 255, 255); height: 45px; line-height: 45px; padding: 0px 15px;">
            With customized children
            <span style="float: right; color: rgb(136, 136, 136);">{{dateChild ? dateformat(dateChild, 'HH:MM') : 'click to choose'}}</span>
          </div>
        </template>
      </DatePicker>
    </List>

    <div class="demoTitle">With form validation</div>
    <List>
      <InputItem
        v-model="inputDate"
        placeholder="must be the format of YYYY-MM-DD"
        :error="hasError"
        :initialValue="initialValue"
        @input="computedDate">Input date</InputItem>
      <DatePicker
        :onDismiss="dismiss"
        :locale="localCN"
        :onOk="inputOk"
        mode="datetime"
        extra=""
        v-model="dateF">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :extra="props.extra">Date</ListItem>
        </template>
      </DatePicker>
      <ListItem>
        <Button type="primary" size="small" :onClick="submitInput" :inline="true">Submit</Button>
        <Button size="small" :inline="true" :onClick="resetInput">Reset</Button>
      </ListItem>
    </List>
  </div>
</template>
<script>
import {List, ListItem} from '@/components/List'
import DatePicker from '@/components/DatePicker'
import dateformat from 'dateformat'
import InputItem from '@/components/InputItem'
import Button from '@/components/Button'
const nowTimeStamp = Date.now()
const now = new Date(nowTimeStamp)
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000))
export default {
  name: 'DatePickerPage',
  components: {
    List,
    ListItem,
    DatePicker,
    InputItem,
    Button
  },
  data () {
    return {
      localCN: {
        datePickerLocale: {
          year: '年',
          month: '月',
          day: '日',
          hour: '时',
          minute: '分',
          am: '上午',
          pm: '下午'
        },
        okText: '确定',
        dismissText: '取消'
      },
      date: new Date(),
      dateA: new Date(),
      dateB: new Date(),
      dateC: new Date(),
      dateD: utcNow,
      dateE: null,
      dateChild: null,
      dateF: new Date(),
      inputDate: dateformat(new Date(), 'yyyy-mm-dd'),
      initialValue: dateformat(new Date(), 'yyyy-mm-dd'),
      minDate: new Date(dateformat(new Date(), 'yyyy-mm-dd') + ' ' + '09:30'),
      maxDate: new Date(dateformat(new Date(), 'yyyy-mm-dd') + ' ' + '16:15'),
      hasError: false,
      datePickerVisible: false
    }
  },
  methods: {
    dateformat (date, format) {
      return dateformat(date, format)
    },
    dismiss () {},
    clickControlVisible () {
      this.datePickerVisible = true
    },
    valueChange (val, index) {
      console.log(val, index)
    },
    change (date) {
      console.log('changed', date)
    },
    submitInput () {
      console.log({idp: this.inputDate, dp: new Date(this.dateF)})
      if (this.hasError) {
        alert('Validation failed')
      }
    },
    resetInput () {
      this.inputDate = dateformat(new Date(), 'yyyy-mm-dd')
      this.dateF = new Date()
    },
    computedDate () {
      let date = new Date()
      this.hasError = false
      try {
        let dateString = `${dateformat(new Date(this.inputDate), 'yyyy-mm-dd')} ${dateformat(new Date(), 'HH:MM')}`
        date = new Date(dateString)
      } catch (e) {
        this.hasError = true
      }
      this.dateF = date
    },
    inputOk (date) {
      this.inputDate = dateformat(date, 'yyyy-mm-dd')
    },
    okCallback (val) {
      this.datePickerVisible = false
    },
    dismissCallback () {
      this.datePickerVisible = false
    }
  },
  created () {
  }
}
</script>
<style scoped>
.demoTitle {
  padding: 15px 0 9px 15px;
  color: #000;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  font-weight: bolder;
  position: relative;
}
</style>

```
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

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/date-picker" />