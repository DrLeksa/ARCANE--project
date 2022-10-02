const trailerFirst = document.querySelector('.trailer__first-video--block');
const videoFirst = document.querySelector('.trailer__first-video');
const trailerSecond = document.querySelector('.trailer__second-video--block');
const videoSecond = document.querySelector('.trailer__second-video');

function toggleFirst() {
  trailerFirst.classList.toggle("active");
  videoFirst.pause();
  videoFirst.currentTime = 0;
}

function toggleSecond() {
  trailerSecond.classList.toggle("active");
  videoSecond.pause();
  videoSecond.currentTime = 0;
}