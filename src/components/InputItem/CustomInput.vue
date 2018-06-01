<template>
  <div :class="fakeInputContainerCls" @click="onFakeInputClick">
    <div class="fake-input-placeholder" v-if="currentValue === ''">{{ placeholder }}</div>
    <div :class="fakeInputCls" ref="inputRef">{{ currentValue }}</div>
    <CustomKeyboard ref="customNumberKeyboard" @onClick="(KeyboardItemValue) =>onKeyboardClick(KeyboardItemValue)" :locale="locale"></CustomKeyboard>
  </div>
</template>
<script>
import CustomKeyboard from './CustomKeyboard'
const prefixCls = 'um-number-keyboard'
export default {
  name: 'CustomInput',
  components: {
    CustomKeyboard
  },
  data () {
    return {
      prefixCls: prefixCls,
      focus: false,
      currentValue: this.value,
      oldValue: ''
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    moneyKeyboardAlign: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number
    },
    value: {
      type: [String, Number]
    },
    locale: {
      type: Object
    }
  },
  computed: {
    fakeInputCls () {
      return {
        [`fake-input`]: true,
        [`focus`]: this.focus,
        [`fake-input-disabled`]: this.disabled
      }
    },
    fakeInputContainerCls () {
      return {
        [`fake-input-container`]: true,
        [`fake-input-container-left`]: this.moneyKeyboardAlign === 'left'
      }
    }
  },
  watch: {
    focus () {
      this.$children[0].isHide = !this.focus
    },
    value () {
      this.currentValue = this.value
    },
    currentValue () {
      this.$emit('input', this.currentValue)
    }
  },
  methods: {
    addBlurListener () {
      document.addEventListener('click', this.doBlur, false)
    },
    removeBlurListener () {
      document.removeEventListener('click', this.doBlur, false)
    },
    doBlur (ev) {
      if (ev.target !== this.$refs.inputRef) {
        this.onInputBlur(this.currentValue)
      }
    },
    setFocus () {
      this.removeBlurListener()
      if (!this.focus) {
        this.onInputFocus()
      }
      setTimeout(() => {
        this.addBlurListener()
      }, 50)
      this.$emit('onFocus', this.currentValue)
    },
    onInputFocus () {
      this.focus = true
    },
    onInputBlur (value) {
      if (this.focus) {
        this.focus = false
        setTimeout(() => {
          this.removeBlurListener()
        }, 50)
      }
    },
    onFakeInputClick () {
      if (!this.disabled) {
        this.setFocus()
      }
    },
    onKeyboardClick (KeyboardItemValue) {
      let maxLength = this.maxLength
      this.oldValue = this.currentValue
      // 删除键
      this.setFocus()
      if (KeyboardItemValue === 'delete') {
        this.currentValue = this.currentValue.substring(0, this.currentValue.length - 1)
        // 确认键
      } else if (KeyboardItemValue === 'confirm') {
        this.onInputBlur(this.currentValue)
        // 收起键
      } else if (KeyboardItemValue === 'hide') {
        this.onInputBlur(this.currentValue)
      } else {
        if (maxLength !== undefined && +maxLength >= 0 && (this.currentValue + KeyboardItemValue).length > maxLength) {
          this.currentValue = (this.currentValue + KeyboardItemValue).substr(0, maxLength)
        } else {
          this.currentValue = (this.currentValue + KeyboardItemValue)
        }
      }
    }
  }
}
</script>

