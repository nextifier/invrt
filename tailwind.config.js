const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      xs: '540px',
      ...defaultTheme.screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['PlusJakartaSans', ...defaultTheme.fontFamily.sans],
        'display': ['PaperPlanets', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary': '#E50000',
        'primary-lighten': '#FF0404',
        'primary-darken': '#C30000',
        gray: colors.zinc,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
