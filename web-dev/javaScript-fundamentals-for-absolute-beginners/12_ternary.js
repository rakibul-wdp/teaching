const temperature = 20;

// if (temperature >= 25) {
//   console.log("warm day");
// } else {
//   console.log("day cold");
// }

/*
Ternary - Refers to something composed of three parts or elements.

structure
condition ? execute if true : execute if false
*/

// temperature >= 25 ? console.log("warm day") : console.log("cold day");

let total = 200;
const hasCoupon = false;

if (!hasCoupon) { // hasCoupon === true
  total = total - 50;
} else {
  total = total + 20;
}

// console.log(total);

// total = hasCoupon === true ? total - 50 : total + 20;

// console.log(total);


const number = 0;

// if (number > 0) {
//   console.log("Positive number");
// } else if (number < 0) {
//   console.log("Negative number");
// } else {
//   console.log("Zero");
// }

// number > 0 ? console.log("Positive number") : number < 0 ? console.log("Negative number") : console.log("Zero");

const purchaseAmount = 150;
const isMember = false;
let payAmount;

// if (isMember) { // isMember === true
//   if (purchaseAmount > 200) {
//     payAmount = purchaseAmount - 20;
//   } else {
//     payAmount = purchaseAmount - 10;
//   }
// } else {
//   payAmount = purchaseAmount - 5;
// }

// console.log(payAmount);

payAmount = isMember === true ? (purchaseAmount > 200 ? purchaseAmount - 20 : purchaseAmount - 10) : purchaseAmount - 5;

console.log(payAmount);