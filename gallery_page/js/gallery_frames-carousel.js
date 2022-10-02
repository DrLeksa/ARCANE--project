"use strict"

const images = document.getElementById('images')
const leftButton = document.getElementById('left-button')
const rightButton = document.getElementById('right-button')

const img = document.querySelectorAll('#images img')

let idx = 0

let interval = setInterval(run, 3000)

function run() {
  idx++
  changeImages()
}

function changeImages() {
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
  changeImages()
  resetInterval()
})

leftButton.addEventListener('click', () => {
  idx--
  changeImages()
  resetInterval()
})