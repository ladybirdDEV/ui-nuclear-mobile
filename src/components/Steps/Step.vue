<template>
  <div :class="wrapCls">
    <div :class="`${prefixCls}-tail`"></div>
    <div class="um-steps-item-icon">
      <span class="um-steps-icon">
        <template v-if="!icon && currentStatus !== 'finish' && currentStatus !== 'error' && currentStatus !== 'wait'">{{ stepNumber }}</template>
        <Icon v-else :type="iconType" :size="iconSize"></Icon>
      </span>
    </div>
    <div :class="`${prefixCls}-content`">
      <div :class="`${prefixCls}-title`">{{ title }}</div>
      <div :class="`${prefixCls}-description`" v-if="description">{{ description }}</div>
    </div>
  </div>
</template>
<script>
import Emitter from '../../mixins/emitter'
import Icon from '../icon'
import { oneOf } from '../../utils'
const prefixCls = 'um-steps-item'
export default {
  name: 'Step',
  mixins: [ Emitter ],
  components: {
    Icon
  },
  data () {
    return {
      prefixCls: prefixCls,
      currentStatus: '',
      nextError: false,
      stepNumber: ''
    }
  },
  props: {
    status: {
      validator (value) {
        return oneOf(value, ['wait', 'process', 'finish', 'error'])
      }
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    icon: {
      type: String
    }
  },
  computed: {
    iconType () {
      let icon = ''
      if (this.icon) {
        icon = this.icon
      } else {
        if (this.currentStatus === 'finish') {
          icon = 'check-circle-o'
        } else if (this.currentStatus === 'error') {
          icon = 'cross-circle-o'
        } else if (this.currentStatus === 'wait') {
          icon = 'ellipsis'
        }
      }

      return icon
    },
    iconSize () {
      if (this.size === 'small') {
        if (this.status === 'wait') {
          return 'xxs'
        } else {
          return 'xs'
        }
      } else {
        return 'md'
      }
    },
    wrapCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-custom`]: this.currentStatus !== 'process' || this.icon,
        [`${prefixCls}-process`]: this.currentStatus === 'process',
        [`${prefixCls}-finish`]: this.currentStatus === 'finish',
        [`${prefixCls}-wait`]: this.currentStatus === 'wait',
        [`ellipsis-item`]: this.currentStatus === 'wait',
        [`${prefixCls}-error`]: this.currentStatus === 'error',
        [`error-tail`]: this.nextError
      }
    }
  },
  watch: {
    status (val) {
      this.currentStatus = val
      if (this.currentStatus === 'error') {
        this.$parent.setNextError()
      }
    }
  },
  created () {
    this.currentStatus = this.status
  },
  mounted () {
    this.dispatch('Steps', 'append')
  },
  beforeDestroy () {
    this.dispatch('Steps', 'remove')
  }
}
</script>

