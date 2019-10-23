"use strict";


// animation and active menu

var navItem = document.querySelectorAll(".nav-item");

function activeNav(el) {
    if (el.getBoundingClientRect().top <= el.getBoundingClientRect().height / 2) {
        for (var i = 0, length = navItem.length; i < length; i++) {
            if (el.id === navItem[i].attributes[1].value.slice(1)) {
                navItem[i].classList.add("active");
            } else {
                navItem[i].classList.remove("active");
            }
        }
    }
}

document.addEventListener("scroll", function() {
    document.querySelectorAll("body > div").forEach(activeNav);
});

function animate(el) {
    if (el.getBoundingClientRect().top <= window.innerHeight / 1.5) {
        el.classList.add("visible");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    animate(document.querySelector("#banner-section .social"));
});

document.addEventListener("scroll", function() {
    document.querySelectorAll(".title-wrapper").forEach(animate);
    animate(document.querySelector(".contact__block hr"));
    document.querySelectorAll(".progress-bar").forEach(animate);
    animate(document.querySelector(".contact .social"));
});


// pagination

var pagination = document.querySelectorAll(".works__nav li"),
    works = document.querySelectorAll(".works");

pagination[0].classList.add("active");
works[0].classList.add("active");

for (var i = 0, length = pagination.length; i < length; i++) {
    pagination[i].addEventListener("click", function() {
        for (var i = 0, _length = works.length; i < _length; i++) {
            if (works[i].id === this.dataset.work) {
                works[i].classList.add("active");
                this.classList.add("active");
            } else {
                works[i].classList.remove("active");
                pagination[i].classList.remove("active");
            }
        }
    });
}


// mobile menu

document.querySelector(".burger").addEventListener("click", function() {
    this.classList.toggle("open");
    document.querySelector("nav").classList.toggle("open");
});
