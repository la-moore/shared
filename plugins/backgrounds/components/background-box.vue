<template>
  <div class="relative w-full h-full bg-gray-900 overflow-hidden">
    <div class="absolute transform"
         :class="proxyTheme" />
  </div>
</template>

<script lang="ts">
const themes = {
  bottom: 'left-1/4 rotate-12 top-full scale-x-125 -translate-y-1/3 w-full h-96 rounded-7xl bg-gradient-to-r from-primary-400 to-primary-600',
  top: 'right-1/4 rotate-12 bottom-full scale-x-125 translate-y-1/3 w-full h-96 rounded-7xl bg-gradient-to-l from-primary-400 to-primary-600'
}

export default {
  props: {
    theme: {
      type: String,
      default: 'bottom'
    }
  },
  computed: {
    proxyTheme() {
      return this.theme && themes[this.theme]
    }
  }
}
</script>
