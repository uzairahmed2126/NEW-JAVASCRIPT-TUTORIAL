let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
let div4 = document.getElementById('div4')
div1.addEventListener('click', function(){
    document.body.style.background=' rgba(0, 0, 0, 0.199)'
})

div2.addEventListener('click', function(){
    document.body.style.background=' rgba(0, 128, 0, 0.048)'
})

div3.addEventListener('click', function(){
    document.body.style.background=' rgba(2, 22, 22, 0.336)'
})

div4.addEventListener('click', function(){
    document.body.style.background=' rgba(89, 182, 14, 0.425)'
})
// div1.removeEventListener('mouseleave',function(){
//     document.body.style.background='#fff'
// })
let clr = document.getElementById('color')
clr.addEventListener('input',function(){
    document.body.style.background= this.value
})