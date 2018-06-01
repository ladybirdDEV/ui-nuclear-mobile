// Thanks to: https://github.com/yuanwen0327/vue-touch-feedback-plugin/blob/master/src/feedback.js
// Thanks to: https://github.com/kilohaty/v-feedback/blob/master/src/index.js

function addClass (event) {
  const el = event.currentTarget
  const className = event.currentTarget.getAttribute('data-active-class')
  el.classList.add(className)
}

function removeClass (event) {
  const el = event.currentTarget
  const className = event.currentTarget.getAttribute('data-active-class')
  el.classList.remove(className)
}

function feedback (el, className, option) {
  el.setAttribute('data-active-class', className)
  if (option === 'add') {
    el.addEventListener('mousedown', addClass)
    el.addEventListener('touchstart', addClass)
    el.addEventListener('touchcancel', removeClass)
    el.addEventListener('touchend', removeClass)
    el.addEventListener('mouseup', removeClass)
  } else if (option === 'remove') {
    el.removeEventListener('mousedown', addClass)
    el.removeEventListener('touchstart', addClass)
    el.removeEventListener('touchcancel', removeClass)
    el.removeEventListener('touchend', removeClass)
    el.removeEventListener('mouseup', removeClass)
  }
}
export default {
  bind (el, binding) {
    const className = binding.value.activeClass
    const disabled = !!binding.value.disabled
    if (!disabled) {
      feedback(el, className, 'add')
    }
  },
  componentUpdated (el, binding) {
    const className = binding.value.activeClass
    const disabled = !!binding.value.disabled
    const oldDisabled = !!binding.oldValue.disabled
    if (oldDisabled !== disabled) {
      if (disabled) {
        feedback(el, className, 'remove')
      } else {
        feedback(el, className, 'add')
      }
    }
  },
  unbind (el, binding) {
    const className = binding.value.activeClass
    feedback(el, className, 'remove')
  }
}
