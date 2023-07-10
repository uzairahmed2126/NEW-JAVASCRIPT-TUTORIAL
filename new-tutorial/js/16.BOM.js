console.log(window.outerHeight + ' outer Height')
console.log(window.outerWidth + ' outer width')
console.log(window.innerHeight + ' inner height')
console.log(window.innerWidth + ' inner width')

let id = document.getElementById('btn')
id.addEventListener('click', function () {
  window.open(
    '/new-tutorial/html/DOM events.html',
    'index.html',
    "height=500, width=500,font-family='Courier New', Courier, monospace",
  )
})

let id1 = document.getElementById('btn1')
id1.addEventListener('click', function () {
  window.open(
    'https://www.google.com',
    'newname',
    "height=500, width=500,font-family='Courier New', Courier, monospace",
  )
})

let id2 = document.getElementById('btn2')
id2.addEventListener('click', function () {
  window.close()
})
