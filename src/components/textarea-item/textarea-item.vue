<template>
  <div :class="wrapCls">
    <div :class="lableCls" v-if="hasTitle">
      <slot></slot>
      {{ title }}
    </div>
    <div :class="`${prefixCls}-control`">
      <textarea v-model="curValue"
                ref="textareaRef"
                :placeholder="placeholder"
                :rows='rows'
                :maxlength="calMaxlength"
                :disabled="isDisabled"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
                :name="name"
                :readOnly="!editable">
      </textarea>
    </div>

    <Feedback activeClassName="`${prefixCls}-clear-active`"
              v-if='isClear && curValue.length > 0'
              :onTouchStart="clearTex">
      <div :class="`${prefixCls}-clear`" @click="clearTex"></div>
    </Feedback>

    <div :class="`${prefixCls}-error-extra`"
          v-if="hasError"
          @click="handleErrorClick">
    </div>
    <span :class="`${prefixCls}-count`" v-if="hasCount">
      <span>{{ curValue.length }}</span>
      /{{ count }}
    </span>
  </div>
</template>

<script>
  import Feedback from '../feedback/feedback.vue'
  const prefixCls = 'um-textarea'
  const prefixListCls = 'um-list'

  export default {
    name: 'TextareaItem',
    components: {
      Feedback
    },
    data () {
      return {
        prefixCls: prefixCls,
        isDisabled: this.disabled ? 'disabled' : false,
        curValue: this.value || this.defaultValue || '',
        isClear: this.clear && this.editable,
        focus: false,
        hasTitle: this.$slots.default !== undefined || this.title !== '',
        maxlength: '',
        hasCount: this.count > 0 && this.rows > 1,
        hasError: this.error
      }
    },
    props: {
      value: {
        type: String
      },
      title: {
        type: String,
        default: ''
      },
      defaultValue: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      labelNumber: {
        type: Number,
        default: 5
      },
      rows: {
        type: Number,
        default: 1
      },
      count: {
        type: Number,
        default: 0
      },
      error: {
        type: Boolean,
        default: false
      },
      clear: {
        type: Boolean,
        default: false
      },
      editable: {
        type: Boolean,
        default: true
      },
      onBlur: {
        type: Function
      },
      onFocus: {
        type: Function
      },
      onChange: {
        type: Function
      },
      onErrorClick: {
        type: Function
      },
      name: {
        type: String,
        default: ''
      },
      prefixListCls: {
        type: String,
        default: 'um-list'
      }
    },
    methods: {
      handleErrorClick () {
        if (this.onErrorClick) {
          this.onErrorClick()
        }
      },
      handleChange (e) {
        this.curValue = e.target.value
        if (this.onChange) {
          this.onChange()
        }
      },
      clearTex () {
        this.curValue = ''
        if (this.onChange) {
          this.onChange('')
        }
      },
      handleBlur (e) {
        this.focus = false
        const value = e.target.value
        if (this.onBlur) {
          this.onBlur(value)
        }
      },
      handleFocus (e) {
        this.focus = true
        const value = e.target.value
        if (this.onFocus) {
          this.onFocus(value)
        }
      },
      setFocus () {
        this.$refs.textareaRef.focus()
      },
      reAlignHeight () {
        const textareaDom = this.$refs.textareaRef
        textareaDom.style.height = '' // 字数减少时能自动减小高度
        textareaDom.style.height = `${textareaDom.scrollHeight}px`
        // console.log('height', textareaDom.style.height)
      },
      countSymbols (text = '') {
        const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g
        return text.replace(regexAstralSymbols, '_').length
      }
    },
    mounted () {
      if (this.autoHeight) {
        this.reAlignHeight()
      }
    },
    updated () {
      if (this.autoHeight && this.focus) {
        this.reAlignHeight()
      }
    },
    computed: {
      calMaxlength () {
        // https://segmentfault.com/q/1010000012870121
        const characterLength = this.countSymbols(this.curValue)
        if (this.count > 0) {
          this.maxlength = this.curValue.length - characterLength + this.count + (this.value ? this.value.length : 0)
        }
        return this.maxlength
      },
      lableCls () {
        return [
          `${prefixCls}-label`,
          {
            [`${prefixCls}-label-2`]: this.labelNumber === 2,
            [`${prefixCls}-label-3`]: this.labelNumber === 3,
            [`${prefixCls}-label-4`]: this.labelNumber === 4,
            [`${prefixCls}-label-5`]: this.labelNumber === 5,
            [`${prefixCls}-label-6`]: this.labelNumber === 6,
            [`${prefixCls}-label-7`]: this.labelNumber === 7
          }
        ]
      },
      wrapCls () {
        return [
          `${prefixListCls}-item`,
          `${prefixCls}-item`,
          {
            [`${prefixCls}-disabled`]: this.disabled === 'disabled',
            [`${prefixCls}-focus`]: this.focus,
            [`${prefixCls}-item-single-line`]: this.rows === 1 && !this.autoHeight,
            [`${prefixCls}-error`]: this.error,
            [`${prefixCls}-has-count`]: this.hasCount
          }
        ]
      }
    }
  }
</script>

<style lang="less">
@import url('style/index.less');
</style>
