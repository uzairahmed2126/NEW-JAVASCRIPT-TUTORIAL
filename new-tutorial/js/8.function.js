// function
let wholeBody = (document.ondrag = function () {
  Muliply()
})
function Muliply() {
  // for(i=1;i<=10;i++) {
  //     document.write(`2 x ${i} = ${2*i}<br>`)
  // }
  alert('Assalamu Alykum')
}
let make = document.createElement('a')
make.textContent = 'drag me'
document.body.appendChild(make)

// let creat = document.createElement('table')
// function calculation(addnum){
//     for(let i=1;i<=10;i++) {
//       // document.write(`${addnum} x ${i} = ${addnum*i}<br>`)
//      prompt('Enter tr number and name').document.createElement('tr');
//      prompt('Enter td number and name') . document.createElement('td');

//   }
// }
// calculation(prompt('enter any number'));

function add() {
  let sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i]
    console.log(sum)
  }
  return arguments
}

// add(prompt("enter arguments"));
add(4, 6)

// return
function rtn(a, b) {
  // let d = a+b;
  // a+b;
  return a + b
}
let c = rtn(5, 33)
console.log(c)

// local and global variables
function greetings(name) {
  console.log(name)
}
greetings('uzair')

