const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './directives/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{vue,js,ts,jsx,tsx}',
    './docs/**/*.{vue,js,ts,jsx,tsx}'
  ],
  presets: [
    require('./tailwind.base.js'),
  ],
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.scroll-snap-none': {
          'scroll-snap-type': 'none',
        },
        '.scroll-snap-x': {
          'scroll-snap-type': 'x mandatory',
        },
        '.scroll-snap-y': {
          'scroll-snap-type': 'y mandatory',
        },
        '.scroll-behavior-auto': {
          'scroll-behavior': 'auto',
        },
        '.scroll-behavior-smooth': {
          'scroll-behavior': 'smooth',
        },
        '.scroll-behavior-unset': {
          'scroll-behavior': 'unset',
        },
        '.scroll-snap-start': {
          'scroll-snap-align': 'start',
        },
        '.scroll-snap-center': {
          'scroll-snap-align': 'center',
        },
        '.scroll-snap-end': {
          'scroll-snap-align': 'end',
        },
        '.scrollbar-none': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
        },
      }

      addUtilities(newUtilities, ['responsive'])
    }),
  ],
}
