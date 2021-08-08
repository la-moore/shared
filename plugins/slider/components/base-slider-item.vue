<template>
  <div class="flex-shrink-0 max-w-full"
       :class="[proxySnap]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const snaps = {
  start: 'scroll-snap-start',
  center: 'scroll-snap-center',
  end: 'scroll-snap-end',
}

export default defineComponent({
  name: 'BaseSliderItem',
  props: {
    snap: {
      type: String,
      default: 'start'
    }
  },
  computed: {
    proxySnap() {
      return this.snap && snaps[this.snap]
    },
  }
})
</script>
