<template>
  <div class="flex pt-px text-sm leading-5">
    <div class="flex-1">
      <transition enter-active-class="transition-all duration-300"
                  enter-from-class="transform -translate-y-3 opacity-0"
                  enter-to-class="transform translate-y-0 opacity-100"
                  leave-active-class="transition-all duration-300"
                  leave-from-class="transform translate-y-0"
                  leave-to-class="transform -translate-y-3 opacity-0">
        <span v-if="errorMessage"
              class="text-red-600">
          <slot name="error">
            {{ errorMessage }}
          </slot>
        </span>
      </transition>
    </div>

    <div class="flex-shrink-0 pl-6">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ControlFooter',
  props: {
    errorMessage: {
      type: String,
      default: ''
    }
  }
}
</script>
