import { ObjectDirective } from 'vue'
import { enter, leave, setPosition } from './healper'

const tooltips: HTMLElement[] = []

const tooltip: ObjectDirective = {
  beforeMount(el: HTMLElement, binding) {
    const tooltip = document.createElement('div')
    const content = el.getAttribute('content')
    const placement = el.getAttribute('placement')
    let mouseIsOver = false

    const options = {
      placement: placement || 'top',
      offset: binding.value?.offset || 10,
    }

    el.className += ' relative'
    tooltip.className = 'fixed z-10 max-w-xs px-2 py-1 overflow-hidden text-sm text-white transform scale-95 bg-gray-900 rounded opacity-0 pointer-events-none'
    tooltip.innerHTML = `<div class="relative">${content}</div>`

    el.addEventListener('mouseenter', () => {
      const config = { ...options }

      mouseIsOver = true
      el.appendChild(tooltip)

      const bounds = el.getBoundingClientRect()
      const tooltipBounds = tooltip.getBoundingClientRect()

      setPosition(tooltip, config, bounds, tooltipBounds)

      enter(tooltip, {
        from: 'opacity-0 scale-95',
        to: 'opacity-100',
        active: 'transition duration-100',
      })
    })

    el.addEventListener('mouseleave', async () => {
      mouseIsOver = false

      await leave(tooltip, {
        to: 'opacity-0 scale-95',
        active: 'transition duration-100',
      })

      if (!mouseIsOver && tooltip.parentNode) {
        tooltip.outerHTML = ''
      }
    })

    tooltips.push(tooltip)

    window.addEventListener('scroll', () => {
      if (mouseIsOver) {
        const config = { ...options }
        const bounds = el.getBoundingClientRect()
        const tooltipBounds = tooltip.getBoundingClientRect()

        setPosition(tooltip, config, bounds, tooltipBounds)
      }
    })
  },
}

export default tooltip
