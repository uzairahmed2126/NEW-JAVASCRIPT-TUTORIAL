let flag = 0
function slideShow(num) {
  let slides = document.getElementsByClassName('slide')
  if (num == slides.length) {
    flag = 0
    num = 0
  }
  if (num < 0) {
    flag = slides.length - 1
    num = slides.length - 1
  }
  for (const y of slides) {
    y.style.display = 'none'
  }
  slides[num].style.display = 'block'
}
function controller(x) {
  flag = flag + x
  slideShow(flag)
}
slideShow(flag)

// let arrowNext = document.getElementById('aro2')
// arrowNext.addEventListener('click', function () {
//   let img1 = document.getElementById('image1')
//   img1.style.display = 'block'
// })


// arrowNext.addEventListener('click', function () {
//   let img2 = document.getElementById('image1')
//   img2.addEventListener('click', function () {
//     img2.style.display = 'block'
//   })
// })
