const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './directives/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50, #eef2ff)',
          100: 'var(--primary-100, #e0e7ff)',
          200: 'var(--primary-200, #c7d2fe)',
          300: 'var(--primary-300, #a5b4fc)',
          400: 'var(--primary-400, #818cf8)',
          500: 'var(--primary-500, #6366f1)',
          600: 'var(--primary-600, #4f46e5)',
          700: 'var(--primary-700, #4338ca)',
          800: 'var(--primary-800, #3730a3)',
          900: 'var(--primary-900, #312e81)',
        }
      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner-border': 'inset 0 0 0 1px rgba(0, 0, 0, 0.10)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '8rem',
        '8xl': '12rem',
      }
    }
  },
  variants: {
    opacity: ['active', 'group-hover'],
    width: ['responsive', 'important'],
    justifyContent: ['responsive', 'important'],
    alignItems: ['responsive', 'important'],
    padding: ['responsive', 'important'],
    margin: ['responsive', 'first', 'last'],
    borderRadius: ['responsive', 'first', 'last'],
    scale: ['group-hover', 'hover'],
    translate: ['group-hover', 'hover'],
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }),
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
