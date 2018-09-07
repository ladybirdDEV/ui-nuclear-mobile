<template>
  <div :class="wrapCls">
  </div>
</template>
<script>
export default {
  nume: 'WhiteSpace',
  data () {
    return {
      prefixCls: 'um-whitespace'
    }
  },
  computed: {
    wrapCls () {
      return [
        this.prefixCls,
        `${this.prefixCls}-${this.size}`
      ]
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
