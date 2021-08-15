<template>
  <div class="fixed z-40 inset-0 overflow-hidden"
       :class="!show && 'pointer-events-none'">
    <div class="absolute inset-0 overflow-hidden">
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

      <div class="fixed inset-y-0 max-w-full flex"
           :class="[
             position === 'right' && 'right-0',
             position === 'left' && 'left-0',
           ]">
        <transition
          enter-active-class="transition ease-out transform"
          :enter-from-class="proxyAnimationFrom"
          :enter-to-class="proxyAnimationTo"
          leave-active-class="transition ease-out transform"
          :leave-from-class="proxyAnimationTo"
          :leave-to-class="proxyAnimationFrom">
          <slot v-if="show"
                name="dialog">
            <div class="bg-white shadow-xl w-screen"
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
  </div>
</template>

<script lang="ts">
import BaseIcon from '/-/plugins/icons/components/icon.vue'
import BaseButton from '../button/base-button.vue'

const sizes = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-screen-sm',
  full: 'max-w-full',
}

export default {
  name: 'BaseOverlay',
  components: {
    BaseIcon,
    BaseButton
  },
  props: {
    speed: {
      type: [String, Number],
      default: 300
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Boolean],
      default: 'md'
    },
    position: {
      type: String,
      default: 'right'
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
      const classes = ['transform']

      if (this.position === 'right') {
        classes.push('translate-x-full')
      }

      if (this.position === 'left') {
        classes.push('-translate-x-full')
      }

      return classes.join(' ')
    },
    proxyAnimationTo() {
      const classes = ['transform', 'translate-x-0']

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
