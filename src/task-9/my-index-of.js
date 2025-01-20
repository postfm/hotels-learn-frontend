const items = [1, 2, 3, 4, 5, 6, NaN, 7, 8, 9, 'test', false]

function myIndexOf(arr, item, from = 0) {
  let result = -1
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) { result = i }
  }
  return result
}

console.log(myIndexOf(items, 5, 2))
console.log(items.indexOf(5, 2))

console.log(myIndexOf(items, NaN, 2))
console.log(items.indexOf(NaN, 2))
