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
           proxyLook
         ]">
      <div v-if="$slots.left"
           class="-my-px -ml-px">
        <slot name="left" />
      </div>

      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <input v-model="localValue"
               class="appearance-none leading-10 focus:outline-none bg-transparent block w-full px-3 placeholder-gray-500 dark:placeholder-gray-400"
               :type="proxyType"
               :name="name"
               :placeholder="placeholder"
               :maxlength="maxlength"
               :disabled="disabled"
               :class="[
                 !$slots.left && 'rounded-l-md',
                 !hasRight && 'rounded-r-md',
               ]"
               aria-label="">
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
            <EyeOffIcon v-if="showPassword" />
            <EyeIcon v-else />
          </BaseButton>
        </slot>
      </div>
    </div>

    <slot name="input" />

    <ControlFooter :error-message="error">
      <div v-if="maxlength">
        <span>{{ `${modelValue.length} / ${maxlength}` }}</span>
      </div>
    </ControlFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, INPUT_PROPS } from './'
import BaseButton from '../../components/button/base-button.vue'
import ControlFooter from '../control-footer.vue'
import { EyeIcon, EyeOffIcon } from '@scarlab-icons/vue/outline'

export default defineComponent({
  name: 'BaseInput',
  components: {
    EyeIcon,
    EyeOffIcon,
    BaseButton,
    ControlFooter,
  },
  props: INPUT_PROPS,
  emits: ['update:modelValue'],
  setup
})
</script>
