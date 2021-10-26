import { computed, ExtractPropTypes, SetupContext } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '/-/plugins/theme'
import { controlSetup, CONTROL_PROPS } from '../control'

const { createThemeComponent } = useTheme()

export const TOGGLE_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-toggle.vue')),
}

export const TOGGLE_LOOKS: any = {
  primary: 'bg-primary-600 text-primary-600',
  secondary: 'bg-gray-600 text-gray-600',
  success: 'bg-green-600 text-green-600',
  destructive: 'bg-red-600 text-red-600',
  info: 'bg-blue-600 text-blue-600',
  warning: 'bg-yellow-600 text-yellow-600',
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

  const proxyLook = computed(() => {
    return TOGGLE_LOOKS[props.look] || props.look
  })

  const control = controlSetup(params, ctx)

  return {
    ...control,
    proxyLook
  }
}

const Toggle = createThemeComponent(TOGGLE_THEMES)

export {
  Toggle,
  setup
}
