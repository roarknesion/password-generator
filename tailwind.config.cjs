const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',

  purge: ['app.html', '**/*.svelte'],

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px'
    },

    fontFamily: { sans: ['inter', 'sans-serif'] },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,

      gray: colors.blueGray
    }
  }
}
