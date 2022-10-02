const images = document.getElementById('images')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')

const img = document.querySelectorAll('#images img')

let idx = 0

let interval = setInterval(run, 3000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  if(idx > img.length - 3) {
    idx = 0
  } else if(idx < 0) {
    idx = img.length - 3
  }

  images.style.transform = `translateX(${-idx * 635}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 3000)
}

rightButton.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})

leftButton.addEventListener('click', () => {
  idx--
  changeImage()
  resetInterval()
})