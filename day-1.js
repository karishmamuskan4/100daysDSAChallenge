/*
Day - 1 Problems 🎯 

[Hint : Use built-in Array Methods]

✂️ 1.Remove Discontinued Products
Problem:
You are maintaining a product list for an e-commerce website. A few items (starting from index 2, two items) were discontinued. Remove them.
let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
// Expected Output: ['Laptop', 'Mobile', 'Watch']

➕ 2. Add New Students in Between
Problem:
You are adding two new students to a class list, right after the first two students.
let students = ['Ali', 'Sara', 'Zoya'];
// Expected Output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']

🧪 3. Extract Top Performers
Problem:
You want to extract the top 3 performing students from a sorted result list.
let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
// Expected Output: ['Zainab', 'Ali', 'Farhan']

📅 4. Show Last 2 Days’ Sales
Problem:
You are analyzing a weekly sales report and want to check sales of the last 2 days.
let sales = [220, 300, 280, 150, 400, 390, 310];
// Expected Output: [390, 310]

🚿 5. Get All Users Who Are Active
Problem:
You have an array of users with their active status. You want to list only active users.
let users = [
  {name: 'Ahmed', active: true},
  {name: 'Mira', active: false},
  {name: 'John', active: true},
];
// Expected Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]

📞 6. Block Short Phone Numbers
Problem:
You’re validating a phone book. Filter out numbers that are less than 10 digits.
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
// Expected Output: ['1234567890', '9876543210']

🧾 7. Convert Price to With Tax
Problem:
You want to show prices with 18% GST added.
let prices = [100, 200, 300];
// Expected Output: [118, 236, 354]

💼 8. Append “.com” to Website Names
Problem:
You’re preparing a list of domains from a set of website names.

let sites = ['google', 'amazon', 'microsoft'];
// Expected Output: ['google.com', 'amazon.com', 'microsoft.com']

📊 9. Calculate Total Cart Price
Problem:
You have a cart with multiple product prices. Calculate the total bill.
let cart = [499, 1299, 299, 799];
// Expected Output: 2896

🎟️ 10. Count Frequency of Votes
Problem:
You’re counting how many votes each candidate got from a list of names.
let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
// Expected Output: { A: 3, B: 2, C: 1 }*/




// 1st answer
let products =["laptop","mobile","tablet","camera","watch"]
 products.splice(2,2);
 console.log(products);
 
 //2nd answer
 let students = ["ali","sara","zoya"];
 students.splice(2,0,"nina","umar");
console.log(students);

//3rd answer 
let scores = ["zainab","Ali","farhan","nida","ayaan"];
let top3 = scores.slice(0,3);
console.log(top3);

//4th answer 
let sales = [220,300,280,150,400,390,110];
let lastdays = sales.slice(sales.length-2);
console.log(lastdays);

//5th answer
let users = [
 {name:'ahmed', active: true},
 {name:'mira', active: false},
  {name:'john', active: true}
];
let activeusers= users.filter(user=> user.active);
console.log(activeusers);

//6th answer
let phonenumbers= ['1234567890','12345','0987654321','265484']
let valid = phonenumbers.filter(num=> num.length==10);
console.log(valid);

// 7th answers 
let prices=[100,200,300];
newprice= prices.map(price=>price*1.18);
console.log(newprice);

//8th answer 
let sites= ['google','amazon','microsoft'];
const append= sites.map(add=>add+'.com');
console.log(append)

//9th answer 
let cart = [499,1299,299,799];
let sum = cart.reduce((acc,crr)=>acc+crr,0)
console.log(sum);

//10th answer 
let votes=['A','B','A','0','C','B','A'];
 let count={};
 votes.forEach(v=>{
  count[v]=(count[v] ||0 )+1;
 } )
 console.log(count)
