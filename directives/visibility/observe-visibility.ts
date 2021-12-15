import { ObjectDirective, nextTick } from 'vue'
import { processOptions, throttle, deepEqual } from './utils'

class VisibilityState {
  constructor(el, options) {
    this.el = el
    this.observer = null
    this.frozen = false
    this.createObserver(options)
  }

  el
  observer
  frozen
  callback
  options
  oldResult

  get threshold() {
    return (this.options.intersection && this.options.intersection.threshold) || 0
  }

  createObserver(options) {
    if (this.observer) {
      this.destroyObserver()
    }

    if (this.frozen) return

    this.options = processOptions(options)

    this.callback = (result, entry) => {
      this.options.callback(result, entry)
      if (result && this.options.once) {
        this.frozen = true
        this.destroyObserver()
      }
    }
    // Throttle
    if (this.callback && this.options.throttle) {
      const { leading } = this.options.throttleOptions || {}

      this.callback = throttle(this.callback, this.options.throttle, {
        leading: (state) => {
          return leading === 'both' || (leading === 'visible' && state) || (leading === 'hidden' && !state)
        },
      })
    }

    this.oldResult = undefined

    this.observer = new IntersectionObserver(entries => {
      let entry = entries[0]

      if (entries.length > 1) {
        const intersectingEntry = entries.find(e => e.isIntersecting)

        if (intersectingEntry) {
          entry = intersectingEntry
        }
      }

      if (this.callback) {
        // Use isIntersecting if possible because browsers can report isIntersecting as true, but intersectionRatio as 0, when something very slowly enters the viewport.
        const result = entry.isIntersecting && entry.intersectionRatio >= this.threshold

        if (result === this.oldResult) return
        this.oldResult = result
        this.callback(result, entry)
      }
    }, this.options.intersection)

    // Wait for the element to be in document
    nextTick(() => {
      if (this.observer) {
        this.observer.observe(this.el)
      }
    }).then()
  }

  destroyObserver() {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }

    // Cancel throttled call
    if (this.callback && this.callback._clear) {
      this.callback._clear()
      this.callback = null
    }
  }
}

function bind(el, { value }) {
  if (!value) return
  if (typeof IntersectionObserver === 'undefined') {
    console.warn('[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill')
  } else {
    el._vue_visibilityState = new VisibilityState(el, value)
  }
}

function update(el, { value, oldValue }) {
  if (deepEqual(value, oldValue)) return
  const state = el._vue_visibilityState

  if (!value) {
    unbind(el)
    return
  }
  if (state) {
    state.createObserver(value)
  } else {
    bind(el, { value })
  }
}

function unbind(el) {
  const state = el._vue_visibilityState

  if (state) {
    state.destroyObserver()
    delete el._vue_visibilityState
  }
}

const ObserveVisibility: ObjectDirective = {
  beforeMount: bind,
  updated: update,
  unmounted: unbind,
}

export default ObserveVisibility
