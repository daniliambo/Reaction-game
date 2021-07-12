// const spinner = document.querySelector('.spinner p')
// const spinnerContainer = document.querySelector('.spinner')
// let rotateCount = 0
// let startTime = null
// let rAF
// const btn = document.querySelector('button')
// const result = document.querySelector('.result')
// let r = 0

// function random(min, max) {
//   var num = Math.floor(Math.random() * (max - min)) + min
//   return num
// }

// function draw(timestamp) { //timestamp - конкретное время
//   if (!startTime) {
//     startTime = timestamp
//   }

//   rotateCount = (timestamp - startTime) / 3
//   // r += 3 //задает угол вращения
//   if (rotateCount > 1000000) {
//     rotateCount %= 360
//   }

//   spinner.style.transform = 'rotate(' + rotateCount + 'deg)'
//   rAF = requestAnimationFrame(draw)
// }

// result.style.display = 'none'
// spinnerContainer.style.display = 'none'

// function reset() {
//   btn.style.display = 'block'
//   result.textContent = ''
//   result.style.display = 'none'
// }

// btn.addEventListener('click', start)

// function start() {
//   draw()
//   spinnerContainer.style.display = 'block'
//   btn.style.display = 'none'
//   setTimeout(setEndgame, random(5000, 10000))
// }

// function setEndgame() {
//   cancelAnimationFrame(rAF)
//   spinnerContainer.style.display = 'none'
//   result.style.display = 'block'
//   result.textContent = 'PLAYERS GO!!'

//   document.addEventListener('keydown', keyHandler)

//   function keyHandler(e) {
//     let isOver = false
//     console.log(e.key)

//     if (e.key === "a") {
//       result.textContent = 'Player 1 won!!'
//       isOver = true
//     } else if (e.key === "l") {
//       result.textContent = 'Player 2 won!!'
//       isOver = true
//     }

//     if (isOver) {
//       document.removeEventListener('keydown', keyHandler)
//       setTimeout(reset, 5000)
//     }
//   }
// }

//mytry 

const spinner = document.querySelector('.spinner')
const topbar = document.querySelector('.topbar')
const middlebar = document.querySelector('.middlebar')
const btn = document.querySelector('button')
const html = document.querySelector('html')
const result = document.querySelector('.result')
let counter = 0

let rAF
let startTime = null
spinner.style.display = 'none'
result.style.display = 'none'

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min
  return num
}

function draw(timeStamp) {
  if (!startTime) {
    startTime = timeStamp
  }
  counter = (timeStamp - startTime) / 3
  counter = +counter

  spinner.style.transform = `rotate(${counter}deg)`
  requestAnimationFrame(draw)
}

btn.onclick = () => {
  draw()
  spinner.style.display = 'block'
  btn.style.display = 'none'
  setTimeout(fight, random(1000, 3000))
}

// function roundTime() { //modifying code
//   num = random(1000, 3000)
//   setTimeout(fight, num)
// }

function fight() {
  spinner.style.display = 'none'
  result.style.display = 'block'
  result.textContent = 'CLICK!'
  cancelAnimationFrame(rAF)

  document.addEventListener('keydown', clickHandler)

  function clickHandler(e) {
    let isOver = false
    if (e.key === 'l') {
      result.textContent = 'Player 2 won!'
      isOver = true
    } else if (e.key === 'a') {
      result.textContent = 'Player 1 won!'
      isOver = true
    }
    if (isOver) {
      document.removeEventListener('keydown', clickHandler)
      resetGame()
    }
  }
}

function resetGame() {
  setTimeout(() => {
    btn.style.display = 'block'
    result.style.display = 'none'
  }, 5000)
}