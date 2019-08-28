import components from './components'
import Vue2TouchEvents from 'vue2-touch-events'

import 'normalize.css'
const install = function (Vue) {
  if (install.installed) return

  Vue.use(Vue2TouchEvents)

  for (let key in components) {
    Vue.component(key, components[key])
  }

  Vue.prototype.$ActionSheet = components.ActionSheet
  Vue.prototype.$Modal = components.Modal
  Vue.prototype.$Toast = components.Toast
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
var obj = {}
Object.assign(obj, { install, ...components })
export default obj
