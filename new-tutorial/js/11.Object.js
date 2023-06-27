// object should have properties
let person = {
  Firstname: 'Uzair',
  Secname: 'Ahmed',
  license: 'no',
  sayHello() {
    console.log('helo')
  },
}
console.log(person['Firstname'])
console.log(person.Secname)
person.sayHello()
person.age = '19'
delete person.age
person.Firstname = 'sali'

// The in method do return true and false
console.log('Firstname' in person)

for (const key in person) {
  console.log(key, person[key])
}

// method in object
person.sayHello = function () {
  console.log('hello!')
}

function fncname() {
  console.log('oye')
}

person.sayHello = fncname()

// Math Object
let pi = Math.PI
console.log(Math.round(pi))

// round
let decimal = 3.5
console.log(Math.round(decimal))

// Remove Whole decimal number
console.log(Math.floor(decimal))

// Round decimal into intizer number 4.1 is to be 5
console.log(Math.ceil(decimal))

// exclude whole decimal numbers
console.log(Math.trunc(decimal))

// power 2x4 it means 2x2x2x2
console.log(Math.pow(2, 19))

// square root
console.log(Math.sqrt(5))

// minimum
console.log(Math.min(0, 2, 4343, 333, 43))

// maximum
console.log(Math.max(0, 2, 4343, 333, 43))

// random
let obj = Math.floor(Math.random() * 6 + 1)
console.log(obj)
function getRandom(min, max) {
  obj = Math.floor(Math.random() * (min - max + 1)) + 15
  console.log(obj)
}

// prompt(`Enter${min}  and ${max}`);
getRandom(10, 20)

// Date object
let x = new Date()
console.log(x.getTime())
console.log(x.getMonth())

// new
const newObj = new Object()
newObj.name = 'Uzair Ahmed'
newObj.age = 19
console.log(newObj)

// property get and set
const get_set = {
  userName: prompt('Enter UserName'),
  userAge: 19,
  get getname() {
    return this.userName.toLowerCase()
  },
}
document.write(get_set.getname)

const set = {
    set Name (n){
        this.name = n.toLowerCase();
      }
}
set.Name = 'hello'
console.log(set);


