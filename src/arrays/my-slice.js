function mySlice(arr, start, end = arr.length) {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(arr[i])
  }
  return result
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(mySlice(numbers, 4, 5))
console.log(numbers.slice(4, 5)) 