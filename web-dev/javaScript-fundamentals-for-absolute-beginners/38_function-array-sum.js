function calculateSum(numbers) {
  // console.log(numbers);

  let totalSum = 0;
  for (const number of numbers) {
    // console.log(number);

    totalSum = totalSum + number;
  }
  return totalSum;
}

const numbersArray = [3, 5, 7, 8, 9];
const total = calculateSum(numbersArray);
// console.log(total);

function calculateEvenSum(numbers) {
  // console.log(numbers);

  let totalEvenSum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      // console.log(number);

      totalEvenSum = totalEvenSum + number;
    }
  }

  return totalEvenSum;
}

const numbers = [1, 2, 3, 4, 5, 6];
const sumOfEvens = calculateEvenSum(numbers);
console.log(sumOfEvens);