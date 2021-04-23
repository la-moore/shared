<template>
  <div class="bg-no-repeat bg-center relative"
       :class="[proxySize]"
       :style="{ paddingBottom: percent+'%', backgroundImage }">
    <div v-if="$slots.default"
         class="absolute inset-0 flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
const sizes = {
  contain: 'bg-contain',
  cover: 'bg-cover',
}

export default {
  name: 'BaseRatio',
  props: {
    src: {
      type: String,
      default: ''
    },
    ratio: {
      type: Number,
      default: 1
    },
    size: {
      type: [String, Boolean],
      default: 'contain'
    },
    loading: Boolean
  },
  computed: {
    percent() {
      return (this.ratio) * 100
    },
    backgroundImage() {
      return this.src ? `url(${this.src})` : undefined
    },
    proxySize() {
      return this.size && sizes[this.size]
    }
  }
}
</script>
