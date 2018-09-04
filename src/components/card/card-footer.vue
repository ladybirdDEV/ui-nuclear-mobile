<template>
  <div :class="[prefixCls + '-footer']">
    <div :class="[prefixCls + '-footer-content']">
      <slot name="content">{{ content }}</slot>
    </div>
    <div :class="[prefixCls + '-footer-extra']">
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script>
const prefixCls = 'um-card'
export default {
  name: 'CardFooter',
  data () {
    return {
      prefixCls: prefixCls
    }
  },
  props: {
    content: {
      type: String
    },
    extra: {
      type: String
    }
  }
}
</script>
