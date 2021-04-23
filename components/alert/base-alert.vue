<template>
  <div class="rounded-md p-4"
       :class="[
         proxyTheme
       ]">
    <div class="flex">
      <div v-if="$slots.icon"
           class="flex-shrink-0 mr-3">
        <slot name="icon" />
      </div>

      <div class="relative">
        <h3 v-if="title"
            class="text-sm font-bold mb-1">
          {{ title }}
        </h3>

        <div class="text-sm">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseIcon from '../icon/base-icon.vue'

const themes = {
  primary: 'bg-primary-50 text-primary-800',
  secondary: 'bg-gray-50 text-gray-800',
  success: 'bg-green-50 text-green-800',
  destructive: 'bg-red-50 text-red-800',
  info: 'bg-blue-50 text-blue-800',
}

export default defineComponent({
  name: 'BaseAlert',
  components: {
    BaseIcon
  },
  props: {
    theme: {
      type: [String, Boolean],
      default: 'primary'
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    proxyTheme() {
      return this.theme && themes[this.theme]
    }
  }
})
</script>
