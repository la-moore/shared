<template>
  <div class="bg-no-repeat bg-center relative"
       :class="[
         proxySize
       ]"
       :style="{
         paddingBottom: proxyPercent+'%',
         backgroundImage
       }">
    <div v-if="$slots.default"
         class="absolute inset-0 flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, RATIO_PROPS } from './'

export default defineComponent({
  name: 'BaseRatio',
  props: RATIO_PROPS,
  setup
})
</script>
