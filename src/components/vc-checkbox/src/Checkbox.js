import classNames from 'classnames'
export default {
  name: 'VCCheckbox',
  props: {
    prefixCls: {
      type: String,
      default: 'vc-checkbox'
    },
    name: {
      type: String
    },
    id: {
      type: String
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    checked: {
      type: [Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean
    },
    tabIndex: {
      type: [String, Number]
    },
    readOnly: {
      type: Boolean
    },
    autoFocus: {
      type: Boolean
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      currentChecked: this.$props.checked
    }
  },
  methods: {
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    },
    handleChange (e) {
      const { disabled } = this.$props
      if (disabled) {
        return
      }
      this.$emit('change', this.currentChecked)
    }
  },
  render() {
    const { prefixCls, name, id, type, disabled, readOnly, tabIndex, autoFocus, value, ...others } = this.$props
    const checked = this.$data.currentChecked
    const classString = classNames(prefixCls, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled
    })
    return (
      <span class={classString}>
        <input
          name={name}
          id={id}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          tabIndex={tabIndex}
          class={`${prefixCls}-input`}
          checked={!!checked}
          autoFocus={autoFocus}
          ref="input"
          value={value}
          on-change={this.handleChange}
        />
        <span class={`${prefixCls}-inner`} />
      </span>
    )
  }
}
