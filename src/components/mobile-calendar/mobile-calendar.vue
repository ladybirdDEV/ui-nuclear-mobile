<template>
  <div :class="`${prefixCls}`">
    <transition name="fade">
      <AnimateWrapper v-if="visible" className="mask" :visible="visible"></AnimateWrapper>
    </transition>
    <transition :name="enterDirection === 'horizontal' ? 'slideH' : 'slideV'">
      <AnimateWrapper className="content" :visible="visible" v-if="visible">
        <Header :title="title || locale.title"
          :showClear="!!startDate"
          :onCancel="doCancel"
          :onClear="doClear"
          :locale="locale" />
        <DatePicker
          :locale="locale"
          :type="type"
          :prefixCls="prefixCls"
          :infiniteOpt="infiniteOpt"
          :initalMonths="initalMonths"
          :defaultDate="defaultDate"
          :minDate="minDate"
          :maxDate="maxDate"
          :getDateExtra="getDateExtra"
          :onCellClick="onSelectedDate"
          :onSelectHasDisableDate="selectHasDisableDate"
          :onLayout="setClientHeight"
          :startDate="startDate"
          :endDate="endDate"
          :rowSize="rowSize" />
        <TimePicker v-if="showTimePicker"
          :prefixCls="timePrefixCls"
          :pickerPrefixCls="timePickerPrefixCls"
          :locale="locale"
          :title="timePickerTitle"
          :defaultValue="defaultTimeValue"
          :value="endDate ? endDate : startDate"
          :onValueChange="onTimeChange"
          :minDate="minDate"
          :maxDate="maxDate"
          :clientHeight="clientHight"/>
        <ShortcutPanel v-if="showShortcut && !showTimePicker"
          :locale="locale" :onSelect="shortcutSelect" />
        <ConfirmPanel v-if="startDate"
          :type="type"
          :locale="locale"
          :startDateTime="startDate"
          :endDateTime="endDate"
          :onConfirm="doConfirm"
          :disableBtn="disConfirmBtn"
          :formatStr="pickTime ? locale.dateTimeFormat : locale.dateFormat" />
      </AnimateWrapper>
    </transition>
  </div>
</template>

<script>
import TimePicker from './time-picker'
import DatePicker from './date-picker'
import ConfirmPanel from './calendar/confirm-panel'
import ShortcutPanel from './calendar/short-cut-panel'
import AnimateWrapper from './calendar/animate-wrapper'
import Header from './calendar/header'
import { mergeDateTime } from './util/index'
import { oneOf } from '../../utils/index'
import locale from './locale/zh_CN'

export default {
  components: {
    TimePicker,
    DatePicker,
    ConfirmPanel,
    ShortcutPanel,
    AnimateWrapper,
    Header
  },
  props: {
    enterDirection: {
      type: String,
      default: 'vertical',
      validator (value) {
        return oneOf(value, ['horizontal', 'vertical'])
      }
    },
    locale: {
      type: Object,
      default: () => locale
    },
    onCancel: Function,
    onClear: Function,
    onConfirm: Function,
    pickTime: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'mobile-calendar'
    },
    renderShortcut: Function,
    renderHeader: Function,
    showShortcut: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'range',
      validator (value) {
        return oneOf(value, ['one', 'range'])
      }
    },
    visible: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    defaultDate: {
      type: Date,
      default: () => new Date()
    },
    getDateExtra: Function,
    infiniteOpt: {
      type: Boolean,
      default: false
    },
    initalMonths: {
      type: Number,
      default: 6
    },
    maxDate: Date,
    minDate: Date,
    onSelectHasDisableDate: Function,
    onSelect: Function,
    rowSize: {
      type: String,
      default: 'normal',
      validator (value) {
        return oneOf(value, ['normal', 'xl'])
      }
    },
    defaultTimeValue: {
      type: Date,
      default: () => new Date(2000, 0, 1, 8)
    },
    timePrefixCls: String,
    timePickerPrefixCls: String
  },
  data () {
    return {
      startDate: undefined || this.defaultValue[0],
      endDate: undefined,
      showTimePicker: false,
      timePickerTitle: '',
      clientHight: 0,
      disConfirmBtn: true
    }
  },
  methods: {
    onSelectedDate (date) {
      if (this.onSelect) {
        let value = this.onSelect(date)
        if (value) {
          this.shortcutSelect(value[0], value[1])
          return
        }
      }
      this.selectDate(date, false)
    },
    setClientHeight (height) {
      this.clientHight = height
    },
    onTimeChange (date) {
      if (this.endDate) {
        this.endDate = date
      } else if (this.startDate) {
        this.startDate = date
      }
    },
    shortcutSelect (startDate, endDate) {
      this.startDate = startDate
      this.selectDate(endDate, true)
      this.showTimePicker = false
    },
    selectDate (date, useDateTime = false) {
      if (!date) return
      const {type, pickTime, defaultTimeValue, locale} = this.$props
      let newDate = pickTime && !useDateTime ? mergeDateTime(date, defaultTimeValue) : date
      newDate = new Date(+newDate)
      switch (type) {
        case 'one':
          this.startDate = newDate
          this.disConfirmBtn = false
          if (pickTime) {
            this.timePickerTitle = locale.selectTime
            this.showTimePicker = true
          }
          break
        case 'range':
          if (!this.startDate) {
            this.endDate = this.startDate
            this.startDate = newDate
            this.disConfirmBtn = true
            if (pickTime) {
              this.timePickerTitle = locale.selectStartTime
              this.showTimePicker = true
            }
          } else {
            this.timePickerTitle = (+newDate >= +this.startDate) ? locale.selectEndTime : locale.selectStartTime
            this.disConfirmBtn = false
            this.endDate = (pickTime && !useDateTime && +newDate >= +this.startDate) ? new Date(+mergeDateTime(newDate, this.startDate) + 3600000) : newDate
          }
          break
      }
    },
    doClear () {
      this.startDate = undefined
      this.endDate = undefined
      this.showTimePicker = false
      this.onClear && this.onClear()
    },
    doConfirm () {
      const { onConfirm } = this.$props
      if (this.startDate && this.endDate && +this.startDate > +this.endDate) {
        return onConfirm && onConfirm(this.endDate, this.startDate)
      }
      onConfirm && onConfirm(this.startDate, this.endDate)
      this.onClose()
    },
    onClose () {
      this.showTimePicker = false
      this.timePickerTitle = ''
      this.startDate = undefined
      this.endDate = undefined
      this.disConfirmBtn = true
      this.clientHight = 0
    },
    doCancel () {
      this.onCancel && this.onCancel()
      this.onClose()
    },
    selectHasDisableDate (date) {
      this.doClear()
      if (this.onSelectHasDisableDate) {
        this.onSelectHasDisableDate(date)
      }
    }
  },
  watch: {
    defaultValue (val) {
      if (val) {
        this.shortcutSelect(val[0], val[1])
      }
    }
  },
  mounted () {
    if (!this.visible && this.defaultValue) {
      this.shortcutSelect(this.defaultValue[0], this.defaultValue[1])
    }
  }
}
</script>


