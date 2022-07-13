<template>
  <button class="inline-flex items-center relative"
          :class="[
            proxyRounded,
            proxyLook,
            proxySize,
            disabled && 'pointer-events-none'
          ]"
          :type="type"
          :disabled="disabled">
    <span v-if="disabled"
          class="absolute inset-0 flex items-center bg-gray-500 justify-center"
          :class="[
            proxyRounded
          ]" />

    <span class="flex flex-1 items-center relative truncate"
          :class="[
            proxyJustify,
            loading && 'opacity-0'
          ]">
      <slot />
    </span>

    <span v-if="loading"
          class="absolute inset-0 flex items-center justify-center">
      <BaseSpinner />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, BUTTON_PROPS } from './'
import BaseSpinner from '../../components/spinner/base-spinner.vue'

export default defineComponent({
  name: 'BaseButton',
  components: {
    BaseSpinner
  },
  props: BUTTON_PROPS,
  setup
})
</script>
