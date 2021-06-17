import { SetupContext, computed, ref, reactive } from 'vue'
import { useField } from 'vee-validate'
import './rules'

interface InputProps {
  modelValue?: string
  maxlength?: number
  name?: string
  rules?: any
  error?: string
  mask?: any
  disabled?: boolean
  required?: boolean
  [key: string]: any
}

export interface OptionInterface {
  label: string,
  value: number | string
}

export function setup(props: InputProps, ctx: SetupContext) {
  const { emit } = ctx
  const localValue = ref(null)
  const needValidation = ref(false)
  const handlers: Record<string, any> = reactive({
    input(e) {
      let value = e.target?.value || e.target?.innerText

      if (props.type === 'number') {
        value = parseFloat(value || 0)
      }
      if (props.type === 'number') {
        value = parseFloat(value || 0)
      } else {
        localValue.value = value.replace(/<(.|\n)*?>/g, '')
      }

      emit('update:modelValue', value)
    },
    keypress(e) {
      const value = e.target?.value || e.target?.innerText

      if (props.maxlength && value.length >= props.maxlength) {
        e.preventDefault()
      }
    }
  })
  const options = {
    errorMessage: computed(() => props.disabled ? '' : props.error),
    isValid: computed(() => true),
    handlers,
    localValue
  }

  const rules = (props.required && !props.rules) ? 'required' : props.rules
  const {
    errorMessage,
    handleChange,
    handleBlur,
    handleInput,
    meta,
    validate,
  } = useField(props.name, rules, { initialValue: props.modelValue })

  if (props.name) {
    needValidation.value = true
    handlers.change = handleChange
    handlers.blur = function(e) {
      handleBlur()
      handleInput(e)
      validate().then()
    }

    options.isValid = computed(() => meta.valid && (meta.touched || !errorMessage.value))
    options.errorMessage = computed(() => {
      return props.disabled ? '' : (props.error || (errorMessage && errorMessage.value))
    })
  }

  return {
    ...options,
    needValidation,
    handleChange,
    handleBlur,
    handleInput,
    validate
  }
}
