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

let getel = document.getElementById('object')
console.log(getel.innerHTML='<div><h1 style="background-color:yellow; border-radius:10px;text-align:center;">hi</h1></div>')