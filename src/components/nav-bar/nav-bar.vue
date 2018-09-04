<template>
  <div :class="wrapCls">
    <div :class="`${prefixCls}-left`" role="button" @click="click">
      <span :class="`${prefixCls}-left-icon`" aria-hidden="true" v-if="hasIcon">
        <slot name="icon"></slot>
      </span>
      <slot name="leftContent">{{ leftContent }}</slot>
    </div>
    <div :class="`${prefixCls}-title`">
      <slot></slot>
    </div>
    <div :class="`${prefixCls}-right`">
      <slot name="rightContent"></slot>
    </div>
  </div>
</template>
<script>
import { oneOf } from '../../utils'
const prefixCls = 'um-navbar'
export default {
  name: 'NavBar',
  data () {
    return {
      prefixCls: prefixCls,
      hasIcon: false
    }
  },
  mounted () {
    this.hasIcon = this.$slots.icon !== undefined
  },
  methods: {
    click (e) {
      if (this.onLeftClick) {
        this.onLeftClick(e)
      }
    }
  },
  computed: {
    wrapCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-dark`]: this.mode === 'dark',
        [`${prefixCls}-light`]: this.mode === 'light'
      }
    }
  },
  props: {
    mode: {
      validator (value) {
        return oneOf(value, ['dark', 'light'])
      },
      default: 'dark'
    },
    leftContent: {
      type: String
    },
    onLeftClick: {
      type: Function
    }
  }
}
</script>
<style lang="less">
@import url('style/index.less');
</style>
