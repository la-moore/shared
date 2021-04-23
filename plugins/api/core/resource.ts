import { RequestParams } from './provider'

type ApiHeadersObject = Record<string, string>
type ApiHeadersFunction = (params: RequestParams) => Promise<ApiHeadersObject>
export type ApiHeaders = ApiHeadersObject | ApiHeadersFunction
export type ResourceOptions = Pick<Resource, 'name' | 'baseUrl' | 'headers' | 'refreshToken'>

export class Resource {
  constructor(options: ResourceOptions) {
    this.name = options.name
    this.baseUrl = options.baseUrl
    this.headers = options.headers
    this.refreshToken = options.refreshToken
  }

  name: string
  baseUrl: string
  headers?: ApiHeaders
  refreshToken?: (response, rawParams) => void

  async getHeaders(params: RequestParams): Promise<ApiHeadersObject> {
    if (this.headers instanceof Function) {
      return this.headers(params)
    }

    return this.headers || {}
  }
}
