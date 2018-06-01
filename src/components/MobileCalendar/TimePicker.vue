<template>
  <div class="time-picker">
    <div class="title">{{title}}</div>
    <MobileDatePicker
      :prefixCls="prefixCls"
      :pickerPrefixCls="pickerPrefixCls"
      :style="{height: height > 164 || height < 0 ? 164 : height, overflow: 'hidden'}"
      mode="time"
      :date="date"
      :locale="locale"
      :minDate="getMinTime(date)"
      :maxDate="getMaxTime(date)"
      :onDateChange="onDateChange"
      use12Hours />
  </div>
</template>

<script>
import {MobileDatePicker} from '../MobileDatePicker/index'
// import { Models } from './date/DataTypes'
import locale from './locale/zh_CN'

export default {
  components: {
    MobileDatePicker
  },
  props: {
    prefixCls: String,
    locale: {
      type: Object,
      default: () => locale
    },
    pickerPrefixCls: String,
    title: String,
    defaultValue: Date,
    value: Date,
    onValueChange: Function,
    minDate: Date,
    maxDate: Date,
    clientHeight: Number
  },
  data () {
    return {
      height: (this.clientHeight && this.clientHeight * 3 / 8 - 52) || Number.POSITIVE_INFINITY,
      date: this.value || this.defaultValue || undefined
    }
  },
  methods: {
    getMinTime (date) {
      let minDate = this.minDate
      if (!date ||
        date.getFullYear() > minDate.getFullYear() ||
        date.getMonth() > minDate.getMonth() ||
        date.getDate() > minDate.getDate()
      ) {
        minDate = new Date(0, 0, 0, 0, 0)
      }
      return minDate
    },
    getMaxTime (date) {
      let maxDate = this.maxDate
      if (!date ||
        date.getFullYear() < maxDate.getFullYear() ||
        date.getMonth() < maxDate.getMonth() ||
        date.getDate() < maxDate.getDate()
      ) {
        maxDate = new Date(9999, 11, 31, 23, 59, 59)
      }
      return maxDate
    },
    onDateChange (date) {
      const { onValueChange } = this.$props
      onValueChange && onValueChange(date)
    }
  }
}
</script>

<style>

</style>

