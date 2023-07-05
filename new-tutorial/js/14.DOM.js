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
let content = elm.innerHTML
console.log(content)
// elm.innerHTML = '<h1>hey this is heading first</h1>'

let Elt = document.getElementById('fan')
let anchor = document.createElement('a')
anchor.href =
  '/new-tutorial/images/WhatsApp Image 2023-06-14 at 8.26.51 PM.jpeg'

let txt = document.createTextNode('click me')
anchor.append(txt)
Elt.appendChild(anchor)
console.log(Elt)
document.body.appendChild(anchor)
anchor.textContent = 'From text content'

let list = document.getElementById('list')
let item = document.createElement('li')
item.textContent = 'This '
let position = list.firstElementChild
// list.insertBefore(item,position);
// list.appendChild(item)
// list.remove(list)
let getbody = document.body
// getbody.removeChild(list)

// Clone Element
//if clone has a true then it to be print whole element who is in the first node
// let clone =list.cloneNode(true)
// console.log(clone)

// it print all thing who is in cloneNode
list.cloneNode()
console.log(list)

// replace
let creat = document.createElement('li')
creat.textContent = 'hello world'
let replace = list.firstElementChild.nextElementSibling
list.replaceChild(creat, replace)

// insetAdjacent
Elt.insertAdjacentHTML('beforeend', '<h1>hey im from dom</h1>')

// Attribute
let btn = document.getElementById('btn')
btn.setAttribute('placeholder', 'hey click me')
btn.setAttribute('style', 'background:green;')
btn.setAttribute('style', 'border:green 2px solid;')
btn.setAttribute('style', 'border-radius:22px  ;')

// getAttribute
let val = btn.getAttribute('placeholder')
console.log(val)

// removeAttribute
let rmv = btn.removeAttribute('placeholder')

btn.setAttribute('placeholder', 'Enter your name')

let has = btn.hasAttribute('placeholder')
console.log(has)

// Inline style
btn.style.cssText =
  'background:aqua; color:red; border-radius:102px 50px 20px;width:52px;'

// get computed CSS to which property has given in css
// inline CSS has a first opportunity
let css = getComputedStyle(btn)
console.log(css.background)

// className
let cls = (btn.className += ' hey hello')
console.log(cls)

// classList 
let list1 = btn.classList
console.log(list1)
for (const check of list1) {
  console.log(check)
}

// toggle
btn.classList.toggle('button')

// height and width
let height = btn.offsetHeight
let width = btn.offsetWidth
console.log(`height is ${height}`)
console.log(`width is ${width}`)

let clienth = btn.clientHeight
let clientw = btn.clientWidth
console.log(`clientheight is ${clienth}`)
console.log(`clientwidth is ${clientw}`)

