let books = ['math', 'physics', 'bio', 'computer science']
books.push('Urdu')
console.log(books)
books.pop()
books.unshift('first')
books.splice(1, 1)
// The shift function remove first element
books.shift('')
console.log(books)
books[3] = 'english'
console.log(books.length)

for (let i = 0; i < books.length; i++) {
  console.log(books[i])
}

console.log(typeof console) //object
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof document) //object
console.log(typeof []) //object
console.log(typeof '') //string
console.log(typeof 334) //number

let try_to_check = 'isArray or not'
console.log(Array.isArray(try_to_check))

// split make a new array
let wordArray = try_to_check.split(' ')
console.log(wordArray)

// join
let joinarray = books.join(' ')
console.log(joinarray)

// string is array of characters
let combine = books.concat(wordArray)
console.log(combine)

let bookwithPages = [
  ['math', '300'],
  ['physics', '500'],
]
console.log(bookwithPages)

let a = books.forEach(myfu)
function myfu(a) {
  console.log(a)
}

let b = books.forEach((element) => {
  console.log(element)
})

