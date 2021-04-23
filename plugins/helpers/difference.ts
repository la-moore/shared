export default function difference(object: any, base: any) {
  const newObj = {}

  if (!object || !base) {
    return newObj
  }

  Object.keys(object).forEach(key => {
    if (object[key] && typeof object[key] === 'object') {
      const d = difference(object[key], base[key])

      if (Object.keys(d).length > 0) {
        newObj[key] = difference(object[key], base[key])
      }
    } else if (object[key] !== null) {
      if (object[key] !== base[key]) {
        newObj[key] = object[key]
      }
    }
  })

  return newObj
}
