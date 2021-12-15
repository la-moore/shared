import { SetupContext, computed } from 'vue'
import ProcessorElastic from '../../plugins/processor/processor-elastic'

interface InputProps {
  processor: ProcessorElastic
  forcePage?: number
  pageRange?: number
  marginPages?: number
  hidePrevNext?: boolean
  locale?: any
}

export function setup(props: InputProps, ctx: SetupContext) {
  const current = computed(() => props.processor.page)
  const firstPageSelected = computed(() => current.value === 1)
  const lastPageSelected = computed(() => {
    return (current.value === props.processor.lastPage) || (props.processor.lastPage === 0)
  })
  const pages = computed(() => {
    const items = {}

    if (props.processor.lastPage <= props.pageRange) {
      for (let index = 0; index < props.processor.lastPage; index++) {
        items[index] = {
          index: index,
          content: index + 1,
          selected: index === (current.value - 1)
        }
      }
    } else {
      const halfPageRange = Math.floor(props.pageRange / 2)
      const setPageItem = index => {
        items[index] = {
          index: index,
          content: index + 1,
          selected: index === (current.value - 1)
        }
      }
      const setBreakView = index => {
        items[index] = {
          disabled: true,
          breakView: true
        }
      }

      for (let i = 0; i < props.marginPages; i++) {
        setPageItem(i)
      }

      let selectedRangeLow = 0

      if (current.value - halfPageRange > 0) {
        selectedRangeLow = current.value - 1 - halfPageRange
      }
      let selectedRangeHigh = selectedRangeLow + props.pageRange - 1

      if (selectedRangeHigh >= props.processor.lastPage) {
        selectedRangeHigh = props.processor.lastPage - 1
        selectedRangeLow = selectedRangeHigh - props.pageRange + 1
      }

      for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= props.processor.lastPage - 1; i++) {
        setPageItem(i)
      }

      if (selectedRangeLow > props.marginPages) {
        setBreakView(selectedRangeLow - 1)
      }

      if (selectedRangeHigh + 1 < props.processor.lastPage - props.marginPages) {
        setBreakView(selectedRangeHigh + 1)
      }

      for (let i = props.processor.lastPage - 1; i >= props.processor.lastPage - props.marginPages; i--) {
        setPageItem(i)
      }
    }
    return items
  })

  function prevPage() {
    if (current.value <= 1) return
    ctx.emit('update', current.value - 1)
  }

  function nextPage() {
    if (current.value >= props.processor.lastPage) return
    ctx.emit('update', current.value + 1)
  }

  function goToPage(page: number) {
    ctx.emit('update', page)
  }

  return {
    ...props,
    pages,
    current,
    prevPage,
    nextPage,
    goToPage,
    firstPageSelected,
    lastPageSelected
  }
}
