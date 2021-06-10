import { writable, get } from 'svelte/store'
import data from '~/data/global'
import storage from '~/plugin/storage'

const create = () => {
  const store = writable(storage.init('global', data))

  const toggle = () => {
    const $store = get(store)

    $store.theme = $store.theme == 'dark' ? 'light' : 'dark'

    store.set($store)
  }

  return { ...store, toggle }
}

const store = create()

store.subscribe($store => {
  if (typeof document != 'undefined') {
    const el = document.querySelector('html')

    if (el) el.dataset.theme = $store.theme
  }

  storage.set('global', $store)
})

export default store
