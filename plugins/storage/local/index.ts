export const Storage = {
  get(key) {
    const sv = window.localStorage.getItem(key)

    return sv ? JSON.parse(sv) : null
  },
  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
    return value
  },
  remove(key) {
    window.localStorage.removeItem(key)
  }
}

export default Storage
