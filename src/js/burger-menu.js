"use strict";

// assign variables
const navBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu");
const menuLinks = document.getElementsByClassName("menu__link");


// add eventListener
navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("open");
    menu.classList.toggle("menu--visible");
});


// add or remove class in stylesheet
for (const link of menuLinks) {
    link.addEventListener("click", () => {
        menu.classList.remove("menu--visible");
        navBtn.classList.remove("open");
    });
}
