<template>
  <MobileDatePicker
    :mode="mode"
    :minuteStep="minuteStep"
    :minDate="minDate"
    :maxDate="maxDate"
    :use12Hours="use12Hours"
    :date="value"
    :onDateChange="change"
    :onValueChange="valueChange"
    :onScrollChange="scrollChange"
    :className="className"
    :disabled="disabled"
    :locale="currentLocale"
  ></MobileDatePicker>
</template>
<script>
import {MobileDatePicker} from '../MobileDatePicker'
import zhCN from '../MobileDatePicker/locale/zh_CN'
import { oneOf } from '../../utils'
export default {
  name: 'DatePickerView',
  components: {
    MobileDatePicker
  },
  props: {
    mode: {
      type: String,
      default: 'date',
      validator: function (value) {
        return oneOf(value, ['datetime', 'date', 'time', 'month', 'year'])
      }
    },
    value: Date,
    minDate: {
      type: Date,
      default: function () {
        return new Date('2000-1-1')
      }
    },
    maxDate: {
      type: Date,
      default: function () {
        return new Date('2030-1-1')
      }
    },
    use12Hours: {
      type: Boolean,
      default: false
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    locale: {
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onValueChange: Function,
    onChange: Function,
    onScrollChange: Function
  },
  inject: {
    localeData: {
      from: 'localeData',
      default: function () {
        return zhCN
      }
    }
  },
  data () {
    return {
      className: 'date-picker-view'
    }
  },
  methods: {
    valueChange (value, index) {
      if (this.onValueChange) {
        this.onValueChange(value, index)
      }
      this.$emit('value-change', value, index)
    },
    change (date) {
      if (this.onChange) {
        this.onChange(date)
      }
      this.$emit('change', date)
    },
    scrollChange (date, value, index) {
      if (this.onScrollChange) {
        this.onScrollChange(date, value, index)
      }
      this.$emit('scroll-change', date, value, index)
    }
  },
  computed: {
    currentLocale () {
      if (this.locale) {
        return this.locale
      } else if (this.localeData && this.localeData.unmLocale !== undefined) {
        return this.localeData.unmLocale[this.$options.name]
      } else {
        return zhCN
      }
    }
  }
}
</script>
<style>
.date-picker-view .mobile-picker-item.mobile-picker-item-selected {
  color: #000;
  font-size: 17px;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  html:not([data-scale]) .date-picker-view .mobile-picker-indicator {
    border-bottom: none;
    border-top: none;
  }
}
</style>
