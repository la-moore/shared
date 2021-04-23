export async function sleep(ms = 0) {
  return await new Promise(resolve => setTimeout(resolve, ms))
}

export async function enter(element, transition) {
  await sleep(transition.delay || 0)

  element.classList.add(...transition.from?.split(' ') || '')
  element.classList.add(...transition.active?.split(' '))

  await sleep(10)

  element.classList.remove(...transition.from?.split(' ') || '')
  element.classList.add(...transition.to?.split(' ') || '')

  await afterTransition(element)

  element.classList.remove(...transition.active?.split(' '))
  element.classList.remove(...transition.to?.split(' '))
}

export async function leave(element, transition) {
  await sleep(transition.delay || 0)

  element.classList.add(...transition.to?.split(' ') || '')
  element.classList.add(...transition.active?.split(' '))

  await afterTransition(element)

  element.classList.remove(...transition.active?.split(' '))
}

export function afterTransition(element) {
  return new Promise(resolve => {
    const duration = Number(
      getComputedStyle(element)
        .transitionDuration
        .replace('s', ''),
    ) * 1000

    setTimeout(() => {
      resolve(true)
    }, duration)
  })
}

export function setPosition(tooltip, options, bounds, tooltipBounds) {
  if (options.placement === 'right' && bounds.right < tooltipBounds.width + options.offset) {
    options.placement = 'left'
  }

  if (options.placement === 'left' && bounds.left < tooltipBounds.width + options.offset) {
    options.placement = 'top'
  }

  if (options.placement === 'top' && bounds.top < tooltipBounds.height + options.offset) {
    options.placement = 'bottom'
  }

  if (options.placement === 'top') {
    tooltip.style.top = `${bounds.top - tooltipBounds.height - options.offset}px`
    tooltip.style.left = `${(bounds.left + (bounds.width / 2))}px`
    tooltip.className += ' transform -translate-x-1/2'
  }

  if (options.placement === 'bottom') {
    tooltip.style.top = `${bounds.bottom + options.offset}px`
    tooltip.style.left = `${(bounds.left + (bounds.width / 2))}px`
    tooltip.className += ' transform -translate-x-1/2'
  }

  if (options.placement === 'right') {
    tooltip.style.top = `${bounds.top + (bounds.height / 2)}px`
    tooltip.style.left = `${bounds.left + bounds.width + options.offset}px`
    tooltip.className += ' transform -translate-y-1/2'
  }

  if (options.placement === 'left') {
    tooltip.style.top = `${bounds.top + (bounds.height / 2)}px`
    tooltip.style.left = `${bounds.left - tooltipBounds.width - options.offset}px`
    tooltip.className += ' transform -translate-y-1/2'
  }
}
