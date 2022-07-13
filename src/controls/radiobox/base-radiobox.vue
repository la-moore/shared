<template>
  <div class="relative">
    <label
      v-if="label"
      class="block text-sm font-medium"
      :class="{ 'text-error-500': error }"
    >
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <label
      v-if="description"
      class="block text-sm text-neutral-500"
    >
      {{ description }}
    </label>

    <div class="mt-2 relative">
      <ul class="max-h-60 space-y-2">
        <li
          v-for="option in options"
          class="cursor-pointer select-none relative flex items-center"
          :class="[
              disabled && 'pointer-events-none'
          ]"
          @click="setValue(option)"
        >
          <div
            class="block w-5 h-5 rounded-full shadow-sm border-2 mr-3 transition-all"
            :class="[
              isChecked(option) || disabled ? proxyLook : 'border-neutral-500 p-0.5'
            ]"
          >
            <div class="bg-white w-full h-full rounded-full" />
          </div>

          <span class="font-normal block truncate">
            {{ option?.label || option }}
          </span>
        </li>
      </ul>
    </div>

    <ControlFooter :error-message="error" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, RADIOBOX_PROPS } from './'
import ControlFooter from '../control-footer.vue'

export default defineComponent({
  name: 'BaseRadiobox',
  components: {
    ControlFooter
  },
  props: RADIOBOX_PROPS,
  emits: ['update:modelValue', 'unmasked'],
  setup
})
</script>
