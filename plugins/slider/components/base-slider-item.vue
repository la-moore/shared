<template>
  <div class="flex-shrink-0 scroll-snap-start max-w-full">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseSliderItem'
})
</script>
