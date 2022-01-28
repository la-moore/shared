import { defineClientAppEnhance } from '@vuepress/client'
import components from '../components'
import directives from '../directives'
import theme from '../plugins/theme'
import backgrounds from '../plugins/backgrounds'
import lightBox from '../plugins/light-box'
import slider from '../plugins/slider'
import './styles/tailwind.css'

export default defineClientAppEnhance(({ app }) => {
    app.use(components)
    app.use(directives)
    app.use(theme, 'passport')

    app.use(slider)
    app.use(lightBox)
    app.use(backgrounds)
})
