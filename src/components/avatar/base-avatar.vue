<template>
  <div class="flex-shrink-0 group block">
    <div class="flex items-center"
         :class="proxyReverse">
      <div class="flex -space-x-3 flex-shrink-0 relative">
        <template v-for="(backgroundImage, idx) in proxyBackground"
                  :key="idx">
          <div class="inline-flex items-center justify-center bg-center bg-cover"
               :style="backgroundImage"
               :class="[
                 proxySize,
                 proxyLook,
                 proxyRing,
                 proxyRounded,
                 proxyTextSize
               ]">
            <template v-if="!hideStub && !backgroundImage">
              <slot v-if="$slots.icon"
                    name="icon" />
              <div v-else-if="stub"
                   class="font-bold leading-none uppercase">
                {{ stub }}
              </div>
              <div v-else-if="stubContent"
                   class="font-bold leading-none uppercase">
                {{ stubContent }}
              </div>
              <slot name="stub" />
            </template>
          </div>
        </template>

        <slot name="badge" />
      </div>
      <div v-if="hasContent"
           class="flex-1 flex flex-col truncate"
           :class="reverse ? 'mr-3' : 'ml-3'">
        <p v-if="title"
           class="font-medium truncate"
           :class="proxyTextSize">
          {{ title }}
        </p>
        <p v-if="text"
           class="text-gray-500 truncate group-hover:text-gray-700"
           :class="proxyTextSize">
          {{ text }}
        </p>
      </div>
      <slot v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, AVATAR_PROPS } from './'

export default defineComponent({
  name: 'BaseAvatar',
  props: AVATAR_PROPS,
  setup
})
</script>
