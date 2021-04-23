import Processor from './processor'

export default class ProcessorElastic extends Processor {
  async getData(force = false) {
    this.processing = true

    if (force) {
      this.pagination = {
        current_page: 1,
        last_page: 1
      }
    }

    if (!this.timestamp || force) {
      this.timestamp = Date.now()
    }

    if (!this.fetch) {
      this.processing = false
      return false
    }

    const { items, _meta } = await this.fetch(this.pagination.current_page, {
      timestamp: this.timestamp,
      filter: this.filter,
      ...this.params
    })
    let hits = items || []

    this.pagination = {
      total: _meta?.totalCount,
      per_page: _meta?.perPage,
      current_page: _meta?.currentPage,
      last_page: _meta?.pageCount,
    }

    if (this.mapping instanceof Function && items) {
      hits = items.map(item => this.mapping ? this.mapping(item) : item)
    }

    this.entries += 1
    this.processing = false

    return hits
  }

  async load() {
    this.hits = await this.getData()
  }

  async getPage(page) {
    this.pagination.current_page = page
    this.hits = await this.getData()
  }

  async next() {
    this.pagination.current_page += 1
    const hits = await this.getData()

    this.hits = [...this.hits, ...hits]
  }
}
