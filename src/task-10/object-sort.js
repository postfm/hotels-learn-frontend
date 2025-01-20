const object = { name: 'Vasya', friends: 5, likes: 19, projects: 7 }

const sortedKeysFromObject = Object.keys(Object.fromEntries(Object.entries(object).filter(([key, value]) => typeof (value) === 'number').sort((a, b) => b[1] - a[1])))

console.log(sortedKeysFromObject)