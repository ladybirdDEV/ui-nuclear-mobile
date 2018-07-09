<template>
  <div class="single-month">
    <div class="month-title">{{title}}</div>
    <div class="date">
      <div
        v-for="(item, index) in monthDatas.weeks "
        :key="index" :class="rowCls">
        <div
          v-for="(item, index) in item"
          :key="index"
          class="cell"
          @click="!item.extra.disable && cellClick(item)">
          <div class="date-wrapper">
            <span :class="item.cellCls && item.cellCls.lCls"></span>
            <div :class="[item.cellCls && item.cellCls.cls, isGrey(item.tick) ? 'grey': '']">
              {{item.dayOfMonth || ''}}
            </div>
            <span :class="item.cellCls && item.cellCls.rCls"></span>
          </div>
          <div :class="item.cellCls && item.cellCls.infoCls">{{item.cellCls && item.extra.info}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { oneOf } from '../../../utils'
import locale from '../locale/zh_CN'

export default {
  props: {
    title: String,
    rowSize: {
      type: String,
      default: 'normal',
      validator (value) {
        return oneOf(value, ['normal', 'xl'])
      }
    },
    monthData: {
      type: Object,
      default: () => {}
    },
    locale: {
      type: Object,
      default: () => locale
    },
    onCellClick: Function,
    getDateExtra: Function
  },
  data () {
    return {
      monthDatas: this.monthData,
      rowCls: 'row'
    }
  },
  methods: {
    isGrey (date) {
      if (date) {
        let day = new Date(date).getDay()
        return (day === 0) || (day === 6)
      }
    },
    genWeek (weeksData, index) {
      if (this.rowSize === 'xl') {
        this.rowCls = 'row row-xl'
      }
      weeksData.forEach((day, dayOfWeek) => {
        const extra = (this.getDateExtra && this.getDateExtra(+new Date(day.tick))) || {}
        let info = extra.info || ''
        const disable = extra.disable || day.outOfDate
        let cls = 'date'
        let lCls = 'left'
        let rCls = 'right'
        let infoCls = 'info'
        const locale = this.locale
        if (day.dayOfMonth) {
          if (disable) {
            cls += ' disable'
          } else if (info) {
            cls += ' important'
          }
          if (day.selected !== 'None') {
            cls += ' date-selected'
            let styleType = day.selected
            switch (styleType) {
              case 'Only':
                info = locale.begin
                infoCls += ' date-selected'
                break
              case 'All':
                info = locale.begin_over
                infoCls += ' date-selected'
                break
              case 'Start':
                info = locale.begin
                infoCls += ' date-selected'
                if (dayOfWeek === 6 || day.isLastOfMonth) {
                  styleType = 'All'
                }
                break
              case 'Middle':
                if (dayOfWeek === 0 || day.isFirstOfMonth) {
                  if (day.isLastOfMonth || dayOfWeek === 6) {
                    styleType = 'All'
                  } else {
                    styleType = 'Start'
                  }
                } else if (dayOfWeek === 6 || day.isLastOfMonth) {
                  styleType = 'End'
                }
                break
              case 'End':
                info = locale.over
                infoCls += ' date-selected'
                if (dayOfWeek === 0 || day.isFirstOfMonth) {
                  styleType = 'All'
                }
                break
            }
            switch (styleType) {
              case 'Single':
              case 'Only':
              case 'All':
                cls += ' selected-single'
                break
              case 'Start':
                cls += ' selected-start'
                rCls += ' date-selected'
                break
              case 'Middle':
                cls += ' selected-middle'
                lCls += ' date-selected'
                rCls += ' date-selected'
                break
              case 'End':
                cls += ' selected-end'
                lCls += ' date-selected'
                break
            }
          }
          day.cellCls = {
            cls,
            infoCls,
            lCls,
            rCls
          }
          extra.info = info
          // day.selected = styleType
          day.extra = extra
        }
      })
    },
    updateWeeks (monthData) {
      if (!monthData) {
        monthData = this.monthDatas
      }
      monthData.weeks.forEach((week, index) => {
        this.genWeek(week, index)
      })
      // console.log('update', monthData)
    },
    cellClick (day) {
      this.onCellClick && this.onCellClick(day)
    }
  },
  watch: {
    monthData: {
      handler (val) {
        this.monthDatas = val
      },
      deep: true
    },
    monthDatas (val) {
      this.updateWeeks(val)
    }
  },
  mounted () {
    this.updateWeeks(this.monthDatas)
  }
}
</script>
