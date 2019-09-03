import classnames from 'classnames'
import { cloneElement } from '../../_util/vnode.js'
export default {
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
    triggerEvent(isActive) {
      if (isActive !== this.active) {
        this.active = isActive
      }
    },
    onTouchStart(e) {
      this.triggerEvent(true)
    },
    onTouchMove(e) {
      this.triggerEvent(false)
    },
    onTouchEnd(e) {
      this.triggerEvent(false)
    },
    onTouchCancel(e) {
      this.triggerEvent(false)
    },
    onMouseDown() {
      this.triggerEvent(true)
    },
    onMouseUp() {
      this.triggerEvent(false)
    },
    onMouseLeave () {
      this.triggerEvent(false)
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
    if (this.active) {
      return cloneElement(child, { class: activeClassName, style: activeStyle, on: { ...events } })
    } else {
      return cloneElement(child, { on: { ...events } })
    }
  }
}
