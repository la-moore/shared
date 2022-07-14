import { computed, ExtractPropTypes } from 'vue'
import { ROUNDED } from '../utils'
import Avatar from './base-avatar.vue'
// import { defineComponent } from '@vue/runtime-core'
// import { useTheme } from '../../plugins/theme'

// const { createThemeComponent } = useTheme()

// export const AVATAR_THEMES: any = {
//   main: defineComponent(() => import('./base-avatar.vue'))
// }

export const AVATAR_ROUNDED: any = ROUNDED
export const AVATAR_LOOKS: any = {
  primary: 'bg-primary-500 text-white',
  secondary: 'bg-gray-500 text-white',
  success: 'bg-green-500 text-white',
  destructive: 'bg-red-500 text-white',
  info: 'bg-blue-500 text-white',
  warning: 'bg-yellow-500 text-white',
}

export const AVATAR_SIZES: any = {
  sm: 'h-6 w-6',
  md: 'h-9 w-9',
  lg: 'h-11 w-11',
  xl: 'h-12 w-12',
  '2xl': 'h-14 w-14',
  '3xl': 'h-16 w-16',
  '4xl': 'h-20 w-20',
}

export const AVATAR_TEXT_SIZES: any = {
  sm: 'text-xs leading-3',
  md: 'leading-4',
  lg: 'text-lg leading-4',
  xl: 'text-lg leading-6',
  '2xl': 'text-lg leading-6',
  '3xl': 'text-xl leading-8',
  '4xl': 'text-xl leading-8',
}

export const AVATAR_PROPS = {
  avatarClass: {
    type: String,
    default: ''
  },
  stub: {
    type: String,
    default: ''
  },
  hideStub: {
    type: Boolean,
    default: false
  },
  hideRing: {
    type: Boolean,
    default: false
  },
  look: {
    type: String,
    default: 'secondary'
  },
  reverse: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md',
    validator: v => /sm|md|lg|xl/.test(v)
  },
  rounded: {
    type: String,
    default: 'full'
  },
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  src: {
    type: [String, Array],
    default: ''
  }
}

function setup(params) {
  const props: ExtractPropTypes<typeof AVATAR_PROPS> = params

  const proxySize = computed(() => {
    return AVATAR_SIZES[props.size] || props.size
  })

  const proxyLook = computed(() => {
    return AVATAR_LOOKS[props.look] || props.look
  })

  const proxyReverse = computed(() => {
    return props.reverse && 'flex-row-reverse text-right'
  })

  const proxyRounded = computed(() => {
    return AVATAR_ROUNDED[props.rounded] || props.rounded
  })

  const proxyTextSize = computed(() => {
    return props.size && AVATAR_TEXT_SIZES[props.size]
  })

  const proxyBackground = computed(() => {
    const arr = []

    if (!props.src) {
      return [undefined]
    }

    if (typeof props.src === 'string') {
      arr.push(props.src && { backgroundImage: `url(${props.src})` })
    }

    if (Array.isArray(props.src)) {
      [...props.src].forEach((src) => {
        arr.push(src && { backgroundImage: `url(${src})` })
      })
    }

    return arr
  })

  const proxyRing = computed(() => {
    return !props.hideRing &&
      proxyBackground.value.length > 1 &&
      'ring-2 ring-white'
  })

  const stubContent = computed(() => {
    const chars = [
      props.title?.substring(0, 1),
      props.text?.substring(0, 1)
    ]

    return chars.filter(v => v).join('')
  })

  const hasContent = computed(() => {
    return Boolean(props.title || props.text)
  })

  return {
    proxySize,
    proxyLook,
    proxyRing,
    proxyReverse,
    proxyRounded,
    proxyTextSize,
    proxyBackground,
    stubContent,
    hasContent
  }
}

// const Avatar = AVATAR_THEMES.main

export {
  Avatar,
  setup
}
