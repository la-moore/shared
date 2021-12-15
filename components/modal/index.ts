import { computed, ExtractPropTypes, ref, SetupContext } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '../../plugins/theme'
import { ROUNDED, SPEED } from '../utils'

const { createThemeComponent } = useTheme()

export const MODAL_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-modal.vue')),
}

export const MODAL_SIZES: any = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

export const MODAL_ANIMATIONS_FROM: any = {
  scale: 'transform opacity-0 scale-95',
  translate: 'transform opacity-0 translate-y-10',
}

export const MODAL_ANIMATIONS_TO: any = {
  scale: 'transform opacity-100 scale-100',
  translate: 'transform opacity-100 translate-y-0',
}

export const MODAL_PROPS = {
  title: {
    type: String,
    default: ''
  },
  rounded: {
    type: String,
    default: 'lg'
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
    default: 'translate'
  },
  animationTo: {
    type: String,
    default: 'translate'
  },
  fullscreen: {
    type: Boolean,
    default: false
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
  const props: ExtractPropTypes<typeof MODAL_PROPS> = params
  const isVisible = ref(false)

  const proxySize = computed(() => {
    return MODAL_SIZES[props.size] || props.size
  })

  const proxyAnimation = computed(() => {
    const from = MODAL_ANIMATIONS_FROM[props.animationFrom] || props.animationFrom
    const to = MODAL_ANIMATIONS_TO[props.animationTo] || props.animationTo

    return {
      from,
      to,
    }
  })

  const proxyRounded = computed(() => {
    return ROUNDED[props.rounded] || props.rounded
  })

  const proxySpeed = computed(() => {
    return SPEED[props.speed] || props.speed
  })

  function open() {
    document.body.classList.add('overflow-hidden')
    isVisible.value = true
    ctx.emit('open')
  }

  function close() {
    document.body.classList.remove('overflow-hidden')
    isVisible.value = false
    ctx.emit('close')
  }

  return {
    open,
    close,
    isVisible,
    proxySize,
    proxySpeed,
    proxyRounded,
    proxyAnimation
  }
}

const Modal = createThemeComponent(MODAL_THEMES)

export {
  Modal,
  setup
}
