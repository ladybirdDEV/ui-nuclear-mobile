<template>
  <div :class="`${prefixCls} date-picker`">
    <WeekPanel :locale="locale" />
    <div class="wrapper" style="overflow-x: hidden; overflow-y: visible;"
      ref="wrapper"
      @scroll="setLayout">
      <div ref="panel">
        <div class="load-tip" v-if="canLoadPrev()">{{locale.loadPrevMonth}}</div>
        <div class="months" ref="months">
          <SingleMonth
            v-for="(item, index) in months"
            :key="index"
            ref="month"
            :locale="locale"
            :title="item.title"
            :monthData="item"
            :rowSize="rowSize"
            :getDateExtra="getDateExtra"
            :onCellClick="cellClick"/>
          <div
            v-for="item in months"
            :key="item.id"
            v-if="item.height || visibleMonth.indexOf(item) > -1"
            :style="{height: item.height}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeekPanel from './date/week-panel'
import SingleMonth from './date/single-month'
import { oneOf } from '../../utils'
import DatePickerBase from './date-picker-base'
import locale from './locale/zh_CN'

export default {
  mixins: [DatePickerBase],
  components: {
    WeekPanel,
    SingleMonth
  },
  data () {
    return {
      visibleMonth: [],
      curStartDate: this.startDate,
      curEndDate: this.endDate,
      delta: 0,
      lastY: 0
    }
  },
  props: {
    defaultDate: {
      type: Date,
      default: () => new Date()
    },
    startDate: Date,
    endDate: Date,
    infiniteOpt: {
      type: Boolean,
      default: false
    },
    initalMonths: {
      type: Number,
      default: 6
    },
    locale: {
      type: Object,
      default: () => locale
    },
    maxDate: Date,
    minDate: Date,
    getDateExtra: Function,
    onCellClick: Function,
    onLayout: Function,
    onSelectHasDisableDate: Function,
    prefixCls: {
      type: String,
      default: 'mobile-calendar'
    },
    rowSize: {
      type: String,
      default: 'normal',
      validator (value) {
        return oneOf(value, ['normal', 'xl'])
      }
    },
    type: {
      type: String,
      default: 'one',
      validator (value) {
        return oneOf(value, ['one', 'range'])
      }
    }
  },
  methods: {
    setTransform (nodeStyle, value) {
      nodeStyle.transform = value
      nodeStyle.webkitTransform = value
    },
    setTransition (nodeStyle, value) {
      nodeStyle.transition = value
      nodeStyle.webkitTransition = value
    },
    touchHandler () {
      const initDelta = 0
      let lastY = 0
      let delta = initDelta
      const panel = this.$refs.panel
      return {
        onTouchStart: (evt) => {
          lastY = evt.touches[0].screenY
          delta = initDelta
          this.lastY = lastY
        },
        onTouchMove: (evt) => {
          const ele = evt.currentTarget
          const isReachTop = ele.scrollTop === 0

          if (isReachTop) {
            delta = evt.touches[0].screenY - this.lastY
            if (delta > 0) {
              evt.preventDefault()
              if (delta > 80) {
                delta = 80
              }
            } else {
              delta = 0
            }
            this.setTransform(panel.style, `translate3d(0,${delta}px,0)`)
          }
          this.delta = delta
        },
        onTouchEnd: () => {
          this.touchHandler().onFinish()
        },
        onTouchCancel: () => {
          this.touchHandler().onFinish()
        },
        onFinish: () => {
          if (this.delta > 40 && this.canLoadPrev()) {
            this.genMonthData(this.months[0].firstDate, -1)
            this.visibleMonth = this.months.slice(0, this.initalMonths)
            this.updateLayout()
          }
          if (panel) {
            this.setTransform(panel.style, `translate3d(0,0,0)`)
          // console.log(panel)
            this.setTransition(panel.style, '.3s')
            setTimeout(() => {
              this.setTransition(panel.style, '')
            }, 300)
          }
        }
      }
    },
    cellClick (day) {
      if (!day.tick) return
      this.onCellClick && this.onCellClick(new Date(+day.tick))
    },
    setLayout (evt) {
      const dom = this.$refs.wrapper
      const scrollHandler = this.createOnScroll()
      scrollHandler({
        client: dom.clientHeight,
        full: (evt.currentTarget).clientHeight,
        top: (evt.currentTarget).scrollTop
      })
    }
  },
  watch: {
    startDate (val) {
      this.curStartDate = val
      if (!val || this.type === 'one') {
        this.months = []
        this.getMonths(this.defaultDate)
      }
      this.selectDateRange(val, this.curEndDate)
    },
    endDate (val) {
      this.curEndDate = val
      this.months = []
      this.getMonths(this.defaultDate)
      this.selectDateRange(this.curStartDate, val)
    }
  },
  mounted () {
    const wrap = this.$refs.wrapper
    wrap.addEventListener('touchstart', this.touchHandler().onTouchStart, false)
    wrap.addEventListener('touchmove', this.touchHandler().onTouchMove, false)
    wrap.addEventListener('touchend', this.touchHandler().onTouchEnd, false)
    wrap.addEventListener('touchcancel', this.touchHandler().onTouchCancel, false)
  }
}
</script>

<style>

</style>
