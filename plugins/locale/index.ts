import { Plugin } from 'vue'
import { configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import { useLocale, OptionInterface } from './state'
import { Storage } from '/-/plugins/local-storage'
import messages from './form-messages'

const plugin: Plugin = function(app, options: OptionInterface[]) {
  const { addLanguage, setLang } = useLocale()

  configure({
    generateMessage: localize({
      en: {
        messages
      }
    })
  })

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
