<template>
  <template v-if="to">
    <RouterLink :class="[proxyClass, proxyWeight, proxyTheme]"
                :to="to">
      <slot />
    </RouterLink>
  </template>
  <template v-else>
    <a :class="[proxyClass, proxyWeight, proxyTheme]"
       :href="href">
      <slot />
    </a>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const themes = {
  black: 'text-black hover:text-gray-600 active:text-gray-600 transition duration-150',
  dark: 'text-gray-500 hover:text-gray-400 active:text-gray-600 transition duration-150',
  white: 'text-gray-100 hover:text-gray-300 active:text-gray-400 transition duration-150',
  primary: 'text-primary-500 hover:text-primary-400 active:text-primary-600 transition duration-150',
  success: 'text-green-500 hover:text-green-400 active:text-green-600 transition duration-150',
  destructive: 'text-red-500 hover:text-red-400 active:text-red-600 transition duration-150',
  info: 'text-blue-500 hover:text-blue-400 active:text-blue-600 transition duration-150',
}

const weights = {
  light: 'font-light',
  semibold: 'font-semibold',
  bold: 'font-bold',
  black: 'font-black',
}

export default defineComponent({
  name: 'BaseLink',
  props: {
    to: {
      type: Object,
      default: undefined
    },
    href: {
      type: String,
      default: ''
    },
    theme: {
      type: [String, Boolean],
      default: 'info'
    },
    weight: {
      type: [String, Boolean],
      default: 'semibold'
    }
  },
  computed: {
    proxyClass() {
      return 'inline-flex items-center'
    },
    proxyTheme() {
      return this.theme && themes[this.theme]
    },
    proxyWeight() {
      return this.weight && weights[this.weight]
    }
  }
})
</script>
