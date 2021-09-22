// --- reference
const john = {
  name: 'John Smith',
  age: 45,
};

const newJohn = john; // { name: 'John Smith', age: 45 }

newJohn.name = 'Tom';

console.log(newJohn); // { name: 'Tom', age: 45 }

console.log(john); // { name: 'Tom', age: 45 }

// --- value
const number = 20;

const sum = (a, b) => a + b;

const sumWithNumber = sum(number, 10);

console.log(number); // 20

console.log(sumWithNumber); // 30
