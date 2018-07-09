<template>
  <div class="shortcut-panel">
    <div class="item" @click="onClick('today')">{{locale.today}}</div>
    <div class="item" @click="onClick('yesterday')">{{locale.yesterday}}</div>
    <div class="item" @click="onClick('lastweek')">{{locale.lastWeek}}</div>
    <div class="item" @click="onClick('lastmonth')">{{locale.lastMonth}}</div>
  </div>
</template>

<script>
import locale from '../locale/zh_CN'

export default {
  props: {
    onSelect: Function,
    locale: {
      type: Object,
      default: () => locale
    }
  },
  methods: {
    onClick (type) {
      const today = new Date()
      const onSelect = this.onSelect
      switch (type) {
        case 'today':
          onSelect(
            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0),
            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12)
          )
          break

        case 'yesterday':
          onSelect(
            new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 0),
            new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12)
          )
          break

        case 'lastweek':
          onSelect(
            new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6, 0),
            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12)
          )
          break

        case 'lastmonth':
          onSelect(
            new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29, 0),
            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12)
          )
          break
      }
    }
  }
}
</script>

<style>

</style>


