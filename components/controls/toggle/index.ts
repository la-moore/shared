import { computed, ExtractPropTypes, SetupContext } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '../../../plugins/theme'
import { controlSetup, CONTROL_PROPS } from '../control'

const { createThemeComponent } = useTheme()

export const TOGGLE_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-toggle.vue')),
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

  return {
    ...control
  }
}

const Toggle = createThemeComponent(TOGGLE_THEMES)

export {
  Toggle,
  setup
}
