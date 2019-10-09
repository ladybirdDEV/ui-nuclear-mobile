import Dialog from './Dialog'

const CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)
export default {
  name: 'DialogWrap',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'vmc-dialog'
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.$refs.container.parentNode.removeChild(this.$refs.container)
    }
  },
  watch : {
    visible (v) {
      console.log('visible', v)
      console.log(this)
    }
  },
  render() {
    if (!CAN_USE_DOM) {
      return null
    }
    const {visible} = this.$props
    return (
      <div id={`${this.$props.prefixCls}-container-${(new Date().getTime())}`} ref="container">
        <Dialog visible={visible} on-close={this.close}>{this.$slots.default}</Dialog>
      </div>
    )
  }
}
