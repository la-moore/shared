import { h, reactive, toRef, defineComponent } from 'vue'

interface stateInterface {
  themes: string[]
  theme: string
}

const themes = ['main', 'exec_summit', 'passport']

const state: stateInterface = reactive({
  themes,
  theme: 'main'
})

function setTheme(theme: string) {
  state.theme = theme
}

function createThemeComponent(themes: any) {
  return defineComponent({
    props: {
      theme: {
        type: [String, Boolean],
        default: undefined
      }
    },
    setup(props, data) {
      const main = Object.keys(themes)[0]
      const localTheme = props.theme && themes[`${props.theme}`]
      const globTheme = themes[state.theme] || themes[main]
      const themeComponent = localTheme || globTheme

      return () => h(themeComponent, {}, data.slots)
    },
    methods: {
      target(name, data) {
        if (typeof this.$refs.themeComponent[name] === 'function') {
          this.$refs.themeComponent[name](data)
        } else {
          console.warn('Method is not defined')
        }
      }
    },
  })
}

export function useTheme() {
  return {
    theme: toRef(state, 'theme'),
    themes: toRef(state, 'themes'),
    setTheme,
    createThemeComponent
  }
}
