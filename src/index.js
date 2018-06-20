import components from './components'
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger.vue'
import 'normalize.css'
const install = function (Vue) {
  if (install.installed) return

  Vue.use(AlloyFingerPlugin, {
    AlloyFinger
  })

  for (let key in components) {
    Vue.component(key, components[key])
  }

  Vue.prototype.$ActionSheet = components.ActionSheet
  Vue.prototype.$Modal = components.Modal
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
var obj = {}
Object.assign(obj, { install, ...components })
export default obj
