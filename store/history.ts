import { writable } from 'svelte/store'
import storage from '~/plugin/storage'

const store = writable(storage.init('history', [] as string[]))

store.subscribe($store => {
  $store = $store.slice(0, 99)

  storage.set('history', $store)
})

export default store
