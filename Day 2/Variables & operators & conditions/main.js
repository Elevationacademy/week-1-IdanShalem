//ex-1
numChildren = 5
isCareful = false

if (!isCareful) {
    numChildren++
}

console.log('ex1 - ' + numChildren)

//ex-2
let silverwareCount = 21

if ((silverwareCount % 2) != 0) {
    console.log('ex-2 - ' + (silverwareCount % 2))
}

//ex-3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if (performance !== 'stellar') {
    salary += goodBonus
} else {
    salary += stellarBonus
}
console.log('ex-3 - ' + salary)

//ex-4
const isVIP = true
let cash = 200

if (isVIP || cash > 300) {
    console.log('ex - 4 - welcome')
} else {
    console.log("ex - 4 - get lost")
}

//ex-5
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2
console.log('ex-5 - ' + a,b,c,d)

//ex-6
const gender = 'female'
let profession = "business"
console.log('ex-6 - ')
if(!gender){
    console.log(profession + 'person')
} else {
    if (gender === 'male'){
        console.log(profession + 'man')
    } else {
        console.log(profession + 'woman')
    } 
}

//ex-7
let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2017
console.log('ex-7 - ')
// If the customer has previously bought a Tesla, and the customer is a US citizen, the AI should check how long ago the customer 
// If the Tesla was bought four or more years ago, the AI should ask (console log) whether the customer would like an upgrade
// Otherwise, it should ask whether the customer is satisfied with the car
if (boughtTesla) {
    if (isUSCitizen) {
        if ((currentYear - yearOfTeslaPurchase) >= 4 ) {
            console.log('Would you like an upgrade?')
        } else {
            console.log('Are you satisfied with your tesla?')
        } 
    } else {
        console.log('Would you like to move to the US?')
    }
} else {
    console.log('Would you like to buy a tesla?')
}
