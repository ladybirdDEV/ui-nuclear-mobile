<template>
    <div class="um-checkbox-agree"
         @click="check"
         ref="agree">
         
             <Checkbox :label="label" 
                    :disabled="disabled" 
                    :checked="checked"
                    :defaultChecked="defaultChecked"
                    @onChange="change"
                    :name="name"></Checkbox>
                    <span class="um-checkbox-agree-inner"><slot></slot></span>
    </div>
</template>

<script>
import Checkbox from './checkbox'

export default {
  components: {
    Checkbox
  },
  name: 'Agreeitem',
  props: {
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean
    },
    defaultChecked: {
      type: Boolean
    }
  },
  methods: {
    check () {
      this.$children[0].isChecked = !this.$children[0].isChecked
    },
    change (value) {
      this.$emit('onChange')
    }
  }
}
</script>

<style lang="less">
@checkboxWarpPrefixCls: um-checkbox;
@import '../style/themes/default';


.@{checkboxWarpPrefixCls}-agree {
  position: relative;
  display: flex;
  align-items: stretch;
  margin-left: @h-spacing-lg;
  padding-top: @v-spacing-md;
  padding-bottom: @v-spacing-md;

    &-inner {
      margin-left:  @h-spacing-lg;
      display: inline-block;
      font-size: @font-size-subhead;
      color: @color-text-base;
      line-height: @line-height-paragraph;
      margin-top: 1PX;
    }
  }
</style>


