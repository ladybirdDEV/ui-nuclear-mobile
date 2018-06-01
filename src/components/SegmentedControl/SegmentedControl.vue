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
  import WingBlank from '@/components/WingBlank'
  import Feedback from '@/components/Feedback/Feedback.vue'
  import SegControlItem from '@/components/SegmentedControl/SegControlItem.vue'

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
  @import '../style/mixins';
  @import '../style/themes/default.less';

  @segment-prefix-cls: um-segment;

.@{segment-prefix-cls} {
  display: flex;
  border-radius: @radius-md;
  overflow: hidden;
  min-height: @segmented-control-height;
  opacity: 1;

  &&-disabled {
    opacity: 0.5;
  }

  &-item {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: @segmented-control-color;
    font-size: @font-size-base;
    line-height: @line-height-base;
    transition: background .2s;
    position: relative;
    border: @border-width-md solid @segmented-control-color;
    width: 100%;
    box-sizing: border-box;
    border-left-width: 0;

    &-tintcolor {
      border-color: @segmented-control-color;
    }

    &:first-child {
      border-left-width: @border-width-md;
      border-radius: @radius-md 0 0 @radius-md;
    }

    &:last-child {
      border-radius: 0 @radius-md @radius-md 0;
    }

    &-selected {
      background: @segmented-control-color;
      color: @color-text-base-inverse;
    }
  }
}

</style>
