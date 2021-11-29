import { computed, ExtractPropTypes, SetupContext } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '../../../plugins/theme'
import { controlSetup, CONTROL_PROPS } from '../control'

const { createThemeComponent } = useTheme()

export const CHECKBOX_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-checkbox.vue')),
}

export const CHECKBOX_LOOKS: any = {
  primary: 'bg-primary-600 text-white',
  secondary: 'bg-gray-600 text-white',
  success: 'bg-green-600 text-white',
  destructive: 'bg-red-600 text-white',
  info: 'bg-blue-600 text-white',
  warning: 'bg-yellow-600 text-white',
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

  const proxyLook = computed(() => {
    return CHECKBOX_LOOKS[props.look] || props.look
  })

  const control = controlSetup(params, ctx)

  return {
    ...control,
    proxyLook
  }
}

const Checkbox = createThemeComponent(CHECKBOX_THEMES)

export {
  Checkbox,
  setup
}
