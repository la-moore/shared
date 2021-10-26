<template>
  <transition
    enter-active-class="transition-opacity ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-if="isVisible"
         class="fixed inset-0 transition-opacity z-40"
         :class="`duration-${speed}`"
         aria-hidden="true"
         v-on="!disableClose ? { click: () => close() } : {}">
      <div class="absolute inset-0 bg-gray-900 opacity-75" />
    </div>
  </transition>

  <transition
    enter-active-class="transition ease-in-out transform"
    enter-from-class="scale-95 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="transition ease-in-out transform"
    leave-from-class="scale-100 opacity-100"
    leave-to-class="scale-95 opacity-0">
    <div v-if="isVisible"
         class="fixed z-40 inset-0 overflow-y-auto pointer-events-none"
         :class="[
           proxySpeed
         ]">
      <div class="min-h-screen text-center block">
        <span class="inline-block align-middle h-screen"
              aria-hidden="true">
          &#8203;
        </span>

        <div class="text-left inline-block align-middle w-full px-4"
             :class="[proxySize]">
          <slot name="dialog">
            <div class="rounded-lg shadow-xl z-10 relative my-6 sm:my-8 pointer-events-auto"
                 :class="[look]"
                 role="dialog"
                 aria-modal="true"
                 aria-labelledby="modal-headline">
              <slot name="header">
                <div class="flex justify-between items-center px-6 h-16">
                  <div class="flex-1 flex" />
                  <div class="font-medium leading-6 truncate">
                    {{ title }}
                  </div>
                  <div class="flex-1 flex">
                    <BaseButton v-if="!hideClose && !disableClose"
                                look="link"
                                color="current"
                                size="square-sm"
                                class="ml-auto"
                                @click="close">
                      <BaseIcon name="outline/x" />
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
import { defineComponent } from 'vue'
import { setup, DIALOG_PROPS } from './'
import BaseIcon from '/-/plugins/icons/components/icon.vue'
import BaseButton from '/-/components/button/base-button.vue'

export default defineComponent({
  name: 'BaseDialog',
  components: {
    BaseIcon,
    BaseButton
  },
  props: DIALOG_PROPS,
  setup
})
</script>
