<template>
  <div class="relative">
    <label v-if="label"
           class="block transition-all duration-200 pr-3 text-xs leading-5 mb-2 opacity-70">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <button type="button"
            aria-pressed="false"
            :class="[proxyChecked ? 'bg-primary-500' : 'bg-gray-200']"
            class=" bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
            @click="proxyChecked = !proxyChecked">
      <span aria-hidden="true"
            :class="`${proxyChecked ? 'translate-x-5' : 'translate-x-0'}`"
            class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseToggle',
  props: {
    modelValue: {
      type: [Boolean],
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    proxyChecked: {
      get() {
        return !!this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
  }

})
</script>
