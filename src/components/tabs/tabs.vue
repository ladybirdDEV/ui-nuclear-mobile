<template>
  <div :class="wrapCls">
    <div v-if="!beforeAfter" :class="[`${prefixCls}-content-wrap`,animated && !offsetX ? `${prefixCls}-content-wrap-animated` : '']" :style="contentWrapStyles" ref="content" v-touch:start="touchStart" v-touch:moving="touchMove" v-touch:end="touchEnd">
      <render v-if="renderPane" :render="renderPane"></render>
    </div>
    <div :class="`${prefixCls}-tab-bar-wrap`">
      <render :render="renderTabBar" v-if="renderTabBar"></render>
      <template v-else>
      <div :class="barCls" style="background-color: #fff">
        <div :class="`${prefixCls}-default-bar-prevpage`" v-if="showPrev"></div>
        <div :class="`${prefixCls}-default-bar-content`" :style="barContentStyles">
          <div :class="[`${prefixCls}-default-bar-tab`,page === index ? `${prefixCls}-default-bar-tab-active` : '']" v-for="(item, index) in tabs" :key="index" :style="tabBarStyles" @click="onClick(index)">
            <render :render="item.render" v-if="item.render"></render>
            <template v-else>{{ item.title }}</template>
          </div>
          <div :class="`${prefixCls}-default-bar-underline`" :style="underlineStyles"></div>
        </div>
        <div :class="`${prefixCls}-default-bar-nextpage`" v-if="showNext"></div>
      </div>
      </template>
    </div>
    <div v-if="beforeAfter" :class="[`${prefixCls}-content-wrap`, animated && !offsetX ? `${prefixCls}-content-wrap-animated` : '']" :style="contentWrapStyles" ref="content" v-touch:start="touchStart" v-touch:moving="touchMove" v-touch:end="touchEnd">
      <render v-if="renderPane" :render="renderPane"></render>
    </div>
  </div>
</template>
<script>
import Render from '../base/render'
import { oneOf } from '../../utils'
const prefixCls = 'um-tabs'
export default {
  name: 'Tabs',
  components: {
    Render
  },
  props: {
    tabs: {
      type: Array
    },
    tabBarPosition: {
      validator (value) {
        return oneOf(value, ['top', 'bottom', 'left', 'right'])
      },
      default: 'top'
    },
    tabDirection: {
      validator (value) {
        return oneOf(value, ['horizontal', 'vertical'])
      },
      default: 'horizontal'
    },
    tabHeight: {
      type: String
    },
    renderTabBar: {
      type: Function
    },
    page: {
      type: Number,
      default: 0
    },
    animated: {
      type: Boolean,
      default: true
    },
    distanceToChangeTab: {
      type: Number,
      default: 0.3
    },
    swipeable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      prefixCls: prefixCls,
      actives: [],
      originX: 0,
      offsetX: false,
      tabBarOffset: 0,
      paneWidth: false
    }
  },
  mounted () {
    this.paneWidth = this.$refs.content.offsetWidth
  },
  computed: {
    showPrev () {
      if (this.tabs.length > 5 && this.page > 2) {
        return true
      } else {
        return false
      }
    },
    showNext () {
      if (this.tabs.length > 5 && this.page < (this.tabs.length - 3)) {
        return true
      } else {
        return false
      }
    },
    beforeAfter () {
      if (this.tabBarPosition === 'top' || this.tabBarPosition === 'left') {
        return true
      } else if (this.tabBarPosition === 'bottom' || this.tabBarPosition === 'right') {
        return false
      }
    },
    tabPaneOffset () {
      if (this.offsetX && this.animated) {
        if (this.page === 0 && this.offsetX > 0) {
          return 0
        } else if (this.page === this.tabs.length - 1 && this.offsetX < 0) {
          return `${0 - this.page * this.paneWidth}px`
        } else {
          return `${0 - this.page * this.paneWidth + this.offsetX}px`
        }
      } else {
        return `${0 - 100 * this.page}%`
      }
    },
    tabWidth () {
      if (this.tabs.length < 5) {
        return 1 / this.tabs.length * 100
      } else {
        return 1 / 5 * 100
      }
    },
    wrapCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-horizontal`]: this.tabDirection === 'horizontal',
        [`${prefixCls}-vertical`]: this.tabDirection === 'vertical',
        [`${prefixCls}-top`]: this.tabBarPosition === 'top',
        [`${prefixCls}-right`]: this.tabBarPosition === 'right',
        [`${prefixCls}-bottom`]: this.tabBarPosition === 'bottom',
        [`${prefixCls}-left`]: this.tabBarPosition === 'left'
      }
    },
    barCls () {
      return {
        [`${prefixCls}-default-bar`]: true,
        [`${prefixCls}-default-bar-animated`]: this.animated,
        [`${prefixCls}-default-bar-top`]: this.tabBarPosition === 'top',
        [`${prefixCls}-default-bar-right`]: this.tabBarPosition === 'right',
        [`${prefixCls}-default-bar-bottom`]: this.tabBarPosition === 'bottom',
        [`${prefixCls}-default-bar-left`]: this.tabBarPosition === 'left'
      }
    },
    barContentStyles () {
      if (this.tabDirection === 'horizontal') {
        return `transform: translate3d(-${this.tabBarOffset}%, 0px, 1px)`
      } else if (this.tabDirection === 'vertical') {
        return `transform: translate3d(0px, -${this.tabBarOffset}%, 1px)`
      }
    },
    contentWrapStyles () {
      if (this.animated) {
        if (this.tabDirection === 'horizontal') {
          return `transform: translate3d(${this.tabPaneOffset}, 0px, 1px);touch-action:pan-x pan-y`
        } else if (this.tabDirection === 'vertical') {
          return `transform: translate3d(0px, ${this.tabPaneOffset}, 1px)`
        }
      } else {
        if (this.tabDirection === 'horizontal') {
          return `position:relative;left: ${this.tabPaneOffset}`
        } else if (this.tabDirection === 'vertical') {
          return `position:relative;top:${this.tabPaneOffset}`
        }
      }
    },
    tabBarStyles () {
      if (this.tabDirection === 'horizontal') {
        return `width:${this.tabWidth}%`
      } else if (this.tabDirection === 'vertical') {
        return this.tabHeight ? `height:${this.tabHeight}px` : `height:${this.tabWidth}%`
      }
    },
    underlineStyles () {
      if (this.tabDirection === 'horizontal') {
        return `width:${this.tabWidth}%;left:${this.tabWidth * this.page}%`
      } else if (this.tabDirection === 'vertical') {
        return this.tabHeight ? `height: ${this.tabHeight}px;top:${this.tabHeight * this.page}px` : `height:${this.tabWidth}%;top:${this.tabWidth * this.page}%`
      }
    }
  },
  created () {
    const children = this.getChildren()
    if (children) {
      this.actives.length = children.length
    }
    this.actives.fill(false)
    this.actives[0] = true
  },
  methods: {
    touchStart (evt) {
      this.originX = evt.touches[0].clientX
    },
    touchMove (evt) {
      if (this.tabDirection === 'horizontal' && this.swipeable) {
        let posX = evt.touches[0].clientX
        this.offsetX = posX - this.originX
      } else {
        this.offsetX = false
      }
    },
    touchEnd (evt) {
      if (this.swipeable) {
        let next = this.page === this.tabs.length - 1 ? this.tabs.length - 1 : this.page + 1
        let prev = this.page === 0 ? 0 : this.page - 1
        if (this.offsetX < 0 && Math.abs(this.offsetX) > this.paneWidth * this.distanceToChangeTab) {
          this.gotoPage(next)
        } else if (this.offsetX > 0 && Math.abs(this.offsetX) > this.paneWidth * this.distanceToChangeTab) {
          this.gotoPage(prev)
        } else {
          this.gotoPage(this.page)
        }
      }
    },
    gotoPage (index) {
      if (this.page !== index) {
        this.$emit('onChange', this.tabs[index], index)
      }
      this.offsetX = false
      this.page = index
      let tmp = []
      tmp.length = this.actives.length
      tmp.fill(false)
      tmp[index] = true
      this.actives = tmp
      if (this.tabs.length > 5) { // 5 tabs in per page
        if (index < (this.tabs.length - 2) && index > 2) {
          this.tabBarOffset = (index - 2) * this.tabWidth
        } else if (index < this.tabs.length && index > (this.tabs.length - 3)) {
          this.tabBarOffset = (this.tabs.length - 5) * this.tabWidth
        } else if (index < 3) {
          this.tabBarOffset = 0
        }
      }
    },
    onClick (index) {
      this.gotoPage(index)
      this.$emit('onTabClick', this.tabs[index], index)
    },
    getChildren () {
      if (this.$slots.default) {
        return this.$slots.default.filter(vnode => vnode.tag)
      } else {
        return false
      }
    },
    renderPane () {
      const children = this.getChildren()
      if (children) {
        const child = children.map((node, index) => {
          let contentWrapCls = {
            [`${prefixCls}-pane-wrap`]: true,
            [`${prefixCls}-pane-wrap-inactive`]: !this.actives[index],
            [`${prefixCls}-pane-wrap-active`]: this.actives[index]
          }
          return <div class={contentWrapCls}>{node}</div>
        }
        )
        return (
          child
        )
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="less">
@import './style/index';
</style>
