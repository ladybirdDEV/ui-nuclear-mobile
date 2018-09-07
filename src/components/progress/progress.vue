<template>
  <div
    :class="wrapCls"
    role="progressbar"
    :aria-valuenow="percent"
    :aria-valuemin="0"
    :aria-valuemax="100"
  >
    <div
      ref="barRef"
      :class="`${prefixCls}-bar`"
      :style="percentStyle"
    />
  </div>
</template>
<script>
const prefixCls = 'um-progress'
export default {
  name: 'Progress',
  data () {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {
    wrapCls () {
      return {
        [`${prefixCls}-outer`]: true,
        [`${prefixCls}-fixed-outer`]: this.position === 'fixed',
        [`${prefixCls}-hide-outer`]: !this.unfilled
      }
    },
    percentStyle () {
      return {
        width: !this.appearTransition ? `${this.percent}%` : 0,
        height: 0
      }
    }
  },
  mounted () {
    if (this.appearTransition) {
      setTimeout(() => {
        if (this.$refs.barRef) {
          this.$refs.barRef.style.width = `${this.percent}%`
        }
      }, 10)
    }
  },
  props: {
    percent: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 5
    },
    unfilled: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'fixed'
    },
    appearTransition: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@import './style/index.less';
</style>
