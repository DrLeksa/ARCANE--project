"use strict"

const linkCaitlyn = document.querySelector(".character-gallery--caitlyn");
const linkVi = document.querySelector(".character-gallery--vi");
const linkJinx = document.querySelector(".character-gallery--jinx");
const linkSilco = document.querySelector(".character-gallery--silco");
const linkJayce = document.querySelector(".character-gallery--jayce");

//функция для стилей hover и not-hover
function handler () {
  linkCaitlyn.addEventListener("mouseover", (event) => {
    linkCaitlyn.classList.add("hover");
    linkVi.classList.add("not-hover");
    linkJinx.classList.add("not-hover");
    linkSilco.classList.add("not-hover");
    linkJayce.classList.add("not-hover");
  });
  linkCaitlyn.addEventListener("mouseout", (event) => {
    linkCaitlyn.classList.remove("hover");
    linkVi.classList.remove("not-hover");
    linkJinx.classList.remove("not-hover");
    linkSilco.classList.remove("not-hover");
    linkJayce.classList.remove("not-hover");
  });

  linkVi.addEventListener("mouseover", (event) => {
    linkCaitlyn.classList.add("not-hover");
    linkVi.classList.add("hover");
    linkJinx.classList.add("not-hover");
    linkSilco.classList.add("not-hover");
    linkJayce.classList.add("not-hover");
  });
  linkVi.addEventListener("mouseout", (event) => {
    linkCaitlyn.classList.remove("not-hover");
    linkVi.classList.remove("hover");
    linkJinx.classList.remove("not-hover");
    linkSilco.classList.remove("not-hover");
    linkJayce.classList.remove("not-hover");
  });

  linkJinx.addEventListener("mouseover", (event) => {
    linkCaitlyn.classList.add("not-hover");
    linkVi.classList.add("not-hover");
    linkJinx.classList.add("hover");
    linkSilco.classList.add("not-hover");
    linkJayce.classList.add("not-hover");
  });
  linkJinx.addEventListener("mouseout", (event) => {
    linkCaitlyn.classList.remove("not-hover");
    linkVi.classList.remove("not-hover");
    linkJinx.classList.remove("hover");
    linkSilco.classList.remove("not-hover");
    linkJayce.classList.remove("not-hover");
  });

  linkSilco.addEventListener("mouseover", (event) => {
    linkCaitlyn.classList.add("not-hover");
    linkVi.classList.add("not-hover");
    linkJinx.classList.add("not-hover");
    linkSilco.classList.add("hover");
    linkJayce.classList.add("not-hover");
  });
  linkSilco.addEventListener("mouseout", (event) => {
    linkCaitlyn.classList.remove("not-hover");
    linkVi.classList.remove("not-hover");
    linkJinx.classList.remove("not-hover");
    linkSilco.classList.remove("hover");
    linkJayce.classList.remove("not-hover");
  });

  linkJayce.addEventListener("mouseover", (event) => {
    linkCaitlyn.classList.add("not-hover");
    linkVi.classList.add("not-hover");
    linkJinx.classList.add("not-hover");
    linkSilco.classList.add("not-hover");
    linkJayce.classList.add("hover");
  });
  linkJayce.addEventListener("mouseout", (event) => {
    linkCaitlyn.classList.remove("not-hover");
    linkVi.classList.remove("not-hover");
    linkJinx.classList.remove("not-hover");
    linkSilco.classList.remove("not-hover");
    linkJayce.classList.remove("hover");
  });
}

handler ();