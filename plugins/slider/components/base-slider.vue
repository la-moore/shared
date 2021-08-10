<template>
  <div class="">
    <div class="w-full h-full relative group">
      <div ref="slider"
           class="flex overflow-x-scroll scrollbar-none w-full h-full"
           :class="[
             disabled ? 'scroll-snap-none' : 'scroll-snap-x scroll-behavior-smooth'
           ]"
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
           class="flex space-x-1 h-4 items-center justify-center mt-4">
        <template v-for="(item, idx) in slidesPositions.length"
                  :key="idx">
          <slot name="nav-dot"
                v-bind="{ index, isActive: index === idx, slides: slidesPositions.length }">
            <div class="rounded-full cursor-pointer transition-all"
                 :class="[
                   index === idx ? 'bg-primary-500 w-4 h-4' : 'bg-gray-200 w-3 h-3'
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
import { debounce } from '/-/plugins/helpers'
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
    },
    canDrag: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change', 'scroll'],
  data() {
    return {
      startX: 0,
      scrollPos: false,
      disabled: false,
      isDown: false,
      scrollStart: 0,
      scrollLeft: 0,
      slidesPositions: [],
      allSlidesPositions: []
    }
  },
  computed: {
    index() {
      return this.slidesPositions.findIndex((value) => this.scrollLeft <= value)
    }
  },
  watch: {
    index(index) {
      this.$emit('change', index)
    }
  },
  mounted() {
    window.addEventListener('resize', this.getSlidesPosition)

    this.$nextTick(() => {
      this.getSlidesPosition()

      const slider = this.$refs.slider

      slider.addEventListener('scroll', this.onScroll)
      slider.addEventListener('mousedown', this.onMousedown)
      slider.addEventListener('mouseleave', this.onMouseLeave)
      slider.addEventListener('mouseup', this.onMouseUp)
      slider.addEventListener('mousemove', this.onMouseMove)
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.getSlidesPosition)

    this.$refs.slider.removeEventListener('scroll', this.onScroll)
    this.$refs.slider.removeEventListener('mousedown', this.onMousedown)
    this.$refs.slider.removeEventListener('mouseleave', this.onMouseLeave)
    this.$refs.slider.removeEventListener('mouseup', this.onMouseUp)
    this.$refs.slider.removeEventListener('mousemove', this.onMouseMove)
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
    slideTo(idx, instant = false) {
      this.$nextTick(() => {
        this.$refs.slider.scrollTo({
          left: this.slidesPositions[idx],
          behavior: instant && 'instant'
        })
      })
    },
    getSlidesPosition() {
      const width = this.$refs.slider?.clientWidth || 0
      const children = this.$refs.slider?.children || []
      const slides = []
      const allSlides = []
      const localSlides = [0]

      for (let i = 1; i <= children.length - 1; i++) {
        const slide = localSlides[localSlides.length - 1] + children[i].clientWidth

        localSlides.push(slide)
      }

      for (let i = 0; i <= localSlides.length - 1; i++) {
        const v = width / children[i].clientWidth

        allSlides.push([
          localSlides[i] - (children[i].clientWidth / 2),
          localSlides[i] + (children[i].clientWidth / 2),
          localSlides[i]
        ])

        if (i % Math.floor(v) === 0) {
          slides.push(localSlides[i])
        }
      }

      this.allSlidesPositions = allSlides
      this.slidesPositions = slides
    },

    debounceOnScroll: debounce(async function() {
      if (!this.isDown) {
        this.disabled = false
      }
    }, 50),
    onScroll(e) {
      this.scrollLeft = e.target.scrollLeft
      this.$emit('scroll', this.index)

      this.debounceOnScroll()
    },
    onMousedown(e) {
      if (this.canDrag) {
        this.isDown = true
        this.disabled = true
        this.startX = e.pageX - this.$refs.slider.offsetLeft
        this.scrollStart = this.$refs.slider.scrollLeft
      }
    },
    onMouseLeave() {
      if (!this.isDown || !this.canDrag) return

      this.onMouseUp()
    },
    onMouseMove(e) {
      if (!this.isDown || !this.canDrag) return

      e.preventDefault()
      const x = e.pageX - this.$refs.slider.offsetLeft
      const walk = x - this.startX

      this.$refs.slider.scrollLeft = this.scrollStart - walk
      this.scrollPos = this.$refs.slider.scrollLeft
    },
    onMouseUp() {
      this.isDown = false

      if (!this.canDrag) return

      const slidePos = this.allSlidesPositions.find(([s, e]) => this.scrollPos >= s && this.scrollPos <= e)

      if (slidePos !== this.scrollLeft) {
        this.$refs.slider.scrollTo({
          left: slidePos[2],
          behavior: 'smooth'
        })
      }
    },
  }
})
</script>
