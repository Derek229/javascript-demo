const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]


// object to html
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




//update a taco


let updatetacos = tacos.map( (taco) => {
  if(taco.id === 2){
      return {...taco, name: "sweet pork"}
  } else {
      return taco
  }
})

console.log(updatetacos)


//delete a taco 
let deletetaco = tacos.filter((t)=> t.id !== 3) 
console.log(deletetaco)




//create a taco 
newTaco = [...tacos, {id:4, name:"Fajita", price:25, about: "delicious"}]
console.log(newTaco)
