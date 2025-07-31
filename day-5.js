//day5

//1st 
const phonenumber=[
  '+918296393767',
  '+14085551234',
  '+919748479374',
  '+16484648478',
  '+917393638398',
  '+17484697487'
];
indiannumbers=phonenumber.filter((num)=>{
 return num.startsWith('+91')
}
)
console.log(indiannumbers);
foreignnumbers=phonenumber.filter((num)=>{
  return num.startsWith('+1');
} )
console.log(foreignnumbers);


//2nd 
let cart =[101,102,104];
cart.splice(2,0,103);
console.log(cart);


//3rd
let waitinglist=['ali','john','sara'];
let newstudent='aarav';
waitinglist.push(newstudent);
console.log(waitinglist);




*/ Problem 1: Separate Phone Numbers

Problem:
You are given an array of phone numbers. Some are Indian numbers (+91 format) and others are US numbers (+1 format). Write a function to separate them into two different arrays.

const phoneNumbers = [
  "+919876543210",
  "+14085551234",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];

✅ Output:

{
  indianNumbers: ["+919876543210", "+918888777666", "+917654321098"],
  usNumbers: ["+14085551234", "+12345678901"]
}

🧠 Hint: Use .filter() method and check string patterns using .startsWith().


✨ Problem 2: Insert Product in Cart

Problem:
You're building a shopping cart. Given an array of product IDs in the cart, write a function that inserts a new product at the second position (index 1).

let cart = [101, 102, 104];
let newProduct = 103;

✅ Output:

[101, 103, 102, 104]

💼 Problem 3: Insert Student in Waiting List

Problem:
You are managing a waiting list of students for an event. Add a new student at the end of the list using a built-in method.

let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";

✅ Output:

["Ali", "John", "Sara", "Aarav"]
*/