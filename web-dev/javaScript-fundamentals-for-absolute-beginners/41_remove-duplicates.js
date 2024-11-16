const fruits = ["Apple", "Banana", "Apple", "Mango", "Mango", "Banana"];

function removeDuplicates(arr) {
  const uniqueElements = [];
  for (const element of arr) {
    if (uniqueElements.includes(element) === false) {
      uniqueElements.push(element);
    }
  }
  return uniqueElements;
}

const uniqueFruits = removeDuplicates(fruits);
console.log(uniqueFruits);

const numbers = [2, 3, 5, 7, 2, 5, 7, 3];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);