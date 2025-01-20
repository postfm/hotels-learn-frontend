const phrase = 'Не следует, однако, забывать, что экономическая повестка сегодняшнего дня в значительной степени обусловливает важность форм воздействия.'
const symbols = [' ', ',', '.', '!', '?', ':', ';']
const limit = 40


function concatPhrase(string, limit, symbols) {
  const slicedPhrase = string.slice(0, limit + 1)

  const indexes = []

  for (let i = 0; i < symbols.length - 1; i++) {
    indexes.push(slicedPhrase.lastIndexOf(symbols[i]))
  }

  const maxIndex = Math.max(...indexes)
  const result = slicedPhrase.slice(0, maxIndex) + '...'
  return result
}

console.log(concatPhrase(phrase, limit, symbols))