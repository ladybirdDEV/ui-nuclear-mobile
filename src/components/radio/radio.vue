<template>
  <!-- <div class="um-checkbox" :for="`awesome${id}`">
    <input type="checkbox"
      class="um-checkbox-input"
      :name="name"
      :id="`awesome${id}`"
      :disabled="disabled"
      :value="value"
      v-model="isChecked"
      @change="change"/>
    <label v-if="isChecked"><Icon class="um-checkbox-checked" type="check" :color="color"></Icon></label>
    <label v-else>{{label}}</label>
    <slot></slot>
  </div> -->
  <label class="um-radio-wrapper">
    <span class="um-radio um-radio-checked" :class="{'um-radio-disabled': disabled}">
      <input type="radio"
        class="um-radio-input"
        :name="name"
        :disabled="disabled"
        :value="value"
        :checked="isChecked"
        @change="change"/>
      <span v-if="isChecked" class="um-radio-inner"></span>
    </span>
    <slot></slot>
  </label>
</template>
<script>
  import Icon from '../icon'

  export default {
    components: {
      Icon
    },
    name: 'Radio',
    model: {
      prop: 'checkedVal',
      event: 'input'
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
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
        default: ''
      },
      defaultChecked: {
        type: Boolean,
        default: undefined
      },
      checkedVal: [String, Number, Boolean],
      onChange: Function
    },
    created () {
    },
    data () {
      return {
        isChecked: this.computeCheckState(),
        currentValue: ''
      }
    },
    methods: {
      computeCheckState () {
        if (this.checked !== undefined) {
          return this.checked
        } else if (this.defaultChecked !== undefined) {
          return this.defaultChecked
        } else {
          return this.value === this.checkedVal
        }
      },
      change () {
        if (this.value === undefined && !this.checkedVal) {
          this.isChecked = !this.isChecked
          this.$emit('input', this.isChecked)
          if (this.onChange) {
            this.onChange(this.isChecked)
          }
          this.$emit('change', this.isChecked)
        } else {
          this.$emit('input', this.value)
          if (this.onChange) {
            this.onChange(this.value)
          }
          this.$emit('change', this.value)
        }
      }
    },
    watch: {
      checkedVal (val) {
        this.isChecked = this.value === val
      },
      checked (val) {
        this.isChecked = val
      }
    }
  }
</script>

<style lang="less">
@import './style/index.less';
</style>
