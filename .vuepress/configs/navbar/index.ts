import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: 'Docs',
    link: '/docs/',
  },
  {
    text: 'Components',
    link: '/components/',
    activeMatch: '/components/$',
  },
  {
    text: 'Controls',
    link: '/components/controls/',
  },
  {
    text: 'Directives',
    link: '/directives/',
  },
  {
    text: 'Plugins',
    link: '/plugins/',
  },
  {
    text: 'Helpers',
    link: '/helpers/',
  },
]
