<template>
  <div ref="element"
       v-clickaway="close">
    <button
      class="focus:outline-none w-full hover:bg-gray-50"
      @click="toggle">
      <div class="w-full flex space-x-3 items-center px-4 py-4 h-14">
        <span v-if="label"
              class="block flex-1 text-sm font-medium leading-5 text-gray-700 text-left">
          {{ label }}
          {{ required ? '*' : '' }}
        </span>
        <button v-if="selectedCount"
                class="focus:outline-none"
                @click="clearSelection">
          <BaseBadge>
            {{ selectedCount }} <BaseIcon name="outline_trash"
                                          class="ml-1.5 w-3.5 h-3.5"
                                          size="xs" />
          </BaseBadge>
        </button>
        <BaseIcon name="outline_chevron_down"
                  class="text-gray-400 transition"
                  :class="expanded && 'transform rotate-180'"
                  size="sm" />
      </div>
    </button>
    <transition enter-active-class="transition-all duration-300"
                enter-from-class="max-h-0"
                enter-to-class="max-h-72"
                leave-active-class="transition-all duration-300"
                leave-from-class="max-h-72"
                leave-to-class="max-h-0">
      <div v-if="expanded"
           class="overflow-hidden shadow-md">
        <div class="bg-white max-h-72 overflow-y-auto scrollable-area">
          <div class=""
               role="menu"
               aria-orientation="vertical">
            <div class="sticky top-0 bg-white z-10 px-4 py-2 pb-4 h-16">
              <div class="relative">
                <input ref="input"
                       v-model="search"
                       class="appearance-none block w-full px-3 h-10 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                       :class="[
                         errorMessage ? 'border-red-400' : 'border-gray-300',
                         disabled && 'cursor-not-allowed bg-gray-100',
                       ]"
                       v-bind="$attrs"
                       :placeholder="placeholder || 'Search'">

                <div class="flex-shrink-0 absolute right-0 top-0 h-10 w-10 flex items-center justify-center pointer-events-none">
                  <BaseSpinner v-if="loading"
                               size="xs" />
                  <BaseIcon v-else
                            name="outline_search"
                            size="xs" />
                </div>
              </div>
            </div>
            <div v-if="options.length === 0"
                 class="block px-4 py-2 text-gray-500 text-center">
              No records found
            </div>
            <div v-for="option in options"
                 :key="option.value"
                 class="px-4 py-2 cursor-pointer text-gray-500 focus:outline-none flex items-center hover:bg-gray-100 hover:text-gray-800"
                 :class="[
                   focusedOption.value === option.value && 'bg-gray-100 text-gray-800'
                 ]"
                 role="menuitem"
                 @click="select(option)">
              <BaseButton class="w-6 !p-0 mr-3"
                          size="xs"
                          tabindex="-1"
                          :look="isSelected(option.value) ? 'solid' : 'border'"
                          :theme="isSelected(option.value) ? 'primary' : 'white'">
                <BaseIcon v-if="isSelected(option.value)"
                          name="outline_check" />
              </BaseButton>
              <slot :option="option"
                    name="option">
                <div>
                  <span>
                    {{ option.label || option.value }}

                  </span>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="flex text-sm leading-4 px-4">
      <transition enter-active-class="transition-all duration-300"
                  enter-from-class="transform -translate-y-3 opacity-0"
                  enter-to-class="transform translate-y-0 opacity-100"
                  leave-active-class="transition-all duration-300"
                  leave-from-class="transform translate-y-0"
                  leave-to-class="transform -translate-y-3 opacity-0">
        <span v-if="!disabled && (errorMessage || $slots.error)"
              class="text-red-600">
          <slot name="error">
            {{ errorMessage }}
          </slot>
        </span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup } from './setup'
import { debounce } from '../../plugins/helpers'
import BaseIcon from '../icon/base-icon.vue'
import BaseSpinner from '../spinner/base-spinner.vue'

export default defineComponent({
  name: 'BaseSelectAutocomplete',
  components: {
    BaseIcon,
    BaseSpinner
  },
  props: {
    modelValue: {
      type: Array,
      default: [],
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    rules: {
      type: [String, Function, Object],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    initial: {
      type: Object,
      default: undefined,
    },
    minLength: {
      type: Number,
      default: 0,
    },
    fetch: {
      type: Function,
      default: () => [],
    },
  },
  emits: ['update:modelValue', 'change'],
  setup,
  data() {
    return {
      options: [],
      focused: -1,
      loading: false,
      expanded: false,
      selected: this.initial,
      search: '',
    }
  },
  computed: {
    selectedCount() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.length
      } else return 1
    },
    selectedOption() {
      return this.selected || {}
    },
    focusedOption() {
      return this.options[this.focused] || {}
    }
  },
  watch: {
    initial(initial) {
      this.selected = initial
    },
    search(search = '') {
      if (search.length >= (this.minLength || 0) && search !== this.selectedOption.label) {
        this.loading = true
        this.debounceFetch(search)
      }
    }
  },
  methods: {
    isSelected(value: string | number) {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.map(item => item.toString()).includes(value.toString())
      } else {
        return this.modelValue?.toString() === value.toString()
      }
    },
    async open() {
      this.expanded = true

      setTimeout(() => {
        this.$refs.input?.focus()
      }, 300)

      this.loading = true
      this.options = await this.fetch()
      this.loading = false
    },
    close() {
      this.focused = -1
      this.expanded = false
    },
    toggle() {
      if (this.expanded) {
        this.close()
      } else {
        this.open()
      }
    },
    debounceFetch: debounce(async function(search) {
      this.options = await this.fetch(search || undefined)
      this.loading = false
    }, 400),
    select(option) {
      this.selected = option
      let newValue

      if (this.isSelected(option.value)) {
        newValue = this.modelValue.filter(item => item.toString() !== option.value.toString())
      } else {
        newValue = [...this.modelValue, option.value]
      }

      this.$emit('update:modelValue', newValue)

      this.$nextTick(() => {
        if (this.validate) {
          this.handleBlur()
          this.handleInput(this.modelValue)
          this.validate()
        }
      })
    },
    clearSelection(e) {
      e.stopPropagation()
      this.$emit('update:modelValue', [])
    }
  }
})
</script>

<style scoped>
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0.25rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: #CCCCCC;
  }

  /* Firefox fallback */
  .scrollable-area {
    scrollbar-color: #CCCCCC transparent;
    scrollbar-width: thin;
  }
</style>
