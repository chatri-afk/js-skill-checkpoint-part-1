// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

// เริ่มเขียนโค้ดตรงนี้
let minFruitName = "";
let minFruitQuantity = 0;
for (let i=0; i < inventory.length; i++) {
  if (inventory[i].quantity > minFruitQuantity) {
    minFruitQuantity = inventory[i].quantity
  }
}

for (let i=0; i < inventory.length; i++) {
  if (inventory[i].quantity < minFruitQuantity) {
    minFruitQuantity = inventory[i].quantity
    minFruitName = inventory[i].name
  }
}

let message = `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minFruitName} ซึ่งมี ${minFruitQuantity} ชิ้น`
console.log(message)