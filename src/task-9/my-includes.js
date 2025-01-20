const items = [1, 2, 3, 4, 5, 6, NaN, 7, 8, 9, 'test', false]

function myIncludes(arr, item, from = 0) {
  let result = false
  for (let i = from; i < arr.length; i++) {
    if (item !== item && arr[i] !== arr[i]) {
      result = true
    }
    if (arr[i] === item) {
      result = true
    }
  }
  return result
}

console.log(myIncludes(items, 5, 2))
console.log(items.includes(5, 2))

console.log(myIncludes(items, -1, 2))
console.log(items.includes(-1, 2))

