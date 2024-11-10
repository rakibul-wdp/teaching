// 1 feet = 12 inches

function convertInchesToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
const heightInFeet = convertInchesToFeet(66);
// console.log(heightInFeet);

// 66 -> 5 feet 6 inches
function formatToFeetInches(inches) {
  const feetFraction = inches / 12;
  const totalFeet = parseInt(feetFraction);
  const remainingInches = inches % 12;
  const formattedResult = totalFeet + " feet " + remainingInches + " inches";

  return formattedResult;
}
const formattedHeight = formatToFeetInches(66);
// console.log(formattedHeight);

// KG to GM
function convertKGToGM(kilograms) {
  const grams = kilograms * 1000;
  return grams;
}