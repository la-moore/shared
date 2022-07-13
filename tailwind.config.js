const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
    './src/controls/**/*.{vue,js,ts,jsx,tsx}',
    './src/directives/**/*.{vue,js,ts,jsx,tsx}',
    './src/plugins/**/*.{vue,js,ts,jsx,tsx}',
    './src/docs/**/*.{vue,js,ts,jsx,tsx}'
  ],
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
        'inner-border': 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
      },
    }
  },
  variants: {},
  plugins: [],
}
