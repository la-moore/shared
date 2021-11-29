<template>
  <div class="relative">
    <label v-if="label"
           class="block text-sm font-medium leading-5 text-gray-700 mb-1">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <div class="group h-full">
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
           class="flex justify-center overflow-hidden transition duration-150 ease-in-out bg-gray-100 h-full"
           :class="[
             proxyBorder,
             proxyRounded,
             dragover && 'shadow-outline-blue border-blue-300',
             errorMessage ? 'border-red-400' : 'border-gray-300',
           ]">
        <div class="cursor-pointer flex-1 h-full"
             @click="onTarget">
          <slot name="preview">
            <div class="relative h-full">
              <div class="absolute inset-0 bg-center bg-cover transition"
                   :class="backgroundImage && 'group-hover:opacity-20'"
                   :style="{ backgroundImage }" />
              <div class="absolute top-0 right-0 p-3 text-primary-600 transition opacity-0 group-hover:opacity-100 h-full">
                <BaseIcon name="outline_duplicate"
                          class="transform rotate-90" />
              </div>
              <div class="relative px-6 py-5 space-y-3 transition text-center group-hover:opacity-100 h-full flex flex-col items-center justify-center"
                   :class="backgroundImage && 'opacity-0'">
                <div class="w-12 h-12 text-primary-600 flex justify-center items-center rounded-full bg-white mx-auto">
                  <BaseIcon name="outline_plus"
                            size="lg" />
                </div>
                <p v-if="placeholder"
                   class="text-sm text-gray-600">
                  {{ placeholder }}
                </p>
              </div>
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
import BaseIcon from '../../../../components/icon/base-icon.vue'
import BaseFileInputCore from '../base-file-input-core.vue'

export default defineComponent({
  name: 'BaseFileInput',
  components: {
    BaseIcon,
  },
  extends: BaseFileInputCore,
  emits: ['update:modelValue', 'drop', 'change'],
  setup(props, ctx) {
    return {
      ...setup(props, ctx),
    }
  },
  computed: {
    backgroundImage() {
      const value = this.value || this.modelValue

      return value ? `url(${value })` : undefined
    },
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
