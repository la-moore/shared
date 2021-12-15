import { computed, ExtractPropTypes, inject, ref, SetupContext, toRef, watch } from 'vue'
import { FieldContext } from 'vee-validate'

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
}

export function controlSetup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof CONTROL_PROPS> = params

  const form = inject('form', null)
  const useField = inject('useField', null)

  const localValue = ref(props.value || props.modelValue)
  const name = toRef(props, 'name')

  const rules = computed(() => {
    if (props.disabled) return ''

    if (props.rules) return props.rules

    return props.required ? 'required' : ''
  })

  const errorMessage = computed(() => {
    return props.disabled ? '' : (props.error || field?.errorMessage.value)
  })

  const isNumber = computed(() => props.type === 'number')

  const field: FieldContext = useField && useField(props.name, rules, { initialValue: props.modelValue })

  watch(() => props.value, (newValue) => {
    if (newValue !== localValue.value) {
      setValue(newValue)
    }
  })

  watch(() => props.modelValue, (newValue) => {
    if (newValue !== localValue.value) {
      setValue(newValue)
    }
  })

  watch(localValue, (value) => {
    ctx.emit('update:modelValue', value)
  })

  function setValue(value) {
    localValue.value = value
    ctx.emit('update:modelValue', value)
  }

  const handlers = {
    input: (e) => {
      const value = e.target.value

      if (isNumber.value) {
        setValue(parseFloat(value))
      } else {
        setValue(value)
      }
    },
    change: (e) => {
      const value = e.target.value

      field?.handleChange(value)
    },
    blur: () => {
      if (name.value && rules) {
        field?.handleBlur()
        field?.validate()
      }
    },
  }

  return {
    form,
    field,
    handlers,
    localValue,
    errorMessage
  }
}
