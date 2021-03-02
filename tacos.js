
const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]

// take taco  and make it change to change.

taco.name = 'changed'
console.log(tacos)


// make array into formatted html(string)

const formatTacoHTML = (tacoObj) => {
  const {name, price, about} = tacoObj
  return (`
  <div>
    <h1>${name}: ${price}, ${about}</h1>
  </div>
  `)
}

let  htmlARR = tacos.map(formatTacoHTML)
console.log(htmlARR)

//function that takes price of taco and makes it .00
const tacoDONTCHANGE = {id:3, name:'fish', price:30, about:'So good'}
let fish = {...tacoDONTCHANGE, price: .00}
console.log(fish)