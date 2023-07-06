let gId = document.getElementById('div')
let creat = document.createElement('button')
gId.append(creat)
let txt = document.createTextNode('Click me ')
let txtandele = creat.append(txt)
// creat.setAttribute('onfocus', 'hello()')
creat.setAttribute('ondblclick', 'hey()')
creat.addEventListener('click', function () {
  Addevnt.style.backgroundColor = 'transparent'
})

creat.addEventListener('mouseenter', function () {
  Addevnt.style.backgroundColor = 'green'
})
creat.setAttribute('class', 'btn cls')
let evnt = document.firstElementChild.appendChild(creat)
console.log(evnt)
let Addevnt = document.querySelector('.cls')
function hey() {
  Addevnt.style.backgroundColor = 'yellow'
}

// removeEventListener is same work as work addEventListener
window.addEventListener('DOMContentLoaded', function () {
  console.log('DOM tree created')
})

window.addEventListener('load', function () {
  console.log('loaded')
})

// mouse Events
