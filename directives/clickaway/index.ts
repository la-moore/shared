import { ObjectDirective, DirectiveBinding } from 'vue'

function validate(binding: DirectiveBinding) {
  if (typeof binding.value !== 'function') {
    console.warn('[v-clickaway] provided expression is not a function.')
    return false
  }

  return true
}

interface IClickAway {
  handler: Function,
  callback: Function
}

interface HTMLClickawayElement extends HTMLElement {
  __clickaway__: IClickAway
}

const index: ObjectDirective = {
  beforeMount(el: HTMLClickawayElement, binding) {
    if (!validate(binding)) return

    function handler(e: any) {
      const elements = e.path || (e.composedPath && e.composedPath())

      if (elements && elements.length > 0) {
        elements.unshift(e.target)
      }

      if (el.__clickaway__ && !el.contains(e.target)) {
        el.__clickaway__.callback(e)
      }
    }

    el.__clickaway__ = {
      handler: handler,
      callback: binding.value,
    }

    setTimeout(() => {
      const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'

      document.addEventListener(clickHandler, handler, true)
    }, 0)
  },
  updated(el: HTMLClickawayElement, binding) {
    if (validate(binding)) {
      el.__clickaway__.callback = binding.value
    }
  },
  unmounted(el) {
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

    if (el.__clickaway__) {
      document.removeEventListener(clickHandler, el.__clickaway__.handler, true)
      delete el.__clickaway__
    }
  },
}

export default index
