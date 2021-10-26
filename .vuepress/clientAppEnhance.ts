import { defineClientAppEnhance } from '@vuepress/client'
import components from '/-/components'
import directives from '/-/directives'
import theme from '/-/plugins/theme'
import icons from '/-/plugins/icons'
import form from '/-/plugins/form'
import colorPicker from '/-/plugins/color-picker'
import backgrounds from '/-/plugins/backgrounds'
import lightBox from '/-/plugins/light-box'
import slider from '/-/plugins/slider'
import iconsBrands from '/-/plugins/icons/brands'
import iconsHero from '/-/plugins/icons/hero'
import './styles/tailwind.css'

export default defineClientAppEnhance(({ app }) => {
  app.use(form)
  app.use(components)
  app.use(directives)
  app.use(icons, {
    ...iconsBrands,
    ...iconsHero,
  })
  app.use(theme, 'passport')

  app.use(slider)
  app.use(lightBox)
  app.use(colorPicker)
  app.use(backgrounds)
})
