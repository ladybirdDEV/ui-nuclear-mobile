import Dialog from './Dialog'

const CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)
export default {
  name: 'DialogWrap',
  props: {
    mask: {
      type: Boolean
    },
    afterClose: {
      type: Function,
      default: () => { }
    },
    closable: {
      type: Boolean
    },
    visible: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String
    },
    prefixCls: {
      type: String,
      default: 'vmc-dialog'
    },
    wrapClassName: {
      type: String
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
  render() {
    if (!CAN_USE_DOM) {
      return null
    }
    const { visible } = this.$props
    const props = this.$props
    if (visible) {
      return (
        <Dialog visible={visible} wrapClassName={props.wrapClassName} animation={props.animation} on-close={this.close}>{this.$slots.default}</Dialog>
      )
    }
    return null
  }
}
