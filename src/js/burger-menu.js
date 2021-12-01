"use strict";

// assign variables
const navBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".nav");
const menuLinks = document.getElementsByClassName("menu__link");


// add eventListener
navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("open");
    menu.classList.toggle("nav--visible");
});


// add or remove class in stylesheet
for (const link of menuLinks) {
    link.addEventListener("click", () => {
        menu.classList.remove("nav--visible");
        navBtn.classList.remove("open");
    });
}
