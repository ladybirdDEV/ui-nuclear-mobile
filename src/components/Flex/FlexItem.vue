<template>
  <div :class="wrapCls">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'FlexItem',
  computed: {
    wrapCls () {
      return {
        'um-flexbox-item': true
      }
    }
  }
}
</script>
