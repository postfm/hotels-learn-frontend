const MIN_NUMBER = 1
const MAX_NUMBER = 100

function randomInteger(min = MIN_NUMBER, max = MAX_NUMBER) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

const numbers = []
for (let i = MIN_NUMBER; i < MAX_NUMBER; i++) {
  numbers.push(i)
}

const secretNumber = randomInteger()
console.log(`Компьютер 1 загадал число: ${secretNumber}`)
console.log()

function binarySearch(array, item) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let middle = parseInt((high + low) / 2);
    let value = array[middle];
    console.log(`Компьютер 2: Пробую число ${value}`)

    if (value === item) {
      console.log('Компьютер 1: Угадал!')
      return value;
    }

    if (value > item) {
      console.log('Компьютер 1: Меньше')
      console.log()
      high = middle - 1;
    } else {
      console.log('Компьютер 1: Больше')
      console.log()
      low = middle + 1;
    }
  }

  return null;
};

binarySearch(numbers, secretNumber);
