const data = {
  character: {
    include: {
      digit: '0123456789',
      letter: 'abcdefghijklmnopqrstuvwxyz',
      symbol: '@!?&%$#(){}[]<>+-*/=.,:;',
      custom: ''
    },

    exclude: {
      similar: 'ilo0',
      custom: '(){}[]<>+-*/=.,:;'
    }
  },

  length: {
    value: 16,
    max: 80,
    min: 4
  },

  option: {
    uppercase: true,

    include: {
      digit: true,
      letter: true,
      symbol: true,
      custom: true
    },

    exclude: {
      similar: true,
      custom: true
    }
  }
}

export default data
