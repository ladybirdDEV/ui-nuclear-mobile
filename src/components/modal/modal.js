import Vue from 'vue'
import modalvue from './modal.vue'

let ModalConstructor = Vue.extend(modalvue)

let currentMsg, instance
let msgQueue = []

let initInstance = function () {
  instance = new ModalConstructor({
    el: document.createElement('div')
  })
}

let showNextMsg = function () {
  if (!instance) {
    initInstance()
  }
  if (!instance.visible || instance.closeTimer) {
    // console.log(msgQueue)
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift()
      let options = currentMsg.options
      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop]
        }
      }
    }
  }
  if (instance.popup) {
    instance.popupClass = instance.animationType === 'slide-up' ? 'um-modal-slide-up' : 'um-modal-slide-down'
  }
  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })
  const watcher = instance.$watch('visible', function (val) {
    if (!val) {
      setTimeout(() => {
        document.body.removeChild(instance.$el)
        // cancel watcher
        watcher()
      }, 200)
    }
  })
}

let Modal = function (options) {
  if (!options.isoperation) {
    options.isoperation = false
  }
  msgQueue.push({
    options: options
  })
  showNextMsg()
}

Modal.alert = function (title, message, options) {
  if (typeof title === 'object') {
    options = title
    title = ''
  }
  return Modal({
    title: title,
    message: message,
    btnGroup: options,
    isoperation: false
  })
}
Modal.prompt = function (title, message, options, type, defaultValue, inputPlaceholder) {
  if (type === 'secure-text') {
    type = 'password'
  }
  return Modal({
    title: title,
    message: message,
    btnGroup: options,
    inputPlaceholder: inputPlaceholder,
    defaultValue: defaultValue,
    showInput: true,
    isoperation: false,
    type: type
  })
}
Modal.operation = function (options) {
  return Modal({
    title: '',
    message: '',
    btnGroup: options,
    isoperation: true,
    showInput: false
  })
}
export default Modal
