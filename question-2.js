// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;

let orange = { name: "Orange", price: 20, quantity: 300 };
inventory.push(orange);

let total = 0;
for (let fruitPrice of inventory) {
  total = total + (fruitPrice.price * fruitPrice.quantity);
};

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${total} บาท`)