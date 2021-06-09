import { writable } from 'svelte/store'
import generator from '~/data/generator'
import storage from '~/plugin/storage'

const store = writable(storage.init('generator', generator))

store.subscribe($store => {
  if (
    !$store.option.include.digit &&
    !$store.option.include.letter &&
    !$store.option.include.symbol &&
    !($store.character.include.custom && $store.option.include.custom)
  ) {
    $store.option.include.digit = true
  }

  storage.set('generator', $store)
})

export default store
