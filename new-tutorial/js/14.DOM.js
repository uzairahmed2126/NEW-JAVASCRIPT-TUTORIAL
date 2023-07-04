// The Document Object Model is an Application programming inteface (API) for manipulating HTML and XML documents.b
let a = (document.getElementById('object').firstElementChild.style.color =
  '#cbcc19')
console.log(a)

let className = document.querySelector('div').getElementsByTagName('input')
// className = document.placeholder='h'

console.log(className)
for (let i = 0; i < className.length; i++) {
  className[i].placeholder = 'a'
}

let className1 = document.querySelector('div').getElementsByTagName('input')
// for (const key in className1) {
//   className1[key].placeholder = `Enter your information ${className1}`
//   className1[key].style.borderRadius = '90px'
// }

// let getel = document.getElementById('object')
// console.log(getel.innerHTML='<div><h1 style="background-color:yellow; border-radius:10px;text-align:center;">hi</h1></div>')

console.log(typeof document.getElementsByTagName) //function

let div = document.getElementById('object')
console.log(typeof div) //object

let Indiv = div.getElementsByTagName('input')
for (const key in Indiv) {
  Indiv[key].placeholder = 'Fill form'
  // Indiv[key].style.textIndent='13px'
}

// querySelector
let query = document.querySelectorAll('p')
console.log(query)

// querySelectorAll
for (const Toprint in query) {
  query[Toprint].innerHTML = 'helo'
}

// traversing elements
let parent = document.getElementById('object')
let parent1 = parent.parentElement
console.log(parent1)

parent1 = parent.firstElementChild
console.log(parent1)

parent1 = parent.lastElementChild
console.log(parent1)

parent1 = parent.children //collection
console.log(parent1)

let prev = document.getElementById('object')
let getel = prev.previousElementSibling
console.log(getel)

let next = document.querySelector('p')
let nextEl = prev.nextElementSibling
console.log(nextEl)

let elm = document.getElementById('fan')
let content = elm.innerHTML //replace
console.log(content)
elm.innerHTML = '<h1>hey this is heading first</h1>'

let Element = document.getElementById('fan')
let anchor = document.createElement('a')
anchor.href =
  '/new-tutorial/images/WhatsApp Image 2023-06-14 at 8.26.51 PM.jpeg'

let txt = document.createTextNode('click me')
anchor.append(txt)
Element.appendChild(anchor)
console.log(Element)
document.body.appendChild(anchor)
anchor.textContent = 'From text content'

let list = document.getElementById('list')
let item = document.createElement('li')
item.textContent = 'list 5'
list.appendChild(item)
