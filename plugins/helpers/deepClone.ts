export default function deepClone(obj) {
  const instance = Object.create(obj.constructor.prototype)

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== null && Array.isArray(value)) {
      instance[key] = [...value]
    } else if (value !== null && typeof value === 'object') {
      instance[key] = deepClone(value)
    } else {
      instance[key] = value
    }
  })

  return instance
}
