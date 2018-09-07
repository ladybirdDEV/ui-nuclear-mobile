<template>
  <div :class="wrapCls" :style="customStyle">
    <SegControlItem v-for="(value, index) in values"
                    :key="index"
                    :value=value
                    :class="itemCls(index)"
                    :style="itemStyle(index)"
                    @click.native="handleClick(value, index)"
                    :onChange="onChange"
                    :tintColor="tintColor">
    </SegControlItem>
  </div>
</template>

<script>
  import WingBlank from '../wing-blank'
  import Feedback from '../feedback/feedback.vue'
  import SegControlItem from '../segmented-control/seg-control-item.vue'

  const prefixCls = 'um-segment'

  export default {
    name: 'SegmentedControl',
    components: {
      WingBlank,
      Feedback,
      SegControlItem
    },
    props: {
      selectedIndex: {
        type: Number,
        default: 0
      },
      values: {
        type: Array
      },
      disabled: {
        type: Boolean
      },
      tintColor: {
        type: String,
        default: '#108ee9'
      },
      customStyle: {
        type: Object
      },
      onChange: {
        type: Function
      }
    },
    data () {
      return {
        activeInnerStyle: this.tintColor ? {backgroundColor: this.tintColor} : {},
        curselectedIndex: this.selectedIndex
      }
    },
    methods: {
      handleClick (value, index) {
        if (!this.disabled && this.curselectedIndex !== index) {
          this.curselectedIndex = index
        }
        if (this.onChange) {
          this.onChange(value, index)
        }
      },
      itemCls (index) {
        return [
          `${prefixCls}-item`,
          {
            [`${prefixCls}-item-selected`]: this.curselectedIndex === index
          }
        ]
      },
      itemStyle (index) {
        return {
          color: this.curselectedIndex === index ? '#fff' : this.tintColor,
          backgroundColor: this.curselectedIndex === index ? this.tintColor : 'transparent',
          borderColor: this.tintColor
        }
      }
    },
    computed: {
      wrapCls () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-disabled`]: this.disabled
          }
        ]
      }
    }
  }
</script>

<style lang="less">
@import url('style/index.less');
</style>
