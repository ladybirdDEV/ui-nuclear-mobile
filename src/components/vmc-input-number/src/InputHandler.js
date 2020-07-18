import Touchable from '../../vmc-feedback'
export default {
  name: 'InputHandler',
  props: {
    prefixCls: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    role: {
      type: String
    },
    unselectable: {
      type: Boolean
    }
  },
  methods: {
    onTouchStart(e) {
      this.$emit('touchstart', e)
    },
    onTouchEnd(e) {
      this.$emit('touchend', e)
    }
  },
  render() {
    const { prefixCls, disabled, ...otherProps } = this.$props
    return (
      <Touchable disabled={disabled} activeClassName={`${prefixCls}-handler-active`} on-touchstart={this.onTouchStart} on-touchend={this.onTouchEnd}>
        <span {...{ attrs: otherProps }}>
          {this.$slots.default}
        </span>
      </Touchable>
    )
  }
}
