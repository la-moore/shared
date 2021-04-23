/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  title: 'WnHub Shared',
  base: '/',
  alias: {
    '/-': path.join(__dirname, '../'),
  },
  themeConfig: {
    docsDir: '/',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Style Guide', link: '/style-guide/' }
    ],
    sidebar: {
      '/style-guide/': [
        {
          text: 'Style Guide',
          link: '/style-guide/',
        }
      ],
      '/': [
        {
          text: 'Settings',
          link: '/settings'
        },
        {
          text: 'Components',
          link: '/components/',
          children: [
            { text: 'Alert', link: '/components/alert/' },
            { text: 'Avatar', link: '/components/avatar/' },
            { text: 'Badge', link: '/components/badge/' },
            { text: 'Button', link: '/components/button/' },
            { text: 'Form', link: '/components/form/' },
            { text: 'dialog', link: '/components/dialog/' },
            { text: 'Icon', link: '/components/icon/' },
            { text: 'Link', link: '/components/link/' },
            { text: 'Input', link: '/components/controls/input/' },
            { text: 'Textarea', link: '/components/controls/textarea/' },
            { text: 'Menu', link: '/components/menu/' },
            { text: 'Modal', link: '/components/modal/' },
            { text: 'Ratio', link: '/components/ratio/' },
            { text: 'Select', link: '/components/controls/select/' },
            { text: 'Spinner', link: '/components/spinner/' },
            { text: 'Table', link: '/components/table/' }
          ],
        },
        {
          text: 'Directives',
          link: '/directives/',
          collapsable: true,
          children: [
            { text: 'Click Away', link: '/directives/clickaway/' },
            { text: 'Tooltip', link: '/directives/tooltip/' },
            { text: 'Visibility', link: '/directives/visibility/' },
          ],
        },
        {
          text: 'Plugins',
          link: '/plugins/',
          collapsable: true,
          children: [
            { text: 'Api', link: '/plugins/api/' },
            { text: 'Auth', link: '/plugins/auth/' },
            { text: 'Color', link: '/plugins/color/' },
            { text: 'Helpers', link: '/plugins/helpers/' },
            { text: 'Local Storage', link: '/plugins/local-storage/' },
            { text: 'Locale', link: '/plugins/locale/' },
            { text: 'Processor', link: '/plugins/processor/' },
            { text: 'Theme', link: '/plugins/theme/' }
          ],
        },
      ]
    }
  }
}
