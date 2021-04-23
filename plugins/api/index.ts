import { Plugin } from 'vue'
import * as api from './core/provider'
import { ResourceOptions } from './core/resource'

interface ApiPluginOptions {
  default: string
  handleResponse?: () => void
  resources: ResourceOptions[]
}

const plugin: Plugin = function(app, options: ApiPluginOptions) {
  api.setDefaultResource(options.default)

  if (options.handleResponse) {
    api.setHandleResponse(options.handleResponse)
  }

  options.resources.forEach(resource => {
    api.createResource(resource)
  })

  app.config.globalProperties.$api = api.useApi()
}

export default plugin
export * as Api from './core/provider'
