<template>
  <div class="fixed z-40 inset-0 overflow-y-auto"
       :class="[
         !isVisible && 'pointer-events-none'
       ]">
    <div class="flex items-end justify-center min-h-screen pt-4 sm:block sm:p-0 text-center"
         :class="[!fullscreen && 'px-4 pb-20']">
      <transition
        enter-active-class="transition-opacity ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="isVisible"
             class="fixed inset-0 bg-gray-900 bg-opacity-75"
             :class="[proxySpeed]"
             aria-hidden="true"
             @click="close" />
      </transition>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true">
        &#8203;
      </span>

      <transition
        enter-active-class="transition ease-out transform"
        :enter-from-class="proxyAnimation.from"
        :enter-to-class="proxyAnimation.to"
        leave-active-class="transition ease-out transform"
        :leave-from-class="proxyAnimation.to"
        :leave-to-class="proxyAnimation.from">
        <slot v-if="isVisible"
              name="dialog">
          <div class="relative inline-block text-left shadow-xl transform sm:my-8 sm:align-middle w-full"
               :class="[
                 proxySize,
                 proxySpeed,
                 proxyRounded,
                 look
               ]">
            <slot name="header">
              <div class="flex justify-between items-center px-6 h-16">
                <div class="font-medium leading-6 truncate">
                  {{ title }}
                </div>
                <BaseButton look="link"
                            color="current"
                            size="square-sm"
                            @click="close">
                  <BaseIcon name="outline/x" />
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
import { defineComponent } from 'vue'
import { setup, MODAL_PROPS } from './'
import BaseIcon from '/-/plugins/icons/components/icon.vue'
import BaseButton from '/-/components/button/base-button.vue'

export default defineComponent({
  name: 'BaseModal',
  components: {
    BaseIcon,
    BaseButton
  },
  props: MODAL_PROPS,
  setup
})
</script>
