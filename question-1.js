// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
let obj5 = { id: 5, todo: "Walk the dog" };
myTodo.push(obj5);

myTodo[3].todo = "Go to the gym";

myTodo.pop();

console.log(myTodo);

console.log(myTodo[3]);