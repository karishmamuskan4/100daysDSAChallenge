
let inventory = [
{id: 101, name: 'Laptop' },
{ id: 102, name: 'Mobile' },
{ id: 103, name: 'laptop' },
{ id: 104, name: 'Tablet' },
 { id: 105, name: 'MOBILE' },
{ id: 106, name: 'Camera' }
];

let seenNames = [];

let cleanedInventory = inventory.filter(item => {
 let lowerName = item.name.toLowerCase();
if (seenNames.includes(lowerName)) {
 return false; // duplicate, skip
} else {
 seenNames.push(lowerName); // track this name
 return true; // keep it
}
});
console.log(cleanedInventory);

let transactions = [
{ category: 'Food', amount: 120 },
 { category: 'Transport', amount: 50 },
 { category: 'Food', amount: 80 },
{ category: 'Shopping', amount: 300 },
{ category: 'Transport', amount: 70 }
];

let groupedTotals = transactions.reduce((acc, curr) => {
 let cat = curr.category; if (acc[cat]) {
acc[cat] += curr.amount;
} else {
acc[cat] = curr.amount;
}
 return acc;
}, {});
console.log(groupedTotals);
