export interface PaginationInterface {
  current_page: number,
  last_page: number,
  total?: number,
  per_page?: number
}

export interface ParamsInterface {
  hits?: any[]
  params?: any
  filter?: any
  mapping?: ((data: any) => void) | undefined,
  fetch?: (number, any) => Promise<any>
}

export default class Processor {
  pagination: PaginationInterface = {
    current_page: 1,
    last_page: 1
  }

  hits: any = []
  params: any = {}
  filter: any = {}
  entries = 0
  processing = false
  timestamp: any
  mapping: ((data: any) => void) | undefined
  fetch: ((number, any) => Promise<any> | undefined) | undefined

  constructor(params = {} as ParamsInterface) {
    this.mapping = params.mapping

    if (params.filter) {
      this.filter = params.filter
    }

    if (params.fetch) {
      this.fetch = params.fetch
    }

    if (params.params) {
      this.params = params.params
    }

    if (params.hits) {
      this.hits = params.hits
    }
  }

  get length() {
    return this.hits.length
  }

  get empty() {
    return this.entries > 0 && this.length === 0
  }

  get total() {
    return this.pagination.total || 0
  }

  get page() {
    return this.pagination.current_page || 0
  }

  get lastPage() {
    return this.pagination.last_page || 0
  }

  get perPage() {
    return this.pagination.per_page || 0
  }

  get hasNextPage() {
    return this.page < this.pagination.last_page
  }

  get allRecordsLoaded() {
    return this.entries > 0 && this.length >= this.total
  }

  push(raw) {
    if (!raw.id || !this.update(raw)) {
      let hit = { ...raw }

      if (this.mapping instanceof Function) {
        hit = this.mapping(hit)
      }

      this.hits = [hit, ...this.hits]
    }
  }

  update(raw) {
    const item = this.hits.find(({ id }) => id === raw.id)

    if (item) {
      item.raw = raw
    }

    return item
  }

  remove(hit) {
    const item = this.hits.findIndex(({ id }) => id === hit.id)

    if (item >= 0) {
      this.hits.splice(item, 1)
    }

    return item >= 0
  }

  reset() {
    this.hits = []
    this.entries = 0
    this.processing = false
    this.timestamp = undefined
    this.pagination = {
      current_page: 1,
      last_page: 1
    }
  }

  queryFilters() {
    const filters = this.filter || {}
    const obj = {}

    Object.keys(filters).forEach((key) => {
      const filter = filters[key]

      if (Array.isArray(filter)) {
        if (filter.length > 0) {
          obj[key] = filter
        }
      } else if (filter) {
        obj[key] = filter
      }
    })

    return obj
  }

  setFiltersFromQuery(query) {
    Object.keys(this.filter).forEach((key) => {
      if (query[key]) {
        this.filter[key] = query[key]
      }
    })
  }
}
