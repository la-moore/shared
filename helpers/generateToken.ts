function generate(length) {
  const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('')
  const b = []

  for (let i = 0; i < length; i++) {
    const j = (Math.random() * (a.length - 1)).toFixed(0)

    b[i] = a[j]
  }
  return b.join('')
}

export function generateToken(length = 12, chunk = 4) {
  const token = generate(length)

  return token.match(new RegExp('.{1,' + chunk + '}', 'g')).join('-')
}
