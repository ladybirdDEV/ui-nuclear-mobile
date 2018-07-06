<template>
  <div v-if="animating" :class="wrapCls">
    <Icon type="loading" :size="wrapSize"></Icon>
    <span class="um-activitu-indicator-horizontal-text" v-if="align === 'horizontal'" :style="textStyle">{{ text }}</span>
    <span class="um-activity-indicator-vertical-text" v-else :style="textStyle">{{ text }}</span>
  </div>
</template>
<script>
  import Icon from '../Icon'
  // const prefixCls = 'um-activity-indicator'

  export default {
    components: {
      Icon
    },
    name: 'ActivityIndicator',
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
<style>
  .um-activity-indicator-horizontal {
    display: flex;
    align-items: center
  }       
  .um-activity-indicator-vertical {
    display: flex;
    flex-direction: column
  }
  .um-activitu-indicator-horizontal-text {
    margin-left: 8px;
    font-size: 14px;
    color: #999;
  }
  .um-activitu-indicator-vertical-text {
    font-size: 16px;
    color: #999;
  }
</style>
