import { computed, ExtractPropTypes } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '../../plugins/theme'

const { createThemeComponent } = useTheme()

export const RATIO_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-ratio.vue')),
}

export const RATIO_SIZES: any = {
  contain: 'bg-contain',
  cover: 'bg-cover',
}

export const RATIO_PROPS = {
  src: {
    type: String,
    default: ''
  },
  ratio: {
    type: Number,
    default: 1
  },
  size: {
    type: String,
    default: 'contain'
  },
  loading: Boolean
}

function setup(params) {
  const props: ExtractPropTypes<typeof RATIO_PROPS> = params

  const proxySize = computed(() => {
    return RATIO_SIZES[props.size] || props.size
  })

  const proxyPercent = computed(() => {
    return (props.ratio) * 100
  })

  const backgroundImage = computed(() => {
    return props.src && `url(${props.src})`
  })

  return {
    proxySize,
    proxyPercent,
    backgroundImage
  }
}

const Ratio = createThemeComponent(RATIO_THEMES)

export {
  Ratio,
  setup
}
