// Function declaration
function myfunc(a, b,) {
  return a + b
}

myfunc(4, 6) // 10
myfunc(20, 19) // 39

// Function expression
const myFunc = function (greet) {
  return greet
}

// Higher order function
function higherOderFunction(callback) {
  callback()
}

higherOderFunction(function () {
  // console.log('This is a higher order function')
})

// arrow functions
const myFunc2 = (a, b) => {
  return a + b
}

//  callback arrow functions 
// higherOderFunction(()=>console.log('Call back arrow function'))


/***
 * Operators
 * Arithmetic operator
 * +, -, /, *, %
 * 
 * comparison operators
 * ==, ===, <, >, <=, >=
 * 
 * * logical operators
 * &&, ||
 */


const fname = 'Blessing'
const lname = 'Grace'
const age = 23
const stateOfOrigin = 'Osun'


/***
 * Conditional statments
 * if, if-else, if-else-if, switch
 * if(condition) {
 *  statements
 * }
 */

if (age > 25) {
  console.log('You are old enough')
} else {
  //console.log("You're too young") 
}

const color = 'blue'

switch (color) {
  case 'green':
    console.log('My favorite')
    break
  case 'blue':
    //   console.log('No favorite')
    break


}


/** 
  const getDayOfTheWeek = () => {
    switch (new Date().getDay()) {
        case 0:
          return "Sunday"
        case 1:
          return "Monday"
        case 2:
           return "Tuesday"
        case 3:
          return "Wednesday"
        case 4:
          return "Thursday"
        case 5:
          return "Friday"
        case 6:
            return "Saturday"
      }
  }

  console.log(getDayOfTheWeek()) */

/** 
 * rewrite the getDayOfTheWeek function to regular function expression, instead of arrow function; also multiple if-else-if statments instead of switch statement 
 */


function getDayOfTheWeek() {
  const today = new Date().getDay()
  // console.log(today)
  if (today === 0) {
    console.log('Today is Sunday')
  } else if (today === 1) {
    console.log('Today is Monday')
  } else if (today === 2) {
    console.log('Today is Tuesday')
  } else if (today === 3) {
    console.log('Today is Wednesday')
  } else if (today === 4) {
    console.log('Today is thursday')
  } else if (today === 5) {
    console.log('Today is Friday')
  } else if (today === 6) {
    //  console.log('Today is Saturday')
  }





}
getDayOfTheWeek()
//create a variable called name(assign it any value of your choice but must be a string),gender(string), another variable called 'current time'. 
function greet(name, currentTime) {
  if (currentTime >= 0 && currentTime < 12) {
    //  console.log('Good morning, ' +name)
  } else if (currentTime >= 12 && currentTime < 16) {
    console.log('Good afternoon, ' + name)
  } else {
    //console.log('Good evening, ' +name)
  }
}
greet('Buchi', new Date().getHours())


//Loops
// function multiplicationTable(multiplier){
//   for(let i=0; i<=10; i++) {
//     console.log(`${multiplier}*${i}=${multiplier*i}`)
//   }
// }
// multiplicationTable (17)



Array
const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
//console.log(months.slice(2,6))
//console.log(daysOfTheWeek.push)
//console.log(daysOfTheWeek.length)

//push-adds specified element at last index
//pop- removes the last element from th array
//shift-removes the first element 
//unshift- add the specifie3d element at the first index
//slice- returns a portion of the array, between the specified start index annd end index(exclusive)
//splice- removes elements from an array and if neccessary, insert new elemnt in their place, returning the deleted elements.

//Array
const statesInNigeria = ["Osun", "Oyo", "Ogun", "Ebonyi", "Lagos", "Enugu", "Sokoto"]

//statesInNigeria.push("Ondo")
const subSet = statesInNigeria.splice(3, 3)


//console.log(statesInNigeria)
//console.log(subSet)



/**
 * Higher-order array methods
 * forEach- Transforms the array using the specified callback
 * map- Transforms the array using the specific callback
 * find- Returns the value of the first element that meets the specified condtion
 * filter- Returns any array of all the elements that meet the spcified condition
 * sort- 
 * reduce
 * every
 * some
 */

// daysOfTheWeek.forEach(function(day,index){
//   console.log(`Day ${index+1} of the week is ${day}`)
// }
// )
// const myNumbers = [4,5,9]
// myNumbers.find(function(number,index){
//   console.log(number*2)
// })

// const findMethod = daysOfTheWeek.find(function(day){
//   return day.startsWith('T')
// })

// const filterMethod = daysOfTheWeek.filter(function(day){
//   return day.startsWith('F')
// })

// const scores = [79,28,292,62,001,9,400]
// const sortNumber = scores.sort(function(a,b){
//   return b-a
// })

// console.log(sortNumber)

//Assignment: create a const classmate,use find to return the first name of person whose name starts with o and use filter to return an array of all those whose name starts with b. sort to arrange name alphabetically.

// const classMate = ['Oyeniran', 'Blessing', 'Grace', 'Onyebuchi', 'Adedoyin', 'Bright', 'Oluwaferanmi', 'Mattew', 'Busayomi' ]

// const findMethod = classMate.find (function(name){
//   return name.startsWith('O')
// }) 
// console.log(findMethod)

// const filterMethod = classMate.filter (function(name){
//   return name.startsWith('B')
// }) 
// console.log(filterMethod)

// const sortMethod= classMate.sort()
// console.log(sortMethod)

// //Assignment 2: Create an array of 5 random numbers,then sort them in an ascending order
// const values = [79,28,292,62,001]
// const sortNumber = values.sort(function(a,b){
// return a-b
// })

// console.log(sortNumber)

//object
const person = { 
  name: 'Blessing',
  height: '1.6',
  complexion: 'dark',
  stateOfOrigin: 'Osun',
  greet: function () {
    return 'Good morning ma'
  }
}

const classMates = [
  {
    name: 'Blessing',
    height: '1.6',
    complexion: 'fair',
    stateOfOrigin: 'Osun',
    greet: function () {
      return 'Good morning ma'
    }
  },
  {
    name: 'Biodun',
    lastName: 'Adesina',
    height: '1.6',
    complexion: 'dark',
    stateOfOrigin: 'Osun',
    greet: function () {
      return 'Reading'
    }
  },
  {
    name: 'Adedoyin',
    height: '1.8',
    complexion: 'dark',
    stateOfOrigin: 'Oyo',
    greet: function () {
      return 'Shopping'
    }
  },
  {
    name: 'Tommy',
    lastName: 'Lekan',
    height: '1.6',
    complexion: 'dark',
    stateOfOrigin: 'Osun',
    greet: function () {
      return 'Gaming'
    }
  },
]

const filterMethod = classMates.filter(function (classMate) {
  return classMate.complexion === 'fair'
})
console.log(filterMethod)

//sort classMates array in the ascending order of height
//sort alphabetically using the first name
//use find method to retuen the firts element wher the complexion is dark

 const sortMethod = classMates.sort(function(a,b){
   return a-b
 })
 console.log(classMates.sort())


 const sortObject = classMates.Name
 console.log(classMates.sort())

 const findMethod = classMates.find(function (classMate) {
   return classMate.complexion === 'dark'
 })
 console.log(findMethod)

// DOM- Documnt Object Model
// const headingEl = document.getElementById('first-heading')
// const headingEl = document.querySelectorAll('h1') // document.getElementByTagName('h1')
// const paragraphEl = document.querySelector('p')
// const paragraphEl = document.querySelector('.first-paragraph')


// const firstHeading = headingEl[0]

// const h1 = document.querySelector('h1')
// h1.addEventListener('mousemove', function () {
//   h1.classList.add('cursor')
// })

// h1.addEventListener('dblclick', function () {
//   h1.classList.toggle('first-heading')
// })

// const paraEl = document.querySelector('#first-p')

// paraEl.innerHTML = 'This is a new content'

// paraEl.style.fontSize = '80px'
// paraEl.style.backgroundColor = 'red'
// paraEl.style.color = 'white'




























