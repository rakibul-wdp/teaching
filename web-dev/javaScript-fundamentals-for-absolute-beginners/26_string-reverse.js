const sentence = "I am learning JavaScript.";
const reverseSentence = ".tpircSavaJ gninrael ma I";

/*
world
w
ow
row
lrow
dlrow
*/

let reverse = "";
for (const letter of sentence) {
  // console.log(letter);

  reverse = letter + reverse;
}
// console.log(reverse);

let invert = "";
for (let i = 0; i < sentence.length; i++) {
  // console.log(i);
  // console.log(sentence[i]);
  // console.log(i, " -> ", sentence[i]);

  const letter = sentence[i];
  invert = letter + invert;
}
// console.log(invert);

// shortcut
const flip = sentence.split("").reverse().join("");
console.log(flip);