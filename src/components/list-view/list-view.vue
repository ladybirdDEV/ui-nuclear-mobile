<template>
  <div ref="wrapper" class="um-scroll-wrapper" id="wrapper">
    <div class="um-scroll-content">

      <div ref="listWrapper" class="um-scroll-list-wrapper">
        <slot></slot>
      </div>

      <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
        <div class="um-pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{ pullUpTxt }}</span>
          </div>
          <div class="after-trigger" v-else>
            <Icon type="loading"></Icon>
          </div>
        </div>
      </slot>
    </div>

     <!-- <slot name="pulldown">
      <div class="cube-pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
        <div class="before-trigger" v-if="beforePullDown">
          <span>下拉刷新</span>
        </div>
        <div class="after-trigger" v-else>
          <div v-if="isPullingDown" class="loading">
            <Icon type="loading"></Icon>
          </div>
          <div v-else><span>{{ refreshTxt }}</span></div>
        </div>
      </div>
    </slot> -->
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Icon from '../Icon'

  export default {
    components: {
      Icon
    },
    props: {
      listData: {
        type: Array,
        default () {
          return []
        }
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      },
      pullUpLoad: {
        type: null,
        default: false
      },
      pullDownRefresh: {
        type: null,
        default: false
      },
      probeType: {
        type: Number,
        default: 2
      },
      listenScroll: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: 'vertical'
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    data () {
      return {
        isPullUpLoad: false,
        pullUpDirty: true,
        beforePullDown: true,
        isPullingDown: false,
        wrapperHeight: '',
        pullDownStyle: ''
      }
    },
    watch: {
      listData () {
        setTimeout(() => {
          this.forceUpdate(true)
        }, this.refreshDelay)
      },
      // pullDownRefresh: {
      //   handler (newVal, oldVal) {
      //     if (newVal) {
      //       this.scroll.openPullDown(newVal)
      //       if (!oldVal) {
      //         this._onPullDownRefresh()
      //         this._calculateMinHeight()
      //       }
      //     }
      //     if (!newVal && oldVal) {
      //       this.scroll.closePullDown()
      //       this._offPullDownRefresh()
      //       this._calculateMinHeight()
      //     }
      //   },
      //   deep: true
      // },
      pullUpLoad: {
        handler (newVal, oldVal) {
          if (newVal) {
            this.scroll.openPullUp(newVal)
            if (!oldVal) {
              this._onPullUpLoad()
              this._calculateMinHeight()
            }
          }
          if (!newVal && oldVal) {
            this.scroll.closePullUp()
            this._offPullUpLoad()
            this._calculateMinHeight()
          }
        },
        deep: true
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.initScroll()
      })
    },
    beforeDestroy () {
      this.destroy()
    },
    methods: {
      getRect (el) {
        return {
          top: el.offsetTop,
          left: el.offsetLeft,
          width: el.offsetWidth,
          height: el.offsetHeight
        }
      },
      initScroll () {
        if (!this.$refs.wrapper) {
          return
        }
        this._calculateMinHeight()
        this.scroll = new BScroll(this.$refs.wrapper, {
          observeDOM: true,
          click: true,
          probeType: this.probeType,
          scrollbar: false,
          pullUpLoad: this.pullUpLoad,
          scrollY: this.direction === 'vertical',
          scrollX: this.direction === 'horizontal'
        })
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }
        if (this.pullDownRefresh) {
          this._onPullDownRefresh()
        }
        if (this.pullUpLoad) {
          this._onPullUpLoad()
        }
      },
      forceUpdate (dirty = false) {
        if (this.pullDownRefresh && this.isPullingDown) {
          this.isPullingDown = false
          // this._reboundPullDown().then(() => {
          //   this._afterPullDown(dirty)
          // })
        } else if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.pullUpDirty = dirty
          dirty && this.refresh()
        } else {
          dirty && this.refresh()
        }
      },
      _calculateMinHeight () {
        if (this.$refs.listWrapper) {
          this.wrapperHeight = this.getRect(this.$refs.wrapper).height
          this.$refs.wrapper.style.height = `${this.wrapperHeight}px`
          this.$refs.listWrapper.style.minHeight = `${this.wrapperHeight + 1}px`
        }
      },
      _onPullUpLoad () {
        this.scroll.on('pullingUp', this._pullUpHandle)
      },
      _offPullUpLoad () {
        this.scroll.off('pullingUp', this._pullUpHandle)
      },
      _pullUpHandle () {
        this.isPullUpLoad = true
        this.$emit('onPullingUp')
      },
      refresh () {
        this._calculateMinHeight()
        this.scroll && this.scroll.refresh()
      },
      destroy () {
        this.scroll && this.scroll.destroy()
        this.scroll = null
      },
      scrollToElement () {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    computed: {
      pullUpTxt () {
        const txt = this.pullUpLoad.txt
        const moreTxt = (txt && txt.more) || ''
        const noMoreTxt = (txt && txt.noMore) || ''
        return this.pullUpDirty ? moreTxt : noMoreTxt
      }
    }
  }
</script>

<style>
 .um-scroll-list-wrapper {
   min-height: calc(100% + 1px);
 }
 .um-scroll-wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
 }
 .after-trigger {
   padding: 19px 0;
 }
 .before-trigger {
    padding: 22px 0;
    min-height: 1em;
 }
 .um-pullup-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .um-scroll-content {
    position: relative;
    z-index: 1;
 }
 .um-pulldown-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
 }
 .after-trigger {
   margin-top: 5px
 }
  /* .cube-scroll-item {
    background-color: #fff;
    border-bottom: 1px solid rgb(246, 246, 246);
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding-left: 20px;
  } */
</style>


