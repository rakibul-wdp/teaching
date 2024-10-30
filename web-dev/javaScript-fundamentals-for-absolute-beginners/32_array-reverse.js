const numbers = [1, 2, 3, 4, 5];
// reverse      [5, 4, 3, 2, 1]

// console.log(numbers)
// const reversed = numbers.reverse();
// console.log(numbers);

const reverseNumbers = [];
for (const num of numbers) {
  // console.log(num);

  reverseNumbers.unshift(num);
}
// console.log(reverseNumbers);

const invertNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  invertNumbers.unshift(num);
}

// reverse loop
const flipNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  // console.log(num);

  flipNumbers.push(num);
}
console.log(flipNumbers);