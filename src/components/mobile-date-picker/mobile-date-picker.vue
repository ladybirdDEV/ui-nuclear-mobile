<template>
  <MobileMultiPicker
    :style="multiStyle"
    v-model="value"
    :onValueChange="valueChange"
    :onScrollChange="scrollChange"
    :className="className">
    <MobilePicker :prefixCls="pickerPrefixCls" v-for="(data, index) in cols" :key="index" :selectedValue="value[index]" :disabled="disabled">
      <MobilePickerItem v-for="item in data.props.children" :key="item.value" :value="item.value">{{item.label}}{{locale[data.key]}}</MobilePickerItem>
    </MobilePicker>
  </MobileMultiPicker>
</template>
<script>
import {MobileMultiPicker, MobilePicker, MobilePickerItem} from '../mobile-picker'
import defaultLocale from './locale/en_US'
import { oneOf } from '../../utils'
const DATETIME = 'datetime'
const DATE = 'date'
const TIME = 'time'
const MONTH = 'month'
const YEAR = 'year'
const ONE_DAY = 24 * 60 * 60 * 1000
export default {
  name: 'MobileDatePicker',
  components: {
    MobileMultiPicker,
    MobilePicker,
    MobilePickerItem
  },
  props: {
    className: {
      type: String,
      default: 'mobile-date-picker'
    },
    prefixCls: {
      type: String,
      default: 'mobile-date-picker'
    },
    pickerPrefixCls: {
      type: String,
      default: 'um-picker-col'
    },
    mode: {
      type: String,
      default: 'date',
      validator: function (value) {
        return oneOf(value, ['datetime', 'date', 'time', 'month', 'year'])
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    use12Hours: {
      type: Boolean,
      default: false
    },
    minDate: {
      type: Date,
      default: function () {
        return new Date('2000/1/1')
      }
    },
    maxDate: {
      type: Date,
      default: function () {
        return new Date('2030/1/1')
      }
    },
    date: {
      type: Date
    },
    defaultDate: {
      type: Date
    },
    locale: {
      type: Object,
      default: function () {
        return defaultLocale
      }
    },
    onDateChange: Function,
    onValueChange: Function,
    onScrollChange: Function
  },
  data () {
    return {
      multiStyle: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      state: {date: ''},
      value: [],
      cols: 0
    }
  },
  created () {
    this.state = {date: this.date || this.defaultDate}
    this.value = this.getValueCols().value
    this.cols = this.getValueCols().cols
  },
  methods: {
    pad (n) {
      return n < 10 ? `0${n}` : n + ''
    },
    getDaysInMonth (date) {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    },
    cloneDate (date) {
      return new Date(+date)
    },
    setMonth (date, month) {
      date.setDate(Math.min(date.getDate(), this.getDaysInMonth(new Date(date.getFullYear(), month))))
      date.setMonth(month)
    },
    // componentWillReceiveProps (nextProps) {
    //   if ('date' in nextProps) {
    //     this.setState({
    //       date: nextProps.date || nextProps.defaultDate
    //     })
    //   }
    // },
    getNewDate (values, index) {
      const vm = this
      const value = parseInt(values[index], 10)
      const props = vm.$props
      const { mode } = props
      let newValue = vm.cloneDate(vm.getDate())
      if (mode === DATETIME || mode === DATE || mode === YEAR || mode === MONTH) {
        switch (index) {
          case 0:
            newValue.setFullYear(value)
            break
          case 1:
            // Note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth
            // e.g. from 2017-03-31 to 2017-02-28
            vm.setMonth(newValue, value)
            break
          case 2:
            newValue.setDate(value)
            break
          case 3:
            vm.setHours(newValue, value)
            break
          case 4:
            newValue.setMinutes(value)
            break
          case 5:
            vm.setAmPm(newValue, value)
            break
          default:
            break
        }
      } else {
        switch (index) {
          case 0:
            vm.setHours(newValue, value)
            break
          case 1:
            newValue.setMinutes(value)
            break
          case 2:
            vm.setAmPm(newValue, value)
            break
          default:
            break
        }
      }
      return vm.clipDate(newValue)
    },
    valueChange (values, index) {
      const props = this.$props
      const newValue = this.getNewDate(values, index)
      this.state.date = newValue
      // if (!('date' in props)) {
      //   this.setState({
      //     date: newValue
      //   })
      // }
      if (props.onDateChange) {
        props.onDateChange(newValue)
      }
      if (props.onValueChange) {
        props.onValueChange(values, index)
      }
      this.$emit('date-change', newValue)
      this.$emit('value-change', values, index)
    },

    scrollChange (values, index) {
      const props = this.$props
      const newValue = this.getNewDate(values, index)
      if (props.scrollChange) {
        props.onScrollChange(newValue, values, index)
      }
      this.$emit('scroll-change', newValue, values, index)
    },

    setHours (date, hour) {
      if (this.$props.use12Hours) {
        const dh = date.getHours()
        let nhour = hour
        nhour = dh >= 12 ? hour + 12 : hour
        nhour = nhour >= 24 ? 0 : nhour // Make sure no more than one day
        date.setHours(nhour)
      } else {
        date.setHours(hour)
      }
    },

    setAmPm (date, index) {
      if (index === 0) {
        date.setTime(+date - ONE_DAY / 2)
      } else {
        date.setTime(+date + ONE_DAY / 2)
      }
    },

    getDefaultMinDate () {
      if (!this.defaultMinDate) {
        this.defaultMinDate = this.getGregorianCalendar([2000, 1, 1, 0, 0, 0])
      }
      return this.defaultMinDate
    },

    getDefaultMaxDate () {
      if (!this.defaultMaxDate) {
        this.defaultMaxDate = this.getGregorianCalendar([2030, 1, 1, 23, 59, 59])
      }
      return this.defaultMaxDate
    },

    getDate () {
      return this.clipDate(this.state.date || this.getDefaultMinDate())
    },

    // used by rmc-picker/lib/PopupMixin.js
    getValue () {
      return this.getDate()
    },

    getMinYear () {
      return this.getMinDate().getFullYear()
    },

    getMaxYear () {
      return this.getMaxDate().getFullYear()
    },

    getMinMonth () {
      return this.getMinDate().getMonth()
    },

    getMaxMonth () {
      return this.getMaxDate().getMonth()
    },

    getMinDay () {
      return this.getMinDate().getDate()
    },

    getMaxDay () {
      return this.getMaxDate().getDate()
    },

    getMinHour () {
      return this.getMinDate().getHours()
    },

    getMaxHour () {
      return this.getMaxDate().getHours()
    },

    getMinMinute () {
      return this.getMinDate().getMinutes()
    },

    getMaxMinute () {
      return this.getMaxDate().getMinutes()
    },

    getMinDate () {
      return this.$props.minDate || this.getDefaultMinDate()
    },

    getMaxDate () {
      return this.$props.maxDate || this.getDefaultMaxDate()
    },
    getDateData () {
      const { formatMonth, formatDay, mode } = this.$props
      const locale = defaultLocale
      const date = this.getDate()
      const selYear = date.getFullYear()
      const selMonth = date.getMonth()
      const minDateYear = this.getMinYear()
      const maxDateYear = this.getMaxYear()
      const minDateMonth = this.getMinMonth()
      const maxDateMonth = this.getMaxMonth()
      const minDateDay = this.getMinDay()
      const maxDateDay = this.getMaxDay()
      const years = []
      for (let i = minDateYear; i <= maxDateYear; i++) {
        years.push({
          value: i + '',
          label: i + locale.year + ''
        })
      }
      const yearCol = { key: 'year', props: { children: years } }
      if (mode === YEAR) {
        return [yearCol]
      }

      const months = []
      let minMonth = 0
      let maxMonth = 11
      if (minDateYear === selYear) {
        minMonth = minDateMonth
      }
      if (maxDateYear === selYear) {
        maxMonth = maxDateMonth
      }
      for (let i = minMonth; i <= maxMonth; i++) {
        const label = formatMonth ? formatMonth(i, date) : (i + 1 + locale.month + '')
        months.push({
          value: i + '',
          label
        })
      }
      const monthCol = { key: 'month', props: { children: months } }
      if (mode === MONTH) {
        return [yearCol, monthCol]
      }

      const days = []
      let minDay = 1
      let maxDay = this.getDaysInMonth(date)

      if (minDateYear === selYear && minDateMonth === selMonth) {
        minDay = minDateDay
      }
      if (maxDateYear === selYear && maxDateMonth === selMonth) {
        maxDay = maxDateDay
      }
      for (let i = minDay; i <= maxDay; i++) {
        const label = formatDay ? formatDay(i, date) : (i + locale.day + '')
        days.push({
          value: i + '',
          label
        })
      }
      return [
        yearCol,
        monthCol,
        { key: 'day', props: { children: days } }
      ]
    },

    getDisplayHour (rawHour) {
      // 12 hour am (midnight 00:00) -> 12 hour pm (noon 12:00) -> 12 hour am (midnight 00:00)
      if (this.$props.use12Hours) {
        if (rawHour === 0) {
          rawHour = 12
        }
        if (rawHour > 12) {
          rawHour -= 12
        }
        return rawHour
      }
      return rawHour
    },

    getTimeData (date) {
      let minHour = 0
      let maxHour = 23
      let minMinute = 0
      let maxMinute = 59
      const { mode, minuteStep, use12Hours } = this.$props
      const locale = defaultLocale
      const minDateMinute = this.getMinMinute()
      const maxDateMinute = this.getMaxMinute()
      const minDateHour = this.getMinHour()
      const maxDateHour = this.getMaxHour()
      const hour = date.getHours()
      if (mode === DATETIME || mode === TIME) {
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const minDateYear = this.getMinYear()
        const maxDateYear = this.getMaxYear()
        const minDateMonth = this.getMinMonth()
        const maxDateMonth = this.getMaxMonth()
        const minDateDay = this.getMinDay()
        const maxDateDay = this.getMaxDay()
        if (minDateYear === year && minDateMonth === month && minDateDay === day) {
          minHour = minDateHour
          if (minDateHour === hour) {
            minMinute = minDateMinute
          }
        }
        if (maxDateYear === year && maxDateMonth === month && maxDateDay === day) {
          maxHour = maxDateHour
          if (maxDateHour === hour) {
            maxMinute = maxDateMinute
          }
        }
      } else {
        minHour = minDateHour
        if (minDateHour === hour) {
          minMinute = minDateMinute
        }
        maxHour = maxDateHour
        if (maxDateHour === hour) {
          maxMinute = maxDateMinute
        }
      }

      const hours = []
      if ((minHour === 0 && maxHour === 0) || (minHour !== 0 && maxHour !== 0)) {
        minHour = this.getDisplayHour(minHour)
      } else if (minHour === 0 && use12Hours) {
        minHour = 1
        hours.push({ value: '0', label: locale.hour ? '12' + locale.hour : '12' })
      }
      maxHour = this.getDisplayHour(maxHour)
      for (let i = minHour; i <= maxHour; i++) {
        hours.push({
          value: i + '',
          label: locale.hour ? i + locale.hour + '' : this.pad(i)
        })
      }

      const minutes = []
      const selMinute = date.getMinutes()
      for (let i = minMinute; i <= maxMinute; i += minuteStep) {
        minutes.push({
          value: i + '',
          label: locale.minute ? i + locale.minute + '' : this.pad(i)
        })
        if (selMinute > i && selMinute < i + minuteStep) {
          minutes.push({
            value: selMinute + '',
            label: locale.minute ? selMinute + locale.minute + '' : this.pad(selMinute)
          })
        }
      }
      const cols = [
        { key: 'hour', props: { children: hours } },
        { key: 'minute', props: { children: minutes } }
      ].concat(use12Hours ? [{
        key: 'ampm',
        props: { children: [{ value: '0', label: locale.am }, { value: '1', label: locale.pm }] }
      }] : [])
      return { cols, selMinute }
    },

    getGregorianCalendar (arg) {
      return new Date(...arg)
    },

    clipDate (date) {
      const { mode } = this.$props
      const minDate = this.getMinDate()
      const maxDate = this.getMaxDate()
      if (mode === DATETIME) {
        if (date < minDate) {
          return this.cloneDate(minDate)
        }
        if (date > maxDate) {
          return this.cloneDate(maxDate)
        }
      } else if (mode === DATE) {
        // compare-two-dates: https://stackoverflow.com/a/14629978/2190503
        if (+date + ONE_DAY <= minDate) {
          return this.cloneDate(minDate)
        }
        if (date >= +maxDate + ONE_DAY) {
          return this.cloneDate(maxDate)
        }
      } else {
        const maxHour = maxDate.getHours()
        const maxMinutes = maxDate.getMinutes()
        const minHour = minDate.getHours()
        const minMinutes = minDate.getMinutes()
        const hour = date.getHours()
        const minutes = date.getMinutes()
        if (date < minDate || date > maxDate) {
          if (hour < minHour || (hour === minHour && minutes < minMinutes)) {
            return this.cloneDate(minDate)
          }
          if (hour > maxHour || (hour === maxHour && minutes > maxMinutes)) {
            return this.cloneDate(maxDate)
          }
        }
      }
      return date
    },

    getValueCols () {
      const { mode, use12Hours } = this.$props
      const date = this.getDate()
      let cols = []
      let value = []

      if (mode === YEAR) {
        return {
          cols: this.getDateData(),
          value: [date.getFullYear() + '']
        }
      }

      if (mode === MONTH) {
        return {
          cols: this.getDateData(),
          value: [date.getFullYear() + '', date.getMonth() + '']
        }
      }

      if (mode === DATETIME || mode === DATE) {
        cols = this.getDateData()
        value = [date.getFullYear() + '', date.getMonth() + '', date.getDate() + '']
      }

      if (mode === DATETIME || mode === TIME) {
        const time = this.getTimeData(date)
        cols = cols.concat(time.cols)
        const hour = date.getHours()
        let dtValue = [hour + '', time.selMinute + '']
        let nhour = hour
        if (use12Hours) {
          nhour = hour === 0 ? 12 : (hour > 12 ? hour - 12 : hour)
          dtValue = [nhour + '', time.selMinute + '', (hour >= 12 ? 1 : 0) + '']
        }
        value = value.concat(dtValue)
      }
      return {
        value,
        cols
      }
    }

  },
  watch: {
    date (newV) {
      this.state.date = newV
      this.value = this.getValueCols().value
      this.cols = this.getValueCols().cols
    },
    mode (newV) {
      this.value = this.getValueCols().value
      this.cols = this.getValueCols().cols
    }
  }
}
</script>
<style lang="less">
@import '../picker-view/style/index.less';
@import '../picker/style/index.less';
</style>
