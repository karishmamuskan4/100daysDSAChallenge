/*
🚨 Day-2 DSA Challenge is LIVE! 💻🔥

Hey Students!
Welcome to Day 2 of your 100 Days of DSA Challenge  let's keep the energy sky high 🚀

Remember:
🧠 It’s not about how much you know...
💪 It’s about how consistently you show up and do the work.
📈 Success doesn’t come from motivation alone. It comes from discipline.
✨ Not Just Code Engineer it with Intent!

So let’s get into today’s power-packed problems 👇

🧾 1. Generate Invoice Report 
Problem:
You're building an invoice generator. For each item, calculate total = qty * price. 
let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];

✅ Expected Output:

[
  { name: "Pen", total: 30 },
  { name: "Notebook", total: 100 },
  { name: "Bag", total: 400 }
]

Hint : Use Map & Reduce

🧠 4. Detect Duplicate Entries 
Problem:
You’re validating a user list. Some users are accidentally added more than once. Extract the duplicate names only.

let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];

✅ Expected Output:

['Ali', 'Sara']

💡 Hint: Compare indexOf and lastIndexOf.

📈 3. Find Most Sold Product
Problem:
You're analyzing orders. Find the product with the highest quantity sold.

let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];

✅ Expected Output:
'Pen'
💡 Hint: First create a frequency map using reduce, then extract the max.
*/


 //1st answer 
 let items = [
  {name:'pen',price:10,qty:3 },
 {name:'notebook',price:50,qty:2 },
  {name:'bag',price:400,qty:1}
 ]
 let invoice= items.map(item=>{
  return{
  name :item.name,
 totalprice:item.price*item.qty};
 })
 console.log(invoice);
 
 //2nd answer
 let userss = ['ali','sara','zoya','ali','sara','zara'];
 let u;
 let dub = userss.filter((val,index)=>{
   u= userss.indexOf(val)!== userss.lastIndexOf(val)&& userss.indexOf(val)==index;
   return u;
 })
 console.log(dub);
 
 //3rd answer
 let orders = [
  { product: 'penn', qnty: 10 },
  { product: 'book', qnty: 5 },
  { product: 'penn', qnty: 15 },
  { product: 'Bag', qnty: 1 },
  { product: 'book', qnty: 10 }
];
let pro = {};
orders.forEach((value) => {
  if (pro[value.product]) {
    pro[value.product] += value.qnty;
  } else {
    pro[value.product] = value.qnty;
  }
});
let maxProduct = '';
let maxQty = 0;
for (let key in pro) {
  if (pro[key] > maxQty) {
    maxQty = pro[key];
    maxProduct = key;
  }
}
console.log( maxProduct, maxQty);
