<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-actions`">
      <div :class="`${prefixCls}-actions-left`" ref="leftActions">
        <div :class="`${prefixCls}-btn ${btn.className ? btn.className : ''}`" v-for="btn in left" :style="btn.style" @touchstart="btnClick(btn.onPress, $event)">
          <span :class="`${prefixCls}-btn-text`">{{btn.text ? btn.text : 'Click'}}</span>
        </div>
      </div>
      <div :class="`${prefixCls}-actions-right`" ref="rightActions">
        <div :class="`${prefixCls}-btn ${btn.className ? btn.className : ''}`" v-for="btn in right" :style="btn.style" @touchstart="btnClick(btn.onPress, $event)">
          <span :class="`${prefixCls}-btn-text`">{{btn.text ? btn.text : 'Click'}}</span>
        </div>
      </div>
    </div>
    <div :class="`${prefixCls}-content ${moveClass}`" v-finger:touch-move="touchMove" v-finger:touch-start="touchStart" v-finger:touch-end="touchEnd" :style="moveStyle">
      <slot></slot>
    </div>
    <div :class="`${prefixCls}-cover`"></div>
  </div>
</template>
<script>
export default {
  name: 'SwipeAction',
  data () {
    return {
      prefixCls: 'um-swipe',
      pageXoriginal: 0,
      pageX: 0,
      moveClass: '',
      moveStyle: '',
      maxMoveLeftWidth: 0,
      maxMoveRightWidth: 0,
      transX: '',
      openedLeft: false,
      openedRight: false
    }
  },
  props: {
    left: {
      type: Array,
      defalut: () => {
        return []
      }
    },
    right: {
      type: Array,
      default: () => {
        return []
      }
    },
    autoClose: {
      type: Boolean,
      defalut: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onOpen: Function,
    onClose: Function
  },
  mounted () {
    this.maxMoveLeftWidth = this.$refs.leftActions.offsetWidth
    this.maxMoveRightWidth = this.$refs.rightActions.offsetWidth
    document.body.addEventListener('touchstart', this.closeSwipe, true)
  },
  methods: {
    touchStart (ev) {
      if (this.disabled) {
        return
      }
      this.pageXoriginal = ev.touches[0].clientX
      this.transX = this.moveStyle
    },
    touchMove (ev) {
      if (this.disabled) {
        return
      }
      this.moveClass = `${this.prefixCls}-swiping`
      this.pageX = ev.touches[0].clientX - this.pageXoriginal
      if ((this.pageX > 0 && this.left && this.left.length > 0 && this.pageX >= this.maxMoveLeftWidth) ||
        (this.pageX < 0 && this.right && this.right.length > 0 && this.pageX <= -this.maxMoveRightWidth)) {
        return
      }
      if ((this.left && this.left.length > 0 && this.pageX > 0) || (this.right && this.right.length > 0 && this.pageX < 0)) {
        this.moveStyle = `transform: translateX(${this.pageX}px)`
      }
    },
    touchEnd (ev) {
      if (this.disabled) {
        return
      }
      this.moveClass = ''
      if ((this.pageX > 0 && this.left && this.left.length > 0 && this.pageX < this.maxMoveLeftWidth / 2) ||
        (this.pageX < 0 && this.right && this.right.length > 0 && this.pageX > -this.maxMoveRightWidth / 2) || this.pageX === 0) {
        this.closeSwipe(ev)
      } else if (this.pageX > 0 && this.left && this.left.length > 0 && this.pageX >= this.maxMoveLeftWidth / 2) {
        this.openedLeft = true
        this.openedRight = false
      } else if (this.pageX < 0 && this.right && this.right.length > 0 && this.pageX <= -this.maxMoveRightWidth / 2) {
        this.openedRight = true
        this.openedLeft = false
      }
      this.pageX = 0
    },
    closeSwipe (ev) {
      if (ev.target.className.indexOf(`${this.prefixCls}-btn`) < 0 || this.autoClose) {
        this.openedLeft = false
        this.openedRight = false
      }
    },
    btnClick (action, event) {
      if (action) {
        action()
      }
    }
  },
  watch: {
    openedLeft (newV) {
      if (newV) {
        this.moveStyle = `transform: translateX(${this.maxMoveLeftWidth}px)`
        if (this.onOpen) {
          this.onOpen()
        }
      } else {
        this.moveStyle = ''
      }
      this.transX = this.moveStyle
    },
    openedRight (newV) {
      if (newV) {
        this.moveStyle = `transform: translateX(-${this.maxMoveRightWidth}px)`
        if (this.onOpen) {
          this.onOpen()
        }
      } else {
        this.moveStyle = ''
      }
      this.transX = this.moveStyle
    },
    transX: function (newV, oldV) {
      if (newV.length === 0) {
        if (this.onClose) {
          this.onClose()
        }
      }
    }
  },
  destroyed () {
    document.body.removeEventListener('touchstart', this.closeSwipe, true)
  }
}
</script>
<style lang="less">
@import url('style/index.less');
</style>
