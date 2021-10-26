import { computed, ExtractPropTypes, onMounted, ref, SetupContext, watch } from 'vue'
import { defineAsyncComponent, PropType } from '@vue/runtime-core'
import { useTheme } from '/-/plugins/theme'
import { ROUNDED } from '../utils'

const { createThemeComponent } = useTheme()

export interface MenuItemInterface {
  label: string | number
  value: string
  icon?: string
  group?: string
  href?: string
  to?: any
  badge?: string | number
}

export const NAVIGATION_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-navigation.vue')),
}

export const NAVIGATION_LOOKS: any = {
  primary: 'bg-gray-200 text-primary-600 dark:bg-gray-600 dark:text-primary-300',
  secondary: 'bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-300',
  success: 'bg-gray-200 text-green-600 dark:bg-gray-600 dark:text-green-300',
  destructive: 'bg-gray-200 text-red-600 dark:bg-gray-600 dark:text-red-300',
  info: 'bg-gray-200 text-blue-600 dark:bg-gray-600 dark:text-blue-300',
  warning: 'bg-gray-200 text-yellow-600 dark:bg-gray-600 dark:text-yellow-300',
}

export const NAVIGATION_SIZES: any = {
  sm: 'px-2.5 leading-5 text-xs font-medium',
  md: 'px-3 leading-6 text-xs font-medium',
  lg: 'px-3.5 leading-7 font-medium',
}

export const NAVIGATION_PROPS = {
  value: {
    type: [String, Number],
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  rounded: {
    type: String,
    default: 'md'
  },
  look: {
    type: String,
    default: 'secondary'
  },
  size: {
    type: String,
    default: 'md'
  },
  menu: {
    type: Array as PropType<MenuItemInterface[]>,
    default: () => []
  },
  secondLook: {
    type: String,
    default: 'hover:bg-gray-100 dark:hover:bg-gray-700',
  },
  badgeLook: {
    type: String,
    default: 'bg-gray-900 text-gray-900 bg-opacity-10 dark:bg-white dark:bg-opacity-10 dark:text-gray-200',
  },
  badgeSize: {
    type: String,
    default: 'py-0.5 px-3 text-xs',
  },
  badgeRounded: {
    type: String,
    default: 'rounded-full',
  },
}

function setup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof NAVIGATION_PROPS> = params
  const selected = ref(undefined)
  const localValue = ref(props.value || props.modelValue)

  const proxyLook = computed(() => {
    return NAVIGATION_LOOKS[props.look] || props.look
  })

  const proxySize = computed(() => {
    return NAVIGATION_SIZES[props.size] || props.size
  })

  const proxyRounded = computed(() => {
    return ROUNDED[props.rounded] || props.rounded
  })

  const selectedItem = computed(() => {
    return props.menu.find(({ value }) => selected.value === value)
  })

  const itemsGroups = computed(() => {
    const groups = []

    props.menu.forEach((item) => {
      const group = groups.find(({ name }) => name === item.group)

      if (group) {
        group.items.push(item)
      } else {
        groups.push({
          name: item.group,
          items: [item]
        })
      }
    })

    return groups
  })

  watch(localValue, onChange)

  function onChange(value) {
    selected.value = value
  }

  function selectItem(value) {
    ctx.emit('change', value)
    ctx.emit('update:modelValue', value)

    selected.value = value
  }

  onMounted(() => {
    if (localValue.value) {
      selected.value = localValue.value
    }
  })

  return {
    selected,
    proxyLook,
    proxySize,
    selectItem,
    proxyRounded,
    itemsGroups,
    selectedItem
  }
}

const Navigation = createThemeComponent(NAVIGATION_THEMES)

export {
  Navigation,
  setup
}
