const phrase = 'мама мыла раму'

console.log(phrase)

function toUppercaseFirstSymbol(str) {

  const phraseArray = str.split('')
  phraseArray[0] = phraseArray[0].toUpperCase()
  return phraseArray.join('')
}


console.log(toUppercaseFirstSymbol(phrase))