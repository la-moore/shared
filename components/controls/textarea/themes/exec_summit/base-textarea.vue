<template>
  <div class="relative">
    <div class="relative">
      <div class="absolute pointer-events-none top-0 left-0">
        <label v-if="label"
               class="block transition-all duration-200 pr-3"
               :class="[
                 activeLabel ? 'text-xs mb-auto leading-5 -mt-5 opacity-70' : 'leading-10 opacity-50'
               ]">
          {{ label }}
          {{ required ? '*' : '' }}
        </label>
      </div>

      <textarea ref="input"
                class="bg-transparent appearance-none block w-full h-10 border-b focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                :class="[
                  errorMessage ? 'border-red-400' : 'border-gray-200',
                  disabled && 'cursor-not-allowed bg-gray-100',
                ]"
                v-bind="$attrs"
                :rows="rows"
                :value="modelValue"
                :disabled="disabled"
                :name="name"
                :maxlength="maxlength"
                aria-label=""
                v-on="handlers"
                @keypress="$emit('keypress', $event)"
                @focus="isFocused = true"
                @blur="isFocused = false"
                @input="resize" />
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
  emits: ['update:modelValue', 'keypress'],
  setup,
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    activeLabel() {
      return this.isFocused || this.modelValue || this.value
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.style.height = 'auto'
      this.$refs.input.style.height = `${this.$refs.input.scrollHeight + 2}px`
    })
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    resize() {
      this.$refs.input.style.height = 'auto'
      if (!this.maxHeight || this.$refs.input.scrollHeight <= this.maxHeight) {
        this.$refs.input.style.height = `${this.$refs.input.scrollHeight + 2}px`
      } else {
        this.$refs.input.style.height = `${this.maxHeight}px`
      }
    }
  }
})
</script>
