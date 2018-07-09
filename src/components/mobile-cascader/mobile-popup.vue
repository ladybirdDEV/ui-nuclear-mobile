<template>
  <PopupPicker
    v-model="curVisible"
    :className="className"
    :prefixCls="prefixCls"
    :wrapStyle="styles"
    :dismissText="dismissText"
    :okText="okText"
    :title="title"
    :disabled="disabled"
    :maskClosable="maskClosable"
    :onVisibleChange="onVisibleChange"
    :onDismiss="onDismiss"
    :onOk="ok">
    <MobileCascader
      v-model="curValue"
      :defaultValue="value"
      :onChange="onChange"
      :data="data"
      :onScrollChange="onScrollChange">
    </MobileCascader>
  </PopupPicker>
</template>

<script>
import PopupPicker from '../mobile-picker/mobile-popup'
import MobileCascader from './mobile-cascader'

export default {
  components: {
    PopupPicker,
    MobileCascader
  },
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    className: String,
    prefixCls: {
      type: String,
      default: 'mobile-picker-popup'
    },
    data: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    styles: {
      type: Object,
      default: () => {}
    },
    onChange: Function,
    onDismiss: Function,
    onOk: Function,
    okText: {
      type: String,
      default: 'Ok'
    },
    dismissText: {
      type: String,
      default: 'Dismiss'
    },
    title: String,
    visible: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onVisibleChange: Function,
    onScrollChange: Function
  },
  data () {
    return {
      curVisible: this.visible || false,
      curValue: this.value || []
    }
  },
  watch: {
    visible (val) {
      this.curVisible = val
    },
    curVisible (val) {
      this.$emit('change', val)
    },
    value (val) {
      this.curValue = val
    }
  },
  methods: {
    ok (value) {
      if (this.onOk) {
        this.onOk(this.curValue)
      } else if (this.onChange) {
        this.onChange(value)
      }
    }
  }
}
</script>

