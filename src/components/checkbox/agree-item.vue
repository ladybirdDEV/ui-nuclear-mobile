<template>
  <div :class="`${prefixCls}`" @click.prevent="check">
    <Checkbox
      :label="label"
      :disabled="disabled"
      :checked="checked"
      :defaultChecked="defaultChecked"
      @onChange="change"
      :name="name"
      :class="`${prefixCls}-label`"
      ref="checkbox">
      <slot></slot>
    </Checkbox>
  </div>
</template>

<script>
import Checkbox from './checkbox'

export default {
  components: {
    Checkbox
  },
  name: 'Agreeitem',
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
      type: Boolean
    },
    defaultChecked: {
      type: Boolean
    }
  },
  data () {
    return {
      prefixCls: 'um-checkbox-agree'
    }
  },
  methods: {
    check () {
      this.$refs.checkbox.isChecked = !this.$refs.checkbox.isChecked
    },
    change (value) {
      this.$emit('onChange')
    }
  }
}
</script>

<style lang="less">
@import url('style/index.less');
</style>


