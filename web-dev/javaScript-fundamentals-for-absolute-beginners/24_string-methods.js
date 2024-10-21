const name = "Abul Kalam Azad";

// console.log(name);
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());

// uppercase: ABCD
// lowercase: abcd

const city = "New York";
const place = "new yORk";

if (city.toLowerCase() === place.toLowerCase()) {
  // console.log("these are the same");
} else {
  // console.log("they are different");
}

const usernameInput = "  JohnDoe123   ";
const savedUsername = "JohnDoe123";

if (usernameInput.trim() === savedUsername) {
  console.log("username matches");
} else {
  console.log("username does not match");
}