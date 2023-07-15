let textbox = document.getElementById('textbox')
textbox.addEventListener('input', function () {
  let text = this.value
  let char = text.length
  document.getElementById('char').innerHTML = char

  text = text.trim()
  let words = text.split(' ')
  let cleanList = words.filter(function (element) {
    return element != ''
  })
  document.getElementById('word').innerHTML = cleanList.length
})
