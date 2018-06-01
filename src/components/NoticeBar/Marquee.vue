<template>
  <div :class="`${prefixCls}-marquee-wrap`" style="overflow:hidden" role="marquee" ref="container">
    <div :class="`${prefixCls}-marquee`" :style="style" ref="node">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Marquee',
  data () {
    return {
      right: 0,
      marqueeTimer: () => {},
      animatedWidth: 0,
      overflowWidth: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.measureText()
      this.startAnimation()
    })
  },
  updated () {
    this.measureText()
    if (!this.marqueeTimer) {
      this.startAnimation()
    }
  },
  beforeDestory () {
    clearTimeout(this.marqueeTimer)
  },
  computed: {
    marqueeProp () {
      let props = this.marqueeProps
      let defaultProps = { loop: false, leading: 500, trailing: 800, fps: 40 }
      let mergeProps = Object.assign({}, defaultProps, props)
      return mergeProps
    },
    style () {
      let style = this.marqueeProp.style
      let animatedWidth = this.animatedWidth + 'px'
      let defaultStyle = { position: 'relative', whiteSpace: 'nowrap', display: 'inline-block', right: animatedWidth }
      let mergeStyle = Object.assign({}, defaultStyle, style)
      return mergeStyle
    }
  },
  props: {
    prefixCls: {
      type: String
    },
    marqueeProps: {
      type: Object
    }
  },
  methods: {
    startAnimation () {
      if (this.marqueeTimer) {
        clearTimeout(this.marqueeTimer)
      }
      let fps = this.marqueeProp.fps
      const TIMEOUT = 1 / fps * 1000
      const isLeading = this.animatedWidth === 0
      const timeout = isLeading ? this.marqueeProp.leading : TIMEOUT

      const animate = () => {
        const overflowWidth = this.overflowWidth
        let animatedWidth = this.animatedWidth + 1
        const isRoundOver = animatedWidth > overflowWidth

        if (isRoundOver) {
          if (this.marqueeProp.loop) {
            animatedWidth = 0
          } else {
            return
          }
        }

        if (isRoundOver && this.marqueeProp.trailing) {
          this.marqueeTimer = setTimeout(() => {
            this.animatedWidth = animatedWidth
            this.marqueeTimer = setTimeout(animate, TIMEOUT)
          }, this.marqueeProp.trailing)
        } else {
          this.animatedWidth = animatedWidth
          this.marqueeTimer = setTimeout(animate, TIMEOUT)
        }
      }

      if (this.overflowWidth !== 0) {
        this.marqueeTimer = setTimeout(animate, timeout)
      }
    },
    measureText () {
      const container = this.$refs.container
      const node = this.$refs.node
      if (container && node) {
        const containerWidth = container.offsetWidth
        const textWidth = node.offsetWidth
        const overflowWidth = textWidth - containerWidth
        if (overflowWidth !== this.overflowWidth) {
          this.overflowWidth = overflowWidth
        }
      }
    }
  }
}
</script>

