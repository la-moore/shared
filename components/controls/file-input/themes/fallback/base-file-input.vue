<template>
  <div class="">
    <div class="w-12 mx-auto mb-1 max-w-full block h-2 bg-gray-100 rounded-md animate-pulse" />
    <div class="space-y-1 text-center px-6 py-5 border border-dashed">
      <div class="h-12 w-12 mx-auto block bg-gray-100 rounded-md animate-pulse" />
      <div class="w-24 mx-auto max-w-full block h-2 bg-gray-100 rounded-md animate-pulse" />
      <div class="w-12 mx-auto max-w-full block h-2 bg-gray-100 rounded-md animate-pulse" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseFileInputCore from '../base-file-input-core.vue'

export default defineComponent({
  name: 'BaseFileInput',
  extends: BaseFileInputCore
})
</script>
