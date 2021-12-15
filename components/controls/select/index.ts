import { computed, ExtractPropTypes, ref, SetupContext } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '../../../plugins/theme'
import { controlSetup, CONTROL_PROPS } from '../control'

const { createThemeComponent } = useTheme()

export const SELECT_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-select.vue')),
}

export const SELECT_PROPS = {
  ...CONTROL_PROPS,
  mask: {
    type: Object,
    default: null,
  },
  maxlength: {
    type: Number,
    default: undefined,
  },
}

function setup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof SELECT_PROPS> = params

  const control = controlSetup(params, ctx)

  const isFocused = ref(false)

  return {
    ...control,
    isFocused
  }
}

const Select = createThemeComponent(SELECT_THEMES)

export {
  Select,
  setup
}
