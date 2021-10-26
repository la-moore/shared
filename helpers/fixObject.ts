export function fixObject(obj: any) {
  const newObj = {}

  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') {
      newObj[key] = fixObject(obj[key])
    } else if (obj[key] === null) {
      newObj[key] = undefined
    } else {
      newObj[key] = obj[key]
    }
  })

  return newObj
}
