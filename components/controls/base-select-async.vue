<template>
  <div class="relative">
    <label v-if="label"
           class="block text-sm font-medium leading-5 text-gray-700">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <div ref="element"
         class="mt-1 rounded-md shadow-sm">
      <div class="relative">
        <input ref="input"
               v-model="search"
               class="appearance-none block w-full px-3 h-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
               :class="[
                 errorMessage ? 'border-red-400' : 'border-gray-300',
                 disabled && 'cursor-not-allowed bg-gray-100',
               ]"
               v-bind="$attrs"
               :disabled="disabled"
               :placeholder="placeholder"
               aria-label=""
               @focus="open"
               @keydown="onKeydown">
        <div class="flex-shrink-0 absolute right-0 top-0 h-10 w-10 flex items-center justify-center pointer-events-none">
          <BaseSpinner v-if="loading"
                       size="xs" />
          <BaseIcon v-else
                    name="outline_chevron_down"
                    :class="expanded && 'transform rotate-180'"
                    size="xs" />
        </div>
      </div>

      <transition name="slide-y">
        <div v-if="expanded && (options.length > 0 || !loading)"
             class="absolute z-10 right-0 w-full mt-2 origin-top-right rounded-md shadow-lg min-w-56">
          <div class="rounded-md shadow-xs bg-white max-h-40 overflow-y-auto scrollable-area">
            <div class="py-2"
                 role="menu"
                 aria-orientation="vertical">
              <div v-if="options.length === 0"
                   class="block px-4 py-2 text-gray-500">
                No records found
              </div>
              <div v-for="option in options"
                   :key="option.value"
                   class="block px-4 py-2 cursor-pointer text-gray-500 focus:outline-none"
                   :class="[
                     focusedOption.value === option.value && 'bg-gray-100 text-gray-800',
                     (selectedOption && selectedOption.value === option.value) ?
                       'text-primary-500 bg-primary-100' :
                       'hover:bg-gray-100 hover:text-gray-800'
                   ]"
                   role="menuitem"
                   @click="onSelect(option)">
                <slot :option="option"
                      name="option">
                  {{ option.label || option.value }}
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="flex pt-px text-sm leading-4">
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
  name: 'BaseSelectAsync',
  components: {
    BaseIcon,
    BaseSpinner
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
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
    fetchOnOpen: {
      type: Boolean,
      default: true,
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
      activated: false,
      options: [],
      focused: -1,
      loading: false,
      expanded: false,
      selected: this.initial,
      search: this.initial?.label || '',
    }
  },
  computed: {
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
      this.search = initial.label
    },
    search(search = '') {
      if (this.activated && search.length >= this.minLength && search !== this.selectedOption.label) {
        this.loading = true
        this.debounceFetch(search)
      }
    }
  },
  mounted() {
    const el = this.$refs.element

    function handler(e: any) {
      const elements = e.path || (e.composedPath && e.composedPath())

      if (elements && elements.length > 0) {
        elements.unshift(e.target)
      }

      if (el.__clickaway__ && !el.contains(e.target)) {
        el.__clickaway__.callback(e)
      }
    }

    el.__clickaway__ = {
      handler: handler,
      callback: this.close,
    }

    setTimeout(() => {
      const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'

      document.addEventListener(clickHandler, handler, true)
    }, 0)
  },
  beforeUnmount() {
    const el = this.$refs.element
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'

    if (el.__clickaway__) {
      document.removeEventListener(clickHandler, el.__clickaway__.handler, true)
      delete el.__clickaway__
    }
  },
  methods: {
    async open() {
      if (!this.activated) {
        this.activated = true
      }
      this.expanded = true

      if (this.fetchOnOpen && this.options.length === 0) {
        this.loading = true
        this.debounceFetch('')
      }
    },
    close() {
      this.focused = -1
      this.expanded = false
      this.search = this.selectedOption.label
    },
    toggle() {
      this.expanded = !this.expanded
    },
    onKeydown(event) {
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        this.focused++

        if (!this.options[this.focused]) {
          this.focused = 0
        }
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        this.focused--

        if (!this.options[this.focused]) {
          this.focused = this.options.length - 1
        }
      }

      if (event.key === 'Enter' || event.key === 'Escape') {
        event.preventDefault()
        const option = this.options[this.focused]

        this.select(option)
        this.close()

        this.$refs.input.blur()
      }
    },
    debounceFetch: debounce(async function(search) {
      this.options = await this.fetch(search || undefined)
      this.loading = false
    }, 400),
    onSelect(option) {
      this.select(option)
      this.close()
    },
    select(option) {
      this.selected = option
      this.search = option.label

      this.$emit('update:modelValue', option.value)
      this.$emit('change', option)

      this.$nextTick(() => {
        if (this.validate) {
          this.handleBlur()
          this.handleInput(this.modelValue)
          this.validate()
        }
      })
    },
    clearOptions() {
      this.options = []
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
