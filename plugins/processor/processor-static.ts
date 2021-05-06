import Processor from './processor'

export default class ProcessorStatic extends Processor {
  async getData() {
    this.processing = true

    if (!this.timestamp) {
      this.timestamp = Date.now()
    }

    if (!this.fetch) {
      this.processing = false
      return false
    }

    const { data } = await this.fetch(this.pagination.current_page, {
      timestamp: this.timestamp,
      ...this.params
    })
    let hits = data || []

    if (this.mapping instanceof Function && data) {
      hits = data.map(item => this.mapping ? this.mapping(item) : item)
    }

    this.entries += 1
    this.processing = false

    return hits
  }

  async load() {
    this.hits = await this.getData()
  }
}
