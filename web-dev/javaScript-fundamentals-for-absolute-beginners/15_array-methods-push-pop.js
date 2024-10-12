// push method adds a new element to an array (at the end)
const numbers = [3, 5, 7];

// console.log(numbers);
numbers.push(8);
numbers.push(12);
numbers.push(35, 40, 50);
// console.log(numbers);

const friends = ["abul", "babul"];
friends.push("cabul");
// console.log(friends);


// pop method removes the last element from an array
const friends2 = ["abul", "babul", "cabul", "dabul"];
// console.log(friends2);
// friends2.pop();
const removed1 = friends2.pop();
// friends2.pop();
const removed2 = friends2.pop();
// console.log(friends2);
// console.log(removed1, removed2);


// adds and removes elements at the array's start
const friends3 = ["abul", "babul", "cabul", "dabul"];
console.log(friends3);
friends3.shift();
console.log(friends3);
friends3.unshift("ebul");
console.log(friends3);