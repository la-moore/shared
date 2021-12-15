<template>
  <div class="fixed z-40 inset-0 overflow-hidden"
       :class="!isVisible && 'pointer-events-none'">
    <div class="absolute inset-0 overflow-hidden">
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

      <div class="fixed inset-y-0 max-w-full flex"
           :class="[
             position === 'right' && 'right-0',
             position === 'left' && 'left-0',
           ]">
        <transition
          enter-active-class="transition ease-out transform"
          :enter-from-class="proxyAnimation.from"
          :enter-to-class="proxyAnimation.to"
          leave-active-class="transition ease-out transform"
          :leave-from-class="proxyAnimation.to"
          :leave-to-class="proxyAnimation.from">
          <slot v-if="isVisible"
                name="dialog">
            <div class="shadow-xl w-screen overflow-y-auto"
                 :class="[
                   proxySpeed,
                   proxySize,
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
                    <XAltIcon />
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
import { defineComponent } from 'vue'
import { setup, OVERLAY_PROPS } from './'
import BaseButton from '../../components/button/base-button.vue'
import { XAltIcon } from '@scarlab/icons-vue/outline'

export default defineComponent({
  name: 'BaseOverlay',
  components: {
    XAltIcon,
    BaseButton
  },
  props: OVERLAY_PROPS,
  setup
})
</script>
