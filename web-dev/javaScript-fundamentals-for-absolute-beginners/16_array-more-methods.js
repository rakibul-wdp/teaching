const months = ["Jan", "Feb", "Mar", "Apr", "May"];

// console.log(months.includes("Mar"));
// console.log(months.includes("Jun"));

// console.log(months.indexOf("Feb"));
// console.log(months.indexOf("Dec"));

const nums = [];
const fruitName = "orange";
const age = 24;

// console.log(Array.isArray(months));
// console.log(Array.isArray(nums));
// console.log(Array.isArray(fruitName));
// console.log(Array.isArray(age));

// join - joins all array elements into a string
const evenNumbers = [2, 4, 6, 8];
// console.log(evenNumbers.join("|"));

// concat - creates a new array by merging (concatenating) existing arrays
const oddNumbers = [1, 3, 5, 7];
// console.log(evenNumbers.concat(oddNumbers));

// slice - slices out a piece of an array
const numbers = [10, 20, 30, 40, 50, 60, 70];
// console.log(numbers.slice(2, 5));
// console.log(numbers.slice(3));

// splice - adds new items to an array
const numbers2 = [10, 20, 30, 40, 50, 60, 70];
// numbers2.splice(2, 0, 35);
// console.log(numbers2);
numbers2.splice(3, 2, 42);
console.log(numbers2);