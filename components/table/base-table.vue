<template>
  <div class="flex flex-col flex-1">
    <div
      ref="wrapper"
      class="flex-1 flex flex-col">
      <div v-if="processor.entries === 0 && processor.processing"
           class="py-4 flex justify-center">
        <BaseSpinner />
      </div>
      <div v-else-if="processor.hits.length > 0"
           class="w-full pb-3 w-0 overflow-x-auto">
        <div class="px-2 min-w-full align-middle inline-block">
          <table class="border-0 min-w-full"
                 :class="tableClass"
                 style="border-collapse: separate; border-spacing: 0 6px;">
            <thead>
              <tr>
                <th v-for="(cell, cellIdx) in cols"
                    :key="cellIdx"
                    class="first:rounded-l-md last:rounded-r-md px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    :class="[
                      cell.main && 'w-full',
                      proxyAlign(cell),
                      proxyWhitespace(cell),
                      cell.className
                    ]">
                  <div class="flex items-center justify-between">
                    <span>{{ cell.label }}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(row, idx) in processor.hits"
                        :key="idx">
                <slot name="row"
                      v-bind="{ ...row, idx }" />
                <tr class="shadow-lg rounded-md"
                    @dblclick="() => $emit('rowClick', row)">
                  <template v-for="(col, colIdx) in cols"
                            :key="colIdx">
                    <td class="bg-white first:rounded-l-md last:rounded-r-md px-3 py-4 text-sm leading-5 text-gray-500"
                        :class="[
                          col.main && 'w-full',
                          proxyAlign(col),
                          proxyWhitespace(col),
                          col.className
                        ]">
                      <slot :name="col.param"
                            v-bind="row">
                        {{ row[col.param] || '' }}
                      </slot>
                    </td>
                  </template>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="!processor.processing && !processor.hits?.length"
         class="flex-1 flex flex-col items-center space-y-4 mt-10 sm:mt-20">
      <p class="text-gray-500 font-bold text-2xl">
        {{ locale.no_matches_message }}
      </p>
      <BaseButton class="rounded-full"
                  @click="$emit('clearFilters')">
        {{ locale.clear_filters }}
      </BaseButton>
    </div>

    <BasePagination v-if="!hideFooter && processor.hits.length > 0"
                    :processor="processor"
                    :locale="locale"
                    @update="loadPage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProcessorElastic from '/-/plugins/processor/processor-elastic'
import BaseSpinner from '/-/components/spinner/base-spinner.vue'
import BasePagination from './components/pagination.vue'
import BaseButton from '/-/components/button/base-button.vue'

class Locale {
  next = 'Next'
  previous = 'Previous'
  table_empty = 'Table is empty'
  table_empty_description = 'There is no data to display.'
  no_matches_message = 'No matches found'
  clear_filters = 'Clear the filter'
}

const aligns = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const whitespaces = {
  nowrap: 'whitespace-nowrap truncate',
  normal: 'whitespace-normal',
}

export default defineComponent({
  name: 'BaseTable',
  components: {
    BaseSpinner,
    BasePagination,
    BaseButton
  },
  props: {
    locale: {
      type: [Object, Locale],
      default: () => new Locale()
    },
    processor: {
      type: [Object, ProcessorElastic],
      required: true
    },
    cols: {
      type: Array,
      required: true
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    tableClass: {
      type: String,
      default: ''
    }
  },
  emits: ['rowClick', 'update', 'clearFilters'],
  methods: {
    async loadPage(page) {
      await this.processor.getPage(page)
      this.$refs.wrapper.scrollTop = 0
      window.scrollTo(0, 0)
      this.$emit('update', page)
    },
    proxyAlign({ align }) {
      return (align && aligns[align]) || align
    },
    proxyWhitespace({ whitespace }) {
      return (whitespace && whitespaces[whitespace]) || whitespace
    },
  }
})
</script>
