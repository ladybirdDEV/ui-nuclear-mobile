export default {
  data: function () {
    return {
      active: false,
      activeClassName: ''
    }
  },
  mounted: function () {
    if (this.events) {
      for (let event in this.events) {
        this.$el.addEventListener(event, this.events[event])
      }
    }
  },
  computed: {
    wrapCls () {
      return this.active ? this.activeClassName : ''
    },
    wrapStyle () {
      return this.active ? this.activeStyle : ''
    },
    events () {
      return { mousedown: this.MouseDown, mouseup: this.MouseUp, mouseleave: this.MouseLeave, touchstart: this.TouchStart, touchmove: this.TouchMove, touchend: this.TouchEnd, touchcancel: this.TouchCancel }
    }
  },
  watch: {
    active: function (newV, oldV) {
      if (newV) {
        this.activeClassName && this.$el.classList.add(this.activeClassName)
      // deal style
      } else {
        this.activeClassName && this.$el.classList.remove(this.activeClassName)
      }
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    activeStyle: {
      type: Object
    },
    onTouchStart: {
      type: Function
    },
    onTouchEnd: {
      type: Function
    },
    onTouchCancel: {
      type: Function
    },
    onMouseDown: {
      type: Function
    },
    onMouseUp: {
      type: Function
    },
    onMouseLeave: {
      type: Function
    }
  },
  methods: {
    triggerEvent (type, isActive, ev) {
      if (this.disabled) return
      const eventType = `on${type}`
      if (this.$props[eventType]) {
        this.$props[eventType](ev)
      }
      if (isActive !== this.active) {
        this.active = isActive
      }
    },
    MouseDown (e) {
      // pc simulate mobile
      if (this.onTouchStart) {
        this.triggerEvent('TouchStart', true, e)
      }
      this.triggerEvent('MouseDown', true, e)
    },
    MouseUp (e) {
      if (this.onTouchEnd) {
        this.triggerEvent('TouchEnd', false, e)
      }
      this.triggerEvent('MouseUp', false, e)
    },
    MouseLeave (e) {
      this.triggerEvent('MouseLeave', false, e)
    },
    TouchStart (e) {
      this.triggerEvent('TouchStart', true, e)
    },
    TouchMove (e) {
      this.triggerEvent('TouchMove', false, e)
    },
    TouchEnd (e) {
      this.triggerEvent('TouchEnd', false, e)
    },
    TouchCancel (e) {
      this.triggerEvent('TouchCancel', false, e)
    }
  }
}
