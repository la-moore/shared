export function parseUrl(data) {
  const url = new URL(data)

  return url.host.replace(/^(www\.)/, '')
}

export function makeLink(link, url) {
  return `<a class="font-semibold text-primary-500 hover:text-primary-400 active:text-primary-600 transition duration-150" href="${link}" target="_blank">${url}</a>`
}

export const urlPattern = /(\b(https?):\/\/|\b(www\.))([-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])+(\b|$)/gim
export const emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim

export default function formatLinks(str: string) {
  if (!str) {
    return ''
  }

  return str
    .replace(urlPattern, (match, p1) => {
      if (p1 === 'www.') {
        match = 'http://' + match
      }

      return makeLink(match, parseUrl(match))
    })
    .replace(emailAddressPattern, (match) => makeLink(`mailto:${match}`, match))
}
