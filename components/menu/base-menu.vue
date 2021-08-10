<template>
  <div v-clickaway="hide"
       class="inline-block">
    <div @click="show">
      <slot v-bind="{ isVisible }" />
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      :enter-from-class="proxyAnimationFrom"
      :enter-to-class="proxyAnimationTo"
      leave-active-class="transition duration-75 ease-in"
      :leave-from-class="proxyAnimationTo"
      :leave-to-class="proxyAnimationFrom">
      <div v-show="isVisible"
           ref="menu"
           class="absolute w-full pointer-events-none"
           :class="[
             proxyLevel,
             proxyOrigin,
             proxyPosition
           ]"
           @click="onClick">
        <slot name="menu"
              v-bind="{ isVisible }" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseMenu',
  props: {
    parent: {
      type: Object,
      default: undefined
    },
    level: {
      type: [String, Number],
      default: 10
    },
    animation: {
      type: String,
      default: 'scale'
    },
    direction: {
      type: String,
      default: 'vertical'
    },
    origin: {
      type: String,
      default: undefined
    },
    toggle: {
      type: Boolean,
      default: false
    },
    hideOnClick: {
      type: Boolean,
      default: true
    }
  },
  emits: ['show', 'hide'],
  data() {
    return {
      localPosition: 'bottom',
      canOpenLeft: false,
      canOpenBottom: false,
      isVisible: false,
    }
  },
  computed: {
    proxyAnimationFrom() {
      const classes = ['transform', 'opacity-0']

      if (this.animation === 'scale') {
        classes.push('scale-95')
      }

      if (this.animation === 'translate') {
        if (this.direction === 'vertical') {
          classes.push(this.localPosition === 'bottom' ? '-translate-y-4' : 'translate-y-4')
        } else {
          classes.push(this.localPosition === 'left' ? 'translate-x-4' : '-translate-x-4')
        }
      }

      return classes.join(' ')
    },
    proxyAnimationTo() {
      const classes = ['transform', 'opacity-100']

      if (this.animation === 'scale') {
        classes.push('scale-100')
      }

      if (this.animation === 'translate') {
        classes.push('translate-y-0 translate-x-0')
      }

      return classes.join(' ')
    },
    proxyLevel() {
      return this.level && `z-${this.level}`
    },
    proxyOrigin() {
      const origin = ['origin']

      if (this.direction === 'vertical') {
        origin.push(this.localPosition === 'bottom' ? 'top' : 'bottom')
      } else {
        origin.push(this.localPosition === 'left' ? 'right' : 'left')
      }

      if (this.origin) {
        origin.push(this.origin)
      }

      return origin.join('-')
    },
    proxyPosition() {
      let classes = ''

      if (this.direction === 'vertical') {
        classes = this.localPosition === 'bottom' ? 'top-full left-0' : 'bottom-full left-0'
      } else {
        classes = this.localPosition === 'left' ? 'right-full top-0' : 'left-full top-0'
      }

      return classes
    }
  },
  methods: {
    show() {
      if (this.toggle && this.isVisible) {
        return this.hide()
      }

      this.isVisible = true

      this.$nextTick(() => {
        this.checkPosition()
      })
      this.$emit('show')
    },
    hide() {
      this.isVisible = false
      this.$emit('hide')
    },
    checkPositionLeft() {
      const parent: HTMLElement = this.parent

      const rectEl = this.$el.getBoundingClientRect()
      const rectMenu = this.$refs.menu.getBoundingClientRect()

      if (this.parent) {
        const rectParent = parent.getBoundingClientRect()

        return rectEl.left - rectParent.left > rectMenu.width
      } else {
        return rectEl.left > rectMenu.width
      }
    },
    checkPositionBottom() {
      const parent: HTMLElement = this.parent

      const rectEl = this.$el.getBoundingClientRect()
      const rectMenu = this.$refs.menu.getBoundingClientRect()

      if (this.parent) {
        const rectParent = parent.getBoundingClientRect()

        return rectEl.top + rectMenu.height + 50 < rectParent.bottom
      } else {
        return window.innerHeight - rectEl.top > rectMenu.height + 50
      }
    },
    checkPosition() {
      const position = []

      if (this.direction === 'vertical') {
        position.push(this.checkPositionBottom() ? 'bottom' : 'top')
      } else {
        position.push(this.checkPositionLeft() ? 'left' : 'right')
      }

      this.localPosition = position.join('-')
    },
    onClick() {
      if (this.hideOnClick) {
        this.hide()
      }
    }
  }
})
</script>
