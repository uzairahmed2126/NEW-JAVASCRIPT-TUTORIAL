console.log(window.outerHeight + ' outer Height')
console.log(window.outerWidth + ' outer width')
console.log(window.innerHeight + ' inner height')
console.log(window.innerWidth + ' inner width')

let id = document.getElementById('btn');
id.addEventListener('click' ,function(){
    window.open('/new-tutorial/html/DOM events.html','DOM window',"height=500, width=500")
})
