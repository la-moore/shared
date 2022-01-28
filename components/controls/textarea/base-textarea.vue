<template>
  <div class="relative">
    <label v-if="label"
           class="mb-1 block text-sm font-medium">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <div v-show="!$slots.input"
         class="flex rounded-md shadow-sm border transition py-px"
         :class="[
           proxyLook
         ]">
      <div v-if="$slots.left"
           class="-my-px -ml-px">
        <slot name="left" />
      </div>
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <textarea ref="element"
                  v-model="localValue"
                  class="appearance-none focus:outline-none bg-transparent block w-full px-3 resize-none leading-4 py-2.5"
                  :name="name"
                  :placeholder="placeholder"
                  :maxlength="maxlength"
                  :rows="rows"
                  :disabled="disabled"
                  :style="{
                    height: height ? `${height}px` : undefined
                  }"
                  :class="[
                    !$slots.left && 'rounded-l-md',
                    !$slots.right && 'rounded-r-md',
                  ]"
                  aria-label="" />
      </div>
      <div v-if="$slots.right"
           class="-my-px -mr-px">
        <slot name="right" />
      </div>
    </div>
    <slot name="input" />
    <ControlFooter :error-message="error">
      <div v-if="maxlength">
        <span>{{ `${modelValue.length} / ${maxlength}` }}</span>
      </div>
    </ControlFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, TEXTAREA_PROPS } from './'
import ControlFooter from '../control-footer.vue'

const TEXTAREA_LOOKS = {
  main: 'focus-within:border-blue-300 dark:focus-within:border-blue-600 dark:border-gray-500',
  primary: 'focus-within:border-primary-300 dark:focus-within:border-primary-600 dark:border-primary-500',
  destructive: 'border-red-400',
  success: 'border-green-400',
  disabled: 'pointer-events-none bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-500',
}

export default defineComponent({
  name: 'BaseTextarea',
  components: {
    ControlFooter,
  },
  props: TEXTAREA_PROPS,
  emits: ['update:modelValue', 'unmasked'],
  setup,
  computed: {
    proxyLook() {
      if (this.disabled) {
        return TEXTAREA_LOOKS.disabled
      }

      if (this.error) {
        return TEXTAREA_LOOKS.destructive
      }

      return TEXTAREA_LOOKS[this.look] || this.look
    }
  }
})
</script>
