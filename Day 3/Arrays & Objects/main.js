//Arrays exc-1 
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

let newGene = [...genes]

let holder  = newGene[2]
newGene[2] = newGene[newGene.length - 1] 
newGene[newGene.length - 1] = holder

let azinGene = newGene.splice(3, 1)
newGene.push(azinGene[0], azinGene[0])

newGene.unshift("FXT")

console.log(newGene)


// objects
//ex-1
let p1 = {
    name : 'Adam',
    age: 27,
    city: 'Tel-Aviv'
}
let p2 = {
    name : 'Yana',
    age: 27,
    city: 'Tel-Aviv'
}

if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        console.log(p1.name + ' wanted to date ' + p2.name)
    } else {
        console.log(p1.name + ' wanted to date ' + p2.name + ' but couldn"t')
    }
}

//ex-2
let myList = [
    {name : 'Yan', Age : '15'},
    {name : 'Moshe', Age : '27'}
]

myList[0].name = 'Avram'

myList.splice(myList.length - 1)


//ex-3
let moreUsers = [
    {name : 'Haim', Age : '30'},
    {name : 'Gil', Age : '54'}
]

myList.push(...moreUsers)
console.log(myList)

//ex-4
let library = {
    books : [{title : 'kiki', author : 'John'}, {title : 'haha', author : 'Smith'}, {title : 'nana', author : 'Michael'}]
}
let newBook = {title : 'gaga', author : 'Fiona'}
library.books.push(newBook)
console.log(library)


//ex-5
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  let name = prompt('Please enter the name for your reservation').toLowerCase()
  name = name.charAt(0).toUpperCase() + name.slice(1)
  console.log(name)
  if (reservations[name] != undefined) {
      if (reservations[name].claimed) {
        console.log('Hmm, someone already claimed this reservation')
      } else {
        console.log('Welcome ' + name)
      }
  } else {
      console.log('You have no reservation, I will add it now')
      reservations[name] = {claimed : true}
  }



//extension
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

if (kitchen.hasOven) {
    if (kitchen.fridge.works) {
        console.log(kitchen.owner + ' ' + kitchen.fridge.items[1].name + ' expired ' + (date - kitchen.fridge.items[1].expiryDate) + 
        ' day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.')
    } else {
        console.log(kitchen.owner + ' ' + kitchen.fridge.items[1].name + ' expired ' + (date - kitchen.fridge.items[1].expiryDate) + 
        " day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay 250 to fix the fridge.")
    }
} else {
    if (kitchen.fridge.works) {
        console.log(kitchen.owner + ' ' + kitchen.fridge.items[1].name + ' expired ' + (date - kitchen.fridge.items[1].expiryDate) + 
        " day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.")
    } else {
        console.log(kitchen.owner + ' ' + kitchen.fridge.items[1].name + ' expired ' + (date - kitchen.fridge.items[1].expiryDate) + 
        " day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay 250 to fix the fridge.")
    }
}

  