// slice
const entireName = "OmokTomok";
const firsPart = entireName.slice(0, 4);
// console.log(firsPart);

/*
1 2 3 4 5 6 7
(2, 5) -> 2 3 4
(3, 7) -> 3 4 5 6
(start, end before)
*/

// split
const sentence = "I am learning JavaScript programming language";
// console.log(sentence.split("a"));

const friends = "Abul,Babul,Cabul,Dabul,Ebul";
const friend = friends.split(",");
// console.log(friend);

// concat
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
// console.log(fullName);
const fullName2 = firstName.concat(" ").concat(lastName);
// console.log(fullName2);

// includes
console.log(lastName.includes("m"));