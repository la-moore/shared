import { computed, ExtractPropTypes } from 'vue'
import Spinner from './base-spinner.vue'
// import { defineComponent } from '@vue/runtime-core'
// import { useTheme } from '../../plugins/theme'

// const { createThemeComponent } = useTheme()

// export const SPINNER_THEMES: any = {
//   main: defineComponent(() => import('./base-spinner.vue')),
// }

export const SPINNER_SIZES: any = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
}

export const SPINNER_PROPS = {
  size: {
    type: String,
    default: 'md'
  }
}

function setup(params) {
  const props: ExtractPropTypes<typeof SPINNER_PROPS> = params

  const proxySize = computed(() => {
    return SPINNER_SIZES[props.size] || props.size
  })

  return {
    proxySize
  }
}

// const Spinner = SPINNER_THEMES.main

export {
  Spinner,
  setup
}
