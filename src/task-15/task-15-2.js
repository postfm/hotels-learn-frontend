function createRandomGenerator(min, max) {
  return function () { return min + Math.random() * (max - min) }
}

// Тестируем
const min = 4
const max = 5
const length = 10

const randomizer = createRandomGenerator(min, max)

for (let i = 0; i < length; i++) {
  console.log(randomizer())
}

