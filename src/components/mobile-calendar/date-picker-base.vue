<script>
import { formatDate } from './util'

export default {
  data () {
    return {
      months: []
    }
  },
  methods: {
    getDateWithoutTime (date) {
      if (!date) {
        return 0
      } else {
        return +new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate()
        )
      }
    },
    getMonthDate (date = new Date(), addMonth = 0) {
      const y = date.getFullYear()
      const m = date.getMonth()
      return {
        // 当月第一天
        firstDate: new Date(y, m + addMonth, 1),
        // 当月最后一天
        lastDate: new Date(y, m + 1 + addMonth, 0)
      }
    },
    inDate (date, tick) {
      return date <= tick && tick < date + 24 * 3600000
    },
    canLoadPrev () {
      const minDate = this.minDate
      return !minDate || this.months.length <= 0 || +this.getMonthDate(minDate).firstDate < +this.months[0].firstDate
    },
    canLoadNext () {
      const { maxDate } = this.$props
      return !maxDate || this.months.length <= 0 || +this.getMonthDate(maxDate).firstDate > +this.months[this.months.length - 1].firstDate
    },
    genMonthData (date, addMonth = 0) {
      if (!date && this.months.length > 0) {
        date = addMonth >= 0 ? this.months[this.months.length - 1].firstDate : this.months[0].firstDate
      }
      if (!date) {
        date = new Date()
      }
      const { locale } = this.$props
      const { firstDate, lastDate } = this.getMonthDate(date, addMonth)
      const weeks = this.genWeekData(firstDate)
      const title = formatDate(firstDate, locale ? locale.monthTitle : 'yyyy/MM', this.locale)
      const data = {
        title,
        firstDate,
        lastDate,
        weeks,
        height: 0,
        y: 0,
        updateLayout: (data, dom) => {
          this.computeHeight(data, dom)
        }
      }
      if (addMonth >= 0) {
        this.months.push(data)
      } else {
        this.months.unshift(data)
      }
      const { startDate, endDate } = this.$props
      if (startDate) {
        this.selectDateRange(startDate, endDate)
      }
      return data
    },
    genWeekData (firstDate) {
      const minDateTime = this.getDateWithoutTime(this.minDate)
      const maxDateTime = this.getDateWithoutTime(this.maxDate) || Number.POSITIVE_INFINITY
      const weeks = []
      const nextMonth = this.getMonthDate(firstDate, 1).firstDate
      let currentDay = firstDate
      let currentWeek = []
      weeks.push(currentWeek)

      let startWeekday = currentDay.getDay()
      if (startWeekday > 0) {
        for (let i = 0; i < startWeekday; i++) {
          currentWeek.push({})
        }
      }
      while (currentDay < nextMonth) {
        if (currentWeek.length === 7) {
          currentWeek = []
          weeks.push(currentWeek)
        }
        const dayOfMonth = currentDay.getDate()
        const tick = +currentDay
        currentWeek.push({
          tick,
          dayOfMonth,
          selected: 'None',
          isFirstOfMonth: dayOfMonth === 1,
          isLastOfMonth: false,
          outOfDate: tick < minDateTime || tick > maxDateTime,
          cellCls: {
            cls: 'date',
            lCls: 'left',
            rCls: 'right',
            infoCls: 'info'
          },
          extra: {
            info: '',
            disable: false
          }
        })
        currentDay = new Date(currentDay.getTime() + 3600 * 24 * 1000)
      }
      currentWeek[currentWeek.length - 1].isLastOfMonth = true
      return weeks
    },
    selectDateRange (startDate, endDate, clear = false) {
      const {getDateExtra, type, onSelectHasDisableDate} = this.$props
      if (type === 'one') {
        endDate = undefined
      }
      const time1 = this.getDateWithoutTime(startDate)
      const time2 = this.getDateWithoutTime(endDate)
      const startDateTick = !time2 || time1 < time2 ? time1 : time2
      const endDateTick = time2 && time1 > time2 ? time1 : time2

      const startMonthDate = this.getMonthDate(new Date(startDateTick)).firstDate
      const endMonthDate = endDateTick ? new Date(endDateTick) : this.getMonthDate(new Date(startDateTick)).lastDate

      let unuseable = []
      let needUpdate = false
      let monthIndex
      this.months.filter((m, index) => {
        if (m.firstDate >= startMonthDate && m.firstDate <= endMonthDate) {
          monthIndex = index
          return m
        }
      }).forEach(m => {
        m.weeks.forEach(w => w.filter(d => {
          if (!endDateTick) {
            return d.tick && this.inDate(startDateTick, d.tick)
          } else {
            return d.tick && (d.tick >= startDateTick) && (d.tick <= endDateTick)
          }
        }).forEach(d => {
          const oldValue = d.selected
          if (clear) {
            d.selected = 'None'
          } else {
            const info = (getDateExtra && getDateExtra(new Date(d.tick))) || {}
            if (d.outOfDate || info.disable || d.extra.disable) {
              unuseable.push(d.tick)
            }
            if (this.inDate(startDateTick, d.tick)) {
              if (type === 'one') {
                d.selected = 'Single'
              } else if (!endDateTick) {
                d.selected = 'Only'
              } else if (startDateTick !== endDateTick) {
                d.selected = 'Start'
              } else {
                d.selected = 'All'
              }
            } else if (this.inDate(endDateTick, d.tick)) {
              d.selected = 'End'
            } else {
              d.selected = 'Middle'
            }
          }
          needUpdate = needUpdate || d.selected !== oldValue
        })
        )
        const componentRef = this.$refs.month
        if (needUpdate && componentRef && componentRef[monthIndex]) {
          componentRef[monthIndex].updateWeeks()
        }
      })
      if (unuseable.length > 0 && this.endDate) {
        if (onSelectHasDisableDate) {
          onSelectHasDisableDate(unuseable.map(tick => new Date(tick)))
        } else {
          console.warn('Unusable date. You can handle by onSelectHasDisableDate.', unuseable)
        }
      }
    },
    getMonths (date) {
      const { initalMonths } = this.$props
      for (let i = 0; i < initalMonths; i++) {
        this.canLoadNext() && this.genMonthData(date, i)
      }
    },
    updateLayout () {
      const months = document.getElementsByClassName('single-month')
      this.months.forEach((m, index) => {
        m.updateLayout && m.updateLayout(m, months[index])
      })
    },
    computeHeight (data, dom) {
      if (dom) {
        if (!data.height && !dom.clientHeight) {
          setTimeout(() => this.computeHeight(data), 500)
          return
        }
        data.height = dom.clientHeight || data.height || 0
        data.y = dom.offsetTop || data.y || 0
      }
    },
    computeVisible (clientHeight, scrollTop) {
      const MAX_VIEW_PORT = clientHeight * 2
      const MIN_VIEW_PORT = clientHeight

      // 大缓冲区外过滤规则
      const filterFunc = (vm) => vm.y && vm.height && (vm.y + vm.height > scrollTop - MAX_VIEW_PORT && vm.y < scrollTop + clientHeight + MAX_VIEW_PORT)
      if (this.infiniteOpt && this.visibleMonth.length > 12) {
        this.visibleMonth = this.visibleMonth.filter(filterFunc).sort((a, b) => +a.firstDate - +b.firstDate)
      }

      // 当小缓冲区不满时填充
      if (this.visibleMonth.length > 0) {
        const last = this.visibleMonth[this.visibleMonth.length - 1]
        if (last.y !== undefined && last.height && last.y + last.height < scrollTop + clientHeight + MIN_VIEW_PORT) {
          const lastIndex = this.months.indexOf(last)
          for (let i = 1; i <= 2; i++) {
            const index = lastIndex + i
            if (index < this.months.length && this.visibleMonth.indexOf(this.months[index]) < 0) {
              this.visibleMonth.push(this.months[index])
            } else {
              this.canLoadNext() && this.genMonthData(undefined, 1)
            }
          }
        }

        const first = this.visibleMonth[0]
        if (first.y !== undefined && first.height && first.y > scrollTop - MIN_VIEW_PORT) {
          const firstIndex = this.months.indexOf(first)
          for (let i = 1; i <= 2; i++) {
            const index = firstIndex - i
            if (index >= 0 && this.visibleMonth.indexOf(this.months[index]) < 0) {
              this.visibleMonth.unshift(this.months[index])
            }
          }
        }
      } else if (this.months.length > 0) {
        this.visibleMonth = this.months.filter(filterFunc)
      }
      this.updateLayout()
    },
    createOnScroll () {
      // console.log('onscroll')
      let timer
      let clientHeight = 0
      let scrollTop = 0

      return (data) => {
        const { client, top } = data
        clientHeight = client
        scrollTop = top
        if (timer) return
        timer = setTimeout(() => {
          timer = undefined
          this.computeVisible(clientHeight, scrollTop)
        }, 64)
      }
    }
  },
  beforeMount () {
    this.getMonths(this.defaultDate)
    this.visibleMonth = this.months
    this.updateLayout()
  }
}
</script>

