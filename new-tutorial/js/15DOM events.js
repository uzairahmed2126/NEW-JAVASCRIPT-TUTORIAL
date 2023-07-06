// let gId = document.getElementById('div')
// let creat = document.createElement('button')
// gId.append(creat)
// let txt = document.createTextNode('Click me ')
// let txtandele = creat.append(txt)
// // creat.setAttribute('onfocus', 'hello()')
// creat.setAttribute('ondblclick', 'hey()')
// creat.addEventListener('click', function () {
//   Addevnt.style.backgroundColor = 'transparent'
// })

// creat.addEventListener('mouseenter', function () {
//   Addevnt.style.backgroundColor = 'aqua'
// })
// creat.setAttribute('class', 'btn cls')
// let evnt = document.firstElementChild.appendChild(creat)
// console.log(evnt)
// let Addevnt = document.querySelector('.cls')
// function hey() {
//   Addevnt.style.backgroundColor = 'yellow'
// }

// // removeEventListener is same work as work addEventListener
// window.addEventListener('DOMContentLoaded', function () {
//   console.log('DOM tree created')
// })

// window.addEventListener('load', function () {
//   console.log('loaded')
// })

// // mouse Events
// creat.addEventListener('contextmenu', function () {
//   alert('right click')
// })

// creat.addEventListener('dblclick', function () {
//   console.log('dbl')
// })

// // window.addEventListener('keydown',function(keypress){
// //     console.log(keypress.key)
// // })

// window.addEventListener('keyup', function (keypress) {
//   if (keypress.key === 'Escape') {
//     console.log(`you press this ${keypress.key}`)
//     this.document.body.style.background = 'green'
//   } else {
//     console.log(`you press this ${keypress.key}`)
//     this.document.body.style.background = ''
//   }
// })

// window.addEventListener('wheel', function (event) {
//   if (event.deltaY < 0) {
//     console.log('scrolling up...')
//   } else if (event.deltaY > 0) {
//     console.log('scrolling down...')
//   } else if (event.deltaX < 0) {
//     console.log('scrolling right...')
//   } else if (event.deltaX > 0) {
//     console.log('scrolling left...')
//   }
// })

// window.addEventListener('scroll', function () {
//   if (window.pageYOffset > 50) {
//     this.document.body.style.background = 'red'
//   }
//   else if (window.pageXOffset > 50) {
//     this.document.body.style.background = 'red'
//   }
// })

let creatInput = document.createElement('input')
creatInput.setAttribute('type','text')
creatInput.setAttribute('class','input-txt')
let clas = document.querySelector('.input-txt')
let apnd = document.body.appendChild(creatInput)
apnd.addEventListener('focus',function(){
    apnd.style.background='red'
})
apnd.addEventListener('blur',function(){
    apnd.style.background=''
})