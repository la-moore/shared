import { Plugin } from 'vue'
import allRules from '@vee-validate/rules'
import { configure, defineRule } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import { useLocale } from '/-/plugins/locale'
import { useComponent } from '/-/components'
import Form from './components/form.vue'

interface FormConfig {
  rules?: Record<string, any>,
  dict?: Record<string, any>
}

const plugin: Plugin = function(app, options?: FormConfig) {
  const rules = {
    ...allRules,
    ...(options?.rules || {}),
  }
  const { lang } = useLocale()

  useComponent(app, null, 'Form', Form)

  Object.keys(rules).forEach(rule => {
    defineRule(rule, rules[rule])
  })

  configure({
    generateMessage: localize(lang.value),
  })
}

export default plugin

export {
  Form
}
