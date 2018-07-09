<template>
  <div>
    <List>
      <ListItem>
        {{en ? 'Chinese' : '中文'}}
        <template slot="extra">
          <uSwitch :onClick="() => en = !en" checked></uSwitch>
        </template>
      </ListItem>
      <ListItem arrow="horizontal"
        v-for="(item, index) in renderBtn"
        :key="index"
        :onClick="() => click(item)">
        {{en ? item.text.en : item.text.zh}}
      </ListItem>
    </List>
    <Calendar
      :pickTime="config.pickTime"
      :type="config.type"
      :showShortcut="config.showShortcut"
      :rowSize="config.rowSize"
      :enterDirection="config.enterDirection"
      :defaultValue="config.defaultValue"
      :onSelect="config.onSelect"
      :locale="locale"
      :visible="show"
      :onCancel="onCancel"
      :onConfirm="onConfirm"
      :onSelectHasDisableDate="onSelectHasDisableDate"
      :getDateExtra="getDateExtra"
      :minDate="minDate"
      :maxDate="maxDate"/>
  </div>
</template>
<script>
import { List, ListItem } from '@/components/List'
import uSwitch from '@/components/Switch'
import Calendar from '@/components/calendar'
import enUS from '@/components/calendar/locale/en_US'
import zhCN from '@/components/calendar/locale/zh_CN'
const extra = {
  '2017/07/15': { info: 'Disable', disable: true }
}
const now = new Date()
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true }
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true }
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true }
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true }
Object.keys(extra).forEach((key) => {
  const info = extra[key]
  const date = new Date(key)
  if (!Number.isNaN(+date) && !extra[+date]) {
    extra[+date] = info
  }
})
const initConfig = {
  pickTime: false,
  type: 'range',
  showShortcut: false,
  rowSize: 'normal',
  enterDirection: 'vertical',
  defaultValue: undefined,
  onSelect: undefined
}

export default {
  components: {
    Calendar,
    List,
    ListItem,
    uSwitch
  },
  data () {
    return {
      show: false,
      startTime: undefined,
      endTime: undefined,
      minDate: new Date(+now - 5184000000),
      maxDate: new Date(+now + 31536000000),
      en: false,
      config: () => initConfig,
      renderBtn: [{
        text: {
          zh: '选择日期区间',
          en: 'Select Date Range'
        },
        config: {}
      }, {
        text: {
          zh: '选择日期时间区间',
          en: 'Select DateTime Range'
        },
        config: {pickTime: true}
      }, {
        text: {
          zh: '选择日期',
          en: 'Select Date'
        },
        config: {type: 'one'}
      }, {
        text: {
          zh: '选择日期时间',
          en: 'Select DateTime'
        },
        config: {
          type: 'one',
          pickTime: true
        }
      }, {
        text: {
          zh: '选择日期区间(快捷)',
          en: 'Select Date Range (Shortcut)'
        },
        config: {showShortcut: true}
      }, {
        text: {
          zh: '选择日期时间区间(快捷)',
          en: 'Select DateTime Range (Shortcut)'
        },
        config: {
          pickTime: true,
          showShortcut: true
        }
      }, {
        text: {
          zh: '大行距',
          en: 'XL row size'
        },
        config: {rowSize: 'xl'}
      }, {
        text: {
          zh: '不无限滚动',
          en: 'infinite: false'
        },
        config: {infinite: false}
      }, {
        text: {
          zh: '水平进入',
          en: 'Horizontal enter'
        },
        config: {enterDirection: 'horizontal'}
      }, {
        text: {
          zh: '默认选择范围',
          en: 'Selected Date Range'
        },
        config: {defaultValue: [new Date(+now - 86400000), new Date(+now - 345600000)]}
      }, {
        text: {
          zh: 'onSelect API',
          en: 'onSelect API'
        },
        config: {onSelect: this.onSelect}
      }]
    }
  },
  computed: {
    locale () {
      return this.en ? enUS : zhCN
    }
  },
  methods: {
    click (val) {
      this.show = true
      this.config = () => initConfig
      for (let key in val.config) {
        this.config[key] = val.config[key]
      }
    },
    onCancel () {
      this.show = false
      this.startTime = undefined
      this.endTime = undefined
    },
    onSelectHasDisableDate (dates) {
      console.warn('onSelectHasDisableDate', dates)
    },
    onConfirm (startTime, endTime) {
      this.show = false
      this.startTime = startTime
      this.endTime = endTime
      console.log('confirm', startTime, endTime)
    },
    getDateExtra (date) {
      return extra[+date]
    },
    onSelect (date, state) {
      console.log('onSelect', date, state)
      return [date, new Date(+now - 604800000)]
    }
  }
}
</script>

