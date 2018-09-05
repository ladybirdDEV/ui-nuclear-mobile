<template>
  <div v-if="animating" :class="wrapCls">
    <Icon type="loading" :size="wrapSize"></Icon>
    <span class="um-activitu-indicator-horizontal-text" v-if="align === 'horizontal'" :style="textStyle">{{ text }}</span>
    <span class="um-activity-indicator-vertical-text" v-else :style="textStyle">{{ text }}</span>
  </div>
</template>
<script>
  import Icon from '../icon'
  // const prefixCls = 'um-activity-indicator'

  export default {
    components: {
      Icon
    },
    name: 'activity-indicator',
    props: {
      animating: {
        type: Boolean,
        default: true
      },
      text: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'small'
      },
      align: {
        type: String,
        default: 'horizontal'
      },
      textStyle: {
        type: String
      }
    },
    computed: {
      wrapCls () {
        return {
          'um-activity-indicator-horizontal': this.align === 'horizontal',
          'um-activity-indicator-vertical': this.align === 'vertical'
        }
      },
      wrapSize () {
        if (this.size === 'small') {
          return 'md'
        } else if (this.size === 'large') {
          return 'lg'
        }
      }
    }
  }
</script>
<style lang="less">
@import url('style/index.less');
</style>
