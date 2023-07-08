// Anonymous means without name
let show = function () {
  console.log('hello world')
}
setTimeout(show, 200)

setTimeout(function () {
  console.log('hello!')
}, 1200)
