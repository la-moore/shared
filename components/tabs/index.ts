import { ref, computed, ExtractPropTypes, PropType, watch, SetupContext, onMounted } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '../../plugins/theme'

const { createThemeComponent } = useTheme()

export interface TabInterface {
  label: string
  value: string
}

export const TABS_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-tabs.vue')),
}

export const TABS_LOOKS: any = {
  primary: 'text-primary-600',
  secondary: 'text-gray-600',
  success: 'text-green-600',
  destructive: 'text-red-600',
  info: 'text-blue-600',
  warning: 'text-yellow-600',
}

export const TABS_EXTENDED: any = {
  sm: 'sm:flex',
  md: 'md:flex',
  lg: 'lg:flex',
  xl: 'xl:flex',
}

export const TABS_HIDE: any = {
  sm: 'sm:hidden',
  md: 'md:hidden',
  lg: 'lg:hidden',
  xl: 'xl:hidden',
}

export const TABS_PROPS = {
  value: {
    type: [String, Number],
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  icon: {
    type: String,
    default: 'solid/chevron-down',
  },
  look: {
    type: String,
    default: 'primary'
  },
  fill: {
    type: Boolean,
    required: false
  },
  tabs: {
    type: Array as PropType<TabInterface[]>,
    default: () => []
  },
  extended: {
    type: String,
    default: 'md',
  },
  secondLook: {
    type: String,
    default: 'text-gray-500 hover:text-gray-700',
  },
}

function setup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof TABS_PROPS> = params
  const selected = ref(undefined)
  const localValue = ref(props.value || props.modelValue)

  const proxyHide = computed(() => {
    return TABS_HIDE[props.extended] || props.extended
  })

  const proxyExtended = computed(() => {
    return TABS_EXTENDED[props.extended] || props.extended
  })

  const selectedTab = computed(() => {
    return props.tabs.find(({ value }) => selected.value === value)
  })

  const proxyLook = computed(() => {
    return TABS_LOOKS[props.look] || props.look
  })

  watch(localValue, onChange)

  function onChange(value) {
    selected.value = value
  }

  function selectTab(value) {
    ctx.emit('change', value)
    ctx.emit('update:modelValue', value)

    selected.value = value
  }

  onMounted(() => {
    if (!props.modelValue && !props.value && props.tabs[0]) {
      selectTab(props.tabs[0].value)
    } else {
      selected.value = props.modelValue || props.value
    }
  })

  return {
    selected,
    selectTab,
    proxyHide,
    proxyLook,
    selectedTab,
    proxyExtended,
  }
}

const Tabs = createThemeComponent(TABS_THEMES)

export {
  Tabs,
  setup
}
