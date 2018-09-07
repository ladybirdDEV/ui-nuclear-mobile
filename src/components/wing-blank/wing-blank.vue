<template>
  <div :class="wrapCls">
    <slot></slot>
  </div>
</template>
<script>
export default {
  nume: 'WingBlank',
  data () {
    return {
      prefixCls: 'um-wingblank'
    }
  },
  computed: {
    wrapCls () {
      return [
        `${this.prefixCls}`,
        `${this.prefixCls}-${this.size}`
      ]
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
@import 'style/index.less';
</style>
