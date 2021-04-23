import { Plugin } from 'vue'
import { useLocale, OptionInterface } from './state'
import { Storage } from '/-/plugins/local-storage'

const plugin: Plugin = function(app, options: OptionInterface[]) {
  const { addLanguage, setLang } = useLocale()

  options.forEach((lang) => {
    addLanguage(lang)
  })

  let lang = Storage.get('language')

  if (!lang) {
    lang = navigator.language.split('-')[0]
    Storage.set('language', lang)
  }

  if (!options.find(langItem => langItem.abbr === lang)) {
    lang = 'en'
  }

  setLang(lang)
}

export default plugin
export * from './state'
