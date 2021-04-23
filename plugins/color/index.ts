import { Plugin } from 'vue'
import { useColor, ColorType } from './state'

const plugin: Plugin = function(app, color: ColorType | string = 'indigo') {
    const { setColor } = useColor()

    setColor(color)
}

export default plugin
export * from './state'
