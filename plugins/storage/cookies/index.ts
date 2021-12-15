const domain = getDomain()

export function getDomain() {
  const domainParts = window.location.hostname.split('.')

  if (domainParts.length > 2) {
    return [
      domainParts[domainParts.length - 2],
      domainParts[domainParts.length - 1]
    ].join('.')
  }
  return domainParts.join('.')
}

export const Storage = {
  get(key: string) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${key}=`)

    if (parts.length === 2) return parts.pop().split(';').shift()
  },
  set(key: string, value: string, maxAge?: number) {
    let val = `${key}=${value}; path=/; domain=${domain}`

    if (maxAge) {
      val += `; max-age=${maxAge}`
    }
    document.cookie = val
  },
  remove(key: string) {
    document.cookie = `${key}= ; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
  }
}

export default Storage
