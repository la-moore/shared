<template>
  <nav class="border-t border-gray-200 px-4 flex items-center justify-between sticky bottom-0 bg-white">
    <div v-if="!hidePrevNext"
         class="-mt-px w-0 flex-1 flex">
      <button class="border-t-2 border-transparent focus:outline-none py-3 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              :class="[
                firstPageSelected && 'pointer-events-none opacity-30'
              ]"
              @click="prevPage()">
        <BaseIcon name="outline_arrow_narrow_left"
                  class="mr-3 text-gray-400"
                  size="sm" />

        {{ locale.previous }}
      </button>
    </div>

    <div class="hidden md:-mt-px md:flex">
      <template v-for="(page, i) in pages"
                :key="i">
        <div v-if="page.breakView"
             class="border-t-2 border-transparent py-3 px-4 inline-flex items-center text-sm font-medium text-gray-500">
          ...
        </div>
        <button v-else
                class="border-t-2 border-transparent focus:outline-none py-3 px-4 inline-flex items-center text-sm font-medium"
                :class="[
                  page.selected ? 'border-indigo-500 text-indigo-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                ]"
                @click="() => goToPage(page.content)">
          {{ page.content }}
        </button>
      </template>
    </div>

    <div v-if="!hidePrevNext"
         class="-mt-px w-0 flex-1 flex justify-end">
      <button class="border-t-2 border-transparent focus:outline-none py-3 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              :class="[
                lastPageSelected && 'pointer-events-none opacity-30'
              ]"
              @click="nextPage()">
        {{ locale.next }}

        <BaseIcon name="outline_arrow_narrow_right"
                  class="ml-3 text-gray-400"
                  size="sm" />
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import ProcessorElastic from '../../../plugins/processor/processor-elastic'
import BaseIcon from '../../../plugins/icons/components/icon.vue'
import { setup } from '../pagination-setup'

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
