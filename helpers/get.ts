export function get(object: any, path: string, defaultVal = undefined) {
  return path
    .replace(/\[/g, '.')
    .replace(/]/g, '')
    .split('.')
    .reduce((o, k) => (o || {})[k], object) || defaultVal
}
