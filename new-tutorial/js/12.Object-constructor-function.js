// object constructor function
function Student() {
  this.firstName
  this.lastName
  this.age
  this.clgYear
  return arguments
}
// ===============================||
// object prototypes              ||
Student.prototype.state = 'jdr' //||
console.log(Student)            //||
// ===============================||

let student1 = new Student()
//   prompt('Enter first name'),
//   prompt('Enter last name'),
//   prompt('Enter Your age'),
//   prompt('Enter your clg year'),
//   prompt('Enter nationality'),
console.log(student1)

// nested object
let nestedobj = {
  userId: '#123',
  email: 'abc@gmail.com',
  userpersonalinfo: {
    name: 'Uzair Ahmed',
    address: {
      country: 'India',
      state: 'Rajasthan',
      city: 'Jodhpur',
      homeNum: 1,
    },
  },
}
console.log(nestedobj.userpersonalinfo.address)
