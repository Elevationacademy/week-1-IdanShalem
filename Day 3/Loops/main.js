//ex - 1
let x = [1, 2, 3]
let y = [4, 5, 6]

for (i = 0; i < x.length; i++) {
    console.log(x[i] + ' is ' + y[i])
}

//ex-2 + ex-3
let sum = 0
let nums = [5, 5, 6, 6]

for (let num of nums) {
    sum +=num
}
let avg = sum / nums.length
console.log('sum = ' + sum)
console.log('avg = ' + avg)

//ex-4 + ex-5
let numbers = []
for (let count = 1; count <= 100; count++) {
    numbers.push(count)
    if (count % 2 !== 0) {
        console.log(count)
    }
}
console.log(numbers)

//ex-6
let numss = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 
    258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 
    460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 
    271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 
    611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

for(let i in numss) {
    if (numss[i] === 709) {
        console.log(i)
    }
}

//ex-7 + ex-8
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i in names) {
    people.push({name : names[i], age : ages[i]})
}
console.log(people)

for (let person of people) {
    console.log(person.name + ' is ' + person.age + ' years ols ')
}

//ex-9
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  let idToDelete = 2
  for (let postIndex in posts) {
      if (posts[postIndex].id === idToDelete) {
        posts.splice(postIndex, 1)
      }
  }
  console.log(posts)

  //ex-10
  const morePosts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  let idTofind = 2
  let idComment = 3

  for (let post of morePosts) {
      if (post.id === idTofind) {
          for (commentIndex in post.comments) {
              if (post.comments[commentIndex].id === idComment) {
                post.comments.splice(commentIndex, 1)
              }
          }
      }
  }
  console.log(morePosts)

  //extension
  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  for (letter of Object.keys(dictionary)) {
      console.log('Words that begin with ' +  letter + ':') 
      for (word of dictionary[letter]) {
          console.log(word)
      }

  }
