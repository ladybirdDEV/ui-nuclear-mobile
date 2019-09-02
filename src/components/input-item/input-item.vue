<template>
  <div :class="wrapCls">
    <div :class="`${prefixListCls}-line`">
      <div :class="labelCls" v-if="hasLabel">
        <slot></slot>
      </div>
      <div :class="controlCls">
        <template v-if="type === 'money'">
          <CustomInput ref="CustomInput" :placeholder="placeholder" :moneyKeyboardAlign="moneyKeyboardAlign" :maxLength="maxLength" :disabled="disabled" v-model="currentValue" @onFocus="onFocus" @input="onInputChange" :locale="locale"></CustomInput>
        </template>
        <template v-else>
          <input :name="name" ref="inputRef" :type="inputType" :placeholder="placeholder" :pattern="patternProps" @input="onInputChange" v-model="currentValue" @focus="onFocus" @blur="onBlur" :readonly="!editable" :disabled="disabled" :maxLength="type !== 'phone' ? maxLength : false" />
        </template>
      </div>
      <Clear v-if="clear && currentValue.length > 0"></Clear>
      <div v-if="error" :class="`${prefixCls}-error-extra`" @click="onErrorClick"></div>
      <div v-if="extra" :class="`${prefixCls}-extra`" @click="onExtraClick">{{ extra }}</div>
    </div>
  </div>
</template>
<script>
import { oneOf } from '../../utils'
import Feedback from '../feedback/feedback'
import CustomInput from './custom-input'
const prefixCls = 'um-input'
var Clear = {
  template: '<div :class="`${prefixCls}-clear`" @click="clear"></div>',// eslint-disable-line
  mixins: [Feedback],
  methods: {
    clear () {
      this.$parent.currentValue = ''
      this.$parent.setFocus()
    }
  },
  data () {
    return {
      activeClassName: `${prefixCls}-clear-active`,
      prefixCls: prefixCls
    }
  }
}
export default {
  name: 'InputItem',
  components: {
    CustomInput,
    Clear
  },
  data () {
    return {
      prefixCls: prefixCls,
      currentValue: this.initialValue ? this.initialValue : '',
      focus: false
    }
  },
  watch: {
    value () {
      this.currentValue = this.value
    }
  },
  computed: {
    inputType () {
      if (this.type === 'bankCard' || this.type === 'phone') {
        return 'tel'
      } else if (this.type === 'password') {
        return 'password'
      } else if (this.type === 'digit') {
        return 'number'
      } else if (this.type !== 'text' && this.type !== 'number') {
        return this.type
      } else {
        return 'text'
      }
    },
    patternProps () {
      if (this.type === 'number') {
        return '[0-9]*'
      }
    },
    hasLabel () {
      return this.$slots.default !== undefined
    },
    wrapCls () {
      return {
        [`${this.prefixListCls}-item`]: true,
        [`${prefixCls}-item`]: true,
        [`${this.prefixListCls}-item-middle`]: true,
        [`${prefixCls}-disabled`]: this.disabled,
        [`${prefixCls}-error`]: this.error,
        [`${prefixCls}-focus`]: this.focus,
        [`${prefixCls}-android`]: this.focus
      }
    },
    labelCls () {
      return {
        [`${prefixCls}-label`]: true,
        [`${prefixCls}-label-2`]: this.labelNumber === 2,
        [`${prefixCls}-label-3`]: this.labelNumber === 3,
        [`${prefixCls}-label-4`]: this.labelNumber === 4,
        [`${prefixCls}-label-5`]: this.labelNumber === 5,
        [`${prefixCls}-label-6`]: this.labelNumber === 6,
        [`${prefixCls}-label-7`]: this.labelNumber === 7
      }
    },
    controlCls () {
      return {
        [`${prefixCls}-control`]: true
      }
    }
  },
  methods: {
    setFocus () {
      if (this.$refs.CustomInput) {
        this.$refs.CustomInput.setFocus()
      } else {
        this.$refs.inputRef.focus()
      }
    },
    onFocus () {
      this.focus = true
      this.$emit('onFocus', this.currentValue)
    },
    onBlur () {
      this.focus = false
      this.$emit('onBlur', this.currentValue)
    },
    onInputChange () {
      switch (this.type) {
        case 'text':
          break
        case 'bankCard':
          this.currentValue = this.currentValue.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ')
          break
        case 'phone':
          this.currentValue = this.currentValue.replace(/\D/g, '').substring(0, 11)
          const valueLen = this.currentValue.length
          if (valueLen > 3 && valueLen < 8) {
            this.currentValue = `${this.currentValue.substr(0, 3)} ${this.currentValue.substr(3)}`
          } else if (valueLen >= 8) {
            this.currentValue = `${this.currentValue.substr(0, 3)} ${this.currentValue.substr(3, 4)} ${this.currentValue.substr(7)}`
          }
          break
        case 'number':
          this.currentValue = this.currentValue.replace(/\D/g, '')
          break
        case 'password':
          break
        default:
          break
      }
      this.$nextTick(() => { this.$emit('onChange', this.currentValue) })
      this.$emit('input', this.currentValue)
    },
    onErrorClick () {
      this.$emit('onErrorClick')
    },
    onExtraClick () {
      this.$emit('onExtraClick')
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    clear: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    labelNumber: {
      validator (value) {
        return oneOf(value, [2, 3, 4, 5, 6, 7])
      },
      default: 5
    },
    moneyKeyboardAlign: {
      validator (value) {
        return oneOf(value, ['left', 'right'])
      },
      default: 'right'
    },
    type: {
      validator (value) {
        return oneOf(value, ['bankCard', 'number', 'phone', 'password', 'digit', 'money', 'text'])
      },
      default: 'text'
    },
    extra: {
      type: String
    },
    error: {
      type: Boolean,
      default: false
    },
    initialValue: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    },
    maxLength: {
      type: Number
    },
    prefixListCls: {
      type: String,
      default: 'um-list'
    },
    name: {
      type: String
    },
    locale: {
      type: Object
    }
  }
}
</script>
