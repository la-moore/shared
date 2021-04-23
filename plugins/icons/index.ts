import { Plugin } from 'vue'
import { useIcons } from './state'
import baseIcons from './icons'

const plugin: Plugin = function(app, icons?: any) {
    const { addIcons } = useIcons()

    addIcons(baseIcons)
    addIcons(icons)
}

export default plugin
export * from './state'
