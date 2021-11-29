<template>
  <div class="relative">
    <label class="flex cursor-pointer"
           :class="[
             disabled && 'pointer-events-none'
           ]">
      <button type="button"
              class="relative inline-flex flex-shrink-0 h-6 w-6 rounded-md overflow-hidden bg-transparent transition-colors ease-in-out"
              role="switch"
              aria-checked="false"
              @click="localValue = !Boolean(localValue)">
        <span class="absolute inset-0 border-2 rounded-md border-gray-300 dark:border-gray-700"
              :class="[
                disabled && 'bg-gray-300 dark:bg-gray-700'
              ]" />

        <span class="absolute inset-0 transition-opacity"
              :class="[
                proxyLook,
                Boolean(localValue) ? 'opacity-100 ease-in' : 'opacity-0 ease-out'
              ]">
          <span class="absolute inset-0 h-full w-full flex items-center justify-center transition transform"
                :class="[
                  Boolean(localValue) ? 'opacity-100 ease-in scale-100 delay-100' : 'opacity-0 ease-out scale-50'
                ]">
            <slot name="icon">
              <BaseIcon name="solid/check"
                        size="w-full h-full p-0.5" />
            </slot>
          </span>
        </span>
      </button>

      <span class="flex-grow pl-3 leading-4">
        <span v-if="label"
              class="block text-sm font-medium leading-6">
          {{ label }}
          {{ required ? '*' : '' }}
        </span>

        <span v-if="description"
              class="block text-sm opacity-70">
          {{ description }}
        </span>
      </span>
    </label>

    <ControlFooter :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, CHECKBOX_PROPS } from './'
import BaseIcon from '../../../plugins/icons/components/icon.vue'
import ControlFooter from '../control-footer.vue'

export default defineComponent({
  name: 'BaseCheckbox',
  components: {
    BaseIcon,
    ControlFooter,
  },
  props: CHECKBOX_PROPS,
  emits: ['update:modelValue', 'unmasked'],
  setup
})
</script>
