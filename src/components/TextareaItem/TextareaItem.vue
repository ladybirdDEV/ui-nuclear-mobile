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
  import Feedback from '@/components/Feedback/Feedback.vue'
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
  @import '../style/mixins';
  @import '../style/themes/default.less';

@listPrefixCls: um-list;
@prefixCls: um-textarea;

.@{listPrefixCls} .@{listPrefixCls}-item {
  &.@{prefixCls}-item {
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    min-height: @list-item-height;
    padding-left: @h-spacing-lg;
    padding-right: @h-spacing-lg;
    .hairline('bottom');

    &.@{prefixCls}-item-single-line {
      align-items: center;

      .@{prefixCls}-label {
        align-self: center;
      }

      .@{prefixCls}-control {
        padding-top: 0;
        padding-bottom: 0;

        textarea {
          line-height: @line-height-paragraph * @font-size-heading;
        }
      }

      .@{prefixCls}-clear {
        margin-top: 0;
      }

      &.@{prefixCls}-error {
        .@{prefixCls}-error-extra {
          margin-top: 0;
        }
      }
    }
  }
}

.@{prefixCls}-control {
  flex: 1;
  padding-top: 10 * @hd;
  padding-bottom: 9 * @hd;

  textarea {
    color: @color-text-base;
    font-size: @font-size-heading;
    line-height: @line-height-paragraph * @font-size-heading;
    width: 100%;
    padding: 0;
    border: 0;
    background-color: transparent;
    overflow: visible;
    display: block;
    resize: none;
    word-break: break-all;
    word-wrap: break-word;

    &::placeholder {
      color: @color-text-placeholder;
    }

    &:disabled {
      color: @color-text-disabled;
      background-color: #fff;
    }
  }
}

.@{prefixCls}-label {
  align-self: flex-start;
  color: @color-text-base;
  text-align: left;
  min-height: @list-item-height;
  font-size: @font-size-heading;
  line-height: @list-item-height;
  margin-left: 0;
  margin-right: @h-spacing-sm;
  white-space: nowrap;
  overflow: hidden;

  &.@{prefixCls}-label-2 {
    width: 2 * @input-label-width;
  }

  &.@{prefixCls}-label-3 {
    width: 3 * @input-label-width;
  }

  &.@{prefixCls}-label-4 {
    width: 4 * @input-label-width;
  }

  &.@{prefixCls}-label-5 {
    width: 5 * @input-label-width;
  }

  &.@{prefixCls}-label-6 {
    width: 6 * @input-label-width;
  }

  &.@{prefixCls}-label-7 {
    width: 7 * @input-label-width;
  }
}

.@{prefixCls}-clear {
  display: none;
  width: @icon-size-sm;
  height: @icon-size-sm;
  margin-top: 12 * @hd;
  border-radius: @radius-circle;
  overflow: hidden;
  font-style: normal;
  color: #fff;
  background-color: @input-color-icon;
  background-repeat: no-repeat;
  background-size: @icon-size-sm auto;
  .encoded-svg-background('textarea_item_delete');

  &-active {
    background-color: @input-color-icon-tap;
  }
}

&.@{prefixCls}-focus {
  .@{prefixCls}-clear {
    display: block;
  }
}

.@{prefixCls}-has-count {
  padding-bottom: 14px;
}

.@{prefixCls}-count {
  position: absolute;
  bottom: @v-spacing-sm;
  right: @h-spacing-sm;
  color: @color-text-placeholder;
  font-size: @font-size-base;

  span {
    color: @color-text-base;
  }
}

&.@{prefixCls}-error {
  .@{prefixCls}-control {
    textarea {
      color: #f50;
    }
  }

  .@{prefixCls}-error-extra {
    margin-top: 12 * @hd;
    width: @icon-size-sm;
    height: @icon-size-sm;
    margin-left: @h-spacing-md;
    background-size: @icon-size-sm @icon-size-sm;
    .encoded-svg-background('error');
  }
}

&.@{prefixCls}-disabled {
  .@{prefixCls}-label {
    color: @color-text-disabled;
  }
}

.@{listPrefixCls} {
  &-body {
    .@{listPrefixCls}-item {
      &:last-child {
        .hairline-remove('bottom');
      }
    }
  }
}
</style>
