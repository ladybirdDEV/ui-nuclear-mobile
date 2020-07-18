import Dialog from './Dialog'
import Vue from 'vue'

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
  data () {
    return {
      container: undefined
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    getComponent (visible) {
      const props = this.$props
      let that = this
      const Component = Vue.extend({
        render () {
          return (
            <div>
              <Dialog visible={visible} wrapClassName={props.wrapClassName} animation={props.animation} on-close={that.close}>{that.$slots.default}</Dialog>
            </div>
          )
        }
      })

      return new Component()
    },
    getContainer () {
      if (!this.container) {
        const container = document.createElement('div')
        const containerId = `${this.$props.prefixCls}-container-${(new Date().getTime())}`
        container.setAttribute('id', containerId)
        document.body.appendChild(container)
        this.container = container
      }
      return this.container
    }
  },
  render() {
    if (!CAN_USE_DOM) {
      return null
    }
    const { visible } = this.$props

    if (visible) {
      this.getComponent(visible).$mount(this.getContainer())
    }
    return null
  }
}
