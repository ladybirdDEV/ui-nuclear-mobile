import { cloneElement } from '../../_util/vnode.js'
export default {
  name: 'TouchFeedback',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    activeClassName: {
      type: String
    },
    activeStyle: {
      type: Object
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    triggerEvent(type, isActive, ev) {
      if (isActive !== this.active) {
        this.active = isActive
      }
      this.$emit(type, ev)
    },
    onTouchStart(e) {
      this.triggerEvent('touchstart', true, e)
    },
    onTouchMove(e) {
      this.triggerEvent('touchmove', false, e)
    },
    onTouchEnd(e) {
      this.triggerEvent('touchend', false, e)
    },
    onTouchCancel(e) {
      this.triggerEvent('touchcancel', false, e)
    },
    onMouseDown(e) {
      this.triggerEvent('mousedown', true, e)
    },
    onMouseUp(e) {
      this.triggerEvent('mouseup', false, e)
    },
    onMouseLeave(e) {
      this.triggerEvent('mouseleave', false, e)
    }
  },
  render() {
    const { disabled, activeClassName, activeStyle } = this.$props
    const children = this.$slots.default
    const events = disabled ? undefined : {
      touchstart: this.onTouchStart,
      touchmove: this.onTouchMove,
      touchend: this.onTouchEnd,
      touchcancel: this.onTouchCancel,
      mousedown: this.onMouseDown,
      mouseup: this.onMouseUp,
      mouseleave: this.onMouseLeave
    }

    const child = children[0]
    if (!disabled && this.$data.active) {
      return cloneElement(child, { class: activeClassName, style: activeStyle, on: { ...events } })
    }
    return cloneElement(child, { on: { ...events } })
  }
}
