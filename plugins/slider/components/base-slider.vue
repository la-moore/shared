<template>
  <div class="">
    <div ref="slider"
         class="scroll-snap-x scroll-behavior-smooth flex overflow-x-scroll scrollbar-none"
         @scroll="onScroll">
      <slot />
    </div>

    <div v-if="showNav"
         class="flex space-x-1 justify-center mt-4">
      <template v-for="idx in slidesPositions.length"
                :key="idx">
        <div class="w-3 h-3 rounded-full cursor-pointer transition"
             :class="[
               index === idx - 1 ? 'bg-primary-500' : 'bg-gray-200'
             ]"
             @click="() => onClick(idx)" />
      </template>
    </div>
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
    onClick(idx) {
      this.$refs.slider.scrollTo(this.slidesPositions[idx - 1], 0)
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
