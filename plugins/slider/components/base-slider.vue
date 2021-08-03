<template>
  <div class="">
    <div ref="slider"
         class="scroll-snap-x scroll-behavior-smooth flex overflow-x-scroll scrollbar-none"
         @scroll="onScroll">
      <slot />
    </div>

    <slot name="nav"
          v-bind="{ index, slides: slidesPositions.length }">
      <div v-if="showNav"
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

export default defineComponent({
  name: 'BaseSlider',
  props: {
    showNav: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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
      const scrollWidth = this.$refs.slider?.scrollWidth || 0
      const children = this.$refs.slider?.children || []
      const slides = [0]

      for (let i = 0; i < children.length - 1; i++) {
        const slide = slides[slides.length - 1] + children[i].clientWidth

        if (slide <= scrollWidth - width) {
          slides.push(slide)
        }
      }

      this.slidesPositions = slides
    }
  }
})
</script>
