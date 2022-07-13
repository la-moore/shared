<template>
  <div class="inline-flex items-center"
       :class="[
         proxyRounded,
         proxySize,
         proxyLook
       ]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, BADGE_PROPS } from './'

export default defineComponent({
  name: 'BaseBadge',
  props: BADGE_PROPS,
  setup
})
</script>
