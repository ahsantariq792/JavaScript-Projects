let arr = [
    { name: "monitor", price: 100 },
    { name: "TV", price: 200 },
    { name: "LCD", price: 300 },
    { name: "Microwave", price: 400 },
    { name: "Spoon", price: 500 },
    { name: "Zebra", price: 600 },
]

/////////////////
//for Each///////
////////////////


let totalSum = 0
arr.forEach(item => {
    totalSum += item.price
});

console.log("totalSum", totalSum)

//This can be done through reduce



//////////////////
//Reduce Function/
//////////////////


// array.reduce(callback(accumulator,current value, index, array), initialValue);

const totalPrice = arr.reduce((total, item) => {
    return total + item.price
}, 0)

console.log("totalPrice", totalPrice)



//reduce that 4 parameters

const totalPrice2 = arr.reduce((total, item, index, array) => {
    console.log("index", index)
    console.log("array", array)
    console.log("item", item)
    console.log("total",total)
    return total + item.price
}, 0)

console.log("totalPrice2", totalPrice2)




//////////////////////
////Filter////////////
//////////////////////

let filteredItems = arr.filter((item)=>{
    return item.price > 100
})
console.log("filteredItems", filteredItems)



//////////////////////
////Map//////////////
//////////////////////

let MappedItems = arr.map((item)=>
{
    return item.name
})
console.log("MappedItems",MappedItems)


//////////////////////
////Find//////////////
//////////////////////

let FindItems = arr.find((item)=>
{
    return item.name === "monitor"
})
console.log("FindItems",FindItems)


//////////////////////
////ForEach///////////
//////////////////////

let ForEachItem = arr.forEach((item)=>
{
    console.log("ForEachitemPrice",item.price)
})



//////////////////////
////some///////////
//////////////////////

let SomeItems = arr.some((item)=>{
    return item.price > 100
})
console.log("SomeItems", SomeItems)
//returns true / false if the array has some (can be only one) items which meets the condition



//////////////////////
////Every///////////
//////////////////////

let EveryItem = arr.every((item)=>{
    return item.price >= 100
})
console.log("EveryItem", EveryItem)
//returns true / false if the array has all the items which meets the condition


//////////////////////
////includes///////////
//////////////////////

const items = [1,2,3,4,5,6]
let includeitems = items.includes(2)
console.log("includeitems",includeitems)