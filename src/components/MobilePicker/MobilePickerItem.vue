<template>
  <div :class="[itemClassName, `${selectedValue === value ? selectedItemClassName : className}`]"
      :key="value">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'picker-item',
  props: {
    className: {
      type: String,
      default: ''
    },
    value: String
  },
  data () {
    return {
      prefixCls: '',
      itemClassName: '',
      selectedItemClassName: ''
    }
  },
  computed: {
    selectedValue () {
      return this.$parent.selectedValueState || this.$parent.$children[0].value
    }
  },
  mounted () {
    this.prefixCls = this.$parent.prefixCls
    this.itemClassName = `${this.prefixCls}-item`
    this.selectedItemClassName = `${this.prefixCls}-item-selected`
  }
}
</script>

<style>
/* .mobile-picker-item-selected{
  color: red;
} */
</style>


