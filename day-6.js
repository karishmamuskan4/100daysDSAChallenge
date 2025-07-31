/*🔥 DSA Day 6 Challenge is HERE! 🔥

🛒 Q1. Add Product to Cart

You’re working on an e-commerce site. Insert a new product ID 105 at the end of the cart array.

let cart = [101, 102, 103, 104];
// Insert 105 at the end

✅ Expected Output:

[101, 102, 103, 104, 105]


🧼 Q2. Remove Sold Out Item

Given a cart with product IDs, remove the product 103 from it.

let cart = [101, 102, 103, 104];
// Remove 103

✅ Expected Output:

[101, 102, 104]


📍 Q3. Insert at Specific Position

Insert "banana" at the 2nd index in this fruits array:

let fruits = ["apple", "orange", "grapes"];

✅ Expected Output:

["apple", "orange", "banana", "grapes"]


Traverse the students array and print a message like:
📢 “Hello, <studentName>!” for each name.
let students = ["Ali", "Zara", "John"];

✅ Expected Output:
Hello, Ali!
Hello, Zara!
Hello, John!

📦 Q5. Delete First Item from Queue
You are simulating a queue. Remove the first item from this list of orders:

let orders = ["order1", "order2", "order3"];

✅ Expected Output:
["order2", "order3"] */

//day6
//1st 
let cart = [101,102,103,104];
cart.push(105);
console.log(cart)

//2nd
let carts=[101,102,103,104,105];
carts.splice(carts.indexOf(103),1);
console.log(carts)

//3rd
let fruits=['apple','orange','grapes'];
fruits.splice(-1,0,'banàna')
console.log(fruits);

//4th
let students=['Ali','Zara','John'];
students.forEach((stu)=>{
console.log(`Hello,${stu}!`)
})

//5th
let orders =['order1','order2','order3'];
orders.shift();
console.log(orders);
