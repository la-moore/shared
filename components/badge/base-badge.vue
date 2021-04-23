<template>
  <div class="inline-flex items-center"
       :class="[
         proxyRounded,
         proxySize,
         proxyTheme
       ]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const themes = {
  secondary: 'bg-gray-100 text-gray-800',
  primary: 'bg-primary-100 text-primary-800',
  success: 'bg-green-100 text-green-800',
  destructive: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
}

const sizes = {
  sm: 'px-2.5 h-5 text-xs font-medium',
  md: 'px-3 h-6 text-xs font-medium',
  lg: 'px-3.5 h-7 font-medium',
}

const rounded = {
  normal: 'rounded',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

export default defineComponent({
  name: 'BaseBadge',
  props: {
    rounded: {
      type: [String, Boolean],
      default: 'full'
    },
    theme: {
      type: [String, Boolean],
      default: 'primary'
    },
    size: {
      type: [String, Boolean],
      default: 'md'
    }
  },
  computed: {
    proxyTheme() {
      return this.theme && themes[this.theme]
    },
    proxySize() {
      return this.size && sizes[this.size]
    },
    proxyRounded() {
      return this.rounded && rounded[this.rounded]
    }
  }
})
</script>
