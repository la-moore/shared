export default function throttle(callback: (...any) => void, limit: number) {
  let waiting = false

  return function(...args) {
    if (!waiting) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      callback.apply(this, args)
      waiting = true
      setTimeout(function() {
        waiting = false
      }, limit)
    }
  }
}
