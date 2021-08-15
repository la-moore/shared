<template>
  <div class="relative">
    <label v-if="label"
           class="block text-sm font-medium leading-5 mb-1">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <div class="rounded-md border border-gray-300 flex transition duration-150 ease-in-out items-center"
         :class="[
           (isFocused && !errorMessage) && 'border-blue-300',
           errorMessage ? 'border-red-400' : 'border-gray-300',
           disabled && 'cursor-not-allowed bg-gray-100',
         ]">
      <div v-if="$slots.left"
           :class="[
             disabled && 'pointer-events-none'
           ]">
        <slot name="left" />
      </div>

      <input class="appearance-none rounded-md bg-transparent flex-1 px-3 h-10 placeholder-gray-400 focus:outline-none sm:text-sm sm:leading-5"
             v-bind="{ ...$attrs, class: undefined }"
             :class="[
               disabled && 'pointer-events-none'
             ]"
             :value="typeof modelValue === 'undefined' ? value : modelValue"
             :type="proxyType"
             :disabled="disabled"
             :maxlength="maxlength"
             :placeholder="placeholder"
             aria-label=""
             v-on="handlers"
             @focus="isFocused = true"
             @blur="isFocused = false">

      <div v-if="$slots.right || type === 'password'"
           :class="[
             disabled && 'pointer-events-none'
           ]">
        <slot name="right">
          <BaseButton v-if="type === 'password'"
                      class="w-10 !p-0 rounded-l-none"
                      look="link"
                      theme="dark"
                      rounded="md"
                      @click="showPassword = !showPassword">
            <BaseIcon :name="showPassword ? 'outline/eye-slash' : 'outline/eye'"
                      size="sm" />
          </BaseButton>
        </slot>
      </div>
    </div>
    <div class="flex pt-px text-sm leading-4">
      <transition enter-active-class="transition-all duration-300"
                  enter-from-class="transform -translate-y-3 opacity-0"
                  enter-to-class="transform translate-y-0 opacity-100"
                  leave-active-class="transition-all duration-300"
                  leave-from-class="transform translate-y-0"
                  leave-to-class="transform -translate-y-3 opacity-0">
        <span v-if="!disabled && (errorMessage || $slots.error)"
              class="text-red-600">
          <slot name="error">
            {{ errorMessage }}
          </slot>
        </span>
      </transition>
      <div v-if="maxlength"
           class="flex-shrink-0 pl-6 ml-auto leading-5">
        <span>{{ modelValue.length }}</span>
        <span class="mx-px">
          /
        </span>
        <span>{{ maxlength }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup } from '../setup'
import BaseIcon from '/-/plugins/icons/components/icon.vue'
import BaseButton from '/-/components/button/base-button.vue'
import BaseControlCore from '../base-control-core.vue'

export default defineComponent({
  name: 'BaseInput',
  components: {
    BaseIcon,
    BaseButton
  },
  extends: BaseControlCore,
  emits: ['update:modelValue', 'unmasked'],
  setup,
  data() {
    return {
      showPassword: false
    }
  },
  computed: {
    proxyType() {
      if (this.type === 'password') {
        return this.showPassword ? 'text' : 'password'
      }

      return this.type
    }
  }
})
</script>
