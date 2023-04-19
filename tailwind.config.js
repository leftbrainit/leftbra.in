const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt();
md.use(require('markdown-it-bracketed-spans'))
md.use(require('markdown-it-attrs'))


module.exports = {
  darkMode: 'class',
  variants: {
    typography: ["responsive", "dark"],
  },

  theme: {
    extend: {
      colors: {
        primary: {
          50: '#041510',
          100: '#0C211B',
          200: '#113627',
          300: '#B1CCF3',
          400: '#0005FC',
          DEFAULT: '#00FF94',
          500: '#00FF94',
          600: '#0008E9',
          700: '#0110BD',
          800: '#011891',
          900: '#011C78'
        },
        transparent: 'transparent',
        current: 'currentColor',
        gray: {
          '850': '#1F1F1F',
          ...colors.neutral
        },
        lime: colors.lime,
        teal: colors.teal,
        orange: colors.orange
      },
      fontFamily: {
        sans: ['Soehne', ...defaultTheme.fontFamily.sans],
        title: ['Soehne Breit', ...defaultTheme.fontFamily.sans],
        icons: ['Material Icons'],
        mono: ['Soehne Mono', ...defaultTheme.fontFamily.mono]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              h1: {
                fontSize: '4.5rem',
                lineHeight: 1,
                fontWeight: 700
              },
            }
          ],

        },
        '7xl': {
          css: {
            fontSize: '1.875rem',
            h1: {
              fontSize: '4.5rem',
            },
          },
        },
        light: {
          css: [
            {
              color: theme('colors.gray.300'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.primary.500'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      })
    },
    theme: {

      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.100'),

            a: {
              color: theme('colors.blue.100'),
              '&:hover': {
                color: theme('colors.blue.100'),
              },
            },
          },
        },
      }),

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
  content: {
    files: [
      './*.html',
      './src/**/*.{js,jsx,ts,tsx,vue,md}',
      `components/**/*.{vue,js,ts}`,
      `layouts/**/*.vue`,
      `pages/**/*.{vue,md}`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
    transform: {
      md: (content) => {
        const rendered = md.render(content)
        return rendered
      }
    }
  },
  // purge: {
  //   content: [
  //     './*.html',
  //     './src/**/*.{js,jsx,ts,tsx,vue,md}',
  //     `components/**/*.{vue,js,ts}`,
  //     `layouts/**/*.vue`,
  //     `pages/**/*.{vue,md}`,
  //     `plugins/**/*.{js,ts}`,
  //     `nuxt.config.{js,ts}`,
  //   ],
  //   transform: {
  //     md: (content) => {
  //       const rendered = md.render(content)
  //       return rendered
  //     }
  //   }
  // }
}