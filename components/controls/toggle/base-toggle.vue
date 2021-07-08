<template>
  <label class="inline-flex text-sm items-center font-medium leading-5 text-gray-700 select-none cursor-pointer">
    <input :value="modelValue || value"
           type="checkbox"
           class="hidden"
           v-bind="$attrs"
           :disabled="disabled"
           aria-label=""
           v-on="handlers">

    <button class="relative pointer-events-none mr-3 inline-flex flex-shrink-0 w-12 p-1 rounded-full transition-colors ease-in-out duration-200"
            :class="[
              (localValue || disabled) ? proxyTheme : 'bg-gray-200'
            ]"
            role="switch"
            aria-checked="false"
            aria-labelledby="annual-billing-label">
      <span aria-hidden="true"
            class="pointer-events-none inline-block h-5 w-5 relative rounded-full bg-white shadow transform ring-0 transition-all ease-in-out duration-200"
            :class="[
              localValue ? 'left-full -translate-x-full' : 'left-0'
            ]" />
    </button>

    <span>
      {{ label }}
      {{ required ? '*' : '' }}
    </span>
  </label>
  <transition enter-active-class="transition-all duration-300"
              enter-from-class="transform -translate-y-3 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition-all duration-300"
              leave-from-class="transform translate-y-0"
              leave-to-class="transform -translate-y-3 opacity-0">
    <span v-if="!disabled && (errorMessage || $slots.error)"
          class="text-red-600 block">
      <slot name="error">
        {{ errorMessage }}
      </slot>
    </span>
  </transition>
</template>

<script lang="ts">
import BaseControlCore from '../base-control-core.vue'
import { setup } from '../setup'

const themes = {
  disabled: 'text-white pointer-events-none bg-gray-100 ',
  primary: 'text-white bg-primary-600',
  success: 'text-white bg-green-600',
  destructive: 'text-white bg-red-600',
  info: 'text-white bg-blue-600',
}

export default {
  name: 'BaseCheckbox',
  extends: BaseControlCore,
  props: {
    theme: {
      type: [String, Boolean],
      default: 'primary'
    }
  },
  emits: ['update:modelValue'],
  setup,
  computed: {
    proxyTheme() {
      if (this.disabled) {
        return themes.disabled
      }

      return this.theme && themes[this.theme]
    }
  }
}
</script>
