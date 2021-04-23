<template>
  <button class="relative inline-flex items-center border-transparent focus:outline-none transition duration-150 ease-in-out"
          :class="[
            proxyRounded,
            proxyJustify,
            proxySize,
            proxyTheme
          ]"
          :type="type"
          :disabled="disabled">
    <span class="inline-flex items-center truncate"
          :class="loading && 'opacity-0'">
      <slot />
    </span>
    <span v-if="loading"
          class="absolute inset-0 flex items-center justify-center">
      <BaseSpinner />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseSpinner from '../spinner/base-spinner.vue'

const themes = {
  solid: {
    white: 'border text-gray-400 bg-white hover:bg-gray-100 active:bg-gray-200 focus:text-gray-600',
    dark: 'border text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-700 focus:text-gray-200',
    disabled: 'border text-gray-100 bg-gray-400 pointer-events-none',
    primary: 'border text-white bg-primary-600 hover:bg-primary-700 focus:border-primary-700 active:bg-primary-700 focus:shadow-outline-primary',
    secondary: 'border text-white bg-gray-600 hover:bg-gray-700 focus:border-gray-700 active:bg-gray-700 focus:shadow-outline-primary',
    success: 'border text-white bg-green-600 hover:bg-green-700 focus:border-green-700 active:bg-green-700 focus:shadow-outline-green',
    destructive: 'border text-white bg-red-600 hover:bg-red-700 focus:border-red-700 active:bg-red-700 focus:shadow-outline-red',
    info: 'border text-white bg-blue-600 hover:bg-blue-700 focus:border-blue-700 active:bg-blue-700 focus:shadow-outline-blue',
  },
  ghost: {
    white: 'text-gray-600 bg-transparent hover:text-gray-700 hover:bg-gray-200 active:bg-gray-300',
    primary: 'text-primary-600 bg-primary-100 hover:text-primary-700 hover:bg-primary-200 active:bg-primary-300',
    success: 'text-green-600 bg-green-100 hover:text-green-700 hover:bg-green-200 active:bg-green-300',
    destructive: 'text-red-600 bg-red-100 hover:text-red-700 hover:bg-red-200 active:bg-red-300',
    info: 'text-blue-600 bg-blue-100 hover:text-blue-700 hover:bg-blue-200 active:bg-blue-300',
  },
  link: {
    white: 'text-gray-200 hover:text-gray-100 active:text-gray-300',
    dark: 'text-gray-600 hover:text-gray-500 active:text-gray-700',
    primary: 'text-primary-600 hover:text-primary-500 active:text-primary-700',
    success: 'text-green-600 hover:text-green-500 active:text-green-700',
    destructive: 'text-red-600 hover:text-red-500 active:text-red-700',
    info: 'text-blue-600 hover:text-blue-500 active:text-blue-700',
  },
  border: {
    white: 'border-2 text-gray-600 bg-transparent border-gray-400 hover:bg-gray-100 active:border-gray-700',
    primary: 'border-2 text-primary-700 bg-transparent border-primary-600 hover:bg-primary-100 active:border-primary-800',
    success: 'border-2 text-green-600 bg-transparent border-green-400 hover:bg-green-100 active:border-green-700',
    destructive: 'border-2 text-red-600 bg-transparent border-red-400 hover:bg-red-100 active:border-red-700',
    info: 'border-2 text-blue-600 bg-transparent border-blue-400 hover:bg-blue-100 active:border-blue-700',
  },
}

const sizes = {
  xs: 'h-6 px-2 text-xs font-medium',
  sm: 'h-8 px-4 text-sm font-medium',
  md: 'h-10 px-4 text-sm font-medium',
  lg: 'h-12 px-4 text-sm font-medium',
  xl: 'h-14 px-6 font-medium',
}

const rounded = {
  normal: 'rounded',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

const justify = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
}

export default defineComponent({
  name: 'BaseButton',
  components: {
    BaseSpinner
  },
  props: {
    loading: Boolean,
    disabled: Boolean,
    rounded: {
      type: [String, Boolean],
      default: 'normal'
    },
    look: {
      type: [String, Boolean],
      default: 'solid'
    },
    theme: {
      type: [String, Boolean],
      default: 'primary'
    },
    size: {
      type: [String, Boolean],
      default: 'md'
    },
    type: {
      type: [String, Boolean],
      default: 'button'
    },
    justify: {
      type: [String, Boolean],
      default: 'center'
    }
  },
  computed: {
    proxyTheme() {
      return (this.theme && this.look) && themes[this.look][this.disabled ? 'disabled' : this.theme]
    },
    proxySize() {
      return this.size && sizes[this.size]
    },
    proxyRounded() {
      return this.rounded && rounded[this.rounded]
    },
    proxyJustify() {
      return this.justify && justify[this.justify]
    }
  }
})
</script>
