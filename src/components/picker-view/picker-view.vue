<template>
  <div>
    <MobileMultiPicker
      v-if="!cascade"
      v-model="valueCopy"
      :defaultSelectedValue="value"
      :className="className"
      :prefixCls="prefixCls"
      :onValueChange="onChange"
      :onScrollChange="onScrollChange">
      <template v-if="!col">
        <MobilePicker
          v-for="(item, index) in data"
          :key="index" v-model="value[index]"
          :disabled="disabled"
          :indicatorStyle="indicatorStyle">
            <MobilePickerItem v-for="innerItem in item" :value="innerItem.value" :key="innerItem.value" :style="pickerItemStyle">{{innerItem.label}}</MobilePickerItem>
        </MobilePicker>
      </template>
      <template v-else>
        <MobilePicker
          v-for="(i, index) in col"
          :key="index" v-model="valueCopy[index]"
          :disabled="disabled"
          :indicatorStyle="indicatorStyle">
            <MobilePickerItem v-for="innerItem in data[index]" :key="innerItem.value" v-if="data[index].length > 0" :value="innerItem.value" :style="pickerItemStyle">{{innerItem.label}}</MobilePickerItem>
        </MobilePicker>
      </template>
    </MobileMultiPicker>

    <MobileCascader
      v-else
      v-model="valueCopy"
      :defaultValue="valueCopy"
      :className="className"
      :prefixCls="prefixCls"
      :col="col"
      :onChange="onChange"
      :onScrollChange="onScrollChange"
      :data="data"
      :indicatorStyle="indicatorStyle"
      :pickerItemStyle="pickerItemStyle"
      :disabled="disabled"></MobileCascader>
  </div>
</template>
<script>
import { MobilePicker, MobilePickerItem, MobileMultiPicker } from '../mobile-picker'
import MobileCascader from '../mobile-cascader'
export default {
  name: 'PickerView',
  components: {
    MobilePicker,
    MobilePickerItem,
    MobileMultiPicker,
    MobileCascader
  },
  props: {
    col: {
      type: Number
    },
    data: {
      require: true,
      type: Array
    },
    cascade: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    prefixCls: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indicatorStyle: Object,
    pickerItemStyle: Object
  },
  data () {
    return {
      valueCopy: this.value,
      className: 'um-picker-view'
    }
  },
  created () {
    if (!this.cascade && this.valueCopy.length === 0) {
      this.valueCopy = new Array(this.col)
      for (let i in this.data) {
        this.valueCopy[i] = this.data[i][0].value
      }
    }
  },
  methods: {
    onChange (value) {
      this.$emit('change', value)
    },
    onScrollChange (value, index) {
      this.$emit('scroll-change', value, index)
    }
  }
}
</script>
<style lang="less">
.um-picker-view .mobile-picker-item.mobile-picker-item-selected {
  color: #000;
  font-size: 17px;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  html:not([data-scale]) .um-picker-view .mobile-picker-indicator {
    border-bottom: none;
    border-top: none;
  }
}
</style>
