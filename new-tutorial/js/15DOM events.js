let creat = document.createElement('button')
let txt = document.createTextNode('Click me ')
creat.append(txt)
// creat.setAttribute('onfocus', 'hello()')
creat.setAttribute('ondblclick', 'hey()')
creat.addEventListener('click', function () {
  Addevnt.style.backgroundColor = 'transparent'
})

creat.addEventListener('mouseenter', function () {
  Addevnt.style.backgroundColor = 'green'
})
creat.setAttribute('class', 'btn cls')
let evnt = document.body.appendChild(creat)
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
