<template>
  <div class="week-panel">
    <div class="cell cell-grey">{{week[0]}}</div>
    <div class="cell">{{week[1]}}</div>
    <div class="cell">{{week[2]}}</div>
    <div class="cell">{{week[3]}}</div>
    <div class="cell">{{week[4]}}</div>
    <div class="cell">{{week[5]}}</div>
    <div class="cell cell-grey">{{week[6]}}</div>
  </div>
</template>

<script>
// import { Models } from './DataTypes'
import locale from '../locale/zh_CN'

export default {
  props: {
    locale: {
      type: Object,
      default: () => locale
    }
  },
  data () {
    return {
      week: this.locale.week
    }
  }
}
</script>

<style>

</style>


