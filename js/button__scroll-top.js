"use strict"

const buttonScrollTop = document.querySelector('.scroll-top');
/*два обработчика*/
window.addEventListener('scroll', trackScroll);
buttonScrollTop.addEventListener('click', goTop);
/*отслеживаем прокрутку документа*/
function trackScroll () {
  const scroll = window.pageYOffset;
  const position = document.documentElement.clientHeight;

  if (scroll > position) {
    buttonScrollTop.classList.add('scroll-top--show');
  }
  if (scroll < position) {
    buttonScrollTop.classList.remove('scroll-top--show');
  }
}

function goTop () {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -50);
    setTimeout(goTop, 0);
  }
}