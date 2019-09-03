<template>
    <a
      role="button"
      :class="wrapCls"
      :aria-disabled="disabled"
      ref="button"
      :style="inline ? {display: 'inline-block'} : undefined"
      :disabled="disabled"
      @click="click"
      v-feedback="{ disabled: disabled, activeClass: activeClassName }"
    >
      <Icon v-if="isIcon" :type="iconType" :class="`${prefixCls}-icon`" ></Icon>
      <span><slot></slot></span>
    </a>
</template>
<script>
import { oneOf } from '../../utils'
import Icon from '../icon'
import Feedback from '../../directives/feedback'
const prefixCls = 'um-button'
export default {
  name: 'Button',
  directives: {
    Feedback
  },
  components: {
    Icon
  },
  computed: {
    iconType () {
      if (this.loading) {
        return 'loading'
      }
      return this.icon
    },
    wrapCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-primary`]: this.type === 'primary',
        [`${prefixCls}-ghost`]: this.type === 'ghost',
        [`${prefixCls}-warning`]: this.type === 'warning',
        [`${prefixCls}-small`]: this.size === 'small',
        [`${prefixCls}-inline`]: this.inline,
        [`${prefixCls}-disabled`]: this.disabled,
        [`${prefixCls}-loading`]: this.loading,
        [`${prefixCls}-icon`]: !!this.iconType
      }
    }
  },
  mounted () {
    this.isIcon = this.icon || this.loading
  },
  watch: {
    loading () {
      if (this.loading) {
        this.isIcon = true
      } else {
        this.isIcon = false
      }
    }
  },
  data () {
    return {
      activeClassName: `${prefixCls}-active`,
      prefixCls: prefixCls,
      isIcon: false
    }
  },
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['primary', 'warning', 'ghost', ''])
      }
    },
    size: {
      validator (value) {
        return oneOf(value, ['large', 'small'])
      },
      default: 'large'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  methods: {
    click (ev) {
      if (!this.disabled) {
        this.$emit('onClick')
      }
      if (this.onClick) {
        this.onClick(ev)
      }
    }
  }
}
</script>
