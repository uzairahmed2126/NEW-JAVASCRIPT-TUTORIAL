let hr = 0
let min = 0
let sec = 0
let count = 0

let timer = false
function start() {
  timer = true
  stopWatch()
}

function stop() {
  timer = false
}

function reset() {
  timer = false
  hr = 0
  min = 0
  sec = 0
  count = 0

  document.getElementById('hr').innerHTML = "00"
  document.getElementById('min').innerHTML = "00"
  document.getElementById('sec').innerHTML = "00"
  document.getElementById('count').innerHTML = "00"
}

function stopWatch() {
  if (timer == true) {
    count += 1
    if (count == 100) {
      sec += 1
      count = 0
    }
    if (sec == 60) {
      min += 1
      sec = 0
    }
    if (min == 60) {
      hr += 1
      min = 0
      sec = 0
    }
    let hrstr = hr;
    let minstr = min;
    let secstr = sec;
    let countstr = count;

    if(hrstr<10){
        hrstr = "0" +hrstr
    }
    if(secstr<10){
        secstr = "0" +secstr
    }
    if(minstr<10){
        minstr = "0" +minstr
    }
    if(countstr<10){
        countstr = "0" +countstr
    }

    document.getElementById('hr').innerHTML = hrstr
    document.getElementById('min').innerHTML = minstr
    document.getElementById('sec').innerHTML = secstr
    document.getElementById('count').innerHTML = countstr
    setTimeout('stopWatch()', 10)
  }
}
