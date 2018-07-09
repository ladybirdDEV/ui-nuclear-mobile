<template>
  <div class="wrap">
    <div class="btn"
      v-for="(item, index) in btnData"
      :key="index"
      @click="renderCal(item.prop)">
      <p>{{item.text}}</p>
      <p>{{item.enText}}</p>
    </div>
    <MobileCalendar
      :infiniteOpt="true"
      :pickTime="curAttr['pickTime']"
      :type="curAttr['type']"
      :showShortcut="curAttr['showShortcut']"
      :enterDirection="curAttr['enterDirection']"
      :defaultValue="curAttr['defaultValue']"
      :onSelect="curAttr['onSelect']"
      :visible="show"
      :minDate="minDate"
      :maxDate="maxDate"
      :onCancel="onCancel"
      :onConfirm="onConfirm"
      :getDateExtra="getDateExtra"
      :onSelectHasDisableDate="onSelectHasDisableDate"/>
  </div>
</template>

<script>
import MobileCalendar from '../components/mobile-calendar/index'
const now = new Date()
const ONE_DAY = 24 * 3600 * 1000
const extra = {
  1501516800000: { info: '建军节' },
  '2017/06/14': { info: '禁止选择', disable: true },
  '2017/06/15': { info: 'Disable', disable: true }
}
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: '禁止选择', disable: true }
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true }
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true }
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true }

export default {
  components: {
    MobileCalendar
  },
  data () {
    return {
      minDate: new Date(+now - 62 * ONE_DAY),
      maxDate: new Date(+now + 365 * ONE_DAY),
      show: false,
      startTime: undefined,
      endTime: undefined,
      attr: {
        pickTime: false,
        type: 'range',
        showShortcut: false,
        enterDirection: 'vertical',
        defaultValue: [new Date(+now - 1 * 24 * 3600 * 1000), new Date(+now - 4 * 24 * 3600 * 1000)],
        onSelect: null
      },
      curAttr: () => this.attr,
      btnData: [
        {
          text: '选择日期区间',
          enText: 'Select Date Range',
          prop: {}
        },
        {
          text: '选择日期时间区间',
          enText: 'Select DateTime Range',
          prop: {
            pickTime: true
          }
        },
        {
          text: '选择日期',
          enText: 'Select Date',
          prop: {
            type: 'one'
          }
        },
        {
          text: '选择日期时间',
          enText: 'Select DateTime',
          prop: {
            type: 'one',
            pickTime: true
          }
        },
        {
          text: '选择日期区间(快捷)',
          enText: 'Select Date Range (Shortcut)',
          prop: {
            showShortcut: true
          }
        },
        {
          text: '选择日期时间区间(快捷)',
          enText: 'Select DateTime Range (Shortcut)',
          prop: {
            pickTime: true,
            showShortcut: true
          }
        },
        {
          text: '水平进入',
          enText: 'Horizontal Enter Aniamtion',
          prop: {
            enterDirection: 'horizontal'
          }
        },
        {
          text: '默认选择范围',
          enText: 'Selected Date Range',
          prop: {
            defaultValue: [new Date(+now - 1 * 24 * 3600 * 1000), new Date(+now - 4 * 24 * 3600 * 1000)]
          }
        },
        {
          text: 'onSelectAPI',
          enText: 'onSelectAPI',
          prop: {
            onSelect: this.onSelect
          }
        }
      ]
    }
  },
  methods: {
    renderCal (obj) {
      this.show = true
      this.renderBtn(obj)
    },
    onCancel () {
      this.show = false
      this.startTime = undefined
      this.endTime = undefined
    },
    onConfirm (startTime, endTime) {
      console.log('onConfirm', startTime, endTime)
      this.startTime = startTime
      this.endTime = endTime
    },
    onSelectHasDisableDate (date) {
      console.warn('onSelectHasDisableDate', date)
    },
    getDateExtra (date) {
      return extra[date]
    },
    onSelect (date) {
      console.log('onSelect', date)
      return [date, new Date(+now - 7 * 24 * 3600 * 1000)]
    },
    renderBtn (obj) {
      this.curAttr = () => this.attr
      for (let key in obj) {
        this.curAttr[key] = obj[key]
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
.wrap{
  margin: 10px 0;
  font-size: 14px;
}
.btn{
  background: #1A7BE6;
  padding: 5px;
  margin: 5px;
  text-align: center;

  p{
    color: #fff;
    margin: 0;
    padding: 0;
  }
}
</style>


