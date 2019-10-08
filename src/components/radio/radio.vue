<template>
  <label class="um-radio-wrapper">
    <span class="um-radio um-radio-checked" :class="{'um-radio-disabled': disabled}">
      <input
        type="radio"
        class="um-radio-input"
        :name="name"
        :disabled="disabled"
        :value="value"
        :checked="isChecked"
        @change="change"
      />
      <span v-if="isChecked" class="um-radio-inner"></span>
    </span>
    <slot></slot>
  </label>
</template>
<script>
export default {
  name: "Radio",
  model: {
    prop: "checkedVal",
    event: "input"
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number]
    },
    checked: {
      type: Boolean,
      default: undefined
    },
    name: {
      type: String,
      default: ""
    },
    defaultChecked: {
      type: Boolean,
      default: undefined
    },
    checkedVal: [String, Number, Boolean],
    onChange: Function
  },
  created() {},
  data() {
    return {
      isChecked: this.computeCheckState(),
      currentValue: ""
    }
  },
  methods: {
    computeCheckState() {
      if (this.checked !== undefined) {
        return this.checked
      } else if (this.defaultChecked !== undefined) {
        return this.defaultChecked
      } else {
        return this.value === this.checkedVal
      }
    },
    change() {
      if (this.value === undefined && !this.checkedVal) {
        this.isChecked = !this.isChecked
        this.$emit("input", this.isChecked)
        if (this.onChange) {
          this.onChange(this.isChecked)
        }
        this.$emit("change", this.isChecked)
      } else {
        this.$emit("input", this.value)
        if (this.onChange) {
          this.onChange(this.value)
        }
        this.$emit("change", this.value)
      }
    }
  },
  watch: {
    checkedVal(val) {
      this.isChecked = this.value === val
    },
    checked(val) {
      this.isChecked = val
    }
  }
}
</script>
