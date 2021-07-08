<template>
  <div
    v-if="entryIcon"
    :data-icon="name"
    :class="[
      proxySize
    ]"
    v-html="entryIcon" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useIcons } from '/-/plugins/icons'

const sizes = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
}

export default defineComponent({
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Boolean],
      default: 'md'
    }
  },
  computed: {
    entryIcon() {
      const { icons } = useIcons()

      return icons.value[this.name]
    },
    proxySize() {
      return this.size && sizes[this.size]
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.entryIcon) {
        const el = this.$el.querySelector('svg')

        if (el) {
          el.classList.add('block', 'w-full', 'h-full')
          el.removeAttribute('height')
          el.removeAttribute('width')
        }
      }
    })
  }
})
</script>
