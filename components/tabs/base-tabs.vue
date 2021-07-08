<template>
  <div class="flex flex-col h-full">
    <div class="sm:block border-b border-gray-200">
      <nav class="-mb-px flex"
           :class="[
             !fill && 'px-4 sm:px-6 space-x-2',
           ]"
           aria-label="Tabs">
        <div v-for="tab in tabsOptions"
             :key="tab.value"
             class="whitespace-nowrap text-center py-2 px-3 border-b-2 font-medium text-md cursor-pointer"
             :class="[
               fill && 'flex-1',
               selected === tab.value ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
             ]"
             @click="() => selectTab(tab.value)">
          {{ tab.label }}
        </div>
      </nav>
    </div>
    <div class="relative">
      <template v-for="tab in tabsOptions"
                :key="tab.value">
        <slot v-if="selected === tab.value"
              v-bind="tab"
              :name="tab.value" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Tab {
  label: string
  value: string
}

export default defineComponent({
  name: 'BaseTabs',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    tabsOptions: {
      type: Array as () => Tab[],
      required: true
    },
    fill: {
      type: Boolean,
      required: false
    }
  },
  emits: ['change', 'update:modelValue'],
  data() {
    return {
      selected: undefined as any
    }
  },
  watch: {
    modelValue(value) {
      this.selected = value
    },
    value(value) {
      this.selected = value
    }
  },
  mounted() {
    if (!this.modelValue && !this.value) {
      this.selectTab(this.tabsOptions[0].value)
    } else {
      this.selected = this.modelValue || this.value
    }
  },
  methods: {
    selectTab(value) {
      this.$emit('change', value)
      this.$emit('update:modelValue', value)
      this.selected = value
    }
  }
})
</script>
