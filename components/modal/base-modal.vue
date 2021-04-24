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
    enter-from-class="translate-y-10 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition ease-in-out transform"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-10 opacity-0">
    <div v-if="show"
         class="fixed z-40 inset-0 overflow-y-auto pointer-events-none"
         :class="`duration-${speed}`">
      <div class="flex items-end justify-center min-h-screen text-center sm:block">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
          &#8203;
        </span>

        <div class="text-left inline-block align-bottom sm:align-middle w-full h-screen sm:px-4">
          <slot name="dialog">
            <div class="w-full h-full flex items-center justify-around">
              <div class="bg-white rounded-t-lg sm:rounded-lg shadow-xl mx-auto z-10 relative sm:my-8 pointer-events-auto max-h-full overflow-y-scroll"
                   :class="[proxySize]"
                   role="dialog"
                   aria-modal="true"
                   aria-labelledby="modal-headline">
                <slot name="header">
                  <div class="flex justify-between items-center px-6 h-16 border-b">
                    <div class="font-medium leading-6 text-gray-900 truncate">
                      {{ title }}
                    </div>
                    <BaseButton theme="white"
                                size="sm"
                                class="w-8 !p-0"
                                @click="close">
                      <BaseIcon name="outline_x" />
                    </BaseButton>
                  </div>
                </slot>
                <slot name="body">
                  <div class="p-6">
                    <slot />
                  </div>
                </slot>
              </div>
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
  xl: 'max-w-screen-sm',
}

export default {
  name: 'BaseModal',
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
