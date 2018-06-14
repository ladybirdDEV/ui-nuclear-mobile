<template>
  <div>
    <DatePickerPopup
      className="um-date-picker"
      transitionName="mobile-picker-popup-slide-fade"
      maskTransitionName="mobile-picker-popup-fade"
      :onVisibleChange="visibleChange"
      :dismissText="currentLocale.dismissText"
      :okText="currentLocale.okText"
      v-model="visibleCopy"
      :onDismiss="dismiss"
      :onOk="ok"
      :maskClosable="visible === undefined ? maskClosable : false"
      :title="title">
      <MobileDatePicker
        :mode="mode"
        :date="date"
        :use12Hours="use12Hours"
        :minDate="minDate"
        :maxDate="maxDate"
        :locale="currentLocale.datePickerLocale"
        :minuteStep="minuteStep"
        :onDateChange="dateChange"
        :onValueChange="valueChange"
        className="date-picker"
        ></MobileDatePicker>
    </DatePickerPopup>
    <Feedback activeClassName="um-list-item-active" :onMouseUp="mouseUp">
      <slot name="list-item" :extra="value ? dateformat(value, formatCopy) : (extra || currentLocale.extra)"></slot>
      <slot></slot>
    </Feedback>
  </div>
</template>
<script>
import DatePickerPopup from '@/components/MobilePicker/MobilePopup'
import Feedback from '@/components/Feedback/Feedback.vue'
import {MobileDatePicker} from '@/components/MobileDatePicker'
import {oneOf} from '../../utils'
import dateformat from 'dateformat'
import defaultLocale from './locale/zh_CN.js'
export default {
  name: 'DatePicker',
  props: {
    locale: Object,
    format: String,
    value: Date,
    extra: {
      type: String
    },
    mode: {
      type: String,
      default: 'date',
      validator: (value) => {
        return oneOf(value, ['datetime', 'date', 'time', 'month', 'year'])
      }
    },
    use12Hours: {
      type: Boolean,
      default: false
    },
    minDate: {
      type: Date,
      default: () => {
        return new Date('2000-1-1')
      }
    },
    maxDate: {
      type: Date,
      default: () => {
        return new Date('2030-1-1')
      }
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    title: String,
    visible: {
      type: Boolean,
      default: undefined
    },
    onDismiss: Function,
    onOk: Function,
    onValueChange: Function,
    onChange: Function
  },
  components: {
    DatePickerPopup,
    MobileDatePicker,
    Feedback
  },
  inject: {
    localeData: {
      from: 'localeData',
      default: function () {
        return defaultLocale
      }
    }
  },
  data () {
    return {
      visibleCopy: this.visible !== undefined ? this.visible : false,
      date: this.value || new Date(),
      maskClosable: true
    }
  },
  created () {
  },
  methods: {
    dateformat (date, format) {
      return dateformat(date, format)
    },
    dismiss () {
      if (this.onDismiss) {
        this.onDismiss()
      }
      this.$emit('dismiss')
    },
    ok () {
      if (this.onOk) {
        this.onOk(this.date)
      }
      this.$emit('input', this.date)
      this.$emit('ok', this.date)
    },
    visibleChange (visible) {
      if (visible) {
        if (this.mode === 'time') {
          this.date = new Date(dateformat(new Date(), 'yyyy-mm-dd') + ' ' + dateformat(this.date, 'HH:MM'))
        }
      }
    },
    dateChange (date) {
      this.date = date
      if (this.onChange) {
        this.onChange(date)
      }
      this.$emit('change', date)
    },
    valueChange (value, index) {
      if (this.onValueChange) {
        this.onValueChange(value, index)
      }
      this.$emit('value-change', value, index)
    },
    mouseUp () {
      if (this.visible === undefined) {
        this.visibleCopy = !this.visibleCopy
      }
    }
  },
  computed: {
    formatCopy () {
      let format = this.format
      if (!this.format) {
        switch (this.mode) {
          case 'datetime':
            format = 'yyyy-mm-dd HH:MM'
            break
          case 'date':
            format = 'yyyy-mm-dd'
            break
          case 'time':
            format = 'HH:MM'
            break
          case 'month':
            format = 'mm'
            break
          case 'year':
            format = 'yyyy'
            break
          default:
            break
        }
      }
      return format
    },
    currentLocale () {
      if (this.locale) {
        return this.locale
      } else if (this.localeData && this.localeData.unmLocale !== undefined) {
        return this.localeData.unmLocale[this.$options.name]
      } else {
        return defaultLocale
      }
    }
  },
  watch: {
    visible (val) {
      this.visibleCopy = val
    }
  }
}
</script>
<style>
.date-picker-list .um-list-item .um-list-line .um-list-extra {
  flex-basis: initial;
}
.um-date-picker .mobile-picker-item-selected {
  font-size: 17px;
}
.um-date-picker .mobile-picker-item {
  color: #000;
}
.um-list-item-active {
  background: #ddd;
}
</style>
