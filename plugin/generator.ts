import generator from '~/data/generator'

const Generator = class {
  state = generator

  readonly generate = () => {
    const { fill } = this
    const length = this.state.length.value

    const pool = fill()

    let password = ''

    for (let i = 0; i < length; i++) {
      password += helper.char(pool, helper.random(pool.length))
    }

    return password
  }

  private fill = () => {
    const { option, character } = this.state

    let result = ''

    if (option.include.digit) {
      result += character.include.digit
    }

    if (option.include.letter) {
      result += character.include.letter
    }

    if (option.include.symbol) {
      result += character.include.symbol
    }

    if (option.include.custom) {
      result += character.include.custom
    }

    if (option.exclude.similar) {
      result = helper.exclude(result, character.exclude.similar)
    }

    if (option.exclude.custom) {
      result = helper.exclude(result, character.exclude.custom)
    }

    if (option.uppercase) {
      result = helper.uppercase(result)
    }

    return helper.unique(result)
  }
}

const helper = {
  random: (length: number) => ~~(Math.random() * length),

  char: (string: string, index: number) => string.charAt(index),

  exclude: (string: string, regex: string) => {
    const safe = regex.replace(/[-.*+?^${}()|[\]\\]/g, '\\$&')

    const regexp = new RegExp(`[${safe}]`, 'g')

    return string.replace(regexp, '')
  },

  unique: (string: string) => {
    const set = new Set(string.split(''))
    const list = [...set]

    return list.join('')
  },

  uppercase: (string: string) => helper.unique(string + string.toUpperCase())
}

export default new Generator()
