<template>
  <div class="relative">
    <label v-if="label"
           class="block text-sm font-medium leading-5 text-gray-700">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <div class="mt-1 rounded-md flex">
      <div class="w-10 h-10 shadow-sm border rounded-md block mr-3 flex justify-center items-center flex-shrink-0 cursor-pointer"
           :style="{ backgroundColor: modelValue }"
           @click="$refs.colorPicker.click()">
        <input ref="colorPicker"
               type="color"
               class="opacity-0 absolute inset-0"
               :disabled="disabled"
               aria-label=""
               @input="onChange">
      </div>
      <input class="shadow-sm appearance-none block w-full px-3 h-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
             :class="[
               errorMessage ? 'border-red-400' : 'border-gray-300',
             ]"
             v-bind="$attrs"
             :value="modelValue"
             :type="typeProxy"
             :disabled="disabled"
             :maxlength="maxlength"
             aria-label=""
             v-on="handlers">
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
import { setup } from './setup'

export default defineComponent({
  name: 'BaseInputColor',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
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
    mask: {
      type: Object,
      default: null,
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
  emits: ['update:modelValue', 'unmasked'],
  setup,
  data() {
    return {
      showPassword: false
    }
  },
  computed: {
    typeProxy() {
      if (this.type === 'password') {
        return this.showPassword ? 'text' : 'password'
      }

      return this.type
    }
  },
  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
})
</script>
