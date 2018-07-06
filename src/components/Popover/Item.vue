<template>
  <div :class="wrapItemCls" v-on="events" @click="clickAction">
    <div class="um-popover-item-container">
      <span class="um-popover-item-icon" v-if="isIcon"><Icon :type="icon" /></span>
      <span class="um-popover-item-icon" v-else v-html="icon"></span>
      <span class="um-popover-item-content"><slot></slot></span>
    </div>
  </div>
</template>
<script>
  import Feedback from '../Feedback/Feedback'
  import Icon from '../Icon'
  import { oneOf } from '../../utils'
  const prefixItemCls = 'um-popover-item'

  export default {
    name: 'popoverItem',
    mixins: [Feedback],
    components: {
      Icon
    },
    data () {
      return {
        active: false,
        isActive: false,
        activeClassName: `${prefixItemCls}-active`
      }
    },
    computed: {
      wrapItemCls () {
        return {
          [`${prefixItemCls}`]: true,
          [`${prefixItemCls}-disabled`]: this.disabled
          // [`${prefixItemCls}-active`]: this.isActive
        }
      },
      isIcon () {
        return oneOf(this.icon, ['check', 'check-circle', 'check-circle-o', 'cross', 'cross-circle', 'cross-circle-o', 'left', 'right', 'down', 'up', 'loading', 'search', 'ellipsis', 'ellipsis-circle', 'exclamation-circle', 'info-circle', 'question-circle', 'voice', 'plus', 'minus', 'dislike', 'fail', 'success'])
      }
    },
    props: {
      icon: String,
      disabled: {
        type: Boolean,
        default: false
      },
      value: String,
      itemStyle: Object
    },
    methods: {
      clickAction () {
        if (this.disabled) return
        this.$emit('click')
        // this.$parent.select(44)
      }
    }
  }
</script>
