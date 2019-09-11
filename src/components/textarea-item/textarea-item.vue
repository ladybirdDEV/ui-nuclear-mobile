<script>
import classnames from "classnames"
import TouchFeedback from "../vmc-feedback"
import { IS_IOS } from "../_util/exenv"
const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g
function countSymbols(text = "") {
  return text.replace(regexAstralSymbols, "_").length
}
export default {
  name: "TextareaItem",
  props: {
    prefixCls: {
      type: String,
      default: "um-textarea"
    },
    prefixListCls: {
      type: String,
      default: "um-list"
    },
    title: {
      type: String
    },
    maxLength: {
      type: Number
    },
    name: {
      type: String
    },
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: ""
    },
    clear: {
      type: Boolean,
      clear: false
    },
    rows: {
      type: Number,
      default: 1
    },
    count: {
      type: Number
    },
    error: {
      type: Boolean,
      default: false
    },
    autoHeight: {
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
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      isFocus: false,
      currentValue: this.$props.value
    }
  },
  mounted() {
    if (this.$props.autoHeight) {
      this.reAlignHeight()
    }
  },
  updated() {
    if (this.$props.autoHeight && this.$data.isFocus) {
      this.reAlignHeight()
    }
  },
  methods: {
    focus() {
      this.$refs.textareaRef.focus()
    },
    reAlignHeight() {
      const textareaDom = this.$refs.textareaRef
      textareaDom.style.height = "" // 字数减少时能自动减小高度
      textareaDom.style.height = `${textareaDom.scrollHeight}px`
    },
    onInput(e) {
      this.currentValue = e.target.value
    },
    onChange() {
      this.$emit("change", this.currentValue)
    },
    onBlur() {
      this.$emit("blur", this.currentValue)
    },
    onFocus() {
      this.$data.isFocus = true
      this.$emit("focus", this.currentValue)
    },
    onErrorClick() {
      this.$emit("error-click")
    },
    clearInput(e) {
      this.currentValue = ""
      this.onChange()
    }
  },
  render() {
    const {
      prefixCls,
      prefixListCls,
      name,
      editable,
      clear,
      error,
      count,
      labelNumber,
      autoHeight,
      value,
      disabled,
      placeholder,
      rows
    } = this.$props
    const { currentValue, isFocus } = this.$data
    const hasCount = count > 0 && this.$props.rows > 1
    const title = this.$slots.title || this.$props.title
    const wrapCls = classnames(`${prefixListCls}-item`, `${prefixCls}-item`, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-item-single-line`]: this.$props.rows === 1 && !autoHeight,
      [`${prefixCls}-error`]: error,
      [`${prefixCls}-focus`]: isFocus,
      [`${prefixCls}-has-count`]: hasCount
    })

    const labelCls = classnames(`${prefixCls}-label`, {
      [`${prefixCls}-label-2`]: labelNumber === 2,
      [`${prefixCls}-label-3`]: labelNumber === 3,
      [`${prefixCls}-label-4`]: labelNumber === 4,
      [`${prefixCls}-label-5`]: labelNumber === 5,
      [`${prefixCls}-label-6`]: labelNumber === 6,
      [`${prefixCls}-label-7`]: labelNumber === 7
    })

    const characterLength = countSymbols(currentValue)
    const lengthCtrlProps = {}

    if (count > 0) {
      // Note: If in the iOS environment of dev-tools, It will fail.
      if (IS_IOS) {
        const entValue = currentValue
          ? currentValue.replace(regexAstralSymbols, "_")
          : ""
        const entLen = entValue ? entValue.split("_").length - 1 : 0
        lengthCtrlProps.maxLength =
          count +
          entLen -
          characterLength +
          (currentValue ? currentValue.length : 0)
      } else {
        lengthCtrlProps.maxLength =
          count - characterLength + (currentValue ? currentValue.length : 0)
      }
    }
    return (
      <div class={wrapCls}>
        {title && <div class={labelCls}>{title}</div>}
        <div class={`${prefixCls}-control`}>
          <textarea
            name={name}
            value={currentValue}
            on-input={this.onInput}
            on-change={this.onChange}
            on-blur={this.onBlur}
            on-focus={this.onFocus}
            readOnly={!editable}
            disabled={disabled}
            placeholder={placeholder}
            rows={rows}
            ref="textareaRef"
            maxLength={lengthCtrlProps.maxLength}
          />
        </div>
        {clear && editable && currentValue && characterLength > 0 && (
          <TouchFeedback activeClassName={`${prefixCls}-clear-active`}>
            <div class={`${prefixCls}-clear`} on-click={this.clearInput} />
          </TouchFeedback>
        )}
        {error && (
          <div
            class={`${prefixCls}-error-extra`}
            on-click={this.onErrorClick}
          />
        )}
        {hasCount && (
          <span class={`${prefixCls}-count`}>
            <span>{currentValue ? characterLength : 0}</span>/{count}
          </span>
        )}
      </div>
    )
  }
}
</script>
