<template>
  <MobileCalendar
    :enterDirection="enterDirection"
    :locale="locale"
    :onCancel="onCancel"
    :onConfirm="onConfirm"
    :pickTime="pickTime"
    :prefixCls="prefixCls"
    :renderShortcut="renderShortcut"
    :renderHeader="renderHeader"
    :showShortcut="showShortcut"
    :title="title"
    :type="type"
    :visible="visible"
    :defaultDate="defaultDate"
    :getDateExtra="getDateExtra"
    :infiniteOpt="infiniteOpt"
    :initalMonths="initalMonths"
    :maxDate="maxDate"
    :minDate="minDate"
    :onSelect="onSelect"
    :onSelectHasDisableDate="onSelectHasDisableDate"
    :rowSize="rowSize"
    :defaultValue="defaultValue"
    :defaultTimeValue="defaultTimeValue"/>
</template>

<script>
import MobileCalendar from '../MobileCalendar/index'
import locale from './locale/zh_CN'
import { oneOf } from '../../utils'
const prefixCls = 'um-calendar'

export default {
  name: 'Calendar',
  components: {
    MobileCalendar
  },
  data () {
    return {
      timePrefixCls: 'um-picker',
      timePickerPrefixCls: 'um-picker-col'
    }
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
    onConfirm: Function,
    pickTime: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: prefixCls
    },
    renderShortcut: Function,
    renderHeader: Function,
    showShortcut: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: locale.title
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
    defaultValue: {
      type: Array,
      default: () => []
    },
    defaultTimeValue: Date
  },
  mounted () {
  }
}
</script>

<style lang="less">
@import './style/index';
</style>

