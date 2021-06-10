type Name = 'generator' | 'history' | 'global'

const local = {
  set: (key: string, value: any) => localStorage.setItem(key, value),
  get: (key: string) => localStorage.getItem(key)
}

const json = {
  compose: JSON.stringify,
  parse: JSON.parse
}

const prefix = (name: Name) => `password-generator:${name}`

const store = {
  is: () => typeof window != 'undefined',

  init: <T>(name: Name, initial: T) => {
    if (store.is()) {
      const local = store.get(name)

      if (local) return local as T
    }

    return initial
  },

  set: (name: Name, value: any) => {
    if (store.is()) local.set(prefix(name), json.compose(value))
  },

  get: (name: Name) => {
    if (store.is()) {
      const value = local.get(prefix(name))

      if (value) return json.parse(value)
    }
  }
}

export default store
