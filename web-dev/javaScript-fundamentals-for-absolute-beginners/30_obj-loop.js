const bike = {
  brand: "Royal Enfield",
  model: "classic 350",
  color: "Grey",
  price: 405000,
}

// for of - array
// for in - object
for (const prop in bike) {
  // console.log(prop);
  // console.log(prop, ":", bike[prop]);
}

const keys = Object.keys(bike);
// console.log(keys);

for (const key of keys) {
  // console.log(key);
  // console.log(key, ":", bike[key]);
}

// object declare
const pen = {
  brand: "Matador",
  price: 10,
  color: "black"
}

const pencil = new Object();
// console.log(pencil);

const marker = Object.create({});
console.log(marker);

// using class