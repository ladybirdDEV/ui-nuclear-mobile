<template>
  <div :class="wrapCls">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'um-card'
export default {
  name: 'Card',
  computed: {
    wrapCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-full`]: this.full
      }
    }
  },
  props: {
    full: {
      type: Boolean,
      default: false
    }
  }
}
</script>
