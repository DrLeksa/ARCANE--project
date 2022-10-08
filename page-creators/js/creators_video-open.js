const creationPart1 = document.querySelector('.creation__part_1');
const creationPart2 = document.querySelector('.creation__part_2');
const creationPart3 = document.querySelector('.creation__part_3');
const creationPart4 = document.querySelector('.creation__part_4');
const creationPart5 = document.querySelector('.creation__part_5');
const creationClipKDA = document.querySelector('.creation__clip-KDA');
const creationClipRise = document.querySelector('.creation__clip-RISE');
const creationClipJvsE = document.querySelector('.creation__clip-JvsE');
const creationClipEnemy = document.querySelector('.creation__clip-Enemy');
const creationClipSting = document.querySelector('.creation__clip-Sting');
const videoPart1 = document.querySelector('.creation__video_1');
const videoPart2 = document.querySelector('.creation__video_2');
const videoPart3 = document.querySelector('.creation__video_3');
const videoPart4 = document.querySelector('.creation__video_4');
const videoPart5 = document.querySelector('.creation__video_5');
const clipKDA = document.querySelector('.creation__video-KDA');
const clipRise = document.querySelector('.creation__video-RISE');
const clipJvsE = document.querySelector('.creation__video-JvsE');
const clipEnemy = document.querySelector('.creation__video-Enemy');
const clipSting = document.querySelector('.creation__video-Sting');


function togglePart1() {
  creationPart1.classList.toggle("active");
  videoPart1.pause();
  videoPart1.currentTime = 0;
}
function togglePart2() {
  creationPart2.classList.toggle("active");
  videoPart2.pause();
  videoPart2.currentTime = 0;
}
function togglePart3() {
  creationPart3.classList.toggle("active");
  videoPart3.pause();
  videoPart3.currentTime = 0;
}
function togglePart4() {
  creationPart4.classList.toggle("active");
  videoPart4.pause();
  videoPart4.currentTime = 0;
}
function togglePart5() {
  creationPart5.classList.toggle("active");
  videoPart5.pause();
  videoPart5.currentTime = 0;
}

function toggleClipKDA() {
  creationClipKDA.classList.toggle("active");
  clipKDA.pause();
  clipKDA.currentTime = 0;
}
function toggleClipRise() {
  creationClipRise.classList.toggle("active");
  clipRise.pause();
  clipRise.currentTime = 0;
}
function toggleClipJvsE() {
  creationClipJvsE.classList.toggle("active");
  clipJvsE.pause();
  clipJvsE.currentTime = 0;
}
function toggleClipEnemy() {
  creationClipEnemy.classList.toggle("active");
  clipEnemy.pause();
  clipEnemy.currentTime = 0;
}
function toggleClipSting() {
  creationClipSting.classList.toggle("active");
  clipSting.pause();
  clipSting.currentTime = 0;
}