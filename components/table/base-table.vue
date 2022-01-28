<template>
  <div class="flex flex-col flex-1">
    <div ref="wrapper"
         class="flex-1 overflow-y-auto flex flex-col">
      <div v-if="processor.entries === 0 && processor.processing"
           class="py-4 flex justify-center">
        <BaseSpinner />
      </div>
      <table v-else-if="processor.hits.length > 0"
             class="min-w-full"
             :class="tableClass">
        <thead>
          <tr>
            <th v-for="(cell, cellIdx) in cols"
                :key="cellIdx"
                class="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
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
            <th v-if="actions"
                class="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider" />
          </tr>
        </thead>
        <tbody class="bg-white">
          <template v-for="(row, idx) in processor.hits"
                    :key="idx">
            <slot name="row"
                  v-bind="{ ...row, idx }" />
            <tr class="hover:bg-gray-50 border-t border-gray-200"
                @dblclick="() => $emit('rowClick', row)">
              <template v-for="(col, colIdx) in cols"
                        :key="colIdx">
                <td class="px-3 py-4 text-sm leading-5 text-gray-500"
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
              <td v-if="actions"
                  class="px-3 py-4 whitespace-nowrap text-center text-sm leading-5 font-medium">
                <BaseButton v-for="(action, actionIdx) in actions"
                            :key="actionIdx"
                            class="w-6 !p-0"
                            :theme="action.theme || 'white'"
                            look="link"
                            size="xs"
                            @click="() => action.click(row)">

                  <component :is="action.icon"
                             v-if="action.icon"
                             class="h-6 w-6" />
                </BaseButton>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div v-else
           class="text-center my-auto">
        <h1 class="text-4xl font-black mb-2">
          {{ locale.table_empty }}
        </h1>
        <p class="text-gray-500 mb-4">
          {{ locale.table_empty_description }}
        </p>
      </div>
    </div>

    <BasePagination v-if="!hideFooter && processor.hits.length > 0"
                    :processor="processor"
                    :locale="locale"
                    @update="loadPage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProcessorElastic from '../../plugins/processor/processor-elastic'
import BaseButton from '../../components/button/base-button.vue'
import BaseSpinner from '../../components/spinner/base-spinner.vue'
import BasePagination from './components/pagination.vue'

class Locale {
  next = 'Next'
  previous = 'Previous'
  table_empty = 'Table is empty'
  table_empty_description = 'There is no data to display.'
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
    BaseButton,
    BaseSpinner,
    BasePagination
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
    actions: {
      type: Array,
      default: undefined
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
  emits: ['rowClick', 'update'],
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
