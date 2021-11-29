<template>
  <div class="relative">
    <label v-if="label"
           class="block text-sm font-medium leading-5 text-gray-700 mb-1">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <div class="">
      <input ref="input"
             class="hidden"
             v-bind="$attrs"
             type="file"
             :accept="accept.join(', ')"
             :multiple="multiple"
             tabindex="-1"
             aria-label=""
             @change="onChange">

      <div ref="dropZone"
           class="flex justify-center overflow-hidden transition duration-150 ease-in-out"
           :class="[
             proxyBorder,
             proxyRounded,
             dragover && 'shadow-outline-blue border-blue-300',
             errorMessage ? 'border-red-400' : 'border-gray-300',
           ]">
        <div class="cursor-pointer flex-1"
             @click="onTarget">
          <slot name="preview">
            <div class="space-y-1 text-center px-6 py-5">
              <svg class="mx-auto h-12 w-12 text-gray-400"
                   stroke="currentColor"
                   fill="none"
                   viewBox="0 0 48 48"
                   aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
              </svg>
              <p class="text-sm text-gray-600">
                <button class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        type="button">
                  Upload a file
                </button>
                or drag and drop
              </p>
              <p class="text-xs text-gray-500">
                {{ accept.map((item) => item.split('/')[1]).join(', ').toUpperCase() }}
                up to
                {{ maxSize }}MB
              </p>
            </div>
          </slot>
        </div>
      </div>
    </div>
    <div class="flex pt-px text-sm leading-4">
      <transition enter-active-class="transition-all duration-300"
                  enter-from-class="transform -translate-y-3 opacity-0"
                  enter-to-class="transform translate-y-0 opacity-100"
                  leave-active-class="transition-all duration-300"
                  leave-from-class="transform translate-y-0"
                  leave-to-class="transform -translate-y-3 opacity-0">
        <span v-if="!disabled && (errorMessage || $slots.error)"
              class="text-red-600">
          <slot name="error">
            {{ errorMessage }}
          </slot>
        </span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup } from '../../../setup'
import BaseFileInputCore from '../base-file-input-core.vue'

export default defineComponent({
  name: 'BaseFileInput',
  emits: ['update:modelValue', 'drop', 'change'],
  extends: BaseFileInputCore,
  setup(props, ctx) {
    return {
      ...setup(props, ctx),
    }
  },
  async mounted() {
    this.addEventListener(document, 'drag dragstart dragend dragover dragenter dragleave drop', this.onDragPrevent)
    this.addEventListener(this.$refs.dropZone, 'dragover dragenter', this.onDragOver)
    this.addEventListener(this.$refs.dropZone, 'dragleave dragend drop', this.onDragStop)
    this.addEventListener(this.$refs.dropZone, 'drop', this.onDrop)
  },
  beforeUnmount() {
    this.removeEventListener(document, 'drag dragstart dragend dragover dragenter dragleave drop', this.onDragPrevent)
    this.removeEventListener(this.$refs.dropZone, 'dragover dragenter', this.onDragOver)
    this.removeEventListener(this.$refs.dropZone, 'dragleave dragend drop', this.onDragStop)
    this.removeEventListener(this.$refs.dropZone, 'drop', this.onDrop)
  },
})
</script>
