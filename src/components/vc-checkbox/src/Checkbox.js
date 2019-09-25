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
    }
  },
  render() {
    const { prefixCls, name, id, type, disabled, readOnly, tabIndex, autoFocus, value } = this.$props
    const checked = this.$data.currentChecked
    const classString = classNames(prefixCls, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled
    })

    return (
      <span>
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
        />
        <span class={`${prefixCls}-inner`} />
      </span>
    )
  }
}
