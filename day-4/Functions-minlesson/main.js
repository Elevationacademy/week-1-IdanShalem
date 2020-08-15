// ex-1
const capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const address = function(country, city){
    return `${capitalize(country)}, ${capitalize(city)}`
}

const ageCheck = function(age){
    if(age < 21){
        return 'an underage'
    } else if(age >= 55){
        return '55+'
    } else {
        return `${age} year old`
    }
}

const getSummary = function(person) {
    let summary = ''
    summary += capitalize(person.name)
    summary += ` is ${ageCheck(person.age)}`
    for (let wrd of person.profession.split(' ')){
        summary += ` ${capitalize(wrd)}`
    }
    summary += ` from ${address(person.country, person.city)}.`
    summary += ` ${capitalize(person.name)} loves to say "`
    const catchphrase = person.catchphrase.split(' ')
    for (let i in catchphrase) {
        if (i == 0){
            summary += `${capitalize(catchphrase[i])}`
        } else {
            summary += ` ${catchphrase[i]}`
        }
    }
    summary += '".'
    return summary
}
people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
 ]

  console.log(getSummary(people_info[0]))
  console.log(getSummary(people_info[1]))
  console.log(getSummary(people_info[2]))

 //ex-2

const splitChars = function(str){
    return str.split(" ")
}

const cleanChars = function(str, specialChars){
    for (char of specialChars){
        str = str.replace(char, '')
    }
    str = str.toLowerCase()
    return str
}

const countChars = function(arr, wordCounts) {
    for (str of arr){
        if(wordCounts[str]){
            wordCounts[str] += 1
        } else{
            wordCounts[str] = 1
        }
        
    }
}

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const storyArr = splitChars(story)
for (let i in storyArr){
    storyArr[i] = cleanChars(storyArr[i], specialChars)
}
countChars(storyArr, wordCounts)
console.log(wordCounts)