<template>
  <div class="header">
    <span class="left" @click="onCancel && onCancel()">{{closeIcon}}</span>
    <span class="title">{{title}}</span>
    <span v-if="showClear" class="right" @click="() => {onClear && onClear()}">{{locale.clear}}</span>
  </div>
</template>

<script>
import locale from '../locale/zh_CN'
export default {
  props: {
    title: String,
    showClear: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: String,
      default: '清除'
    },
    onCancel: Function,
    onClear: Function,
    locale: {
      type: Object,
      default: () => locale
    }
  },
  data () {
    return {
      closeIcon: 'X'
    }
  }
}
</script>

<style>

</style>

