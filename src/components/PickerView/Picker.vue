<template>
  <div :class="`${colPrefixCls}`" v-finger:touch-start="touchStart" v-finger:touch-move="touchMove" v-finger:touch-end="touchEnd">
    <div :class="`${colPrefixCls}-mask`"></div>
    <div :class="`${colPrefixCls}-indicator`"></div>
    <div :class="`${colPrefixCls}-content`" :style="transStyle" ref="pickerContent">
      <div :class="item.value === valueCopy ? `${colPrefixCls}-item ${colPrefixCls}-item-selected` : `${colPrefixCls}-item`" ref="pickerItem" v-for="item in data" :data-value="item.value">{{item.label}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Picker',
  props: {
    value: {
      default: ''
    },
    data: {
      type: Array
    }
  },
  data () {
    return {
      colPrefixCls: 'um-picker-col',
      valueCopy: this.value,
      originalClientY: 0,
      moveDistance: 0,
      moveOriginal: 0,
      transStyle: ''
    }
  },
  mounted () {
    if (this.valueCopy === '') {
      this.valueCopy = this.data[0].value
    } else {
      let index = 0
      for (let i in this.data) {
        if (this.data[i].value === this.valueCopy) {
          index = i
        }
      }
      this.$nextTick(() => {
        if (index >= 0) {
          this.moveOriginal = 0 - index * this.$refs.pickerItem[0].offsetHeight
          this.transStyle = `transform: translate3d(0, ${this.moveOriginal}px, 0)`
        }
      })
    }
    // console.log(this.valueCopy)
  },
  methods: {
    touchStart (ev) {
      this.originalClientY = ev.touches[0].clientY
    },
    touchMove (ev) {
      this.moveDistance = ev.touches[0].clientY - this.originalClientY
      this.transStyle = `transform: translate3d(0, ${this.moveDistance + this.moveOriginal}px, 0)`
    },
    touchEnd (ev) {
      const vm = this
      vm.moveOriginal = vm.moveDistance + vm.moveOriginal
      let selectedIndex = 0
      if (vm.moveDistance < 0 && Math.round(Math.abs(vm.moveOriginal) / vm.$refs.pickerItem[0].offsetHeight) > vm.data.length - 1) {
        /* swipe up max */
        vm.moveOriginal = 0 - vm.$refs.pickerItem[0].offsetHeight * (vm.data.length - 1)
        selectedIndex = vm.data.length - 1
      } else if (vm.moveDistance > 0 && vm.moveOriginal > 0) {
        /* swipe down max */
        vm.moveOriginal = 0
        selectedIndex = 0
      } else {
        let number = Math.round(vm.moveOriginal / vm.$refs.pickerItem[0].offsetHeight)
        vm.moveOriginal = vm.$refs.pickerItem[0].offsetHeight * number
        selectedIndex = Math.abs(number)
      }
      vm.transStyle = `transform: translate3d(0, ${vm.moveOriginal}px, 0)`
      vm.valueCopy = vm.data[selectedIndex].value
      vm.$emit('change', vm.valueCopy, vm.data)
    }
  }
}
</script>
<style lang="less">
@pickerColPrefixCls: um-picker-col;
@import url(../style/themes/default.less);
@import url(../style/mixins/hairline.less);
@picker-item-height: 34 * @hd;

.@{pickerColPrefixCls} {
  display: block;
  position: relative;
  height: 7 * @picker-item-height;
  overflow: hidden;
  width: 100%;

  &-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    padding: 3 * @picker-item-height 0;
  }

  &-item {
    touch-action: manipulation;
    text-align: center;
    font-size: @font-size-caption;
    height: @picker-item-height;
    line-height: @picker-item-height;
    color: @color-text-base;
    white-space: nowrap;
    text-overflow: ellipsis;

    &-selected {
      font-size: @font-size-heading;
    }
  }

  &-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    z-index: 3;
    background-image:
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)),
      -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)),
      linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-position: top, bottom;
    background-size: 100% 3 * @picker-item-height;
    background-repeat: no-repeat;
  }

  &-indicator {
    box-sizing: border-box;
    width: 100%;
    height: @picker-item-height;
    position: absolute;
    left: 0;
    top: 3 * @picker-item-height;
    z-index: 3;
    .hairline('top');
    .hairline('bottom');
  }
}
</style>
