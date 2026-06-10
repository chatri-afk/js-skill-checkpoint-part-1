// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products,promotionCode) {
  let result = 0;
  let NewPrice = [];
  for (let i = 0; i < products.length; i++) {
    if (promotionCode === "SALE20") {
      NewPrice.push(products[i].price*(1-0.2));
      result = result + (NewPrice[i] * products[i].quantity);
    } else if (promotionCode === "SALE50") {
      NewPrice.push(products[i].price*(1-0.5));
      result = result + (NewPrice[i] * products[i].quantity);
    } else if (promotionCode === "") {
      NewPrice.push(products[i].price*(1));
      result = result + (NewPrice[i] * products[i].quantity);
    };
  }
  return result
};


console.log(calculateTotalPrice(products,promotionCode))