import { writable, get } from 'svelte/store'
import data from '~/data/history'
import storage from '~/plugin/storage'

const create = () => {
  const store = writable(storage.init('history', data))

  const clear = () => {
    const $store = get(store)

    $store.list = data.list

    store.set($store)
  }

  const reset = () => {
    const $store = get(store)

    $store.limit = data.limit

    store.set($store)
  }

  return { ...store, clear, reset }
}

const store = create()

store.subscribe($store => {
  if ($store.limit < 1) $store.limit = 1

  $store.list = $store.list.slice(0, $store.limit)

  storage.set('history', $store)
})

export default store
