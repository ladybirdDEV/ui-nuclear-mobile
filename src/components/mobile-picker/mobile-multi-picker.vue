<template>
  <div :class="`${className} ${prefixCls}`">
    <slot></slot>
  </div>
</template>

<script>
import MultiPickerMixin from './mobile-multi-picker-mixin'
export default {
  mixins: [MultiPickerMixin],
  name: 'multi-picker',
  props: {
    className: {
      type: String,
      default: ''
    },
    prefixCls: {
      type: String,
      default: 'mobile-multi-picker'
    },
    defaultSelectedValue: {
      type: Array,
      default: () => []
    },
    selectedValue: {
      type: Array,
      default: () => []
    },
    onValueChange: Function,
    onScrollChange: Function
  },
  model: {
    prop: 'selectedValue',
    event: 'onChange'
  },
  data () {
    return {
      curSelectedValue: null
    }
  },
  methods: {
    cloneElement () {
      const children = this.$children
      const isDefault = this.defaultSelectedValue && this.defaultSelectedValue.length > 0
      const selectedValue = this.curSelectedValue || (isDefault ? this.defaultSelectedValue : this.getValue())
      children.forEach((child, index) => {
        child.selectedValueState = selectedValue[index]
        child.col = index
      })
    }
  },
  mounted () {
    this.cloneElement()
  }
}
</script>

