<template>
  <div class="border-l-4 p-4"
       :class="proxyLook">
    <div class="flex space-x-3">
      <div v-if="icon"
           class="flex-shrink-0">
        <BaseIcon :name="icon"
                  size="sm" />
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
import BaseIcon from '/-/plugins/icons/components/icon.vue'

export default defineComponent({
  name: 'BaseAlert',
  components: {
    BaseIcon
  },
  props: ALERT_PROPS,
  setup
})
</script>
