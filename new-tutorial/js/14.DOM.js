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
for (const key in className1) {
  className1[key].placeholder = 'Enter your information'
  className1[key].style.borderRadius='90px'
  className1[key].style.background='green'
  className1[key].style.scale='0.9'
}
