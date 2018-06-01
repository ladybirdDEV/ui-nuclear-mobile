<template>
  <MobileMultiPicker
        :style="multiStyle"
        :prefixCls="prefixCls"
        :className="className"
        :selectedValue="curValue"
        :defaultSelectedValue="defaultValue || value"
        :onValueChange="onValueChange"
        :onScrollChange="onScrollChange"
        ref="multiPicker"
      >
        <MobilePicker
          :prefixCls="pickerPrefixCls"
          style="flex: 1;"
          :disabled="disabled"
          :indicatorStyle="indicatorStyle"
          v-for="(item, index) in curData"
          :key="index"
          :colIndex="index"
        >
          <MobilePickerItem :style="pickerItemStyle" :value="item.value" v-for="item in item" :key="item.value">{{item.label}}</MobilePickerItem>
        </MobilePicker>
      </MobileMultiPicker>
</template>

<script>
import {MobilePicker, MobilePickerItem, MobileMultiPicker} from '../MobilePicker'
import arrayTreeFilter from 'array-tree-filter'

export default {
  components: {
    MobilePicker,
    MobilePickerItem,
    MobileMultiPicker
  },
  props: {
    className: {
      type: String,
      default: ''
    },
    prefixCls: {
      type: String,
      default: 'mobile-cascader'
    },
    pickerPrefixCls: {
      type: String,
      default: 'mobile-picker'
    },
    pickerItemStyle: Object,
    indicatorStyle: Object,
    multiStyle: Object,
    col: {
      type: Number,
      default: 3
    },
    data: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    onChange: Function,
    onScrollChange: Function
  },
  data () {
    return {
      allData: this.data || [],
      curValue: [],
      curData: []
    }
  },
  watch: {
    value (val) {
      this.curValue = val
      this.curData = this.getCols()
    }
  },
  methods: {
    getUniqueArrIndex (arr1, arr2) {
      let index = 0
      arr1.some((key, i) => {
        index = i
        return arr2[i] !== key
      })
      return index
    },
    onValueChange (value) {
      const index = this.getUniqueArrIndex(this.curValue, value)
      const children = arrayTreeFilter(
        this.allData, (c, level) => c.value === value[level]
      )
      let data = children[index]
      let i
      for (i = index + 1; data && data.children && data.children.length && i < this.col; i++) {
        data = data.children[0]
        value[i] = data.value
      }
      value.length = i
      this.curValue = value
      this.curData = this.getCols()
      for (let i = this.curData.length; i < this.col; i++) {
        if (this.curData[i].children) {
          this.curData.push(this.curData[i].children)
        }
      }

      if (this.onChange) {
        this.onChange(this.curValue)
      }
      this.$refs.multiPicker.curSelectedValue = this.curValue
      this.$refs.multiPicker.cloneElement()
      this.$emit('input', this.curValue)
    },
    getValue (d, val) {
      let data = d || []
      let value = val || this.value || this.defaultValue || []
      if (!value || !value.length) {
        for (let i = 0; i < this.col; i++) {
          if (data && data.length) {
            value[i] = data[0].value
            data = data[0].children
          }
        }
      }
      return value
    },
    getCols () {
      const data = this.allData
      const value = this.curValue
      const childrenTree = arrayTreeFilter(
        data, (item, level) => item.value === value[level]
      ).map(child => child.children)
      const needPad = this.col - childrenTree.length
      if (needPad > 0) {
        for (let i = 0; i < needPad; i++) {
          childrenTree.push([])
        }
      }
      childrenTree.length = this.col - 1
      childrenTree.unshift(this.allData)
      return childrenTree
    }
  },
  created () {
    this.curValue = this.getValue(this.data, this.defaultValue || this.value)
    this.curData = this.getCols()
  }
}
</script>

<style lang="less">
@import './style/index.less';
</style>


