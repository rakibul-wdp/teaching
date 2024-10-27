const laptop = {
  brand: "Dell",
  model: "XPS 15",
  price: 150000,
  processor: "Intel Core i7",
  storage: "512GB SSD"
}

// delete
// console.log(laptop);
// delete laptop.price;
// console.log(laptop);

const keys = Object.keys(laptop);
// console.log(keys);

const values = Object.values(laptop);
// console.log(values);

const company = {
  name: "TechSolution",
  offices: ["New York", "San Francisco", "London"],
  information: {
    founded: 2010,
    reputation: {
      globally: "Excellent",
      locally: "Very Good"
    }
  }
}

// console.log(company.information.founded);
company.information.reputation.locally = "very very good";
console.log(company.information.reputation.locally);

company.offices[1] = "Dhaka";
console.log(company.offices);