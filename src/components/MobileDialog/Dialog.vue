<template>
  <div v-transfer-dom data-transfer="true" :id="getId" :style="styles">
    <div :class="className">
      <transition :name="getMaskTransitionName" key="mask">
        <div :class="`${prefixCls}-mask`" v-show="currentVisible" v-if="mask"></div>
      </transition>
      <transition :name="getTransitionName" key="dialog">
        <div
          :class="wrapCls"
          role="dialog"
          @click="maskClick"
          v-if="currentVisible"
        >
            <div
            :class="`${prefixCls}`"
            role="document"
            >
            <div :class="`${prefixCls}-content`">
              <button
                aria-label="Close"
                :class="`${prefixCls}-close`"
                @click="handleClose"
                v-if="closable"
              >
                <span :class="`${prefixCls}-close-x`"></span>
              </button>
              <div
                :class="`${prefixCls}-header`"
                ref="headerRef"
                v-if="hasTitle"
              >
                <div :class="`${prefixCls}-title`">
                  <slot name="title">This is title</slot>
                </div>
              </div>
              <div :class="`${prefixCls}-body`" :style="bodyStyle">
                <slot></slot>
              </div>
              <div
                :class="`${prefixCls}-footer`"
                ref="footerRef"
                v-if="hasFooter"
              >
                <slot name="footer">This is footer</slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import TransferDom from '../../directives/transfer-dom'
export default {
  name: 'Dialog',
  directives: {
    TransferDom
  },
  data () {
    return {
      currentVisible: this.visible
    }
  },
  model: {
    prop: 'visible',
    event: 'onChange'
  },
  watch: {
    visible () {
      this.currentVisible = this.visible
    },
    currentVisible () {
      this.$emit('onChange', this.currentVisible)
      if (this.currentVisible === false) {
        this.$emit('onClose', this.currentVisible)
        document.body.removeAttribute('style')
      } else {
        document.body.style.overflow = 'hidden'
      }
    }
  },
  methods: {
    maskClick (event) {
      if (this.maskClosable && event.target === event.currentTarget) {
        this.handleClose()
      }
    },
    handleClose () {
      if (this.currentVisible) {
        this.currentVisible = false
      }
    }
  },
  computed: {
    getId () {
      return `${this.prefixCls}-container-${(new Date().getTime())}`
    },
    getMaskTransitionName () {
      let transitionName = this.maskTransitionName
      const animation = this.maskAnimation
      if (!transitionName && animation) {
        transitionName = `${this.prefixCls}-${animation}`
      }
      return transitionName
    },
    getTransitionName () {
      let transitionName = this.transitionName
      const animation = this.animation
      if (!transitionName && animation) {
        transitionName = `${this.prefixCls}-${animation}`
      }
      return transitionName
    },
    hasTitle () {
      return this.$slots.title !== undefined
    },
    hasFooter () {
      return this.$slots.footer !== undefined
    },
    wrapCls () {
      return {
        [`${this.prefixCls}-wrap`]: true,
        [`${this.wrapClassName}`]: this.wrapClassName
      }
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'vmc-dialog'
    },
    className: {
      type: String
    },
    wrapClassName: {
      type: String
    },
    zindex: {
      type: Number
    },
    bodyStyle: {
      type: Object,
      default: () => {}
    },
    maskStyle: {
      type: Object,
      default: () => {}
    },
    visible: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String
    },
    maskAnimation: {
      type: String
    },
    transitionName: {
      type: String
    },
    maskTransitionName: {
      type: String
    },
    closable: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    styles: {
      type: Object
    }
  }
}
</script>
<style lang="less">
@import './styles/index';
</style>


