let a = 3;
let b = 5;

// console.log(a, b);
// a = b;
// b = a;
// console.log(a, b);

const temp = a;
a = b;
b = temp;
// console.log(a, b);

// destructuring
let x = 5;
let y = 7;

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
