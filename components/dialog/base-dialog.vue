<template>
  <transition
    enter-active-class="transition-opacity ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-if="show"
         class="fixed inset-0 transition-opacity z-40"
         :class="`duration-${speed}`"
         aria-hidden="true"
         @click="close">
      <div class="absolute inset-0 bg-gray-500 opacity-75" />
    </div>
  </transition>

  <transition
    enter-active-class="transition ease-in-out transform"
    enter-from-class="scale-75 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="transition ease-in-out transform"
    leave-from-class="scale-100 opacity-100"
    leave-to-class="scale-75 opacity-0">
    <div v-if="show"
         class="fixed z-40 inset-0 overflow-y-auto pointer-events-none"
         :class="`duration-${speed}`">
      <div class="min-h-screen text-center block">
        <span class="inline-block align-middle h-screen"
              aria-hidden="true">
          &#8203;
        </span>

        <div class="text-left inline-block align-middle w-full px-4"
             :class="[proxySize]">
          <slot name="dialog">
            <div class="bg-white rounded-lg shadow-xl z-10 relative my-6 sm:my-8 pointer-events-auto"
                 role="dialog"
                 aria-modal="true"
                 aria-labelledby="modal-headline">
              <slot name="header">
                <div class="flex justify-between items-center px-6 h-16">
                  <div class="flex-1" />
                  <div class="font-medium leading-6 text-gray-900 truncate">
                    {{ title }}
                  </div>
                  <div class="flex-1 flex items-center justify-end">
                    <BaseButton theme="white"
                                size="sm"
                                class="w-8 !p-0"
                                @click="close">
                      <BaseIcon name="outline_x" />
                    </BaseButton>
                  </div>
                </div>
              </slot>
              <slot name="body">
                <div class="p-6">
                  <slot />
                </div>
              </slot>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import BaseIcon from '../icon/base-icon.vue'
import BaseButton from '../button/base-button.vue'

const sizes = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

export default {
  name: 'BaseDialog',
  components: {
    BaseIcon,
    BaseButton
  },
  props: {
    speed: {
      type: [String, Number],
      default: 300
    },
    items: {
      type: [Array],
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Boolean],
      default: 'md'
    }
  },
  emits: ['close'],
  data() {
    return {
      show: false
    }
  },
  computed: {
    proxySize() {
      return this.size && sizes[this.size]
    }
  },
  methods: {
    open() {
      document.body.classList.add('overflow-hidden')
      this.show = true
    },
    close() {
      document.body.classList.remove('overflow-hidden')
      this.show = false
      this.$emit('close')
    }
  }
}
</script>
