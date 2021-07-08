export default function removeTags(str: string) {
  if (!str) {
    return ''
  }

  str = str.toString()

  return str.replace(/(<([^>]+)>)/ig, '')
}
