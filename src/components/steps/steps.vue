<template>
  <div :class="wrapCls">
    <slot></slot>
  </div>
</template>
<script>
import { oneOf } from '../../utils'
const prefixCls = 'um-steps'
function debounce (fn) {
  let waiting
  return function () {
    if (waiting) return
    waiting = true
    const context = this
    const args = arguments
    const later = function () {
      waiting = false
      fn.apply(context, args)
    }
    this.$nextTick(later)
  }
}
export default {
  name: 'Steps',
  data () {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {
    wrapCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-vertical`]: this.direction === 'vertical',
        [`${prefixCls}-horizontal`]: this.direction === 'horizontal',
        [`${prefixCls}-label-vertical`]: this.direction === 'horizontal',
        [`${prefixCls}-small`]: this.size === 'small'
      }
    }
  },
  methods: {
    updateChildProps (isInit) {
      const size = this.size
      this.$children.forEach((child, index) => {
        child.stepNumber = index + 1
        if (this.size === 'small') {
          child.size = size
        }
        if (!(isInit && child.currentStatus)) {
          if (index === this.current) {
            if (this.status !== 'error') {
              child.currentStatus = 'process'
            }
          } else if (index < this.current) {
            child.currentStatus = 'finish'
          } else {
            child.currentStatus = 'wait'
          }
        }

        if (child.currentStatus !== 'error' && index !== 0) {
          this.$children[index - 1].nextError = false
        }
      })
    },
    setNextError () {
      this.$children.forEach((child, index) => {
        if (child.currentStatus === 'error' && index !== 0) {
          this.$children[index - 1].nextError = true
        }
      })
    },
    updateCurrent (isInit) {
      if (this.current < 0 || this.current >= this.$children.length) {
        return
      }
      if (isInit) {
        const isCurrentStatus = this.$children[this.current].currentStatus
        if (!isCurrentStatus) {
          this.$children[this.current].currentStatus = this.status
        }
      } else {
        this.$children[this.current].current = this.status
      }
    },
    debouncedAppendRemove () {
      return debounce(function () {
        this.updateSteps()
      })
    },
    updateSteps () {
      this.updateChildProps(true)
      this.setNextError()
      this.updateCurrent(true)
    }
  },
  mounted () {
    this.updateSteps()
    this.$on('append', this.debouncedAppendRemove())
    this.$on('remove', this.debouncedAppendRemove())
  },
  watch: {
    current () {
      this.updateChildProps()
    },
    status () {
      this.updateCurrent()
    }
  },
  props: {
    current: {
      type: Number,
      default: 0
    },
    size: {
      validator (value) {
        return oneOf(value, ['small'])
      }
    },
    status: {
      validator (value) {
        return oneOf(value, ['wait', 'process', 'finish', 'error'])
      },
      default: 'process'
    },
    direction: {
      validator (value) {
        return oneOf(value, ['vertical', 'horizontal'])
      },
      default: 'vertical'
    }
  }
}
</script>
<style lang="less">
@import 'style/index.less';
</style>

