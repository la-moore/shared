<template>
  <div class="flex-shrink-0 w-full group block">
    <div class="flex items-center"
         :class="[
           proxyAlign
         ]">
      <div class="flex-shrink-0 relative"
           :class="proxySize">
        <BaseRatio class="overflow-hidden text-white"
                   :class="[proxyRounded, avatarClass]"
                   :src="src">
          <slot name="icon">
            <div v-if="!src"
                 class="absolute inset-0 flex items-center justify-center"
                 :class="[stubClass]">
              <BaseIcon v-if="!src"
                        :name="icon"
                        class="w-full h-full"
                        :size="false" />
            </div>
          </slot>
        </BaseRatio>

        <slot name="badge" />
      </div>
      <div :class="align === 'left' ? 'ml-3' : 'mr-3'">
        <slot name="title">
          <p v-if="title"
             class="leading-4 text-sm font-medium">
            {{ title }}
          </p>
        </slot>
        <slot name="text">
          <p v-if="text"
             class="leading-4 text-xs font-medium opacity-50">
            {{ text }}
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseIcon from '../icon/base-icon.vue'
import BaseRatio from '../ratio/base-ratio.vue'

const sizes = {
  sm: 'w-4',
  md: 'w-8',
  lg: 'w-10',
  xl: 'w-12',
  '2xl': 'w-16',
  '3xl': 'w-20',
  '4xl': 'w-28',
}

const align = {
  left: '',
  right: 'flex-row-reverse text-right',
}

const rounded = {
  normal: 'rounded',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

export default defineComponent({
  name: 'BaseAvatar',
  components: {
    BaseIcon,
    BaseRatio
  },
  props: {
    avatarClass: {
      type: String,
      default: ''
    },
    stubClass: {
      type: String,
      default: 'bg-gray-400 p-1'
    },
    icon: {
      type: [String, Boolean],
      default: 'solid/profile'
    },
    align: {
      type: [String, Boolean],
      default: 'left'
    },
    size: {
      type: [String, Boolean],
      default: 'md',
      validator: v => /sm|md|lg|xl/.test(v)
    },
    rounded: {
      type: [String, Boolean],
      default: 'full'
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  },
  computed: {
    proxySize() {
      return this.size && sizes[this.size]
    },
    proxyAlign() {
      return this.align && align[this.align]
    },
    proxyRounded() {
      return this.rounded && rounded[this.rounded]
    }
  }
})
</script>
