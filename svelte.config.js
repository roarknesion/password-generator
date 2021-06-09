import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

    files: {
      routes: 'route',
      template: 'app.html'
    },

    vite: { resolve: { alias: { '~': path.resolve('.') } } }
  }
}

export default config
