const person = {
  name: "Abul Karim",
  age: 24,
  profession: "developer",
  salary: 25000,
  remote: true,
  "tech stack": ["javascript", "react", "node.js"],
}
// console.log(person);

// dot notation
// console.log(person.profession);
const earning = person.salary;
// console.log(earning);

// bracket notation
// console.log(person["age"]);
const personAge = person["age"];
// console.log(personAge);
const keyName = "profession";
// console.log(person[keyName]);

// console.log(person."tech stack");
// console.log(person["tech stack"]);

// update
person.salary = 30000;
person["age"] = 25;
person["tech stack"] = ["python", "django"];
const occupation = "profession";
person[occupation] = "devops";

console.log(person);