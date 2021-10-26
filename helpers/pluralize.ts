export function pluralize(count: number, noun: string, suffix = 's') {
  if (suffix === 'ies' && count !== 1) {
    noun = noun.substring(0, noun.length - 1)
  }

  return `${count} ${noun}${count !== 1 ? suffix : ''}`
}
