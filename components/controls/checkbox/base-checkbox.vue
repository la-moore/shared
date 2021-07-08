<template>
  <label class="inline-flex text-sm font-medium leading-5 text-gray-700 select-none cursor-pointer">
    <input :value="modelValue || value"
           type="checkbox"
           class="hidden"
           v-bind="$attrs"
           :disabled="disabled"
           aria-label=""
           v-on="handlers">

    <span class="w-5 h-5 border border-gray-300 shadow-sm rounded-md block mr-3 flex justify-center items-center"
          :class="[
            (localValue || disabled) && proxyTheme
          ]">
      <BaseIcon v-if="localValue"
                name="outline_check"
                size="xs" />
    </span>

    {{ label }}
    {{ required ? '*' : '' }}
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
import BaseIcon from '/-/plugins/icons/components/icon.vue'
import BaseControlCore from '../base-control-core.vue'
import { setup } from '../setup'

const themes = {
  disabled: 'text-white pointer-events-none bg-gray-100 ',
  primary: 'text-white bg-primary-600 hover:bg-primary-500',
  success: 'text-white bg-green-600 hover:bg-green-500',
  destructive: 'text-white bg-red-600 hover:bg-red-500',
  info: 'text-white bg-blue-600 hover:bg-blue-500',
}

export default {
  name: 'BaseCheckbox',
  components: {
    BaseIcon
  },
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
