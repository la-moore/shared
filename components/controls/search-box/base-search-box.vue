<template>
  <div class="relative flex items-center"
       :class="[
         disabled && 'cursor-not-allowed bg-gray-500',
       ]">
    <input class="bg-transparent appearance-none block w-full px-3 h-10 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
           :class="[
             disabled && 'pointer-events-none',
           ]"
           v-bind="{ ...$attrs, class: undefined }"
           :value="modelValue || value"
           :disabled="disabled"
           :placeholder="placeholder"
           aria-label=""
           @input="$emit('update:modelValue', $event.target.value)">
    <BaseIcon name="outline_search"
              class="flex-shrink-0 mx-3"
              size="sm" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseSearchBox',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    modelValue: {
      type: [String, Number],
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
    maxlength: {
      type: Number,
      default: undefined,
    },
  },
  emits: ['update:modelValue']
})
</script>
