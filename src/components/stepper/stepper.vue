<script>
import Icon from "../icon"
import VMCInputNumber from "../vmc-input-number"
export default {
  name: "Stepper",
  props: {
    prefixCls: {
      type: String,
      default: "um-stepper"
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    step: {
      type: [Number, String],
      default: 1
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    showNumber: {
      type: Boolean,
      default: false
    },
    focusOnUpDown: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    autoFocus: {
      type: Boolean
    },
    value: {
      type: Number
    },
    name: {
      type: String
    }
  },
  methods: {
    onChange(v) {
      this.$emit('change', v)
    }
  },
  render() {
    const { showNumber, ...restProps } = this.$props
    const stepperClass = {
      ["showNumber"]: !!showNumber
    }
    return (
      <VMCInputNumber class={stepperClass} {...{ props: { ...restProps } }} on-change={this.onChange}>
        <Icon slot="upHandler" type="plus" size="xxs" />
        <Icon slot="downHandler" type="minus" size="xxs" />
      </VMCInputNumber>
    )
  }
}
</script>
