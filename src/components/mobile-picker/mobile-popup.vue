<template>
  <Modal
    v-model="curVisible"
    :prefixCls="prefixCls"
    :className="className || ''"
    :closable="false"
    :transitionName="transitionName || popupTransitionName"
    :maskTransitionName="maskTransitionName"
    @onClose="hide"
    @onChange="onVisibleChange"
    :styles="wrapStyle"
    :maskClosable="maskClosable"
    :mask="mask"
    >
      <div>
        <div :class="`${prefixCls}-header`">
          <Touchable :activeClassName="`${prefixCls}-item-active`" :onMouseUp="dismiss">
            <div :class="`${prefixCls}-item ${prefixCls}-header-left`">
              {{dismissText || locale.dismissText}}
            </div>
          </Touchable>
          <div :class="`${prefixCls}-item ${prefixCls}-title`">{{title}}</div>
          <Touchable :activeClassName="`${prefixCls}-item-active`" :onMouseUp="ok">
            <div :class="`${prefixCls}-item ${prefixCls}-header-right`">
              {{okText || locale.okText}}
            </div>
          </Touchable>
        </div>
        <slot></slot>
      </div>
    </Modal>
</template>

<script>
import Modal from '../mobile-dialog'
import Touchable from '../feedback/feedback.vue'

export default {
  components: {
    Modal,
    Touchable
  },
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    // value: [String, Array],
    locale: Object,
    className: {
      type: String,
      default: ''
    },
    prefixCls: {
      type: String,
      default: 'mobile-picker-popup'
    },
    wrapStyle: {
      type: Object
    },
    transitionName: {
      type: String,
      default: ''
    },
    maskTransitionName: {
      type: String,
      default: ''
    },
    popupTransitionName: {
      type: String,
      default: ''
    },
    dismissText: {
      type: String
      // default: 'Dismiss'
    },
    okText: {
      type: String
      // default: 'Ok'
    },
    title: String,
    disabled: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    visible: Boolean,
    onVisibleChange: Function,
    onDismiss: Function,
    onOk: Function
  },
  data () {
    return {
      pickerValue: this.value || null,
      curVisible: this.visible || false
    }
  },
  watch: {
    visible (val) {
      this.curVisible = val
    },
    curVisible (val) {
      this.$emit('change', val)
    }
  },
  methods: {
    setVisibleState (visible) {
      this.curVisible = visible
      if (!visible) {
        this.pickerValue = null
      }
    },
    fireVisibleChange (visible) {
      if (this.curVisible !== visible) {
        this.setVisibleState(visible)
        this.onVisibleChange && this.onVisibleChange(visible)
      }
    },
    ok () {
      if (this.onOk) {
        this.onOk()
      }
      this.fireVisibleChange(false)
    },
    dismiss () {
      this.onDismiss()
      this.fireVisibleChange(false)
    },
    hide () {
      this.fireVisibleChange(false)
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
@import './style/popup.less';
</style>
