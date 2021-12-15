<template>
  <div class="fixed z-40 inset-0 overflow-hidden select-none"
       :class="!show && 'pointer-events-none'">
    <div class="w-full h-full flex flex-col">
      <transition
        enter-active-class="ease-out transition-opacity"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-out transition-opacity"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="show"
             class="fixed inset-0 bg-gray-900 bg-opacity-80"
             aria-hidden="true" />
      </transition>

      <transition
        enter-active-class="transition ease-out transform"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition ease-out transform"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0">
        <div v-if="show"
             class="relative w-full h-full flex items-center justify-center">
          <BaseSlider ref="slider"
                      class="w-full h-full"
                      hide-nav
                      hide-dots
                      can-drag>
            <template v-for="(photo, idx) in images"
                      :key="idx">
              <BaseSliderItem class="w-full h-full my-auto flex items-center justify-center py-12 px-4"
                              snap="center">
                <img :src="photo"
                     class="max-w-full max-h-full pointer-events-auto shadow-lg"
                     alt="">
              </BaseSliderItem>
            </template>
          </BaseSlider>
        </div>
      </transition>

      <transition
        enter-active-class="transition delay-300 ease-out transform"
        enter-from-class="-translate-x-full opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition ease-out transform"
        leave-from-class="-translate-x-0 opacity-100"
        leave-to-class="-translate-x-full opacity-0">
        <div v-if="show"
             class="absolute top-1/2 left-0 z-10 -mt-5">
          <slot name="arrow-left">
            <div class="text-gray-300 w-10 h-10 flex bg-opacity-70 bg-gray-900 items-center justify-center cursor-pointer"
                 @click="() => $refs.slider.slideToPrev()">
              <ChevronLeftIcon />
            </div>
          </slot>
        </div>
      </transition>

      <transition
        enter-active-class="transition delay-300 ease-out transform"
        enter-from-class="translate-x-full opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition ease-out transform"
        leave-from-class="-translate-x-0 opacity-100"
        leave-to-class="translate-x-full opacity-0">
        <div v-if="show"
             class="absolute top-1/2 right-0 z-10 -mt-5">
          <slot name="arrow-right">
            <div class="text-gray-300 w-10 h-10 flex bg-opacity-70 bg-gray-900 items-center justify-center cursor-pointer"
                 @click="() => $refs.slider.slideToNext()">
              <ChevronRightIcon />
            </div>
          </slot>
        </div>
      </transition>

      <transition
        enter-active-class="transition ease-out transform"
        enter-from-class="-translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition ease-out transform"
        leave-from-class="-translate-y-0 opacity-100"
        leave-to-class="-translate-y-full opacity-0">
        <div v-if="show"
             class="absolute z-10 w-full top-0 flex justify-end">
          <div class="text-gray-300 w-10 h-10 flex bg-opacity-70 bg-gray-900 items-center justify-center cursor-pointer"
               @click="close">
            <XAltIcon />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseSlider from '../../../plugins/slider/components/base-slider.vue'
import BaseSliderItem from '../../../plugins/slider/components/base-slider-item.vue'
import { XAltIcon, ChevronRightIcon, ChevronLeftIcon } from '@scarlab/icons-vue/outline'

export default defineComponent({
  name: 'BaseLightBox',
  components: {
    XAltIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    BaseSlider,
    BaseSliderItem
  },
  props: {
    speed: {
      type: [String, Number],
      default: 200
    },
    images: {
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

      return classes.join(' ')
    },
    proxyAnimationTo() {
      const classes = ['transform', 'opacity-100']

      if (this.animation === 'scale') {
        classes.push('scale-100')
      }

      return classes.join(' ')
    },
  },
  methods: {
    open(slide = 0) {
      this.show = true

      this.$nextTick(() => {
        this.$refs.slider.slideTo(slide, true)
      })
    },
    close() {
      this.show = false
      this.$emit('close')
    }
  }
})
</script>
