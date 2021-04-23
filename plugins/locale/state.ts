import { reactive, toRef, computed } from 'vue'

export interface OptionInterface {
  label: string,
  abbr: string,
  value: any
}

interface stateInterface {
  lang: string
  languages: OptionInterface[]
}

const state: stateInterface = reactive({
  lang: '',
  languages: []
})

const languages = computed(() => {
  return state.languages.map(({ label, abbr }) => {
    return {
      label,
      value: abbr
    }
  })
})

function getLocal(path: string, data?: any) {
  const lang = state.languages.find(({ abbr }) => state.lang === abbr)?.value || {}

  let local = path.split('.')
    .reduce((o, i) => o && o[i], lang)

  if (!local) {
    return ''
  }

  if (data) {
    Object.keys(data).forEach((key) => {
      const re = new RegExp(`:${key}`, 'g')

      local = local.replace(re, data[key])
    })
  }

  return local
}

function setLang(lang: string) {
  state.lang = lang
}

function addLanguage(data: OptionInterface) {
  state.languages.push(data)
}

export function useLocale() {
  return {
    lang: toRef(state, 'lang'),
    languages,
    setLang,
    getLocal,
    addLanguage
  }
}
