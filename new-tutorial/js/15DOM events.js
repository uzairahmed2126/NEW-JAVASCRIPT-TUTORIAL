let gId = document.getElementById('div')
let creat = document.createElement('button')
gId.append(creat)
let txt = document.createTextNode('Click me ')
let txtandele = creat.append(txt)
creat.setAttribute('onfocus', 'hello()')
creat.setAttribute('ondblclick', 'hey()')
creat.addEventListener('click', function () {
  Addevnt.style.backgroundColor = 'transparent'
})

creat.addEventListener('mouseenter', function () {
  Addevnt.style.backgroundColor = 'aqua'
})
creat.setAttribute('class', 'btn cls')
let evnt = document.firstElementChild.appendChild(creat)
console.log(evnt)
let Addevnt = document.querySelector('.cls')
function hey() {
  Addevnt.style.backgroundColor = 'yellow'
}

// // removeEventListener is same work as work addEventListener
window.addEventListener('DOMContentLoaded', function () {
  console.log('DOM tree created')
})

window.addEventListener('load', function () {
  console.log('loaded')
})

// // mouse Events
creat.addEventListener('contextmenu', function () {
  alert('right click')
})

creat.addEventListener('dblclick', function () {
  console.log('dbl')
})

window.addEventListener('keydown', function (keypress) {
  console.log(keypress.key)
})

window.addEventListener('keyup', function (keypress) {
  if (keypress.key === 'Escape') {
    console.log(`you press this ${keypress.key}`)
    this.document.body.style.background = 'green'
  } else {
    console.log(`you press this ${keypress.key}`)
    this.document.body.style.background = ''
  }
})

window.addEventListener('wheel', function (event) {
  if (event.deltaY < 0) {
    console.log('scrolling up...')
  } else if (event.deltaY > 0) {
    console.log('scrolling down...')
  } else if (event.deltaX < 0) {
    console.log('scrolling right...')
  } else if (event.deltaX > 0) {
    console.log('scrolling left...')
  }
})

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 50) {
    this.document.body.style.background = 'red'
  } else if (window.pageXOffset > 50) {
    this.document.body.style.background = 'red'
  }
})

let creatInput = document.createElement('input')
creatInput.setAttribute('type', 'text')
creatInput.setAttribute('class', 'input-txt')
let clas = document.querySelector('.input-txt')
let apnd = document.body.appendChild(creatInput)
apnd.addEventListener('focus', function () {
  apnd.style.background = 'red'
  apnd.style.color = '#fff'
})
apnd.addEventListener('mouseleave', function () {
  apnd.style.background = 'transparent'
  //   apnd.style.borderStyle = 'none'
})
apnd.addEventListener('change', function () {
  console.log((this.value.style.color = 'green'))
})
apnd.addEventListener('input', function () {
  console.log(this.value)
})

// Eventbubbling
let div = document.getElementById('div')
let button = document.getElementById('clickME')
document.body.addEventListener('click', function () {
  console.log('body clicked...')
})
div.addEventListener('click', function () {
  console.log('Div clicked...')
})

button.addEventListener('click', function () {
  console.log('Button clicked...')
})

// Eventcapturing = true
// when i click on child element then the bubbling has to be work
// when i click on whatever element who has has a true then the Event Capturing has to be work
// If you want to do all event activate but at time one to be run then we use stopPropagation function when the whole event is doesn't has a ture value

document.body.addEventListener('click', function (prop1) {
  console.log('body clicked...')
  prop1.stopPropagation()
})
div.addEventListener('click', function (prop2) {
  console.log('Div clicked...')
  prop2.stopPropagation()
})

button.addEventListener('click', function (prop3) {
  console.log('Button clicked...')
  prop3.stopPropagation()
})

let ar1 = [1, 2, 3]
let ar2 = [1, 2, 3]
console.log(ar1 === ar2) //false
console.log(ar1 !== ar2) //true

let link = document.getElementById('anchor')
link.addEventListener('click', preventDef)
let form = document.getElementById('myform')
form.addEventListener('click', preventDef1)
function preventDef(event) {
  event.preventDefault()
  console.log('link clicked...')
}

function preventDef1(event) {
  event.preventDefault()
  console.log('submit clicked...')
}
