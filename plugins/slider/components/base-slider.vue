<template>
  <div class="">
    <div class="relative group">
      <div ref="slider"
           class="scroll-snap-x scroll-behavior-smooth flex overflow-x-scroll scrollbar-none"
           @scroll="onScroll">
        <slot />
      </div>

      <template v-if="!hideNav">
        <div class="absolute top-1/2 left-1 transform -translate-y-1/2"
             @click="slideToPrev">
          <slot name="button-left">
            <div class="bg-white opacity-0 text-gray-500 hover:bg-gray-100 hover:-translate-x-0.5 hover:text-gray-700 group-hover:opacity-100 transition rounded-full w-10 h-10 flex justify-center items-center shadow-md cursor-pointer transform">
              <BaseIcon name="outline/arrow-left-1"
                        size="sm" />
            </div>
          </slot>
        </div>

        <div class="absolute top-1/2 right-1 transform -translate-y-1/2"
             @click="slideToNext">
          <slot name="button-right">
            <div class="bg-white opacity-0 text-gray-500 hover:bg-gray-100 hover:translate-x-0.5 hover:text-gray-700 group-hover:opacity-100 transition rounded-full w-10 h-10 flex justify-center items-center shadow-md cursor-pointer transform">
              <BaseIcon name="outline/arrow-right-1"
                        size="sm" />
            </div>
          </slot>
        </div>
      </template>
    </div>

    <slot name="nav"
          v-bind="{ index, slides: slidesPositions.length }">
      <div v-if="!hideDots"
           class="flex space-x-1 justify-center mt-4">
        <template v-for="(item, idx) in slidesPositions.length"
                  :key="idx">
          <slot name="nav-dot"
                v-bind="{ index, isActive: index === idx, slides: slidesPositions.length }">
            <div class="w-3 h-3 rounded-full cursor-pointer transition"
                 :class="[
                   index === idx ? 'bg-primary-500' : 'bg-gray-200'
                 ]"
                 @click="() => slideTo(idx)" />
          </slot>
        </template>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseIcon from '/-/components/icon/base-icon.vue'

export default defineComponent({
  name: 'BaseSlider',
  components: {
    BaseIcon,
  },
  props: {
    hideNav: {
      type: Boolean,
      default: false
    },
    hideDots: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDown: false,
      scrollLeft: 0,
      slidesPositions: []
    }
  },
  computed: {
    index() {
      return this.slidesPositions.findIndex((value) => this.scrollLeft <= value)
    }
  },
  mounted() {
    window.addEventListener('resize', this.getSlidesPosition)

    this.$nextTick(() => {
      this.getSlidesPosition()
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.getSlidesPosition)
  },
  methods: {
    slideToPrev() {
      const pos = this.slidesPositions[this.index - 1]

      if (pos >= 0) {
        this.$refs.slider.scrollTo(pos, 0)
      } else {
        this.$refs.slider.scrollTo(this.slidesPositions.slice(-1)[0], 0)
      }
    },
    slideToNext() {
      const pos = this.slidesPositions[this.index + 1]

      if (pos >= 0) {
        this.$refs.slider.scrollTo(pos, 0)
      } else {
        this.$refs.slider.scrollTo(this.slidesPositions[0], 0)
      }
    },
    slideTo(idx) {
      this.$refs.slider.scrollTo(this.slidesPositions[idx], 0)
    },
    onScroll(e) {
      this.scrollLeft = e.target.scrollLeft
    },
    getSlidesPosition() {
      const width = this.$refs.slider?.clientWidth || 0
      const children = this.$refs.slider?.children || []
      const slides = []
      const localSlides = [0]

      for (let i = 1; i <= children.length - 1; i++) {
        const slide = localSlides[localSlides.length - 1] + children[i].clientWidth

        localSlides.push(slide)
      }

      for (let i = 0; i <= localSlides.length - 1; i++) {
        const v = width / children[i].clientWidth

        if (i % Math.floor(v) === 0) {
          slides.push(localSlides[i])
        }
      }

      this.slidesPositions = slides
    }
  }
})
</script>
