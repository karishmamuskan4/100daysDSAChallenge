
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
