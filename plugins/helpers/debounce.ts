export default function debounce(callback: (...any) => void, wait: number, immediate = false) {
  let timeout: any = null

  return function(...args) {
    const callNow = immediate && !timeout
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const next = () => callback.apply(this, args)

    clearTimeout(timeout)

    if (callNow) {
      next()
    } else {
      timeout = setTimeout(next, wait)
    }
  }
}
