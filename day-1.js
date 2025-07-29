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
