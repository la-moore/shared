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
           errorMessage ? 'border-red-400' : 'focus-within:border-blue-300 dark:focus-within:border-blue-600 dark:border-gray-500',
           disabled && 'pointer-events-none bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-500'
         ]">
      <div v-if="$slots.left"
           class="-my-px -ml-px">
        <slot name="left" />
      </div>
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <textarea ref="element"
                  class="appearance-none focus:outline-none bg-transparent block w-full px-3 resize-none leading-4 py-2.5"
                  :name="name"
                  :value="localValue"
                  :placeholder="placeholder"
                  :maxlength="maxlength"
                  :rows="rows"
                  :disabled="disabled"
                  :style="{
                    height: height ? `${height}px` : undefined
                  }"
                  :class="[
                    !errorMessage && 'border-blue-300',
                    !$slots.left && 'rounded-l-md',
                    !$slots.right && 'rounded-r-md',
                  ]"
                  aria-label=""
                  v-on="handlers" />
      </div>
      <div v-if="$slots.right"
           class="-my-px -mr-px">
        <slot name="right" />
      </div>
    </div>
    <slot name="input" />
    <ControlFooter :error-message="errorMessage">
      <div v-if="maxlength">
        <span>{{ modelValue.length }}</span>
        <span class="mx-px">
          /
        </span>
        <span>{{ maxlength }}</span>
      </div>
    </ControlFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, TEXTAREA_PROPS } from './'
import ControlFooter from '../control-footer.vue'

export default defineComponent({
  name: 'BaseInput',
  components: {
    ControlFooter,
  },
  props: TEXTAREA_PROPS,
  emits: ['update:modelValue', 'unmasked'],
  setup
})
</script>
