<template>
  <div :class="wrapCls" v-if="animating">
    <template v-if="toast">
      <div :class="`${prefixCls}-content`">
        <span :class="spinnerClass" aria-hidden="true" />
        <span :class="`${prefixCls}-toast`">{{text}}</span>
      </div>
    </template>
    <template v-else>
      <span :class="spinnerClass" aria-hidden="true"></span>
      <span :class="`${prefixCls}-tip`">{{text}}</span>
    </template>
  </div>
</template>
<script>
const prefixCls = 'um-activity-indicator'

export default {
  name: 'activity-indicator',
  data () {
    return {
      prefixCls: prefixCls
    }
  },
  props: {
    animating: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'small'
    },
    toast: {
      type: Boolean,
      default: false
    },
    align: {
      type: String
    },
    textStyle: {
      type: Object
    }
  },
  computed: {
    wrapCls () {
      return {
        [`${prefixCls} ${prefixCls}-sm`]: this.size === 'small',
        [`${prefixCls} ${prefixCls}-lg`]: this.size === 'large',
        [`${prefixCls}-toast`]: !!this.toast
      }
    },
    spinnerClass () {
      return {
        [`${prefixCls}-spinner`]: true,
        [`${prefixCls}-spinner-lg`]: !!this.toast || this.size === 'large'
      }
    }
  },
  created () {
    if (this.align || this.textStyle) {
      console.warn('Props "align" & "textStyle" have been deprecated.')
    }
  }
}
</script>
<style lang="less">
@import url('style/index.less');
</style>
