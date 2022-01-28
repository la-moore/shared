import { SetupContext, ref, watch } from 'vue'

export const CONTROL_PROPS = {
  value: {
    type: [String, Number, Boolean, Array],
    default: '',
  },
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
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
  look: {
    type: String,
    default: 'main',
  },
}

export function controlSetup(params, ctx: SetupContext) {
  const localValue = ref(params.modelValue || params.value)

  watch(localValue, (value) => {
    ctx.emit('update:modelValue', value)
  })

  watch(() => params.modelValue, (value) => {
    localValue.value = value
  })

  watch(() => params.value, (value) => {
    localValue.value = value
  })

  return {
    localValue
  }
}
