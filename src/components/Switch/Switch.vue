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
<style>
.um-switch {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  align-self: center;
}

.um-switch .checkbox {
  width: 51px;
  height: 31px;
  border-radius: 31px;
  box-sizing: border-box;
  background: #e5e5e5;
  z-index: 0;
  margin: 0;
  padding: 0;
  appearance: none;
  border: 0;
  cursor: pointer;
  position: relative;
  transition: all 300ms;
}

.um-switch .checkbox:before {
  content: ' ';
  position: absolute;
  left: 1.5px;
  top: 1.5px;
  width: 48px;
  height: 28px;
  border-radius: 28px;
  box-sizing: border-box;
  background: #fff;
  z-index: 1;
  transition: all 200ms;
  transform: scale(1);
}

.um-switch .checkbox:after {
  content: ' ';
  height: 28px;
  width: 28px;
  border-radius: 28px;
  background: #fff;
  position: absolute;
  z-index: 2;
  left: 1.5px;
  top: 1.5px;
  transform: translateX(0);
  transition: all 200ms;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.21);
}

.um-switch .checkbox.checkbox-disabled {
  z-index: 3;
}

.um-switch input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  border: 0 none;
  appearance: none;
}

.um-switch input[type="checkbox"]:checked+.checkbox {
  background: #4dd865;
}

.um-switch input[type="checkbox"]:checked+.checkbox:before {
  transform: scale(0);
}

.um-switch input[type="checkbox"]:checked+.checkbox:after {
  transform: translateX(20px);
}

.um-switch input[type="checkbox"]:disabled+.checkbox {
  opacity: 0.3;
}

.um-switch.um-switch-android .checkbox {
  width: 72px;
  height: 23px;
  border-radius: 3px;
  background: #a7aaa6;
}

.um-switch.um-switch-android .checkbox:before {
  display: none;
}

.um-switch.um-switch-android .checkbox:after {
  width: 35px;
  height: 21px;
  border-radius: 2px;
  box-shadow: none;
  left: 1PX;
  top: 1PX;
}

.um-switch.um-switch-android input[type="checkbox"]:checked+.checkbox {
  background: #108ee9;
}

.um-switch.um-switch-android input[type="checkbox"]:checked+.checkbox:before {
  transform: scale(0);
}

.um-switch.um-switch-android input[type="checkbox"]:checked+.checkbox:after {
  transform: translateX(35px);
}

</style>
