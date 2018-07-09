<template>
  <div :class="stepperCls">
    <div :class="`${prefixCls}-handler-wrap`">
      <Handler type="up" @onClick="add" :disabled="upDisabled"></Handler>
      <Handler type="down" @onClick="reduce" :disabled="downDisabled"></Handler>
    </div>
    <div :class="`${prefixCls}-input-wrap`">
      <input :min="min" :max="max" :step="step" autocomplete="off" :class="`${prefixCls}-input`" v-model="currentValue" :readonly="readOnly" :disabled="disabled">
    </div>
  </div>
</template>
<script>
import NP from 'number-precision'
import Icon from '../Icon'
import Feedback from '../feedback/feedback.js'
const prefixCls = 'um-stepper'
var Handler = {
  template: '<span unselectable="unselectable" role="button" :aria-label="labelType" :class="handlerCls" @click="onClick"><Icon :type="iconType" size="xxs"></Icon></span>',// eslint-disable-line
  mixins: [Feedback],
  components: {
    Icon
  },
  computed: {
    handlerCls () {
      return {
        [`${prefixCls}-handler`]: true,
        [`${prefixCls}-handler-up`]: this.type === 'up',
        [`${prefixCls}-handler-down`]: this.type === 'down',
        [`${prefixCls}-handler-up-disabled`]: this.type === 'up' && !!this.disabled,
        [`${prefixCls}-handler-down-disabled`]: this.type === 'down' && !!this.disabled
      }
    },
    labelType () {
      return this.type === 'up' ? 'Increase Value' : 'Decrease Value'
    },
    iconType () {
      return this.type === 'up' ? 'plus' : 'minus'
    }
  },
  props: {
    type: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  watch: {
    disabled () {
      this.activeClassName = this.disabled ? '' : `${prefixCls}-handler-active`
    }
  },
  data () {
    return {
      activeClassName: `${prefixCls}-handler-active`,
      prefixCls: prefixCls
    }
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        this.$emit('onClick')
      }
    }
  }
}
export default {
  name: 'Stepper',
  components: {
    Icon,
    Handler
  },
  data () {
    return {
      prefixCls: prefixCls,
      currentValue: this.defaultValue ? this.defaultValue : this.value,
      upDisabled: false,
      downDisabled: false
    }
  },
  computed: {
    stepperCls () {
      return {
        [`${prefixCls}`]: true,
        [`showNumber`]: this.showNumber,
        [`${prefixCls}-disabled`]: this.disabled
      }
    }
  },
  mounted () {
    if (this.disabled) {
      this.upDisabled = true
      this.downDisabled = true
    }
  },
  watch: {
    currentValue () {
      if (this.currentValue === this.max) {
        this.upDisabled = true
      } else {
        this.upDisabled = false
      }
      if (this.currentValue === this.min) {
        this.downDisabled = true
      } else {
        this.downDisabled = false
      }
      this.$emit('onChange', this.currentValue)
      this.$emit('input', this.currentValue)
    }
  },
  methods: {
    add () {
      if (this.currentValue < this.max) {
        this.currentValue = NP.plus(this.currentValue, this.step)
      }
    },
    reduce () {
      if (this.currentValue > this.min) {
        this.currentValue = NP.minus(this.currentValue, this.step)
      }
    }
  },
  props: {
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    defaultValue: {
      type: Number
    },
    value: {
      type: Number
    },
    step: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    showNumber: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less">
@import './style/index';
</style>
