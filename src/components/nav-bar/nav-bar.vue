<template>
  <div :class="wrapCls">
    <div :class="`${prefixCls}-left`" role="button" @click="click">
      <span :class="`${prefixCls}-left-icon`" aria-hidden="true" v-if="hasIcon">
        <slot name="icon"></slot>
      </span>
      <slot name="leftContent">{{ leftContent }}</slot>
    </div>
    <div :class="`${prefixCls}-title`">
      <slot></slot>
    </div>
    <div :class="`${prefixCls}-right`">
      <slot name="rightContent"></slot>
    </div>
  </div>
</template>
<script>
import { oneOf } from '../../utils'
const prefixCls = 'um-navbar'
export default {
  name: 'NavBar',
  data () {
    return {
      prefixCls: prefixCls,
      hasIcon: false
    }
  },
  mounted () {
    this.hasIcon = this.$slots.icon !== undefined
  },
  methods: {
    click (e) {
      if (this.onLeftClick) {
        this.onLeftClick(e)
      }
    }
  },
  computed: {
    wrapCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-dark`]: this.mode === 'dark',
        [`${prefixCls}-light`]: this.mode === 'light'
      }
    }
  },
  props: {
    mode: {
      validator (value) {
        return oneOf(value, ['dark', 'light'])
      },
      default: 'dark'
    },
    leftContent: {
      type: String
    },
    onLeftClick: {
      type: Function
    }
  }
}
</script>
<style>
.um-navbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  height: 45px;
  background-color: #108ee9;
  color: #fff;
}
.um-navbar-left,
.um-navbar-title,
.um-navbar-right {
  flex: 1;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
}
.um-navbar-left {
  padding-left: 15px;
  font-size: 16px;
}
.um-navbar-left-icon {
  margin-right: 5px;
  display: inherit;
}
.um-navbar-title {
  justify-content: center;
  font-size: 18px;
  white-space: nowrap;
}
.um-navbar-right {
  justify-content: flex-end;
  font-size: 16px;
  margin-right: 15px;
}
.um-navbar-light {
  background-color: #fff;
  color: #108ee9;
}
.um-navbar-light .um-navbar-title {
  color: #000;
}
</style>
