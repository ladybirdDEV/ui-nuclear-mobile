<template>
  <div>
    <div @click="show" ref="target"><slot></slot></div>
    <div v-show="isVisible" :style="contextStyle" v-transfer-dom style="position: absolute; top: 0; left: 0; width: 100%;">
      <div :class="prefixCls+'-mask'" v-if="mask" @click="close"></div>
      <div :class="[prefixCls, prefixCls+'-placement-'+placement]" id="um-popover" @click="stopClose($event)" :style="overlayStyle" ref="popover">
        <div :class="prefixCls+'-content'" ref="popoverContent">
          <div :class="prefixCls+'-arrow'" ref="arrow"></div>
          <div :class="prefixCls+'-inner'">
            <div :class="prefixCls+'-inner-wrapper'">
              <slot name="overlay" v-bind:select="select"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { oneOf } from '../../utils'
  import Feedback from '@/components/Feedback/Feedback'
  import TransferDom from '../../directives/transfer-dom'
  const prefixCls = 'um-popover'

  export default {
    name: 'Popover',
    mixins: [Feedback],
    directives: {
      TransferDom
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      onVisibleChange: Function,
      placement: {
        validator (value) {
          return oneOf(value, ['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
        },
        default: 'bottomRight'
      },
      mask: {
        type: Boolean,
        default: false
      },
      onSelect: Function,
      triggerStyle: Object,
      overlayStyle: Object,
      contextStyle: Object,
      name: String,
      openMenu: Function,
      closeMenu: Function,
      toggleMenu: Function
    },
    data () {
      return {
        prefixCls: prefixCls,
        isVisible: this.visible
      }
    },
    watch: {
      visible (val, oldVal) {
        this.isVisible = val
        if (typeof this.onVisibleChange === 'function') {
          this.onVisibleChange()
        }
      },
      isVisible (val) {
        if (val) {
          this.computePosition()
        }
      }
    },
    methods: {
      show (ev) {
        if (!this.isVisible) {
          this.isVisible = true
        }
      },
      close () {
        if (this.isVisible) {
          this.isVisible = false
          this.$emit('close', this.isVisible)
        }
      },
      stopClose (e) {
        e.stopPropagation()
      },
      select (index) {
        this.$emit('select', index)
        this.close()
      },
      computePosition () {
        this.$nextTick(() => {
          const top = this.$refs.target.offsetTop
          const left = this.$refs.target.offsetLeft
          const targetHeight = this.$refs.target.clientHeight
          const targetWidth = this.$refs.target.clientWidth
          const popover = this.$refs.popover
          const popoverContent = this.$refs.popoverContent
          let topOfpositionTop = `${top - popoverContent.clientHeight - this.$refs.arrow.clientHeight}px`
          let topOfpositionBottom = `${top + targetHeight + this.$refs.arrow.clientHeight}px`
          switch (this.placement) {
            case 'top':
              popover.style.top = topOfpositionTop
              popover.style.left = `${left + targetWidth / 2 - popoverContent.clientWidth / 2}px`
              break
            case 'right':
              popover.style.top = `${top + targetHeight / 2 - popoverContent.clientHeight / 2}px`
              popover.style.left = `${left + targetWidth + this.$refs.arrow.clientWidth}px`
              break
            case 'bottom':
              popover.style.top = topOfpositionBottom
              popover.style.left = `${left + targetWidth / 2 - popoverContent.clientWidth / 2}px`
              break
            case 'left':
              popover.style.top = `${top + targetHeight / 2 - popoverContent.clientHeight / 2}px`
              popover.style.left = `${left - popoverContent.clientWidth - this.$refs.arrow.clientWidth}px`
              break
            case 'topLeft':
              popover.style.top = topOfpositionTop
              popover.style.left = `${left}px`
              break
            case 'topRight':
              popover.style.top = topOfpositionTop
              popover.style.left = `${left - popoverContent.clientWidth + targetWidth}px`
              break
            case 'bottomLeft':
              popover.style.top = topOfpositionBottom
              popover.style.left = `${left}px`
              break
            case 'bottomRight':
              popover.style.top = topOfpositionBottom
              popover.style.left = `${left - popoverContent.clientWidth + targetWidth}px`
              break
            default:
              console.warning('props "placement" should be one of these values - ["left", "right", "top", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight"]')
              break
          }
        })
      }
    },
    created () {
      this.computePosition()
      if (!this.mask) {
        document.addEventListener('click', this.close)
      }
    },
    destroyed () {
      document.removeEventListener('click', this.close)
    }
  }
</script>

<style lang="less">
@import './style/index.less';
</style>
