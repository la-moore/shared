<template>
  <div class="flex flex-col">
    <div class="sm:block border-b border-gray-200">
      <nav class="-mb-px hidden"
           :class="[
             proxyExtended,
             !fill && 'px-4 sm:px-6 space-x-2',
           ]"
           aria-label="Tabs">
        <template v-for="tab in tabsOptions"
                  :key="tab.value">
          <div class="whitespace-nowrap text-center py-2 px-3 border-b-2 font-medium text-md cursor-pointer"
               :class="[
                 fill && 'flex-1',
                 selected === tab.value ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
               ]"
               @click="() => selectTab(tab.value)">
            {{ tab.label }}
          </div>
        </template>
      </nav>
      <BaseMenu class="w-full"
                :class="[proxyHide]">
        <div class="whitespace-nowrap items-center flex py-2 px-3 border-b-2 font-medium text-md cursor-pointer border-primary-500 text-primary-600">
          <div class="flex-1">
            {{ selectedTab?.label }}
          </div>
          <BaseIcon :name="icon"
                    size="sm" />
        </div>

        <template #menu>
          <div class="bg-white shadow-lg p-1 rounded-lg">
            <template v-for="tab in tabsOptions"
                      :key="tab.value">
              <div class="flex items-center cursor-pointer px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                   @click="() => selectTab(tab.value)">
                {{ tab.label }}
              </div>
            </template>
          </div>
        </template>
      </BaseMenu>
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
import BaseIcon from '/-/plugins/icons/components/icon.vue'
import BaseMenu from '/-/components/menu/base-menu.vue'

interface Tab {
  label: string
  value: string
}

const extendedTypes = {
  sm: 'sm:flex',
  md: 'md:flex',
  lg: 'lg:flex',
  xl: 'xl:flex',
}
const hideTypes = {
  sm: 'sm:hidden',
  md: 'md:hidden',
  lg: 'lg:hidden',
  xl: 'xl:hidden',
}

export default defineComponent({
  name: 'BaseTabs',
  components: {
    BaseMenu,
    BaseIcon
  },
  props: {
    icon: {
      type: String,
      default: 'outline/arrow-down',
    },
    extended: {
      type: String,
      default: 'md',
    },
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
    },
  },
  emits: ['change', 'update:modelValue'],
  data() {
    return {
      selected: undefined as any
    }
  },
  computed: {
    selectedTab() {
      return this.tabsOptions.find(({ value }) => this.selected === value)
    },
    proxyExtended() {
      return this.extended && extendedTypes[this.extended]
    },
    proxyHide() {
      return this.extended && hideTypes[this.extended]
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
