import { ObjectDirective, DirectiveBinding } from 'vue'

function validate(binding: DirectiveBinding) {
  if (typeof binding.value !== 'function') {
    console.warn('[v-clickaway] provided expression is not a function.')
    return false
  }

  return true
}

interface IClickAway {
  handler: (e: any) => void,
  callback: (e: any) => void
}

interface HTMLClickawayElement extends HTMLElement {
  clickAway: IClickAway
}

const index: ObjectDirective = {
  beforeMount(el: HTMLClickawayElement, binding) {
    if (!validate(binding)) return

    function handler(e: any) {
      const elements = e.path || (e.composedPath && e.composedPath())

      if (elements && elements.length > 0) {
        elements.unshift(e.target)
      }

      if (el.clickAway && !el.contains(e.target)) {
        el.clickAway.callback(e)
      }
    }

    el.clickAway = {
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
      el.clickAway.callback = binding.value
    }
  },
  unmounted(el) {
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'

    if (el.__clickaway__) {
      document.removeEventListener(clickHandler, el.__clickaway__.handler, true)
      delete el.__clickaway__
    }
  },
}

export default index
