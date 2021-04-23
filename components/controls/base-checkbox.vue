<template>
  <label class="flex text-sm font-medium leading-5 text-gray-700 select-none cursor-pointer">
    <input v-model="proxyChecked"
           type="checkbox"
           class="hidden"
           v-bind="$attrs"
           :disabled="disabled"
           aria-label="">

    <span class="w-5 h-5 border border-gray-300 shadow-sm rounded-md block mr-3 flex justify-center items-center"
          :class="[
            proxyChecked && proxyTheme
          ]">
      <BaseIcon v-if="proxyChecked"
                name="outline_check"
                size="xs" />
    </span>

    {{ label }}
    {{ required ? '*' : '' }}
  </label>
</template>

<script lang="ts">
import BaseIcon from '../icon/base-icon.vue'

const themes = {
  primary: 'text-white bg-primary-600 hover:bg-primary-500',
  success: 'text-white bg-green-600 hover:bg-green-500',
  destructive: 'text-white bg-red-600 hover:bg-red-500',
  info: 'text-white bg-blue-600 hover:bg-blue-500',
}

export default {
  name: 'BaseCheckbox',
  components: {
    BaseIcon
  },
  props: {
    value: {
      type: [Number, Boolean, String, Object],
      default: undefined
    },
    modelValue: {
      type: [Boolean, String, Array],
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    rules: {
      type: [String, Function, Object],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: [String, Boolean],
      default: 'primary'
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      showPassword: false
    }
  },
  computed: {
    proxyTheme() {
      return this.theme && themes[this.theme]
    },
    proxyChecked: {
      get() {
        return Array.isArray(this.modelValue)
          ? this.modelValue.includes(this.value)
          : !!this.modelValue
      },
      set(val) {
        let value = val

        if (Array.isArray(this.modelValue)) {
          const i = this.modelValue.indexOf(this.value)

          value = i >= 0
            ? this.modelValue.filter(item => item !== this.value)
            : [...this.modelValue, this.value]
        }
        this.$emit('update:modelValue', value)
      },
    },
  }
}
</script>
