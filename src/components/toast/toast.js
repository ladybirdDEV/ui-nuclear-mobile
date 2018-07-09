import Vue from 'vue'
import ToastComponent from './toast.vue'

// vue.extend返回一个可复用的组件构造器,是一个方法
const ToastConstructor = Vue.extend(ToastComponent)
//
// 创建挂载实例
let getAnInstance = () => {
  return new ToastConstructor({
    el: document.createElement('div')
  })
}

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
}

let Toast = (options = {}) => {
  // 新建一个instance组件并挂载到DOM上
  let instance = getAnInstance()
  instance.closed = false
  let duration = options.duration || 3000

  clearTimeout(instance.timer)
  instance.message = typeof options === 'string' ? options : options.message
  instance.iconClass = options.iconClass || ''
  instance.mask = options.mask || true
  if (options.mask !== undefined) {
    instance.mask = options.mask
  } else {
    instance.mask = true
  }
  instance.onClose = options.onClose || ''

  document.body.appendChild(instance.$el)

  instance.visible = true
  // 获取更新后的DOM，修改数据后立即执行这个方法
  Vue.nextTick(function () {
    instance.visible = true
    instance.$el.removeEventListener('transitionend', removeDom)
    if (~duration) {
      instance.timer = setTimeout(function () {
        if (instance.onClose) {
          instance.close()
          instance.onClose()
          instance.mask = false
        } else {
          instance.close()
          instance.mask = false
        }
      }, duration)
    }
  })
  return instance
}

export default Toast
