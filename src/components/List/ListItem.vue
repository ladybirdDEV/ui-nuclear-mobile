<template>
  <div :class="wrapCls" v-feedback="{ disabled: disabled, activeClass: activeClassName }" @click="click">
    <div :class="`${prefixCls}-thumb`" v-if="isThumb">
      <slot name="thumb"><img :src="thumb"></slot>
    </div>
    <div :class="lineCls">
      <div :class="`${prefixCls}-content`">
        <slot></slot>
      </div>
      <div :class="`${prefixCls}-extra`" v-if="isExtra"><slot name="extra">{{ extra }}</slot></div>
      <div :class="arrowCls" aria-hidden="true" v-if="arrow"></div>
    </div>
    <div :class="rippleCls" :style="coverRippleStyle"></div>
  </div>
</template>
<script>
import { oneOf } from '../../utils'
import Feedback from '@/directives/feedback'
const prefixCls = 'um-list'
export default {
  name: 'Item',
  directives: {
    Feedback
  },
  data () {
    return {
      coverRippleStyle: { display: 'none' },
      RippleClicked: false,
      prefixCls: prefixCls,
      isExtra: false,
      isThumb: false,
      activeClassName: `${prefixCls}-item-active`
    }
  },
  computed: {
    wrapCls () {
      return {
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-disabled`]: this.disabled,
        [`${prefixCls}-item-error`]: this.error,
        [`${prefixCls}-item-top`]: this.align === 'top',
        [`${prefixCls}-item-middle`]: this.align === 'middle',
        [`${prefixCls}-item-bottom`]: this.align === 'bottom'
      }
    },
    rippleCls () {
      return {
        [`${prefixCls}-ripple`]: true,
        [`${prefixCls}-ripple-animate`]: this.RippleClicked
      }
    },
    lineCls () {
      return {
        [`${prefixCls}-line`]: true,
        [`${prefixCls}-line-multiple`]: this.multipleLine,
        [`${prefixCls}-line-wrap`]: this.wrap
      }
    },
    arrowCls () {
      return {
        [`${prefixCls}-arrow`]: true,
        [`${prefixCls}-arrow-horizontal`]: this.arrow === 'horizontal',
        [`${prefixCls}-arrow-vertical`]: this.arrow === 'down' || this.arrow === 'up',
        [`${prefixCls}-arrow-vertical-up`]: this.arrow === 'up'
      }
    }
  },
  mounted () {
    this.isExtra = this.$slots.extra !== undefined || this.extra
    this.isThumb = this.$slots.thumb !== undefined || this.thumb
  },
  methods: {
    click (ev) {
      const isAndroid = this.platform === 'android'
      if (this.onClick && isAndroid) {
        let Item = ev.currentTarget
        let RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth)
        const ClientRect = ev.currentTarget.getBoundingClientRect()
        let pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2
        let pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2
        const coverRippleStyle = {
          width: `${RippleWidth}px`,
          height: `${RippleWidth}px`,
          left: `${pointX}px`,
          top: `${pointY}px`
        }
        this.coverRippleStyle = coverRippleStyle
        this.RippleClicked = true
        setTimeout(() => {
          this.coverRippleStyle = { display: 'none' }
          this.RippleClicked = false
        }, 1000)
      }
      if (this.onClick) {
        this.onClick(ev)
      }
    }
  },
  props: {
    multipleLine: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'middle'
    },
    platform: {
      validator (value) {
        return oneOf(value, ['ios', 'android'])
      },
      default: 'ios'
    },
    thumb: {
      type: String
    },
    extra: {
      type: String
    },
    arrow: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    }
  }
}
</script>
