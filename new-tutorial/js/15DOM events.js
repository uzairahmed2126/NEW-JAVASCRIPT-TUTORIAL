let creat = document.createElement('button')
let txt = document.createTextNode('Click me ')
creat.append(txt)
creat.setAttribute('onclick','hey()')
creat.setAttribute('onfocus','hello()')
creat.setAttribute('class', 'btn cls')
let evnt = document.body.appendChild(creat)
console.log(evnt)
let Addevnt = document.querySelector('.cls')
function hey(){
    // Addevnt.style.backgroundColor='yellow'
}

function hello(){
    Addevnt.style.backgroundColor='green'
}