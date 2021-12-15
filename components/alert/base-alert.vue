<template>
  <div class="border-l-4 p-4"
       :class="proxyLook">
    <div class="flex space-x-3">
      <div v-if="$slots.icon"
           class="flex-shrink-0">
        <slot name="icon" />
      </div>
      <div class="text-sm">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, ALERT_PROPS } from './'

export default defineComponent({
  name: 'BaseAlert',
  props: ALERT_PROPS,
  setup
})
</script>
