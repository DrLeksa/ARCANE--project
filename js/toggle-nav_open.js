"use strict"

// попробовал не вводить константы //
function openNav() {
  document.querySelector('.toggle-nav_button').addEventListener('click', (event) => {
    document.querySelector('.toggle-nav').classList.toggle('open');
  });
}

openNav();