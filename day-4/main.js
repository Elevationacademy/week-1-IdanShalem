// ex-1
const calcAge = function (currentYear, bornYear) {
    return currentYear - bornYear
}

let age = calcAge(2017, 1989)
console.log(age)

// ex-2
const calcAge2 = function (currentYear, bornYear) {
    age = currentYear - bornYear
    console.log(`You can either be ${age} or ${age-1}`)
}

let age2 = calcAge2(2017, 1989)

// ex-3
const isEven = function (num) {
    return num % 2 === 0
}

console.log(isEven(21))

// ex-4
nums = [4, 5, 43, 95, 78, 109, 88, 97]

for (let n of nums) {
    if (!isEven(n)) {
        console.log(n)
    }
}

// ex-5
const isIn = function (numbers, nToCheck) {
    for (let x of numbers){
        if (x === nToCheck) {
            return true
        }
    }
    return false
}

let numbers = [5, 7, 9]
console.log(isIn(numbers, 6))

// ex-6
let calculator = {
    add: function(n1, n2) {
        return n1 + n2
    },
    subtract: function(n1,n2) {
        return n1 - n2
    }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))

// ex-7
const increaseByNameLength = function (money, name) {
    return money * name.length
}
const makeRegal = function (name) {
    return `His Royal Highness, ${name}` 
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

// extension

const looper = function(arr, newArr, start, deleteCount, item) {
    isItems = false
    for(let i in arr){
        if(i < start){
            newArr.push(arr[i])
        } else{
            if(item.length > 0 && !isItems) {
                for (n of item) {
                    newArr.push(n)
                }
                isItems = true
            }
            if (deleteCount <= 0 ) {
                newArr.push(arr[i])
            } else {
                deleteCount--
            }
        }
    }
}
const adder = function (arr, newArr, item) {
    newArr = [...arr]
    for (i of item){
        newArr.push(i)
    }
    return newArr
}

const startChecker = function(start, arr) {
    if (start < 0) {
        start = arr.length + start
        if (start < 0) {
            start = 0
        }
    }
    console.log(start)
    return start
}

const splice1 = function(arr, start, deleteCount, ...item){
    let newArr = []
    start = startChecker(start, arr)
    if (start < arr.length) {
        looper(arr, newArr, start, deleteCount, item)
    } else {
        newArr = adder(arr, newArr, item)
    }
    return newArr
}

// let arr = [1,2,3,4,5]
// arr = [...splice1(arr, 8 , 1, 6, 8 , 9)]
// console.log(arr)
// let arr1 = [1,2,3,4,5]
// arr1.splice(8 , 1, 6, 8, 9)
// console.log(arr1)

// remove 1 element
let arr = [1,2,3]
arr.splice(0,1); 
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3]
arr.splice(0,0,0); 
console.log(arr); //should be [0,1,2,3]


// replace 1 element
arr = [1,2,3]
arr.splice(1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
arr.splice(1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = arr.splice(1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = arr.splice(1,0,5); 
console.log(deleted); //should be [] 