<template>
  <div class="um-index-list">
    <ListView ref="indexList"
              :probe-type="probeType"
              :data="data"
              :click="true"
              @scroll="scroll">
      <div class="um-index-list-content" ref="content">
        <div class="um-index-list-title" v-if="title" ref="title" @click="titleClick">
          {{title}}
        </div>
        <ul ref="groups">
          <li v-for="(group, index) in data" :key='index' ref="listGroup">
            <h2 class="um-index-list-anchor" :style="anrColor">{{group.name}}</h2>
            <div >
              <List>
                <ListItem :onClick="()=>{}" v-for="(item,index) in group.items" :key='index'>{{item.name}}</ListItem>
              </List>
            </div>
            <!-- <ul>
                <li class="index-list-item" v-for="(item,index) in group.items" :key='index' @click="selectItem(item)">
                  {{item.name}}
                </li>
            </ul> -->
          </li>
        </ul>
      </div>
    </ListView>
    <div class="um-index-list-nav" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <li v-for="(item, index) in shortcutList"
            :key='index'
            :data-index="index"
            class="um-index-shortcut-active">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="um-index-list-fixed" ref="fixed" v-show="fixedTitle">
      {{fixedTitle}}
    </div>
  </div>
</template>

<script>
import List from '../list'
import ListItem from '../list-item'
import ListView from './list-view'

const TITLE_HEIGHT = 50
const SUBTITLE_HEIGHT = 40
const ANCHOR_HEIGHT = window.innerHeight <= 480 ? 17 : 18

export default {
  components: {
    ListView,
    List,
    ListItem,
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => { return [] }
    },
    anchorColor: {
      type: String,
      default: '#f7f7f7'
    }
  },
  data () {
    return {
      currentIndex: 0,
      scrollY: -1,
      diff: -1
    }
  },
  created () {
    this.probeType = 3
    this.listHeight = []
    this.touch = {}
  },
  methods: {
    refresh () {
      this.$refs.indexList.refresh()
    },
    selectItem (item) {
      this.$emit('select', item)
    },
    scroll (pos) {
      this.scrollY = pos.y
    },
    titleClick () {
      this.$emit('title-click', this.title)
    },
    getData (el, name, val) {
      let prefix = 'data-'
      if (val) {
        return el.setAttribute(prefix + name, val)
      }
      return el.getAttribute(prefix + name)
    },
    // Navbar touchstart
    onShortcutTouchStart (e) {
      let anchorIndex = this.getData(e.target, 'index')
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = anchorIndex
      this._scrollTo(anchorIndex)
      console.log('touchstart')
    },
    // Navbar mouve
    onShortcutTouchMove (e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let delta = ((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT) | 0
      let anchorIndex = parseInt(this.touch.anchorIndex) + delta
      this._scrollTo(anchorIndex)
    },
    _calculateHeight () {
      const list = this.$refs.listGroup
      if (!list) {
        return
      }
      this.listHeight = []
      let height = TITLE_HEIGHT
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    _scrollTo (index) {
      if (!index && index !== 0) {
        return
      }
      if (index < 0) {
        index = 0
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      this.$refs.indexList.scrollToElement(this.$refs.listGroup[index], 100)
      this.scrollY = this.$refs.indexList.scroll.y
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    diff (newVal) {
      let fixedTop = newVal > 0 && newVal < SUBTITLE_HEIGHT ? newVal - SUBTITLE_HEIGHT : 0
      if (this.fixedTop === fixedTop) {
        return
      }
      this.fixedTop = fixedTop
      this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
    },
    // 标题吸顶
    scrollY (newY) {
      const listHeight = this.listHeight
      // console.log(listHeight)
      // 当滚动到顶部，newY>0
      if (newY > -TITLE_HEIGHT) {
        this.currentIndex = 0
        return
      }
      // 在中间部分滚动
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i]
        let height2 = listHeight[i + 1]
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i
          this.diff = height2 + newY
          return
        }
      }
      // 当滚动到底部，且-newY大于最后一个元素的上限
      this.currentIndex = listHeight.length - 2
    }
  },
  mounted () {
    setTimeout(() => {
      this._calculateHeight()
    }, 20)
  },
  computed: {
    anrColor () {
      return `background: ${this.anchorColor}`
    },
    fixedTitle () {
      if (this.scrollY > -TITLE_HEIGHT) {
        return ''
      }
      return this.data[this.currentIndex] ? this.data[this.currentIndex].name : ''
    },
    shortcutList () {
      return this.data.map(group => {
        return group.name.substr(0, 1)
      })
    }
  }
}
</script>
