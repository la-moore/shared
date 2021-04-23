<template>
  <div class="fixed z-40 inset-0 overflow-y-auto"
       :class="!show && 'pointer-events-none'">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-out duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="show"
             class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
             aria-hidden="true"
             @click="close" />
      </transition>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true">
        &#8203;
      </span>

      <transition
        enter-active-class="transition ease-out transform"
        enter-from-class="translate-y-10 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition ease-out transform"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-10 opacity-0">
        <div v-if="show"
             class="inline-block align-bottom bg-white rounded-lg shadow-xl transform sm:my-8 sm:align-middle w-full sm:p-6"
             :class="[proxySize]">
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
      </transition>
    </div>
  </div>
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
