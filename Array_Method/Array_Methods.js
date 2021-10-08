const items = [
    { name: 'Bike', price: 100 },
    { name: 'Car', price: 5000 },
    { name: 'Book', price: 20 },
    { name: 'Phone', price: 251 },
    { name: 'Laptop', price: 1000 },
    { name: 'House', price: 400000 }
]

// Filter method
const cheapItems = items.filter((item) => {
    return item.price <= 100
})
console.log(cheapItems)

// Map method
const itemNames = items.map((item) => {
    return item.name
})
console.log(itemNames)

// Find method
const findExpensiveItem = items.find((item) => {
    return item.price === 400000
})
console.log(findExpensiveItem)

// forEach method
items.forEach(item => console.log(item));

// Some method
const evenPrice = (items) => items.price % 2 === 0;
console.log(items.some(evenPrice));

// Every method
const evenPrices = (items) => items.price % 2 === 0;
console.log(items.every(evenPrices));

// Reduce method
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total) 

// Includes method
const getallen = [1, 2, 3, 4, 5]

const includesTwo = getallen.includes(2)
console.log(includesTwo)