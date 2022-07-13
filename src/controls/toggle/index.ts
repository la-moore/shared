import { computed, ExtractPropTypes, SetupContext } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { controlSetup, CONTROL_PROPS } from '../control'
// import { useTheme } from '../../../plugins/theme'

// const { createThemeComponent } = useTheme()

export const TOGGLE_LOOKS: any = {
  primary: 'bg-primary-600 text-primary-600',
  secondary: 'bg-gray-600 text-gray-600',
  success: 'bg-green-600 text-green-600',
  destructive: 'bg-red-600 text-red-600',
  info: 'bg-blue-600 text-blue-600',
  warning: 'bg-yellow-600 text-yellow-600',
  disabled: 'bg-gray-200 text-gray-200 pointer-events-none',
}

export const TOGGLE_THEMES: any = {
  main: defineComponent(() => import('./base-toggle.vue')),
}

export const TOGGLE_PROPS = {
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
  const props: ExtractPropTypes<typeof TOGGLE_PROPS> = params

  const control = controlSetup(params, ctx)

  const proxyLook = computed(() => {
    if (props.disabled) {
      return TOGGLE_LOOKS.disabled
    }

    if (props.error) {
      return TOGGLE_LOOKS.destructive
    }

    return TOGGLE_LOOKS[props.look] || props.look
  })

  return {
    ...control,
    proxyLook
  }
}

const Toggle = TOGGLE_THEMES.main

export {
  Toggle,
  setup
}
