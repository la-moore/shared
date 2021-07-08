<template>
  <div class="relative w-full h-full bg-gray-900 overflow-hidden">
    <div class="absolute transform w-full h-full opacity-10"
         :class="[circleClass]" />
    <div class="absolute"
         :class="proxyTheme">
      <div class="absolute transform w-96 h-96 rounded-full scale-150 -translate-y-1/2 -translate-x-1/2 opacity-10"
           :class="[circleClass]" />
      <div class="absolute transform w-80 h-80 rounded-full scale-150 -translate-y-1/2 -translate-x-1/2 opacity-10"
           :class="[circleClass]" />
      <div class="absolute transform w-64 h-64 rounded-full scale-150 -translate-y-1/2 -translate-x-1/2 opacity-10"
           :class="[circleClass]" />
      <div class="absolute transform w-48 h-48 rounded-full scale-150 -translate-y-1/2 -translate-x-1/2"
           :class="[circleClass]" />
    </div>
  </div>
</template>

<script lang="ts">
const themes = {
  bottom: 'bottom-0 left-1/2',
  top: 'top-0 right-1/2',
  center: 'top-1/2 left-1/2',
  'top-right': 'top-1/4 right-1/4',
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
    },
    circleClass() {
      return 'bg-gradient-to-b from-primary-400 to-primary-600'
    }
  }
}
</script>
