<template>
  <div>
    <MobilePopupCascader
      v-model="visible"
      :prefixCls="popupPrefixCls"
      :transitionName="transitionName"
      :maskTransitionName="maskTransitionName"
      :dismissText="dismissText"
      :okText="okText"
      :title="title"
      :onDismiss="dismiss"
      :onOk="ok"
      :onVisibleChange="visibleChange">
      <MobileCascader
        v-if="cascade"
        :data="data"
        v-model="curValue"
        :prefixCls="prefixCls"
        :pickerPrefixCls="pickerPrefixCls"
        :defaultValue="value"
        :indicatorStyle="indicatorStyle"
        :pickerItemStyle="itemStyle"
        :disabled="disabled"
        :col="cols"
        :onChange="pickerChange"
        :onScrollChange="setScrollValue"></MobileCascader>
      <MobileMultiPicker
        v-else
        :prefixCls="prefixCls"
        v-model="curValue"
        :defaultSelectedValue="value"
        :onScrollChange="setScrollValue"
        :onValueChange="onChange">
        <MobilePicker
          :prefixCls="pickerPrefixCls"
          :indicatorStyle="indicatorStyle"
          :disabled="disabled"
          v-for="(item, index) in allDatas"
          :key="index">
          <MobilePickerItem
            :style="itemStyle"
            v-for="(item, index) in item"
            :key="index"
            :value="item.value"
            >{{item.label}}</MobilePickerItem>
        </MobilePicker>
        </MobileMultiPicker>
    </MobilePopupCascader>
    <slot :extra="extra" name="list-item" :onClick="() => {visible = !visible}"></slot>
  </div>
</template>

<script>
import {List, ListItem} from '@/components/List'
import treeFilter from 'array-tree-filter'
import MobileCascader from '../MobileCascader'
import MobilePopupCascader from '../MobilePicker/MobilePopup'
import {MobilePicker, MobilePickerItem, MobileMultiPicker} from '../MobilePicker/'

export default {
  name: 'Picker',
  components: {
    List,
    ListItem,
    MobileCascader,
    MobilePopupCascader,
    MobilePicker,
    MobilePickerItem,
    MobileMultiPicker
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    value: {
      type: [Array, String]
    },
    format: Function,
    cols: {
      type: Number,
      default: 3
    },
    onChange: Function,
    onPickerChange: Function,
    onVisibleChange: Function,
    itemStyle: Object,
    indicatorStyle: Object,
    okText: {
      type: String,
      default: '确定'
    },
    dismissText: {
      type: String,
      default: '取消'
    },
    onOk: Function,
    onDismiss: Function,
    title: String,
    disabled: {
      type: Boolean,
      default: false
    },
    cascade: {
      type: Boolean,
      default: true
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      prefixCls: 'um-picker',
      pickerPrefixCls: 'um-picker-col',
      popupPrefixCls: 'um-picker-popup',
      transitionName: 'um-slide-up',
      maskTransitionName: 'um-fade',
      curValue: this.value || [],
      scrollValue: [],
      extra: '请选择',
      visible: false,
      allDatas: []
    }
  },
  watch: {
    data (val) {
      if (this.curValue && this.curValue.length > 0) {
        this.getExtra()
      }
    },
    curValue (val) {
      this.$emit('change', val)
    }
  },
  methods: {
    checkValue () {
      const {value, cascade, cols, data} = this.$props
      if (value) {
        if (!cascade && (cols === 1 || !(data[0] instanceof Array))) {
          if (typeof (value) === 'string') {
            this.curValue = [value]
          } else {
            console.warn('请传入与数据源格式相同的value！')
          }
        }
      }
    },
    ok (value) {
      if (!this.cascade) {
        if (this.curValue.length <= 0) {
          if (this.data) {
            for (let i = 0; i < this.data.length; i++) {
              this.curValue.push(this.allDatas[i][0].value)
            }
          } else {
            this.curValue = []
          }
        }
      }
      value = this.curValue
      if (this.onChange) {
        this.onChange(value)
      }
      if (this.onOk) {
        this.onOk(value)
      }
      if (value.length > 0) {
        this.getExtra()
      } else {
        this.extra = '请选择'
      }
      this.$emit('ok', value)
    },
    dismiss () {
      if (this.onDismiss) {
        this.onDismiss()
      }
      this.$emit('dismiss')
    },
    setScrollValue (value) {
      this.scrollValue = value
    },
    visibleChange (visible) {
      this.setScrollValue(undefined)
      if (this.onVisibleChange) {
        this.onVisibleChange(visible)
      }
      this.$emit('visible-change', this.curValue, visible)
    },
    pickerChange (value) {
      if (this.onPickerChange) {
        this.onPickerChange(value)
      }
      this.$emit('picker-change', value)
    },
    defaultFormat (values) {
      return values.join(',')
    },
    getSel () {
      const value = this.curValue
      let treeChildren
      let onFormat
      if (this.cascade) {
        treeChildren = treeFilter(
          this.data, (c, level) => c.value === value[level]
        )
      } else {
        treeChildren = value.map((v, i) => {
          return (this.allDatas)[i].filter(d => d.value === v)[0]
        })
      }
      if (this.format) {
        onFormat = this.format
      } else {
        onFormat = this.defaultFormat
      }
      treeChildren = onFormat(treeChildren.map(v => {
        return v.label
      }))
      return treeChildren
    },
    getExtra () {
      this.extra = this.getSel()
    },
    getDatas () {
      this.allDatas = this.data
      if (!this.cascade) {
        if (!(this.data[0] instanceof Array)) {
          this.allDatas = [this.data]
        }
      }
    }
  },
  mounted () {
    this.getDatas()
    // this.checkValue()
    if (this.curValue && this.curValue.length > 0) {
      this.getExtra()
    }
  }
}
</script>

<style lang="less">
@import '../PickerView/style/index.less';
@import './style/index.less';
</style>

