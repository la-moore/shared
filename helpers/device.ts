export function device() {
  const userAgent = navigator.userAgent || navigator.vendor

  if (/Windows NT/i.test(userAgent)) {
    return 'windows'
  }

  if (/windows phone/i.test(userAgent)) {
    return 'windows_phone'
  }

  if (/android/i.test(userAgent)) {
    return 'android'
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return 'ios'
  }

  return 'unknown'
}
