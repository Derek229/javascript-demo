const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]


//create an array where all taco price are .00

let updatetacos = tacos.map( (taco) => {
  if(taco.id >= 0){
      return {...taco, price: .00}
  } else {
      return taco
  }
})

console.log(updatetacos)

//function that logs each item into an array 
const tacosArray = [taco, taco1, taco2]
tacosArray.forEach(tacoArray => console.log(tacoArray))

console.log ('__________')

//find method to find taco with id 1
const findTaco = tacos.find(findtaco => findtaco.id === 1)

console.log(findTaco)


//find price greater than 19 and filter
let filtertacos = tacos.filter(tacos => tacos.price > 19) 

console.log(filtertacos)


//return an array with an about key that has the name: price:
//and about:




