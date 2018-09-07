<template>
  <div class="um-white-space" :class="wrapCls">
  </div>
</template>
<script>
export default {
  nume: 'WhiteSpace',
  computed: {
    wrapCls () {
      return {
        'um-white-space-xs': this.size === 'xs',
        'um-white-space-sm': this.size === 'sm',
        'um-white-space-md': this.size === 'md',
        'um-white-space-lg': this.size === 'lg',
        'um-white-space-xl': this.size === 'xl'
      }
    }
  },
  props: {
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>
<style lang="less">
@import 'style/index.less';
</style>
