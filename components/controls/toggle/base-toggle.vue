<template>
  <div class="relative">
    <div class="flex">
      <button type="button"
              class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200"
              :class="[
                Boolean(localValue) ? proxyLook : 'bg-gray-200',
                disabled && 'pointer-events-none'
              ]"
              role="switch"
              aria-checked="false"
              @click="localValue = !Boolean(localValue)">
        <span aria-hidden="true"
              class="pointer-events-none inline-block h-5 w-5 rounded-full shadow transform ring-0 transition-colors transition-transform ease-in-out duration-200"
              :class="[
                Boolean(localValue) ? 'translate-x-5' : 'translate-x-0',
                disabled ? 'bg-gray-100' : 'bg-white'
              ]">
          <span v-if="$slots.inactive"
                class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity text-gray-500"
                :class="[
                  Boolean(localValue) ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'
                ]">
            <slot name="inactive" />
          </span>
          <span v-if="$slots.active"
                class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                :class="[
                  Boolean(localValue) ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'
                ]">
            <slot name="active" />
          </span>
        </span>
      </button>

      <div class="flex-grow pl-3">
        <div v-if="label"
             class="text-sm font-medium leading-6">
          {{ label }}
          {{ required ? '*' : '' }}
        </div>

        <div v-if="description"
             class="text-sm opacity-70">
          {{ description }}
        </div>
      </div>
    </div>

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
import { setup, TOGGLE_PROPS } from './'
import ControlFooter from '../control-footer.vue'

export default defineComponent({
  name: 'BaseToggle',
  components: {
    ControlFooter,
  },
  props: TOGGLE_PROPS,
  emits: ['update:modelValue', 'unmasked'],
  setup
})
</script>
