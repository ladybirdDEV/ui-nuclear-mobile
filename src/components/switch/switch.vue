<template>
  <label :class="wrapCls">
    <input type="checkbox" :name="name" :class="`${prefixCls}-checkbox`" :disabled="disabled" @change="change" v-model="isChecked" @click="click">
    <div class="checkbox" :class="{'checkbox-disabled': disabled === true}" :style="style" @click="click">
    </div>
  </label>
</template>
<script>
import { oneOf } from '../../utils'
const prefixCls = 'um-switch'
export default {
  name: 'uSwitch',
  computed: {
    style () {
      if (this.color && this.isChecked) {
        return { backgroundColor: this.color }
      }
    },
    wrapCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-android`]: this.platform === 'android'
      }
    },
    currentValue () {
      if (this.isChecked) {
        return 'on'
      } else {
        return 'off'
      }
    }
  },
  methods: {
    change (v) {
      if (this.onChange) {
        this.$nextTick(() => { this.onChange(this.isChecked) })
      }
    },
    click (v) {
      if (this.onClick) {
        this.$nextTick(() => { this.onClick(this.isChecked) })
      }
    }
  },
  data () {
    return {
      isChecked: this.checked,
      prefixCls: prefixCls
    }
  },
  props: {
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
      type: String
    },
    platform: {
      validator (value) {
        return oneOf(value, ['android', 'ios'])
      },
      default: 'ios'
    },
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    }
  }
}
</script>
<style lang="less">
@import url('style/index.less');
</style>
