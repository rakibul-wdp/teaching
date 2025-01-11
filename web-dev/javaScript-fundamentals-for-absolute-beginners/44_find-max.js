const abul = 75;
const babul = 95;

if (abul > babul) {
  console.log("Abul's obtained marks are greater than Babul");
} else {
  console.log("Babul's obtained marks are greater than Abul");
}

// inside a function
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max = getMax(55, 70);
// console.log("Max of two is: ", max);

const carSpeed = 120;
const bikeSpeed = 180;
const trainSpeed = 150;

if (carSpeed > bikeSpeed && carSpeed > trainSpeed) {
  console.log("The car is the fastest vehicle");
} else if (bikeSpeed > carSpeed && bikeSpeed > trainSpeed) {
  console.log("The bike is the fastest vehicle");
} else {
  console.log("The train is the fastest vehicle");
}

function fastestVehicle(speed1, speed2, speed3) {
  if (speed1 > speed2 && speed1 > speed3) {
    return speed1;
  } else if (speed2 > speed1 && speed2 > speed3) {
    return speed2;
  } else {
    return speed3;
  }
}

// console.log(fastestVehicle(25, 45, 20));

// console.log(Math.max(2, 5, 1, 8, 12));

const numbers = [25, 28, 20, 45, 95, 35];

function findMaxNum(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

const maxNum = findMaxNum(numbers);
console.log("Max number is: ", maxNum);
