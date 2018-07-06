import Vue from 'vue'
import ActionSheetVue from './action-sheet.vue'

const ActionSheetVueConstructor = Vue.extend(ActionSheetVue)

let instance
let initInstance = function () {
  instance = new ActionSheetVueConstructor({
    el: document.createElement('div')
  })
}

let ActionSheet = function (options) {
  if (!instance) {
    initInstance()
  }
  ShowActionSheet(options)
}

ActionSheet.share = function (options) {
  if (!instance) {
    initInstance()
  }
  instance.isShare = true
  if (options.iconGroup) {
    instance.multipleLine = Array.isArray(options.iconGroup[0])
  }
  for (let prop in options) {
    if (options.hasOwnProperty(prop)) {
      instance[prop] = options[prop]
    }
  }
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
}

let ShowActionSheet = function (options) {
  instance.isShare = false
  for (let prop in options) {
    if (options.hasOwnProperty(prop)) {
      instance[prop] = options[prop]
    }
  }
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
}

export default ActionSheet
