import { computed, ExtractPropTypes, defineAsyncComponent } from 'vue'

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
  }
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

const Ratio = RATIO_THEMES.main

export {
  Ratio,
  setup
}
