const calculate = function (a, b, operationFunction) {
  return operationFunction(a, b)
}

const multiplication = function (a, b) {
  return a * b
}

const division = function (a, b) {
  return a / b
}

const addition = function (a, b) {
  return a + b
}

const subtraction = function (a, b) {
  return a - b
}

const operations = {
  multiply: multiplication,
  divide: division,
  add: addition,
  subtract: subtraction,
}

const selectedOperationOne = 'multiply'
const selectedOperationTwo = 'divide'
const selectedOperationThree = 'add'
const selectedOperationFour = 'subtract'

console.log(calculate(6, 3, operations[selectedOperationOne]))
console.log(calculate(6, 3, operations[selectedOperationTwo]))
console.log(calculate(6, 3, operations[selectedOperationThree]))
console.log(calculate(6, 3, operations[selectedOperationFour]))