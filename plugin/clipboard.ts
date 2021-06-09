const write = (text: string) => navigator.clipboard.writeText(text).catch()

export default { write }
