<template>
  <div class="relative">
    <label v-if="label"
           class="block mb-1 text-sm font-medium leading-5 text-gray-700">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <div v-clickaway="close"
         class="rounded-md">
      <div class="flex truncate relative">
        <input type="text"
               class="absolute h-0 w-0 pointer-events-none opacity-0"
               aria-label=""
               @focus="open"
               @blur="close">

        <button ref="input"
                tabindex="-1"
                class="flex items-center w-full px-3 h-10 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 truncate"
                :class="[
                  errorMessage ? 'border-red-400' : 'border-gray-300',
                  disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white',
                  loading && 'pointer-events-none'
                ]"
                type="button"
                :disabled="disabled"
                @click="toggle"
                @keydown="onKeydown">
          <span v-if="selectedOptions.length > 0"
                class="flex-1 text-left truncate">
            {{ selectedLabels.join(', ') }}
          </span>
          <span v-else
                class="flex-1 text-left text-gray-400">
            {{ placeholder }}
          </span>
          <span class="flex-shrink-0 ml-3">
            <BaseSpinner v-if="loading"
                         size="xs" />
            <BaseIcon v-else
                      name="outline/arrow-down"
                      :class="expanded && 'transform rotate-180'"
                      size="xs" />
          </span>
        </button>

        <BaseButton v-if="multiple && selectedOptions.length > 0"
                    theme="white"
                    class="w-10 !p-0 ml-3 flex-shrink-0"
                    tabindex="-1"
                    @click="clear">
          <BaseIcon name="outline_trash" />
        </BaseButton>
      </div>

      <transition enter-active-class="transition-all duration-200"
                  enter-from-class="transform -translate-y-3 opacity-0"
                  enter-to-class="transform translate-y-0 opacity-100"
                  leave-active-class="transition-all duration-200"
                  leave-from-class="transform translate-y-0"
                  leave-to-class="transform -translate-y-3 opacity-0">
        <div v-if="expanded"
             class="absolute z-10 left-0 w-full mt-2 origin-top-left rounded-md shadow-lg">
          <div class="rounded-md whitespace-nowrap shadow-xs bg-white max-h-64 overflow-y-auto">
            <div class="py-2"
                 role="menu"
                 aria-orientation="vertical">
              <div v-if="proxyOptions.length === 0"
                   class="truncate px-4 py-2 text-gray-500">
                {{ emptyPlaceholder }}
              </div>
              <div v-for="(option, idx) in proxyOptions"
                   :key="idx"
                   class="flex truncate items-center px-4 py-2 cursor-pointer text-gray-500 focus:outline-none"
                   :class="[
                     (focusedOption && focusedOption.value === option.value) && 'bg-gray-100 text-gray-800',
                     selectedValues.includes(option.value) ?
                       'text-primary-500 bg-primary-100' :
                       'hover:bg-gray-100 hover:text-gray-800'
                   ]"
                   role="menuitem"
                   @click="onSelect(option)">
                <BaseButton v-if="multiple"
                            class="w-6 !p-0 mr-3 flex-shrink-0"
                            size="xs"
                            tabindex="-1"
                            :look="selectedValues.includes(option.value) ? 'solid' : 'border'"
                            :theme="selectedValues.includes(option.value) ? 'primary' : 'white'">
                  <BaseIcon v-if="selectedValues.includes(option.value)"
                            name="outline_check" />
                </BaseButton>

                <slot :option="option"
                      name="option">
                  <span class="flex-1 truncate"
                        :title="option.label || option.value">
                    {{ option.label || option.value }}
                  </span>
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
import BaseIcon from '/-/components/icon/base-icon.vue'
import BaseButton from '/-/components/button/base-button.vue'
import BaseSpinner from '/-/components/spinner/base-spinner.vue'
import { OptionInterface } from '/-/components/controls/setup'
import { setup } from '../setup'

export default defineComponent({
  name: 'BaseSelect',
  components: {
    BaseIcon,
    BaseButton,
    BaseSpinner
  },
  props: {
    modelValue: {
      type: [String, Number, Array],
      default: '',
    },
    value: {
      type: [String, Number],
      default: undefined,
    },
    placeholder: {
      type: String,
      default: '',
    },
    emptyPlaceholder: {
      type: String,
      default: 'Nothing to show',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    loading: {
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
    empty: {
      type: String,
      default: undefined,
    },
    options: {
      type: Array as () => OptionInterface[],
      default: () => [],
    },
  },
  emits: ['update:modelValue', 'change'],
  setup,
  data() {
    return {
      focused: -1,
      expanded: false,
      isFocused: false,
    }
  },
  computed: {
    parsedValue() {
      let value = this.modelValue || this.value

      if (this.multiple && !Array.isArray(value)) {
        value = [value]
      }

      return value
    },
    proxyOptions() {
      const options = [...this.options]

      if (this.empty) {
        options.unshift({
          label: this.empty,
          value: undefined
        })
      }

      return options
    },
    selectedOptions() {
      const value = this.parsedValue

      return this.options.filter((option) => {
        if (this.multiple && Array.isArray(value)) {
          return value.includes(option.value) ||
            value.includes(option.value?.toString())
        }

        return option.value === value
      })
    },
    selectedValues() {
      return this.selectedOptions.map(({ value }) => value)
    },
    selectedLabels() {
      return this.selectedOptions.map(({ label }) => label)
    },
    focusedOption() {
      return this.proxyOptions[this.focused]
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.handleInput) {
        if (this.modelValue || this.value) {
          this.handleInput(this.modelValue || this.value)
        }
      }
    })
  },
  methods: {
    open() {
      this.expanded = true
    },
    close() {
      this.focused = -1
      this.expanded = false
    },
    toggle() {
      this.expanded = !this.expanded
    },
    clear() {
      const value = this.parsedValue

      if (Array.isArray(value)) {
        this.$emit('update:modelValue', [])
        this.$emit('change', undefined)
      }

      this.$nextTick(() => {
        if (this.needValidation) {
          this.handleBlur()
          this.handleInput(this.modelValue || this.value)
          this.validate()
        }
      })
    },
    onKeydown(event) {
      event.preventDefault()

      if (event.key === 'ArrowDown') {
        this.focused++

        if (!this.options[this.focused]) {
          this.focused = 0
        }
      }

      if (event.key === 'ArrowUp') {
        this.focused--

        if (!this.options[this.focused]) {
          this.focused = this.options.length - 1
        }
      }

      if (event.key === 'Enter' || event.key === 'Escape') {
        const option = this.options[this.focused]

        this.select(option)
        this.close()
      }
    },
    onSelect(option) {
      this.select(option)

      if (!this.multiple) {
        this.close()
      }
    },
    select(option) {
      const value = this.parsedValue
      let result = option.value

      if (this.multiple && Array.isArray(value)) {
        if (this.selectedValues.includes(option.value)) {
          result = value.filter((v) => {
            if (parseInt(v)) {
              return parseInt(v) !== option.value
            }

            return v !== option.value
          })
        } else {
          result = [...value, option.value]
        }
      }

      this.$emit('update:modelValue', result)
      this.$emit('change', option)

      this.$nextTick(() => {
        if (this.needValidation) {
          this.handleBlur()
          this.handleInput(this.modelValue || this.value)
          this.validate()
        }
      })
    }
  }
})
</script>
