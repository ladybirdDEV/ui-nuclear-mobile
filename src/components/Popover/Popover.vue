<template>
  <transition>
    <div v-show="isVisible" :style="contextStyle" @click="select">
      <div :class="prefixCls+'-mask'" v-if="mask" @click="close"></div>
      <div :class="[prefixCls, prefixCls+'-placement-'+placement]" id="um-popover" @click="stopClose($event)" :style="overlayStyle">
        <div :class="prefixCls+'-content'">
          <div :class="prefixCls+'-arrow'"></div>
          <div :class="prefixCls+'-inner'">
            <div :class="prefixCls+'-inner-wrapper'">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { oneOf } from '../../utils'
  import Feedback from '@/components/Feedback/Feedback'
  const prefixCls = 'um-popover'

  export default {
    name: 'Popover',
    mixins: [Feedback],
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      onVisibleChange: Function,
      placement: {
        validator (value) {
          return oneOf(value, ['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
        },
        default: 'bottomRight'
      },
      mask: {
        type: Boolean,
        default: false
      },
      onSelect: Function,
      triggerStyle: Object,
      overlayStyle: Object,
      contextStyle: Object,
      name: String,
      openMenu: Function,
      closeMenu: Function,
      toggleMenu: Function
    },
    data () {
      return {
        prefixCls: prefixCls,
        isVisible: this.visible
      }
    },
    watch: {
      visible (val, oldVal) {
        this.isVisible = val
        if (typeof this.onVisibleChange === 'function') {
          this.onVisibleChange()
        }
      }
    },
    methods: {
      close () {
        if (this.isVisible) {
          this.isVisible = false
          this.$emit('on-close', this.isVisible)
        }
      },
      stopClose (e) {
        e.stopPropagation()
      },
      select () {
        if (this.onSelect) {
          this.onSelect()
        }
      }
    },
    created () {
      if (!this.mask) {
        document.addEventListener('click', this.close)
      }
    },
    destroyed () {
      document.removeEventListener('click', this.close)
    }
  }
</script>

<style lang="less">
@import './style/index.less';
</style>
