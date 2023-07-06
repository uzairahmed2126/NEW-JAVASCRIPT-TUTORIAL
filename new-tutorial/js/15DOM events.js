let creat = document.createElement('button')
let txt = document.createTextNode('Click me ')
creat.append(txt)
// creat.setAttribute('onfocus', 'hello()')
creat.setAttribute('ondblclick', 'hey()')
creat.addEventListener('click', function() {
  Addevnt.style.backgroundColor = 'transparent'
})

creat.addEventListener('mouseenter', function() {
    Addevnt.style.backgroundColor = 'red'
  })
creat.setAttribute('class', 'btn cls')
let evnt = document.body.appendChild(creat)
console.log(evnt)
let Addevnt = document.querySelector('.cls')
function hey() {
  Addevnt.style.backgroundColor = 'yellow'
}

