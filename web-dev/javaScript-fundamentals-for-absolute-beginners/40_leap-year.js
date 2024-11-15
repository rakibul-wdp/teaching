function checkLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// const isLeapYearValid = checkLeapYear(1700);
// console.log(isLeapYearValid);

function isLeapYear(year) {
  // if (year % 4 === 0) {
  //   if (year % 100 === 0) {
  //     if (year % 400 === 0) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return true;
  //   }
  // } else {
  //   return false;
  // }

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

const leapCheck = isLeapYear(2100);
const leapCheck2 = isLeapYear(1800);
const leapCheck3 = isLeapYear(2024);
const leapCheck4 = isLeapYear(1900);

console.log(leapCheck, leapCheck2, leapCheck3, leapCheck4);