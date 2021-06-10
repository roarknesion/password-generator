const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',

  purge: {
    content: ['app.html', '**/*.svelte'],
    options: { safelist: [/data-theme$/] }
  },

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px'
    },
    fontFamily: { sans: ['orbitron', 'sans-serif'] }
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        dark: {
          'primary': '#ffffff',
          'primary-focus': '#ffffff',
          'primary-content': '#000000',

          'secondary': '#ffffff',
          'secondary-focus': '#ffffff',
          'secondary-content': '#000000',

          'accent': '#ffffff',
          'accent-focus': '#ffffff',
          'accent-content': '#000000',

          'base-100': '#000000',
          'base-200': '#333333',
          'base-300': '#4d4d4d',
          'base-content': '#ffffff',

          'neutral': '#333333',
          'neutral-focus': '#4d4d4d',
          'neutral-content': '#ffffff',

          'info': '#0000ff',
          'success': '#008000',
          'warning': '#ffff00',
          'error': '#ff0000',

          '--rounded-box': '0',
          '--rounded-btn': '0',
          '--rounded-badge': '0',

          '--tab-radius': '0',

          '--animation-btn': '0s',
          '--animation-input': '0s',

          '--btn-focus-scale': '1',
          '--btn-text-case': 'capitalize'
        },

        light: {
          'primary': '#000000',
          'primary-focus': '#000000',
          'primary-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#333333',
          'base-300': '#4d4d4d',
          'base-content': '#000000',

          '--rounded-box': '0',
          '--rounded-btn': '0',
          '--rounded-badge': '0',

          '--tab-radius': '0',

          '--animation-btn': '0s',
          '--animation-input': '0s',

          '--btn-focus-scale': '1',
          '--btn-text-case': 'capitalize'
        }
      }
    ]
  }
}
