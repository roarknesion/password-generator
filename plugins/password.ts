const Password = class {
  length = 16

  readonly include = {
    digit: '0123456789',
    letter: 'abcdefghijklmnopqrstuvwxyz',
    symbol: '@!?&%$#(){}[]<>+-*/=.,:;',
    custom: ''
  }

  readonly exclude = {
    similar: 'ilo0',
    custom: '(){}[]<>+-*/=.,:;'
  }

  readonly option = {
    include: {
      digit: true,
      letter: true,
      symbol: true,
      custom: true
    },

    exclude: {
      similar: true,
      custom: true
    },

    other: {
      uppercase: true
    }
  }

  readonly generate = () => {
    const { length, fill } = this

    const pool = fill()

    let password = ''

    for (let i = 0; i < length; i++) {
      password += helper.char(pool, helper.random(pool.length))
    }

    return password
  }

  private fill = () => {
    const { option, include, exclude } = this

    let result = ''

    if (option.include.digit) {
      result += include.digit
    }

    if (option.include.letter) {
      result += include.letter
    }

    if (option.include.symbol) {
      result += include.symbol
    }

    if (option.include.custom) {
      result += include.custom
    }

    if (option.exclude.similar) {
      result = helper.exclude(result, exclude.similar)
    }

    if (option.exclude.custom) {
      result = helper.exclude(result, exclude.custom)
    }

    if (option.other.uppercase) {
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

export default new Password()
