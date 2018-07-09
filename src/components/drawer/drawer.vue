<template>
  <div :class="drawerCls">
    <div :class="`${prefixCls}-sidebar`" :style="sidebarStyles" ref="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div v-if="!docked" :class="`${prefixCls}-overlay`" role="presentation" :style="overlayStyles" @click="closeDrawer"></div>
    <div v-else :class="`${prefixCls}-overlay`" role="presentation"></div>
    <div :class="`${prefixCls}-content`" :style="contentStyles">
      <div
        v-if="dragable"
        :class="`${prefixCls}-draghandle`"
        v-finger:touch-start="touchStart"
        v-finger:touch-move="touchMove"
        v-finger:touch-end="touchEnd"
        :style="dragHandleStyles"
        >
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { oneOf } from '../../utils'
const prefixCls = 'um-drawer'
export default {
  name: 'Drawer',
  computed: {
    dragable () {
      return !this.docked && this.enableDragHandle && !this.currentOpen && (this.position === 'left' || this.position === 'right')
    },
    drawerCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-left`]: this.position === 'left',
        [`${prefixCls}-right`]: this.position === 'right',
        [`${prefixCls}-top`]: this.position === 'top',
        [`${prefixCls}-bottom`]: this.position === 'bottom',
        [`${prefixCls}-open`]: this.currentOpen,
        [`${prefixCls}-docked`]: this.docked
      }
    },
    sidebarStyles () {
      let transform
      let offsetX
      if (this.offsetX) {
        if (this.position === 'left') {
          offsetX = (1 - this.offsetX / this.sidebarWidth) * 100
          transform = `translateX(-${offsetX}%)`
        } else if (this.position === 'right') {
          offsetX = Math.abs(this.offsetX) < this.sidebarWidth ? (1 - (0 - this.offsetX / this.sidebarWidth)) * 100 : 0
          transform = `translateX(${offsetX}%)`
        }
        return { transform: transform, transition: 'none' }
      } else {
        if (this.currentOpen) {
          if (this.position === 'left' || this.position === 'right') {
            transform = `translateX(0%)`
          } else {
            transform = `translateY(0%)`
          }
          return { transform: transform, ...this.sidebarStyle }
        }
        return this.sidebarStyle
      }
    },
    overlayStyles () {
      if (this.offsetX) {
        let opacity = Math.abs(this.offsetX) / this.sidebarWidth < 1 ? Math.abs(this.offsetX) / this.sidebarWidth : 1
        return {
          opacity: opacity,
          visibility: 'visible',
          transition: 'none',
          ...this.overlayStyle
        }
      } else {
        if (this.currentOpen) {
          return {
            opacity: 1,
            visibility: 'visible',
            ...this.overlayStyle
          }
        }
      }
    },
    dragHandleStyles () {
      return {
        ...this.dragHandleStyle
      }
    },
    contentStyles () {
      if (this.docked && this.currentOpen) {
        if (this.position === 'left') {
          return {
            left: `${this.sidebarWidth}px`,
            ...this.contentStyle
          }
        } else if (this.position === 'right') {
          return {
            right: `${this.sidebarWidth}px`,
            ...this.contentStyle
          }
        } else if (this.position === 'top') {
          return {
            top: `${this.sidebarHeight}px`,
            ...this.contentStyle
          }
        } else if (this.position === 'bottom') {
          return {
            bottom: `${this.sidebarHeight}px`,
            ...this.contentStyle
          }
        }
      } else {
        return this.contentStyle
      }
    }
  },
  mounted () {
    this.sidebarWidth = this.$refs.sidebar.offsetWidth
    this.sidebarHeight = this.$refs.sidebar.offsetHeight
  },
  model: {
    prop: 'open',
    event: 'onOpenChange'
  },
  data () {
    return {
      prefixCls: prefixCls,
      currentOpen: this.open,
      originX: false,
      offsetX: false,
      sidebarWidth: false,
      sidebarHeight: false
    }
  },
  methods: {
    closeDrawer () {
      this.currentOpen = false
      this.offsetX = false
    },
    touchStart (evt) {
      this.originX = evt.touches[0].clientX
    },
    touchMove (evt) {
      let posX = evt.touches[0].clientX
      this.offsetX = posX - this.originX
    },
    touchEnd (evt) {
      if (Math.abs(this.offsetX) > this.dragToggleDistance) {
        this.currentOpen = true
        this.offsetX = false
      } else {
        this.currentOpen = false
        this.offsetX = false
      }
    }
  },
  watch: {
    open () {
      this.currentOpen = this.open
    },
    currentOpen () {
      this.$emit('onOpenChange', this.currentOpen)
    }
  },
  props: {
    open: {
      type: Boolean
    },
    position: {
      validator (value) {
        return oneOf(value, ['left', 'right', 'top', 'bottom'])
      },
      default: 'left'
    },
    docked: {
      type: Boolean,
      default: false
    },
    contentStyle: {
      type: Object
    },
    sidebarStyle: {
      type: Object
    },
    overlayStyle: {
      type: Object
    },
    enableDragHandle: {
      type: Boolean,
      default: false
    },
    dragHandleStyle: {
      type: Object
    },
    dragToggleDistance: {
      type: Number,
      default: 30
    }
  }
}
</script>
<style lang="less">
@import './style/index';
</style>

