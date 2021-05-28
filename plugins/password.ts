const configs = {
  characters: {
    digits: '0123456789',
    letters: 'abcdefghijklmnopqrstuvwxyz',
    symbols: '@!?&%$#(){}[]<>+-*/=.,:;',
    exclude: 'ilILoO0(){}[]<>+-*/=.,:;'
  },

  options: {
    length: 16,

    digits: true,
    lowers: true,
    uppers: true,
    symbols: true,
    exclude: true,

    duplicate: true
  }
}

const helpers = {
  random: (length: number) => {
    return ~~(Math.random() * length)
  },

  char: (string: string, index: number) => {
    return string.charAt(index)
  },

  code: (string: string, index: number = 0) => {
    return string.charCodeAt(index)
  },

  exclude: (string: string, regex: string) => {
    const safe = regex.replace(/[-.*+?^${}()|[\]\\]/g, '\\$&')

    const regexp = new RegExp(`[${safe}]`, 'g')

    return string.replace(regexp, '')
  }
}

const string = () => {
  const { options, characters } = configs

  if (!options.digits && !options.lowers && !options.uppers && !options.symbols) {
    options.digits = true
  }

  let result = ''

  if (options.digits) {
    result += characters.digits
  }

  if (options.lowers) {
    result += characters.letters
  }

  if (options.uppers) {
    result += characters.letters.toUpperCase()
  }

  if (options.symbols) {
    result += characters.symbols
  }

  if (options.exclude) {
    result = helpers.exclude(result, characters.exclude)
  }

  return result
}

const generate = () => {
  const { options } = configs
  const origin = string()

  let pool = origin
  let password = ''

  for (let i = 0; i < options.length; i++) {
    if (!pool) pool = origin

    const index = helpers.random(pool.length)
    const char = helpers.char(pool, index)

    password += char

    if (!options.duplicate) {
      pool = helpers.exclude(pool, char)
    }
  }

  return password
}

export default {
  configs,
  generate
}
