<template>
  <div
    :class="`${className} animate`"
    :style="{display: visible ? displayType : 'none'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    className: String,
    displayType: String
  }
}
</script>

