<template>
  <div class="fixed z-40 inset-0 overflow-y-auto"
       :class="!show && 'pointer-events-none'">
    <div class="flex items-end justify-center min-h-screen pt-4 sm:block sm:p-0 text-center"
         :class="[!fullscreen && 'px-4 pb-20']">
      <transition
        enter-active-class="transition-opacity ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="show"
             class="fixed inset-0 bg-gray-900 bg-opacity-75"
             :class="`duration-${speed}`"
             aria-hidden="true"
             @click="close" />
      </transition>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true">
        &#8203;
      </span>

      <transition
        enter-active-class="transition ease-out transform"
        :enter-from-class="proxyAnimationFrom"
        :enter-to-class="proxyAnimationTo"
        leave-active-class="transition ease-out transform"
        :leave-from-class="proxyAnimationTo"
        :leave-to-class="proxyAnimationFrom">
        <slot v-if="show"
              name="dialog">
          <div class="relative inline-block text-left align-bottom bg-white rounded-lg shadow-xl transform sm:my-8 sm:align-middle w-full"
               :class="[
                 `duration-${speed}`,
                 proxySize
               ]">
            <slot name="header">
              <div class="flex justify-between items-center px-6 h-16 border-b">
                <div class="font-medium leading-6 text-gray-900 truncate">
                  {{ title }}
                </div>
                <BaseButton theme="white"
                            size="sm"
                            class="w-8 !p-0"
                            @click="close">
                  <BaseIcon name="outline/close" />
                </BaseButton>
              </div>
            </slot>
            <slot name="body">
              <div class="p-6">
                <slot />
              </div>
            </slot>
          </div>
        </slot>
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
      default: 200
    },
    items: {
      type: [Array],
      default: () => []
    },
    animation: {
      type: String,
      default: 'translate'
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Boolean],
      default: 'md'
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  data() {
    return {
      show: false
    }
  },
  computed: {
    proxyAnimationFrom() {
      const classes = ['transform', 'opacity-0']

      if (this.animation === 'scale') {
        classes.push('scale-95')
      }

      if (this.animation === 'translate') {
        classes.push('translate-y-10')
      }

      return classes.join(' ')
    },
    proxyAnimationTo() {
      const classes = ['transform', 'opacity-100']

      if (this.animation === 'scale') {
        classes.push('scale-100')
      }

      if (this.animation === 'translate') {
        classes.push('translate-y-0')
      }

      return classes.join(' ')
    },
    proxySize() {
      return this.size && sizes[this.size]
    }
  },
  methods: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
      this.$emit('close')
    }
  }
}
</script>
