<template>
  <label :class="`${prefixCls}-wrapper`" style="">
    <span :class="cls">
      <input type="checkbox" :disabled="disabled" :class="`${prefixCls}-input`">
      <span :class="`${prefixCls}-inner`"></span>
    </span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: undefined
    },
    defaultChecked: {
      type: Boolean,
      default: undefined
    }
  },
  data () {
    return {
      prefixCls: 'um-checkbox',
      isChecked: this.checked !== undefined ? this.checked : Boolean(this.defaultChecked)
    }
  },
  methods: {
    change (value) {
      this.$emit('onChange', value)
    }
  },
  computed: {
    cls () {
      return {
        [`${this.prefixCls}`]: true,
        [`${this.prefixCls}-checked`]: this.isChecked,
        [`${this.prefixCls}-disabled`]: this.disabled
      }
    }
  }
}
</script>

<style lang="less">
@import url('style/index.less');
</style>
