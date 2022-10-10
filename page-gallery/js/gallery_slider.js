"use strict"

//преобразуем псевдомассив в обычный массив при помощи Array.from
const cards = Array.from(document.querySelectorAll('.gallery__card'));
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider__container");
const image = Array.from(document.querySelectorAll(".gallery__image"));
const sliderLeftButton = document.querySelector(".slider__left-button");
const sliderRightButton = document.querySelector(".slider__right-button");
const sliderClose = document.querySelector(".slider__close");

//переменная для хранения индекса ячейки по который был клик
let cardIndex = -1;
let imageFull;

//ивент при клике на картинку
for (const card of cards) {
  // добавил ивент клик для card
  card.addEventListener("click", (event) => {
    //preventDefault-если событие не обрабатывается явно, его действие по умолчанию не выполняется как обычно
    event.preventDefault();
    cardIndex = cards.indexOf(card);         //определяем индекс ячейки по который кликнули
    imageFull = image[cardIndex].cloneNode();//cloneNode - копируем картинку, которую будем вставлять в контейнер
    imageFull.style.ojectFit = "cover";      //делаем картинку полноразмерной при помощи css свойств
    sliderContainer.append(imageFull);       //вставляем картинку в контейнер
    slider.classList.add("active");          //при клике добавил класс active для слайдера
  });
}

//функция смены картинок
function changeImage(direction) {
  if (direction === "left") {           //нажали влево
    if (cardIndex > 0) {                //не вышли ли за пределы массива (индекс не выходит за 0)
      cardIndex--;                      //
    } else {                            //если вышли за пределы массива
      cardIndex = cards.length - 1;     //тогда присваиваем макс значение массива (возвращаемся в начало)
    }
  } else if (direction === "right") {   //нажали вправо
    if (cardIndex < cards.length - 1) { //не вышли ли за пределы массива(только верх массива - с 'др стороны')
      cardIndex++;                      //
    } else {                            //если вышли за пределы массива
      cardIndex = 0;                    //возвращаемся в начало
    }
  }
  //создаем картинку, присваиваем ей cardIndex и клонируем ее
  let newImageFull = image[cardIndex].cloneNode();
  newImageFull.style.objectFit = "cover";
  imageFull.replaceWith(newImageFull);  //меняем выбранную картинку на следующую
  imageFull = newImageFull;             //а старую на новую
}

sliderLeftButton.addEventListener("click", (event) => {
  event.preventDefault();
  changeImage("left");
});

sliderRightButton.addEventListener("click", (event) => {
  event.preventDefault();
  changeImage("right");
});

sliderClose.addEventListener("click", (event) => {
  event.preventDefault();
  slider.classList.remove("active");
  imageFull.remove();
});