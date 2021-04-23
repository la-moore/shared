import { Resource, ResourceOptions } from './resource'

export interface RequestParams extends RequestInit {
  resource?: string,
  url: string,
  method?: 'DELETE' | 'POST' | 'GET' | 'PUT' | 'PATCH'
  formData?: any
  params?: Record<string, string | number | undefined | number[] | string[]>
  body?: any
}

export type ApiFetchParams = RequestParams | string

let refreshing = false
let subscribers: any[] = []

const resources: Resource[] = []
let defaultResource = ''
let handleResponse

function validURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' +
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$', 'i')

  return !!pattern.test(str)
}

function parseParams(params: any = {}) {
  const obj: string[] = []

  Object.keys(params).forEach((key) => {
    if (typeof params[key] !== 'undefined') {
      if (Array.isArray(params[key])) {
        params[key].forEach((arrValue) => {
          obj.push(key + '[]=' + arrValue)
        })
      } else {
        obj.push(key + '=' + params[key])
      }
    }
  })

  return obj.join('&')
}

function ErrorException(this: any, errors) {
  this.errors = errors
  this.name = 'Api Error'
}

export function createResource(options: ResourceOptions) {
  const resource = new Resource(options)

  resources.push(resource)
}

export function setDefaultResource(name: string) {
  defaultResource = name
}

export function setHandleResponse(handle: () => void) {
  handleResponse = handle
}

export function getResource(name?: string) {
  return resources.find(resource => {
    if (name) {
      return resource.name === name
    }

    return resource.name === defaultResource
  })
}

export async function fetch(rawParams: ApiFetchParams) {
  let resource: Resource | undefined
  let params: RequestParams

  if (typeof rawParams === 'string') {
    resource = getResource()
    params = {
      url: rawParams,
    }
  } else {
    resource = getResource(rawParams.resource)
    params = rawParams
  }

  if (!resource) {
    console.warn('No resource')
    return null
  }

  if (resource.refreshToken && refreshing) {
    return new Promise((resolve) => {
      subscribers.push(() => {
        resolve(fetch(rawParams))
      })
    })
  }

  const url = (() => {
    if (validURL(params.url)) {
      return params.url
    }

    const url = (resource.baseUrl + params.url).replace(/\b\/\//g, '/')
    const props = parseParams(params.params)

    return [url, props].filter((item) => item).join('?')
  })()

  const body = (() => {
    if (params.formData) {
      const formData = new FormData()

      Object.keys(params.formData).forEach((key) => {
        const item = params.formData && params.formData[key]

        if (item) {
          if (Array.isArray(item)) {
            item.forEach(value => {
              formData.append(`${key}[]`, `${value}`)
            })
          } else {
            formData.append(key, item)
          }
        }
      })

      return formData
    }

    return params.body ? JSON.stringify(params.body) : null
  })()

  const headers = (() => {
    const obj = params.headers || {}

    if (!params.formData) {
      obj['Content-Type'] = 'application/json'
    }

    return obj
  })()

  const response = await window.fetch(url, {
    ...(typeof params === 'object' ? params : {}),
    headers: {
      Accept: 'application/json',
      ...await resource.getHeaders(params),
      ...headers
    },
    body,
  })

  if (handleResponse instanceof Function) {
    handleResponse(response, rawParams)
  }

  if (resource.refreshToken && response.status === 401) {
    refreshing = true

    await resource.refreshToken(response, rawParams)

    refreshing = false
    subscribers.map(cb => cb())

    setTimeout(() => {
      subscribers = []
    }, 10)

    return fetch(rawParams)
  }

  if (response.ok) {
    const bodyText = await response.text()

    if (response.status === 204 || !bodyText) return

    const bodyJson = JSON.parse(bodyText)

    if (bodyJson.errors) {
      const errors = Object.entries(bodyJson.errors).reduce((arr, item) => {
        arr[item[0]] = item[1]

        return arr
      }, {})

      throw new ErrorException(errors)
    }

    return bodyJson
  } else {
    throw await response.json()
  }
}

export function useApi() {
  return {
    fetch,
  }
}
