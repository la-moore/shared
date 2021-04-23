<template>
  <div class="relative inline-block">
    <div @click="show">
      <slot />
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0">
      <div v-show="isVisible"
           ref="menu"
           class="absolute w-48 my-2"
           :class="[
             proxyLevel,
             canOpenLeft ? 'right-0' : 'left-0',
             canOpenBottom ? 'top-full' : 'bottom-full',
             `origin-${canOpenBottom ? 'top' : 'bottom'}-${canOpenLeft ? 'right' : 'left'}`
           ]"
           @click="hide">
        <slot name="menu" />
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
    }
  },
  data() {
    return {
      canOpenLeft: false,
      canOpenBottom: false,
      isVisible: false,
    }
  },
  computed: {
    proxyLevel() {
      return this.level && `z-${this.level}`
    }
  },
  mounted() {
    const el = this.$el

    function handler(e: any) {
      const elements = e.path || (e.composedPath && e.composedPath())

      if (elements && elements.length > 0) {
        elements.unshift(e.target)
      }

      if (el.__clickaway__ && !el.contains(e.target)) {
        el.__clickaway__.callback(e)
      }
    }

    el.__clickaway__ = {
      handler: handler,
      callback: this.hide,
    }

    setTimeout(() => {
      const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'

      document.addEventListener(clickHandler, handler, true)
    }, 0)
  },
  beforeUnmount() {
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'

    if (this.$el.__clickaway__) {
      document.removeEventListener(clickHandler, this.$el.__clickaway__.handler, true)
      delete this.$el.__clickaway__
    }
  },
  methods: {
    show() {
      this.isVisible = true

      this.$nextTick(() => {
        this.checkPositionX()
        this.checkPositionY()
      })
    },
    hide() {
      this.isVisible = false
    },
    checkPositionX() {
      const parent: HTMLElement = this.parent

      const rectEl = this.$el.getBoundingClientRect()
      const rectMenu = this.$refs.menu.getBoundingClientRect()

      if (this.parent) {
        const rectParent = parent.getBoundingClientRect()

        this.canOpenLeft = rectEl.left - rectParent.left > rectMenu.width
      } else {
        this.canOpenLeft = rectEl.left > rectMenu.width
      }
    },
    checkPositionY() {
      const parent: HTMLElement = this.parent

      const rectEl = this.$el.getBoundingClientRect()
      const rectMenu = this.$refs.menu.getBoundingClientRect()

      if (this.parent) {
        const rectParent = parent.getBoundingClientRect()

        this.canOpenBottom = rectEl.top + rectMenu.height + 50 < rectParent.bottom
      } else {
        this.canOpenBottom = window.innerHeight - rectEl.top > rectMenu.height + 50
      }
    }
  }
})
</script>