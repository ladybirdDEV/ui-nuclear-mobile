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
<style>
.um-flexbox .um-flexbox-item {
  box-sizing: border-box;
  flex: 1;
  margin-left: 8px;
  min-width: 10px;
}

.um-flexbox .um-flexbox-item:first-child {
  margin-left: 0;
}
</style>
