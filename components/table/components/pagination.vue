<template>
  <nav v-if="Object.keys(pages).length > 1"
       class="px-4 flex items-center justify-center sticky bottom-0 bg-white rounded-t-md border-2 border-b-0 border-gray-100 py-3">
    <div v-if="!hidePrevNext"
         class="w-0 flex-1 flex">
      <button class="focus:outline-none py-3 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              :class="[
                firstPageSelected && 'pointer-events-none opacity-30'
              ]"
              @click="prevPage()">
        <BaseIcon name="outline_chevron_left"
                  class="mr-2 text-gray-400"
                  size="sm" />

        {{ locale.previous }}
      </button>
    </div>

    <div class="hidden md:-mt-px md:flex space-x-3">
      <template v-for="(page, i) in pages"
                :key="i">
        <div v-if="page.breakView"
             class="w-10 h-10 inline-flex items-center justify-center text-sm font-medium text-gray-500">
          ...
        </div>
        <button v-else
                class="rounded-full w-10 h-10 focus:outline-none transition inline-flex items-center justify-center text-sm font-medium"
                :class="[
                  page.selected ? 'text-gray-100 bg-indigo-600 hover:bg-indigo-700' : 'bg-white hover:bg-gray-100'
                ]"
                @click="() => goToPage(page.content)">
          {{ page.content }}
        </button>
      </template>
    </div>

    <div v-if="!hidePrevNext"
         class="w-0 flex-1 flex justify-end">
      <button class="focus:outline-none py-3 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              :class="[
                lastPageSelected && 'pointer-events-none opacity-30'
              ]"
              @click="nextPage()">
        {{ locale.next }}

        <BaseIcon name="outline_chevron_right"
                  class="ml-2 text-gray-400"
                  size="sm" />
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import ProcessorElastic from '/-/plugins/processor/processor-elastic'
import { setup } from '../pagination-setup'
import BaseIcon from '/-/components/icon/base-icon.vue'

export default {
  name: 'BasePagination',
  components: {
    BaseIcon
  },
  props: {
    locale: {
      type: Object,
      required: true
    },
    processor: {
      type: ProcessorElastic,
      required: true
    },
    forcePage: {
      type: Number,
      default: undefined
    },
    pageRange: {
      type: Number,
      default: 3
    },
    marginPages: {
      type: Number,
      default: 1
    },
    hidePrevNext: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update'],
  setup
}
</script>
