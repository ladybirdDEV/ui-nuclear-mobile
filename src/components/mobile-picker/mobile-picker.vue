<template>
  <div :class="prefixCls" ref="rootRef">
    <div :class="`${prefixCls}-mask`" ref="maskRef"></div>
    <div :class="`${prefixCls}-indicator ${indicatorClassName || ''}`" ref="indicatorRef" :style="indicatorStyle"></div>
    <div :class="`${prefixCls}-content`" ref="contentRef">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import PickerMixin from './mobile-picker-mixin'

export default {
  mixins: [PickerMixin],
  name: 'm-picker',
  props: {
    className: String,
    prefixCls: {
      type: String,
      default: 'mobile-picker'
    },
    defaultSelectedValue: [String, Number],
    selectedValue: [String, Number],
    onValueChange: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    indicatorClassName: String,
    indicatorStyle: {
      type: Object,
      default: () => {}
    },
    colIndex: {
      type: Number,
      default: 0
    },
    onScrollChange: Function
  },
  model: {
    prop: 'selectedValue',
    event: 'change'
  },
  data () {
    return {
      itemHeight: 0,
      selectedValueState: null,
      scrollDisabled: false,
      isMoving: false,
      scrollY: -1,
      lastY: 0,
      startY: 0,
      scrollValue: null,
      col: this.colIndex,
      currScrollState: null
    }
  },
  watch: {
    disabled (val) {
      this.scrollHanders().setDisabled(val)
      // console.log(this.scrollDisabled)
    },
    selectedValue (val) {
      this.selectedValueState = val
    },
    selectedValueState () {
      this.selfRender()
    }
  },
  methods: {
    setTransform (nodeStyle, value) {
      nodeStyle.transform = value
      nodeStyle.webkitTransform = value
    },
    setTransition (nodeStyle, value) {
      nodeStyle.transition = value
      nodeStyle.webkitTransition = value
    },
    scrollHanders () {
      // 滚动到对应位置
      const scrollTo = (x, y, time = 0.3) => {
        // console.log(y)
        if (this.scrollY !== y) {
          this.scrollY = y || 0
          if (time && !this.noAnimate) {
            this.setTransition(this.$refs.contentRef.style, `cubic-bezier(0,0,0.2,1.15) ${time}s`)
          }
          this.setTransform(this.$refs.contentRef.style, `translate3d(0,${-y}px,0)`)
          setTimeout(() => {
            // this.scrollingComplete()
            if (this.$refs.contentRef) {
              this.setTransition(this.$refs.contentRef.style, '')
            }
          }, time * 1000)
        }
      }
      const Velocity = (minInterval = 30, maxInterval = 100) => {
        let _time = 0
        let _y = 0
        let _velocity = 0
        const recorder = {
          record: (y) => {
            const now = +new Date()
            _velocity = (y - _y) / (now - _time)
            if (now - _time >= minInterval) {
              _velocity = now - _time <= maxInterval ? _velocity : 0
              _y = y
              _time = now
            }
          },
          getVelocity: (y) => {
            if (y !== _y) {
              recorder.record(y)
            }
            return _velocity
          }
        }
        return recorder
      }
      // 选择完成事件
      const onFinish = () => {
        this.isMoving = false
        let targetY = this.scrollY
        const height = (this.$children.length - 1) * this.itemHeight
        let time = 0.3
        const velocity = Velocity().getVelocity(targetY) * 4
        if (velocity) {
          targetY = velocity * 40 + targetY
          time = Math.abs(velocity) * 0.1
        }
        if (targetY % this.itemHeight !== 0) {
          targetY = Math.round(targetY / this.itemHeight) * this.itemHeight
        }
        if (targetY < 0) {
          targetY = 0
        } else if (targetY > height) {
          targetY = height
        }
        scrollTo(0, targetY, time < 0.3 ? 0.3 : time)
        this.scrollingComplete()
        this.scrollChange()
        // console.log(this.selectedValueState)
      }
      // 选择开始触发事件
      const onStart = (y) => {
        if (this.scrollDisabled) {
          return
        }
        this.isMoving = true
        this.startY = y
        this.lastY = this.scrollY
      }
      // 移动过程触发事件
      const onMove = (y) => {
        if (this.scrollDisabled || !this.isMoving) {
          return
        }
        this.scrollY = this.startY - y + this.lastY
        Velocity().record(this.scrollY)
        this.scrollChange()
        this.setTransform(this.$refs.contentRef.style, `translate3d(0,${-this.scrollY}px,0)`)
        // console.log(this.$refs.contentRef)
      }
      return {
        touchstart: (evt) => {
          onStart(evt.touches[0].screenY)
        },
        mousedown: (evt) => onStart(evt.screenY),
        touchmove: (evt) => {
          evt.stopPropagation()
          evt.preventDefault()
          onMove(evt.touches[0].screenY)
        },
        mousemove: (evt) => {
          // evt.preventDefault()
          onMove(evt.screenY)
        },
        touchend: () => onFinish(),
        touchcancel: () => onFinish(),
        mouseup: () => onFinish(),
        getValue: () => {
          return this.scrollY
        },
        scrollTo,
        setDisabled: (disabled) => {
          this.scrollDisabled = disabled
        }
      }
    },
    scrollTo (top) {
      this.scrollHanders().scrollTo(0, top)
    },
    // 设置addEventListener passive属性的值
    passiveSupported () {
      let passiveSupported = false
      try {
        const options = Object.defineProperty({}, 'passive', {
          get: () => {
            passiveSupported = true
          }
        })
        window.addEventListener('test', options)
      } catch (err) { }
      return passiveSupported
    },
    scrollToWithoutAnimation (top) {
      this.scrollHanders().scrollTo(0, top, 0)
    },
    valueChange (value) {
      if (this.onValueChange) {
        this.onValueChange(value)
      } else if (this.$parent && this.$parent.valueChange) {
        this.$parent.valueChange(this.col, value)
      }
    },
    fireValueChange (selectedValue) {
      if (selectedValue !== this.selectedValueState) {
        this.selectedValueState = selectedValue
        this.valueChange(selectedValue)
      }
    },
    scrollChange () {
      const top = this.scrollHanders().getValue()
      if (top > -1) {
        const children = this.$children
        const index = this.coumputeChildIndex(top, this.itemHeight, children.length)
        if (index) {
          const child = children[index]
          if (child) {
            if (this.currScrollState === child.value) {
              return
            }
            if (this.onScrollChange) {
              // console.log('test', this.currScrollState, child.value)
              this.onScrollChange(this.currScrollState = child.value)
            } else if (this.$parent && this.$parent.scrollChange) {
              this.currScrollState = child.value
              this.$parent.scrollChange(this.col, child.value)
            }
          } else {
            console.warn('child not found', children, index)
          }
        }
      }
    },
    scrollingComplete () {
      const top = this.scrollHanders().getValue()
      if (top > -1) {
        this.doScrollingComplete(top, this.itemHeight, this.fireValueChange)
      }
    },
    getValue () {
      if (this.select) {
        return this.selectedValue
      }
      const children = this.$children
      return children && children[0] && children[0].value
    },
    selfRender () {
      this.select(this.selectedValueState, this.itemHeight, this.scrollTo)
    }
  },
  created () {
    if (this.selectedValue) {
      this.selectedValueState = this.selectedValue
    } else if (this.defaultSelectedValue) {
      this.selectedValueState = this.defaultSelectedValue
    } else {
      // const children = this.$children
      // this.selectedValueState = children && children[0] && children[0].value
      this.selectedValueState = this.getValue()
    }
  },
  mounted () {
    this.itemHeight = this.$refs.indicatorRef.getBoundingClientRect().height
    // console.log(this.itemHeight)
    const rootHeight = this.$refs.rootRef.getBoundingClientRect().height
    const itemHeight = this.itemHeight
    let num = Math.floor(rootHeight / itemHeight)
    if (num % 2 === 0) {
      num--
    }
    num--
    num /= 2
    this.$refs.contentRef.style.padding = `${itemHeight * num}px 0`
    this.$refs.indicatorRef.style.top = `${itemHeight * num}px`
    this.$refs.maskRef.style.backgroundSize = `100% ${itemHeight * num}px`
    this.scrollHanders().setDisabled(this.disabled)
    this.selfRender()

    const passiveSupported = this.passiveSupported()
    const willPreventDefault = passiveSupported ? { passive: false } : false
    const willNotPreventDefault = passiveSupported ? { passive: true } : false
    const events = this.scrollHanders()
    for (let key in events) {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        const pd = key.indexOf('move') > -1 ? willPreventDefault : willNotPreventDefault
        this.$el.addEventListener(`${key}`, this.scrollHanders()[key], pd)
      }
    }
  },
  updated () {
    this.select(this.selectedValueState, this.itemHeight, this.scrollToWithoutAnimation)
  },
  destroyed () {
    const events = this.scrollHanders()
    for (let key in events) {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        this.$el.removeEventListener(`${key}`, this.scrollHanders()[key])
      }
    }
  }
}
</script>

<style>
@import 'style/index.less';
</style>


