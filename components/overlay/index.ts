import { computed, ExtractPropTypes, ref, SetupContext } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '/-/plugins/theme'
import { SPEED } from '../utils'

const { createThemeComponent } = useTheme()

export const OVERLAY_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-overlay.vue')),
}

export const OVERLAY_SIZES: any = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

export const OVERLAY_ANIMATIONS_FROM: any = {
  right: 'translate-x-full',
  left: ' -translate-x-full',
}

export const OVERLAY_ANIMATIONS_TO: any = {
  right: 'translate-x-0',
  left: 'translate-x-0',
}

export const OVERLAY_PROPS = {
  title: {
    type: String,
    default: ''
  },
  speed: {
    type: [String, Number],
    default: 200
  },
  size: {
    type: String,
    default: 'md'
  },
  animationFrom: {
    type: String,
    default: undefined
  },
  animationTo: {
    type: String,
    default: undefined
  },
  position: {
    type: String,
    default: 'right'
  },
  hideClose: {
    type: Boolean,
    default: false
  },
  disableClose: {
    type: Boolean,
    default: false
  },
  look: {
    type: String,
    default: 'bg-white text-gray-900 divide-y divide-gray-200 dark:divide-gray-600 dark:text-white dark:bg-gray-800'
  }
}

function setup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof OVERLAY_PROPS> = params
  const isVisible = ref(false)

  const proxySize = computed(() => {
    return OVERLAY_SIZES[props.size] || props.size
  })

  const proxyAnimation = computed(() => {
    const from = props.animationFrom || OVERLAY_ANIMATIONS_FROM[props.position]
    const to = props.animationTo || OVERLAY_ANIMATIONS_TO[props.position]

    return {
      from,
      to,
    }
  })

  const proxySpeed = computed(() => {
    return SPEED[props.speed] || props.speed
  })

  function open() {
    isVisible.value = true
    ctx.emit('open')
  }

  function close() {
    isVisible.value = false
    ctx.emit('close')
  }

  return {
    open,
    close,
    isVisible,
    proxySize,
    proxySpeed,
    proxyAnimation
  }
}

const Overlay = createThemeComponent(OVERLAY_THEMES)

export {
  Overlay,
  setup
}
