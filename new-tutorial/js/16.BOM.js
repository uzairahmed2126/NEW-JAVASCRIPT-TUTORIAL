// console.log(window.outerHeight + ' outer Height')
// console.log(window.outerWidth + ' outer width')
// console.log(window.innerHeight + ' inner height')
// console.log(window.innerWidth + ' inner width')

// let id = document.getElementById('btn')
// id.addEventListener('click', function () {
//   window.open(
//     '/new-tutorial/html/DOM events.html',
//     'index.html',
//     "height=500, width=500,font-family='Courier New', Courier, monospace",
//   )
// })

// let id1 = document.getElementById('btn1')
// id1.addEventListener('click', function () {
//   window.open(
//     'https://www.google.com',
//     'newname',
//     "height=500, width=500,font-family='Courier New', Courier, monospace",
//   )
// })

// let id2 = document.getElementById('btn2')
// id2.addEventListener('click', function () {
//   window.close()
// })

// let time = setInterval(msg,4000)
// function msg(){
//     prompt('hiii')
// }
// console.log(time)
// if(msg==true){
//     clearInterval(time)
// }else{
//     console.log('..')
// }

// location object

let getid = document.getElementById('btn-ggl').addEventListener('click',fun)
function fun(){
    // location.href = '/new-tutorial/images/660513.jpg '
    // location.assign  ('https://www.google.com')
    location.reload();
}
 
// navigater object