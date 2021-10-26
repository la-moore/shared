<template>
  <component :is="Boolean(to) ? 'router-link' : 'a'"
             class="inline-flex items-center transition duration-150"
             :class="[
               proxyLook
             ]"
             :to="to"
             :href="href">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, LINK_PROPS } from './'

export default defineComponent({
  name: 'BaseLink',
  props: LINK_PROPS,
  setup
})
</script>
