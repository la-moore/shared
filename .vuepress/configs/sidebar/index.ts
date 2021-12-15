import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/docs/': [
    {
      text: 'Docs',
      children: [
        '/docs/settings',
        '/docs/style-guide'
      ],
    }
  ],
  '/components/': [
    {
      text: 'Components',
      children: [
        '/components/alert/',
        '/components/avatar/',
        '/components/badge/',
        '/components/button/',
        '/components/link/',
        '/components/menu/',
        '/components/ratio/',
        '/components/spinner/',
        '/components/table/',
        '/components/tabs/',
        '/components/navigation/',
        '/components/dialog/',
        '/components/overlay/',
        '/components/modal/',
      ],
    }
  ],
  '/components/controls/': [
    {
      text: 'Controls',
      children: [
        '/components/controls/checkbox/',
        '/components/controls/input/',
        '/components/controls/select/',
        '/components/controls/select-async/',
        '/components/controls/textarea/',
        '/components/controls/toggle/'
      ],
    }
  ],
  '/directives/': [
    {
      text: 'Directives',
      children: [
        '/directives/clickaway/',
        '/directives/tooltip/',
        '/directives/visibility/'
      ],
    }
  ],
  '/plugins/': [
    {
      text: 'Plugins',
      children: [
        '/plugins/api/',
        '/plugins/auth/',
        '/plugins/form/',
        '/plugins/backgrounds/',
        '/plugins/color/',
        '/plugins/icons/',
        '/plugins/storage/',
        '/plugins/locale/',
        '/plugins/processor/',
        '/plugins/theme/',
        '/plugins/slider/',
        '/plugins/color-picker/',
        '/plugins/light-box/',
      ],
    }
  ],
  '/helpers/': [
    {
      text: 'Helpers',
      children: [
        '/helpers/'
      ],
    }
  ],
}
