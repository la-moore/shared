<template>
  <div class="relative">
    <label v-if="label"
           class="block mb-1 text-sm font-medium leading-5 text-gray-700">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <div class="rounded-md shadow-sm bg-white border border-gray-300 -my-px flex transition duration-150 ease-in-out items-center"
         :class="[
           (isFocused && !errorMessage) && 'border-blue-300',
           errorMessage ? 'border-red-400' : 'border-gray-300',
           disabled && 'cursor-not-allowed bg-gray-100',
         ]">
      <div ref="input"
           class="appearance-none rounded-md overflow-y-auto bg-transparent block w-full py-2.5 px-3 placeholder-gray-400 focus:outline-none sm:text-sm sm:leading-5"
           :class="[
             disabled && 'pointer-events-none'
           ]"
           :style="{ maxHeight: maxHeight && `${maxHeight}px` }"
           v-bind="$attrs"
           contenteditable
           v-on="handlers"
           @focus="isFocused = true"
           @keypress="$emit('keypress', $event)"
           @keyup="$emit('keyup', $event)"
           @keydown="$emit('keydown', $event)"
           @blur="onBlur" />
      <div v-if="placeholder && !(localValue || modelValue)"
           class="absolute pointer-events-none py-2.5 px-3 sm:text-sm sm:leading-5 text-gray-400">
        {{ placeholder }}
      </div>
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
      <div v-if="maxlength"
           class="flex-shrink-0 pl-6 ml-auto leading-5">
        <span>{{ modelValue.length }}</span>
        <span class="mx-px">
          /
        </span>
        <span>{{ maxlength }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup } from '../../../setup'

export default defineComponent({
  name: 'BaseTextarea',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
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
    rows: {
      type: Number,
      default: 4,
    },
    maxHeight: {
      type: [Number, Boolean],
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    maxlength: {
      type: Number,
      default: undefined,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'keypress', 'keyup', 'keydown'],
  setup,
  data() {
    return {
      isFocused: false
    }
  },
  watch: {
    modelValue(value) {
      if (value !== this.$refs.input.innerText) {
        this.$refs.input.innerHTML = value
      }
    }
  },
  mounted() {
    if (this.modelValue) {
      this.$refs.input.innerHTML = this.modelValue
    }
    this.detectPaste(this.$refs.input, (data) => {
      document.execCommand('insertText', false, data['text/plain'])
    })
  },
  methods: {
    onBlur() {
      this.isFocused = false

      if (this.needValidation) {
        this.handleBlur()
        this.handleInput(this.modelValue || this.localValue)
        this.validate()
      }
    },
    focus() {
      this.$refs.input.focus()
    },
    detectPaste(editable, callback) {
      const isIE = /MSIE /i.test(navigator.userAgent)
      const isEdge = /Edge\/\d./i.test(navigator.userAgent)

      editable.addEventListener('paste', (e) => {
        const clipboard = e.clipboardData

        if (clipboard && !(isIE || isEdge)) {
          const types = clipboard.types
          const data = {}

          e.preventDefault()

          for (let i = 0; i < types.length; i++) {
            data[types[i]] = clipboard.getData(types[i])
          }

          callback(data)
        }
      })
    }
  }
})
</script>
