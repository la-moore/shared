import { setLocale } from '@vee-validate/i18n'
import { required, email, max, min, confirmed } from '@vee-validate/rules'
import { watch } from '@vue/runtime-core'
import { defineRule } from 'vee-validate'
import { useLocale } from '../../plugins/locale'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('confirmed', confirmed)

const { lang } = useLocale()

watch(lang, (lang) => setLocale(lang))
