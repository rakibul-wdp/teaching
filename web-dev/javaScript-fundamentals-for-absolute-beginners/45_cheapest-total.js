const smartphones = [
  { brand: "Samsung", price: 70000, camera: "108MP", color: "Phantom Black" },
  { brand: "Xiaomi", price: 50000, camera: "108MP", color: "Aurora Blue" },
  { brand: "Apple", price: 120000, camera: "12MP Dual", color: "Midnight" },
  {
    brand: "OnePlus",
    price: 60000,
    camera: "50MP Triple",
    color: "Glacial Green",
  },
  { brand: "Google", price: 75000, camera: "50MP Dual", color: "Stormy Black" },
];

function findCheapestPhone(phones) {
  let cheapestPhone = phones[0];
  for (const phone of phones) {
    if (phone.price < cheapestPhone.price) {
      cheapestPhone = phone;
    }
  }
  return cheapestPhone;
}

const cheapestPhone = findCheapestPhone(smartphones);
// console.log("Cheapest phone is: ", cheapestPhone);

const products = [
  { name: "Wireless Mouse", price: 1200 },
  { name: "Mechanical Keyboard", price: 4500 },
  { name: "External SSD", price: 8000 },
  { name: "Webcam", price: 5000 },
];

function calculateTotalPrice(products) {
  let total = 0;
  for (const product of products) {
    total = total + product.price;
  }
  return total;
}

const totalPrice = calculateTotalPrice(products);
console.log("Total price is: ", totalPrice);
