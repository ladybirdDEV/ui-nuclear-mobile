<template>
  <div class="um-wing-blank" :class="wrapCls">
    <slot></slot>
  </div>
</template>
<script>
export default {
  nume: 'WingBlank',
  computed: {
    wrapCls () {
      return {
        'um-wing-blank-sm': this.size === 'sm',
        'um-wing-blank-md': this.size === 'md',
        'um-wing-blank-lg': this.size === 'lg'
      }
    }
  },
  props: {
    size: {
      type: String,
      default: 'lg'
    }
  }
}
</script>
<style lang="less">
@import url('style/index.less');
</style>
