<template>
  <div class="confirm-panel">
    <div class="info" v-if="type === 'range'">
      <p>{{locale.start}}: <span :class="!startDateTime ? 'grey' : ''">{{startTimeStr}}</span></p>
      <p>{{locale.end}}: <span :class="!endDateTime ? 'grey' : ''">{{endTimeStr}}</span></p>
    </div>
    <div :class="btnCls" @click="onConfirm">
      {{locale.confirm}}
    </div>
  </div>
</template>

<script>
import { oneOf } from '../../../utils/index'
import { formatDate } from '../util/index'
import locale from '../locale/zh_CN'

export default {
  props: {
    type: {
      type: String,
      default: 'one',
      validator (value) {
        return oneOf(value, ['one', 'range'])
      }
    },
    onlyConfirm: Boolean,
    disableBtn: {
      type: Boolean,
      default: false
    },
    startDateTime: Date,
    endDateTime: Date,
    formatStr: {
      type: String,
      default: 'yyyy-MM-dd hh:mm'
    },
    onConfirm: Function,
    locale: {
      type: Object,
      default: () => locale
    }
  },
  data () {
    return {
      startTimeStr: null,
      endTimeStr: null,
      curBtnCls: this.disableBtn ? 'button button-disable' : 'button'
    }
  },
  computed: {
    btnCls: {
      get () {
        return this.curBtnCls
      },
      set (v) {
        this.curBtnCls = v
      }
    }
  },
  methods: {
    confirm () {
      if (!this.disableBtn) {
        this.onConfirm()
      }
    },
    formatDate (date) {
      const {formatStr, locale} = this.$props
      return formatDate(date, formatStr, locale)
    },
    getTimeRange () {
      let { startDateTime, endDateTime } = this.$props
      if (startDateTime && endDateTime && +startDateTime > +endDateTime) {
        const tmp = startDateTime
        startDateTime = endDateTime
        endDateTime = tmp
      }
      this.startTimeStr = startDateTime ? this.formatDate(startDateTime) : this.locale.noChoose
      this.endTimeStr = endDateTime ? this.formatDate(endDateTime) : this.locale.noChoose
      if (this.type === 'one') {
        this.btnCls += ' button-full'
      }
    }
  },
  watch: {
    startDateTime (val) {
      this.getTimeRange()
    },
    endDateTime (val) {
      this.getTimeRange()
    },
    disableBtn (val) {
      this.curBtnCls = val ? 'button button-disable' : 'button'
    }
  },
  mounted () {
    this.getTimeRange()
  }
}
</script>

<style>

</style>
