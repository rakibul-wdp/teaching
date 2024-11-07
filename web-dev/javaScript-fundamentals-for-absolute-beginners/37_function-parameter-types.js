function isStringLengthEven(str) {
  console.log(str);
  const strSize = str.length;
  console.log(strSize);

  if (strSize % 2 === 0) {
    console.log("even size");
    return true;
  } else {
    console.log("odd size")
    return false;
  }
}

// isStringLengthEven("Apple");
// const output = isStringLengthEven("Banana");
// console.log(output);

function multiplyNumber(number, shouldDouble) {
  if (shouldDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(multiplyNumber(3, false));
// console.log(multiplyNumber(3, true));

function getArrayLength(arr) {
  console.log(arr);
  const len = arr.length;
  return len;
}

// console.log(getArrayLength([3, 5, 7, 8, 9]));

function extractAge(person) {
  console.log(person);
  const age = person.age;
  return age;
}

const person = {
  name: "John",
  age: 24,
}

console.log(extractAge(person));