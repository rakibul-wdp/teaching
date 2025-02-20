function multiplyNumbers(num1, num2) {
  console.log(typeof num1, typeof num2);
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please provide valid numbers";
  }

  const multipliedValue = num1 * num2;
  return multipliedValue;
}

// const result = multiplyNumbers(3, 5);
// console.log(result);

function getFullName(firstName, lastName) {
  console.log(typeof firstName, typeof lastName);
  if (typeof firstName !== "string") {
    return "First name should be a string";
  }
  if (typeof lastName !== "string") {
    return "Last name should be a string";
  }

  const fullName = firstName + " " + lastName;
  return fullName;
}

// const completeName = getFullName("Abul", "Babul");
// console.log(completeName);

function extractPrice(productDetails) {
  console.log(typeof productDetails);
  if (typeof productDetails !== "object") {
    return "Please provide an object";
  }

  const productPrice = productDetails.price;
  return productPrice;
}

// const itemPrice = extractPrice({ name: "Mouse", price: 500, color: "black" });
// const itemPrice = extractPrice(3);
// console.log(itemPrice)

function getSecondElement(numbers) {
  console.log(typeof numbers);
  console.log(Array.isArray(numbers));
  if (Array.isArray(numbers) === false) {
    return "Please provide a valid array";
  }

  const secondElement = numbers[1];
  return secondElement;
}

const secondValue = getSecondElement([3, 5, 7]);
console.log(secondValue);
