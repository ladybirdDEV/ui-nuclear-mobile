<template>
  <div class="um-wing-blank" :class="wrapCls">
    <slot></slot>
  </div>
</template>
<script>
export default {
  nume: 'Wing-Blank',
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
<style>
.um-wing-blank {
  margin-left: 8px;
  margin-right: 8px;
}
.um-wing-blank.um-wing-blank-sm {
  margin-left: 5px;
  margin-right: 5px;
}
.um-wing-blank.um-wing-blank-md {
  margin-left: 8px;
  margin-right: 8px;
}
.um-wing-blank.um-wing-blank-lg {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
