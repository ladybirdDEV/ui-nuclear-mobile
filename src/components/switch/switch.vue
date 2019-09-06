<script>
import classnames from "classnames"
export default {
  props: {
    prefixCls: {
      type: String,
      default: "um-switch"
    },
    platform: {
      type: String,
      default: "ios"
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      currentChecked: this.$props.checked
    }
  },
  methods: {
    onChange(e) {
      const checked = e.target.checked
      this.$emit('change', checked)
    },
    onClick(e) {
      let val
      if (e && e.target && e.target.checked !== undefined) {
        val = e.target.checked
      } else {
        val = this.$props.checked
      }
      this.$data.currentChecked = val
      this.$emit("click", val)
    }
  },
  render() {
    const { prefixCls, name, disabled, platform, color } = this.$props
    const wrapCls = classnames(prefixCls, {
      [`${prefixCls}-android`]: platform === "android"
    })

    const fakeInputCls = classnames("checkbox", {
      [`checkbox-disabled`]: disabled
    })

    const style = {}

    if (color && this.$data.currentChecked) {
      style.backgroundColor = color
    }
    const inputProps = {
      attrs: {
        type: "checkbox",
        name: name,
        disabled: disabled,
        checked: this.$data.currentChecked,
        value: this.$data.currentChecked ? "on" : "off"
      },
      class: `${prefixCls}-checkbox`,
      on: {
        change: this.onChange,
        click: !disabled ? this.onClick : {}
      }
    }
    const fakeInputProps = {
      class: fakeInputCls,
      style: style,
      on: {
        click: disabled ? this.onClick : {}
      }
    }
    return (
      <label class={wrapCls}>
        <input {...inputProps} />
        <div {...fakeInputProps} />
      </label>
    )
  }
}
</script>
