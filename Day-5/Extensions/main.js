const findMissingNumber = function(arr){
    let sumArr = 0
    for(let i of arr){
        sumArr += i
    }
    return 5050 - sumArr
}

const arr = []
for(let i = 1; i <= 100; i++) {
    arr.push(i)
}


arr.splice(98, 1)
const missingNumber = findMissingNumber(arr)
console.log(arr)
console.log(missingNumber)

