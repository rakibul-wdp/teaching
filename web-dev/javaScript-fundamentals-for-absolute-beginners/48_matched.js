const products = [
  { id: 1, name: "Xiaomi Redmi Note 12 phone", price: 19000 },
  { id: 2, name: "iPhone SE (2020)", price: 19000 },
  { id: 3, name: "Dell Inspiron 15 laptop", price: 19000 },
  { id: 4, name: "Samsung Galaxy A14 phone", price: 19000 },
  { id: 5, name: "Lenovo ThinkPad E14 laptop", price: 19000 },
  { id: 6, name: "OnePlus Nord CE 2 phone", price: 19000 },
  { id: 7, name: "MacBook Air (2017) LaptOP", price: 19000 },
  { id: 8, name: "Nothing Phone 1", price: 19000 },
];

// for (const product of products) {
//   console.log(product);
// }

function findMatchingProducts(products, keyword) {
  const matchingProducts = [];

  for (const product of products) {
    // console.log(product.name.includes(keyword));
    if (product.name.toLowerCase().includes(keyword.toLowerCase())) {
      matchingProducts.push(product);
    }
  }

  return matchingProducts;
}

const searchResult = findMatchingProducts(products, "LAPtop");
console.log(searchResult);
