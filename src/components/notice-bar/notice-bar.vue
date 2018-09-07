<template>
  <div :class="`${prefixCls}`" role="alert" @click="click" v-show="show">
    <div :class="`${prefixCls}-icon`" aria-hidden="true" v-if="hasIcon">
      <slot name="icon">
        <Icon type="voice" size="xxs"></Icon>
      </slot>
    </div>
    <div :class="`${prefixCls}-content`">
      <Marquee :prefixCls="`${prefixCls}`" ref="marquee" :marqueeProps="marqueeProps"><slot></slot></Marquee>
    </div>
    <div :class="`${prefixCls}-operation`" v-if="mode === 'link'" role="button" aria-label="go to detail">
      <slot name="action">
        <Icon type="right" size="md" />
      </slot>
    </div>
    <div :class="`${prefixCls}-operation`" v-else-if="mode === 'closable'" role="button" aria-label="close">
      <slot name="action">
        <Icon type="cross" size="md" />
      </slot>
    </div>
  </div>
</template>
<script>
import { oneOf } from '../../utils'
import Marquee from './marquee'
import Icon from '../icon'
const prefixCls = 'um-notice-bar'
export default {
  name: 'NoticeBar',
  components: {
    Marquee,
    Icon
  },
  data () {
    return {
      show: true,
      hasIcon: true,
      prefixCls: prefixCls
    }
  },
  mounted () {
    this.hasIcon = this.icon !== 'null'
  },
  props: {
    mode: {
      validator (value) {
        return oneOf(value, ['closable', 'link', ''])
      },
      default: ''
    },
    onClick: {
      type: Function
    },
    marqueeProps: {
      type: Object
    },
    icon: {
      validator (value) {
        return oneOf(value, ['null'])
      }
    }
  },
  methods: {
    click () {
      if (this.onClick) {
        this.onClick()
      }
      if (this.mode === 'closable') {
        this.show = false
      }
    }
  }
}
</script>
<style lang="less">
@import url('style/index.less');
</style>
