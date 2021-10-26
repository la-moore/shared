<template>
  <div class="relative">
    <label v-if="label"
           class="mb-1 block text-sm font-medium">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>
    <div v-show="!hideInput && !$slots.input"
         class="flex rounded-md shadow-sm h-10 border transition"
         :class="[
           errorMessage ? 'border-red-400' : 'focus-within:border-blue-300 dark:focus-within:border-blue-600 dark:border-gray-500',
           disabled && 'pointer-events-none bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-500'
         ]">
      <div v-if="$slots.left"
           class="-my-px -ml-px">
        <slot name="left" />
      </div>
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <input class="appearance-none focus:outline-none bg-transparent block w-full px-3"
               :type="proxyType"
               :name="name"
               :value="localValue"
               :placeholder="placeholder"
               :maxlength="maxlength"
               :disabled="disabled"
               :class="[
                 !errorMessage && 'border-blue-300',
                 !$slots.left && 'rounded-l-md',
                 !hasRight && 'rounded-r-md',
               ]"
               aria-label=""
               v-on="handlers">
      </div>
      <div v-if="hasRight"
           class="-my-px -mr-px">
        <slot name="right">
          <BaseButton v-if="type === 'password'"
                      size="md"
                      look="link"
                      color="current"
                      rounded="rounded-r-md"
                      @click="showPassword = !showPassword">
            <BaseIcon :name="showPassword ? 'outline/eye-slash' : 'outline/eye'"
                      size="sm" />
          </BaseButton>
        </slot>
      </div>
    </div>
    <slot name="input" />
    <ControlFooter :error-message="errorMessage">
      <div v-if="maxlength">
        <span>{{ modelValue.length }}</span>
        <span class="mx-px">
          /
        </span>
        <span>{{ maxlength }}</span>
      </div>
    </ControlFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, INPUT_PROPS } from './'
import BaseIcon from '/-/plugins/icons/components/icon.vue'
import BaseButton from '/-/components/button/base-button.vue'
import ControlFooter from '../control-footer.vue'

export default defineComponent({
  name: 'BaseInput',
  components: {
    BaseIcon,
    BaseButton,
    ControlFooter,
  },
  props: INPUT_PROPS,
  emits: ['update:modelValue', 'unmasked'],
  setup
})
</script>
