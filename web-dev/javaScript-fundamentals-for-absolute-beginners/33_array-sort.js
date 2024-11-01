const fruits = ["Banana", "Orange", "Apple", "Mango", "Aaple", "Baaana"];

const sortedFruits = fruits.sort();
// console.log(sortedFruits);

// const numbers = [3, 1, 7, 5, 9, 4];
/*
Ascending --> smaller to larger:  [1, 3, 4, 5, 7, 9]
Descending --> larger to smaller: [9, 7, 5, 4, 3, 1]
*/
const numbers = [3, 1, 15, 7, 56, 5, 9, 4];

// const ascendingNumbers = numbers.sort();
// console.log(ascendingNumbers);

// const ascendingNumbers = numbers.sort(function (a, b) { return a - b });
const descendingNumbers = numbers.sort(function (a, b) { return b - a })

console.log(descendingNumbers);