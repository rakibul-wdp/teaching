const min = Math.min(55, 2, 28, 7, 5, 32, -2);
// console.log(min);
const max = Math.max(55, 2, 28, 7, 5, 32, -2);
// console.log(max);

// console.log(Math.PI);

// console.log(Math.abs(10 - 20));
// console.log(Math.round(3.5));
// console.log(Math.floor(2.95));
// console.log(Math.ceil(2.0001));

// console.log(Math.random());
// console.log(Math.random() * 10);
const rand = Math.round(Math.random() * 10);
// console.log(rand);

const today = new Date();
// console.log(today);

const date = new Date("2050-10-15");
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());

const specificDate = new Date(2060, 3, 26);
// console.log(specificDate);
specificDate.setMonth(10);
// console.log(specificDate);

console.log(specificDate.toLocaleString());
console.log(specificDate.toLocaleString("en-GB"));
