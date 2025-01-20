const string1 = 'мама мыла раму'
const string2 = 'маша'

function isSubString(string1, string2) {
  let result = false
  result = string1.includes(string2) || string2.includes(string1)
  return result
}

console.log(isSubString(string1, string2))