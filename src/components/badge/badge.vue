<template>
  <span :class="badgeCls">
    <slot></slot>
    <sup :class="scrollNumberCls" :style="styles" v-if="dot || text">{{ currentText }}</sup>
  </span>
</template>
<script>
import { oneOf } from '../../utils'
const prefixCls = 'um-badge'
export default {
  name: 'Badge',
  data () {
    return {
      children: null
    }
  },
  computed: {
    currentText () {
      if (this.text > this.overflowCount) {
        return this.overflowCount + '+'
      } else {
        return this.text
      }
    },
    badgeCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-not-a-wrapper`]: !this.children,
        [`${prefixCls}-corner-wrapper`]: this.corner,
        [`${prefixCls}-hot'`]: !!this.hot,
        [`${prefixCls}corner-wrapper-large`]: this.corner && (this.size === 'large')
      }
    },
    scrollNumberCls () {
      return {
        [`${prefixCls}-dot`]: this.dot,
        [`${prefixCls}-dot-large`]: this.dot && (this.size === 'large'),
        [`${prefixCls}-text`]: !this.dot && !this.corner,
        [`${prefixCls}-corner`]: this.corner,
        [`${prefixCls}-corner-large`]: this.corner && (this.size === 'large')
      }
    }
  },
  mounted () {
    this.children = this.$slots.default !== undefined
  },
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large'])
      },
      default: 'small'
    },
    text: {
      type: [String, Number]
    },
    corner: {
      type: Boolean,
      default: false
    },
    dot: {
      type: Boolean,
      default: false
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    hot: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object
    }
  }
}
</script>
<style lang="less">
@import './style/index';
</style>
