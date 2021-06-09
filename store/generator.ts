import { writable, get } from 'svelte/store'
import generator from '~/data/generator'
import storage from '~/plugin/storage'

const { parse, stringify } = JSON

const create = () => {
  const store = writable(storage.init('generator', generator))

  const reset = {} as { option: () => void; config: () => void }

  reset.option = () => {
    const $store = get(store)

    $store.length.value = generator.length.value
    $store.option = parse(stringify(generator.option))

    store.set($store)
  }

  reset.config = () => {
    const $store = get(store)

    $store.character.include.custom = generator.character.include.custom
    $store.character.exclude.custom = generator.character.exclude.custom
    $store.length.max = generator.length.max
    $store.length.min = generator.length.min

    store.set($store)
  }

  return { ...store, reset }
}

const store = create()

store.subscribe($store => {
  if (
    !$store.option.include.digit &&
    !$store.option.include.letter &&
    !$store.option.include.symbol &&
    !($store.character.include.custom && $store.option.include.custom)
  ) {
    $store.option.include.digit = true
  }

  if ($store.length.min < 1) $store.length.min = 1
  if ($store.length.min >= $store.length.max) $store.length.max = $store.length.min + 1

  storage.set('generator', $store)
})

export default store
