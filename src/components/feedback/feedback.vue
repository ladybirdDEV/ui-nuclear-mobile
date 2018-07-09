<template>
  <div v-on="events" :class="wrapCls" :style="wrapStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Feedback',
  computed: {
    wrapCls () {
      return this.active ? this.activeClassName : ''
    },
    wrapStyle () {
      return this.active ? this.activeStyle : ''
    },
    events () {
      return this.disabled ? undefined : { mousedown: this.MouseDown, mouseup: this.MouseUp, mouseleave: this.MouseLeave, touchstart: this.TouchStart, touchmove: this.TouchMove, touchend: this.TouchEnd, touchcancel: this.TouchCancel }
    }
  },
  data () {
    return {
      active: false
    }
  },
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
</script>
