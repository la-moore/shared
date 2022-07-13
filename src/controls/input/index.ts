import { computed, ExtractPropTypes, ref, SetupContext } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
// import { useTheme } from '../../../plugins/theme'
import { controlSetup, CONTROL_PROPS } from '../control'

// const { createThemeComponent } = useTheme()

export const INPUT_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-input.vue')),
}

export const INPUT_LOOKS = {
  main: 'focus-within:border-blue-300 dark:focus-within:border-blue-600 dark:border-gray-500',
  primary: 'focus-within:border-primary-300 dark:focus-within:border-primary-600 dark:border-primary-500',
  destructive: 'border-red-400',
  success: 'border-green-400',
  disabled: 'pointer-events-none bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-500',
}

export const INPUT_PROPS = {
  ...CONTROL_PROPS,
  look: {
    type: String,
    default: 'main',
  },
  hideInput: {
    type: Boolean,
    default: false,
  },
  maxlength: {
    type: Number,
    default: undefined,
  },
}

function setup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof INPUT_PROPS> = params

  const control = controlSetup(params, ctx)

  const isFocused = ref(false)
  const showPassword = ref(false)

  const hasRight = computed(() => {
    return ctx.slots.right || props.type === 'password'
  })

  const proxyType = computed(() => {
    if (props.type === 'password') {
      return showPassword.value ? 'text' : 'password'
    }

    return props.type
  })

  const proxyLook = computed(() => {
    if (props.disabled) {
      return INPUT_LOOKS.disabled
    }

    if (props.error) {
      return INPUT_LOOKS.destructive
    }

    return INPUT_LOOKS[props.look] || props.look
  })

  return {
    ...control,
    hasRight,
    proxyLook,
    proxyType,
    isFocused,
    showPassword
  }
}

const Input = INPUT_THEMES.main

export {
  Input,
  setup
}
