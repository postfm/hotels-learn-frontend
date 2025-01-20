const object = { name: 'Vasya', friends: 5, likes: 19, projects: 7 }

const sumValueFromObject = Object.values(object).filter((item) => typeof (item) === 'number').reduce((accumulator, item) => accumulator + item, 0)
console.log(sumValueFromObject)