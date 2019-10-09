import LazyRenderBox from './LazyRenderBox'
export default {
  name: 'Dialog',
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    afterClose: {
      type: Function,
      default: () => { }
    },
    closable: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      visible: false
    },
    title: {
      type: String
    },
    transitionName: {
      type: String
    },
    maskTransitionName: {
      type: String
    },
    animation: {
      type: String
    },
    maskAnimation: {
      type: String
    },
    wrapStyle: {
      type: Object
    },
    bodyStyle: {
      type: Object
    },
    maskStyle: {
      type: Object
    },
    prefixCls: {
      type: String,
      default: 'vmc-dialog'
    },
    wrapClassName: {
      type: String
    },
    zIndex: {
      type: Number
    }
  },
  mounted() {
    document.body.style.overflow = ''
    if (this.$refs.wrapRef) {
      this.$refs.wrapRef.style.display = 'none'
    }
  },
  methods: {
    getZIndexStyle() {
      const style = {}
      const props = this.$props
      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex
      }
      return style
    },
    getWrapStyle() {
      const wrapStyle = this.$props.wrapStyle || {}
      return { ...this.getZIndexStyle(), ...wrapStyle }
    },
    getMaskTransitionName() {
      const props = this.$props
      let transitionName = props.maskTransitionName
      const animation = props.maskAnimation
      if (!transitionName && animation) {
        transitionName = `${props.prefixCls}-${animation}`
      }
      return transitionName
    },
    getMaskElement() {
      const props = this.$props
      let maskElement
      if (props.mask) {
        const maskTransition = this.getMaskTransitionName()
        maskElement = (
          <LazyRenderBox
            key="mask-element"
            class={`${props.prefixCls}-mask`}
            hiddenClassName={`${props.prefixCls}-mask-hidden`}
            visible={props.visible}
          />
        )
        if (maskTransition) {
          maskElement = (
            <transition
              key="mask">
              {maskElement}
            </transition>
          )
        }
      }
      return maskElement
    },
    getDialogElement() {
      const props = this.$props
      const closable = props.closable
      const prefixCls = props.prefixCls

      let footer
      if (this.$slots.footer) {
        footer = (
          <div class={`${prefixCls}-footer`} ref="footerRef">
            {this.$slots.footer}
          </div>
        )
      }
      let closer
      if (closable) {
        closer = (
          <button
            on-click={this.close}
            aria-label="Close"
            class={`${prefixCls}-close`}
          >
            <span class={`${prefixCls}-close-x`} />
          </button>
        )
      }
      const dialogElement = (
        <LazyRenderBox
          key="dialog-element"
          role="document"
          class={`${prefixCls}`}
          visible={props.visible}
        >
          <div class={`${prefixCls}-content`}>
            {closer}
            <div class={`${prefixCls}-body`} style={props.bodyStyle} ref="bodyRef">
              {this.$slots.default}
            </div>
            {footer}
          </div>
        </LazyRenderBox>
      )
      return (
        <transition>
          {dialogElement}
        </transition>
      )
    },
    close () {
      this.$emit('close')
    }
  },
  render() {
    const props = this.$props
    const { prefixCls, maskClosable } = props
    const style = this.getWrapStyle()
    if (props.visible) {
      style.display = null
    }
    return (
      <div>
        {this.getMaskElement()}
        <div
          class={`${prefixCls}-wrap ${props.wrapClassName || ''}`}
          ref="wrapRef"
          role="dialog"
          aria-labelledby={props.title}
          style={style}
        >
          {this.getDialogElement()}
        </div>
      </div>
    )
  }
}
