function getOffset(ele) {
  let el = ele
  let _x = 0
  let _y = 0
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft
    _y += el.offsetTop - el.scrollTop
    el = el.offsetParent
  }
  return { top: _y, left: _x }
}

const CANCEL_DISTANCE_ON_SCROLL = 20

export default {
  name: 'vmc-drawer',
  props: {
    prefixCls: {
      type: String,
      default: 'vmc-drawer'
    },
    sidebarStyle: {
      type: Object,
      default: () => { }
    },
    contentStyle: {
      type: Object,
      default: () => { }
    },
    overlayStyle: {
      type: Object,
      default: () => { }
    },
    dragHandleStyle: {
      type: Object,
      default: () => { }
    },
    // boolean if sidebar should be docked
    docked: {
      type: Boolean,
      default: false
    },

    // boolean if sidebar should slide open
    open: {
      type: Boolean,
      default: false
    },

    // boolean if transitions should be disabled
    transitions: {
      type: Boolean,
      default: true
    },

    // boolean if touch gestures are enabled
    touch: {
      type: Boolean,
      default: true
    },
    enableDragHandle: {
      type: Boolean,
      default: true
    },

    // where to place the sidebar, contains left, right, top, bottom
    position: {
      type: String,
      default: 'left'
    },

    // distance we have to drag the sidebar to toggle open state
    dragToggleDistance: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      sidebarWidth: 0,
      sidebarHeight: 0,
      sidebarTop: 0,
      drageHandleTop: 0,

      // keep track of touching params

      touchIdentifier: null,
      touchStartX: null,
      touchStartY: null,
      touchCurrentX: null,
      touchCurrentY: null,

      // if touch is supported by the browser
      touchSupported: typeof window === 'object' && 'ontouchstart' in window
    }
  },
  mounted() {
    this.saveSidebarSize()
  },
  updated() {
    if (!this.isTouching()) {
      this.saveSidebarSize()
    }
  },
  methods: {
    onOverlayClicked() {
      if (this.$props.open) {
        setTimeout(() => {
          this.onOpenChange(false, { overlayClicked: true })
        }, 0)
      }
    },
    onTouchStart(ev) {
      if (!this.isTouching()) {
        const touch = ev.targetTouches[0]
        this.touchIdentifier = !this.notTouch ? touch.identifier : null
        this.$data.touchStartX = touch.clientX
        this.$data.touchStartY = touch.clientY
        this.$data.touchCurrentX = touch.clientX
        this.$data.touchCurrentY = touch.clientY
      }
    },
    onTouchMove(ev) {
      if (this.isTouching()) {
        for (let ind = 0; ind < ev.targetTouches.length; ind++) {
          // we only care about the finger that we are tracking
          if (ev.targetTouches[ind].identifier === this.$data.touchIdentifier) {
            this.$data.touchCurrentX = ev.targetTouches[ind].clientX
            this.$data.touchCurrentY = ev.targetTouches[ind].clientY
            break
          }
        }
      }
    },
    onTouchEnd() {
      this.notTouch = false
      if (this.isTouching()) {
        // trigger a change to open if sidebar has been dragged beyond dragToggleDistance
        const touchWidth = this.touchSidebarWidth()

        if (this.$props.open && touchWidth < this.$data.sidebarWidth - this.$props.dragToggleDistance || !this.$props.open && touchWidth > this.$props.dragToggleDistance) {
          this.onOpenChange(!this.$props.open)
        }

        const touchHeight = this.touchSidebarHeight()

        if (this.$props.open && touchHeight < this.$data.sidebarHeight - this.$props.dragToggleDistance || !this.$props.open && touchHeight > this.$props.dragToggleDistance) {
          this.onOpenChange(!this.$props.open)
        }

        this.$data.touchIdentifier = null
        this.$data.touchStartX = null
        this.$data.touchStartY = null
        this.$data.touchCurrentX = null
        this.$data.touchCurrentY = null
      }
    },

    // This logic helps us prevents the user from sliding the sidebar horizontally
    // while scrolling the sidebar vertically. When a scroll event comes in, we're
    // cancelling the ongoing gesture if it did not move horizontally much
    onScroll() {
      if (this.isTouching() && this.inCancelDistanceOnScroll()) {
        this.$data.touchIdentifier = null
        this.$data.touchStartX = null
        this.$data.touchStartY = null
        this.$data.touchCurrentX = null
        this.$data.touchCurrentY = null
      }
    },

    // True if the on going gesture X distance is less than the cancel distance

    inCancelDistanceOnScroll() {
      let cancelDistanceOnScroll
      switch (this.$props.position) {
        case 'right':
          cancelDistanceOnScroll = Math.abs(this.$data.touchCurrentX - this.$data.touchStartX) < CANCEL_DISTANCE_ON_SCROLL
          break
        case 'bottom':
          cancelDistanceOnScroll = Math.abs(this.$data.touchCurrentY - this.$data.touchStartY) < CANCEL_DISTANCE_ON_SCROLL
          break
        case 'top':
          cancelDistanceOnScroll = Math.abs(this.$data.touchStartY - this.$data.touchCurrentY) < CANCEL_DISTANCE_ON_SCROLL
          break
        case 'left':
        default:
          cancelDistanceOnScroll = Math.abs(this.$data.touchStartX - this.$data.touchCurrentX) < CANCEL_DISTANCE_ON_SCROLL
      }
      return cancelDistanceOnScroll
    },

    isTouching() {
      return this.$data.touchIdentifier !== null
    },

    saveSidebarSize() {
      const sidebar = this.$refs.sidebar
      const width = sidebar.offsetWidth
      const height = sidebar.offsetHeight
      const sidebarTop = getOffset(this.$refs.sidebar).top
      const dragHandleTop = getOffset(this.$refs.dragHandle).top

      if (width !== this.$data.sidebarWidth) {
        this.$data.sidebarWidth = width
      }
      if (height !== this.$data.sidebarHeight) {
        this.$data.sidebarHeight = height
      }
      if (sidebarTop !== this.$data.sidebarTop) {
        this.$data.sidebarTop = sidebarTop
      }
      if (dragHandleTop !== this.$data.dragHandleTop) {
        this.$data.dragHandleTop = dragHandleTop
      }
    },

    // calculate the sidebarWidth based on current touch info
    touchSidebarWidth() {
      // if the sidebar is open and start point of drag is inside the sidebar
      // we will only drag the distance they moved their finger
      // otherwise we will move the sidebar to be below the finger.
      if (this.$props.position === 'right') {
        if (this.$props.open && window.innerWidth - this.$data.touchStartX < this.$data.sidebarWidth) {
          if (this.$data.touchCurrentX > this.$data.touchStartX) {
            return this.$data.sidebarWidth + this.$data.touchStartX - this.$data.touchCurrentX
          }
          return this.$data.sidebarWidth
        }
        return Math.min(window.innerWidth - this.$data.touchCurrentX, this.$data.sidebarWidth)
      }

      if (this.$props.position === 'left') {
        if (this.$props.open && this.$data.touchStartX < this.$data.sidebarWidth) {
          if (this.$data.touchCurrentX > this.$data.touchStartX) {
            return this.$data.sidebarWidth
          }
          return this.$data.sidebarWidth - this.$data.touchStartX + this.$data.touchCurrentX
        }
        return Math.min(this.$data.touchCurrentX, this.$data.sidebarWidth)
      }
    },
    // calculate the sidebarHeight based on current touch info
    touchSidebarHeight() {
      // if the sidebar is open and start point of drag is inside the sidebar
      // we will only drag the distance they moved their finger
      // otherwise we will move the sidebar to be below the finger.
      if (this.$props.position === 'bottom') {
        if (this.$props.open && window.innerHeight - this.$data.touchStartY < this.$data.sidebarHeight) {
          if (this.$data.touchCurrentY > this.$data.touchStartY) {
            return this.$data.sidebarHeight + this.$data.touchStartY - this.$data.touchCurrentY
          }
          return this.$data.sidebarHeight
        }
        return Math.min(window.innerHeight - this.$data.touchCurrentY, this.$data.sidebarHeight)
      }
      if (this.$props.position === 'top') {
        const touchStartOffsetY = this.$data.touchStartY - this.$data.sidebarTop
        if (this.$props.open && touchStartOffsetY < this.$data.sidebarHeight) {
          if (this.$data.touchCurrentY > this.$data.touchStartY) {
            return this.$data.sidebarHeight
          }
          return this.$state.sidebarHeight - this.$data.touchStartY + this.$data.touchCurrentY
        }
        return Math.min(this.$data.touchCurrentY - this.$data.dragHandleTop, this.$data.sidebarHeight)
      }
    },
    renderStyle({ sidebarStyle, isTouching, overlayStyle, contentStyle }) {
      if (this.$props.position === 'right' || this.$props.position === 'left') {
        sidebarStyle.transform = `translateX(0%)`
        sidebarStyle.WebkitTransform = `translateX(0%)`
        if (isTouching) {
          const percentage = this.touchSidebarWidth() / this.$data.sidebarWidth
          // slide open to what we dragged
          if (this.$props.position === 'right') {
            sidebarStyle.transform = `translateX(${(1 - percentage) * 100}%)`
            sidebarStyle.WebkitTransform = `translateX(${(1 - percentage) * 100}%)`
          }
          if (this.$props.position === 'left') {
            sidebarStyle.transform = `translateX(-${(1 - percentage) * 100}%)`
            sidebarStyle.WebkitTransform = `translateX(-${(1 - percentage) * 100}%)`
          }
          // fade overlay to match distance of drag
          overlayStyle.opacity = percentage
          overlayStyle.visibility = 'visible'
        }
        if (contentStyle) {
          contentStyle[this.$props.position] = `${this.$data.sidebarWidth}px`
        }
      }
      if (this.$props.position === 'top' || this.$props.position === 'bottom') {
        sidebarStyle.transform = `translateY(0%)`
        sidebarStyle.WebkitTransform = `translateY(0%)`
        if (isTouching) {
          const percentage = this.touchSidebarHeight() / this.$data.sidebarHeight
          // slide open to what we dragged
          if (this.$props.position === 'bottom') {
            sidebarStyle.transform = `translateY(${(1 - percentage) * 100}%)`
            sidebarStyle.WebkitTransform = `translateY(${(1 - percentage) * 100}%)`
          }
          if (this.$props.position === 'top') {
            sidebarStyle.transform = `translateY(-${(1 - percentage) * 100}%)`
            sidebarStyle.WebkitTransform = `translateY(-${(1 - percentage) * 100}%)`
          }
          // fade overlay to match distance of drag
          overlayStyle.opacity = percentage
          overlayStyle.visibility = 'visible'
        }
        if (contentStyle) {
          contentStyle[this.$props.position] = `${this.$data.sidebarHeight}px`
        }
      }
    },
    onOpenChange(open, payload) {
      this.$emit('open-change', open, payload)
    }
  },
  render() {
    const { prefixCls, position, transitions, touch, enableDragHandle, docked, open } = this.$props
    const children = this.$slots.default
    const sidebar = this.$slots.sidebar

    const sidebarStyle = { ...this.$props.sidebarStyle }
    const contentStyle = { ...this.$props.contentStyle }
    const overlayStyle = { ...this.$props.overlayStyle }

    const rootCls = {
      [prefixCls]: true,
      [`${prefixCls}-${position}`]: true
    }
    let rootProps = {}
    const isTouching = this.isTouching()

    if (isTouching) {
      this.renderStyle({ sidebarStyle, isTouching: true, overlayStyle })
    } else if (docked) {
      if (this.$data.sidebarWidth !== 0) {
        rootCls[`${prefixCls}-docked`] = true
        this.renderStyle({ sidebarStyle, contentStyle })
      }
    } else if (open) {
      rootCls[`${prefixCls}-open`] = true
      this.renderStyle({ sidebarStyle })
      overlayStyle.opacity = 1
      overlayStyle.visibility = 'visible'
    }

    if (isTouching || !transitions) {
      sidebarStyle.transitions = 'none'
      sidebarStyle.WebkitTransition = 'none'
      contentStyle.transitions = 'none'
      overlayStyle.transitions = 'none'
    }

    let dragHandle = null

    if (this.$data.touchSupported && touch) {
      if (open) {
        this.notTouch = true
        rootProps = {
          on: {
            touchstart: this.onTouchStart,
            touchmove: this.onTouchMove,
            touchcancel: this.onTouchEnd,
            scroll: this.onScroll
          }
        }
      } else if (enableDragHandle) {
        dragHandle = (
          <div class={`${prefixCls}-draghandle`} style={this.$props.dragHandleStyle}
            {...{
              on: {
                touchstart: this.onTouchStart,
                touchmove: this.onTouchMove,
                touchend: this.onTouchEnd,
                touchcancel: this.onTouchEnd
              }
            }} ref="dragHandle" />
        )
      }
    }
    return (
      <div class={rootCls} {...rootProps}>
        <div class={`${prefixCls}-sidebar`} style={sidebarStyle} ref="sidebar">{sidebar}</div>
        <div class={`${prefixCls}-overlay`} style={overlayStyle} role="presentation" ref="overlay" on-click={this.onOverlayClicked} />
        <div class={`${prefixCls}-content`} style={contentStyle} ref="content">
          {dragHandle}
          {children}
        </div>
      </div>
    )
  }
}
