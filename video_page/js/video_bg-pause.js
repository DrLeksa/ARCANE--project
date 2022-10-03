"use strict"

const video = document.getElementById("video");
const button = document.getElementById("button");

function playVideo() {
  if (video.paused) {
    video.play();
    button.innerHTML = "Приостановить видео";
  } else {
    video.pause();
    button.innerHTML = "Смотреть";
  }
}

playVideo();
