import path from 'path'
import { defineUserConfig } from 'vuepress-webpack'
import type { DefaultThemeOptions } from 'vuepress-webpack'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Shared',
  description: '',

  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/74451641?s=200&v=4',
    navbar,
    sidebar
  },

  alias: {
    '/-': path.join(__dirname, '../'),
  },

  bundlerConfig: {
    resolve: {
      alias: {
        '/-': path.join(__dirname, '../'),
      },
    },
  },
})
