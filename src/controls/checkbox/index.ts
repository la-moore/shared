import { computed, ExtractPropTypes, SetupContext } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { controlSetup, CONTROL_PROPS } from '../control'
// import { useTheme } from '../../../plugins/theme'

// const { createThemeComponent } = useTheme()

export const CHECKBOX_LOOKS: any = {
  primary: 'bg-primary-600 text-white',
  secondary: 'bg-gray-600 text-white',
  success: 'bg-green-600 text-white',
  destructive: 'bg-red-600 text-white',
  info: 'bg-blue-600 text-white',
  warning: 'bg-yellow-600 text-white',
  disabled: 'bg-gray-300 pointer-events-none',
}

export const CHECKBOX_THEMES: any = {
  main: defineComponent(() => import('./base-checkbox.vue')),
}

export const CHECKBOX_PROPS = {
  ...CONTROL_PROPS,
  look: {
    type: String,
    default: 'primary'
  },
  hideInput: {
    type: Boolean,
    default: false,
  },
}

function setup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof CHECKBOX_PROPS> = params

  const control = controlSetup(params, ctx)

  const proxyLook = computed(() => {
    if (props.disabled) {
      return CHECKBOX_LOOKS.disabled
    }

    if (props.error) {
      return CHECKBOX_LOOKS.destructive
    }

    return CHECKBOX_LOOKS[props.look] || props.look
  })

  return {
    ...control,
    proxyLook
  }
}

const Checkbox = CHECKBOX_THEMES.main

export {
  Checkbox,
  setup
}
