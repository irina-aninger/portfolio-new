"use strict";

// particles

particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 120,
                "density": {
                    "enable": true,
                    "value_area": 900
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#FFFFFF",
                "opacity": 0.3,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100
                }
            }
        },
        "retina_detect": true
    }
);


// animation and active menu

AOS.init();

const navItem = document.querySelectorAll(".nav-item");

function activeNav(el) {
    if (el.getBoundingClientRect().top <= el.getBoundingClientRect().height / 2) {
        for (let i = 0, length = navItem.length; i < length; i++) {
            if (el.id === navItem[i].attributes[1].value.slice(1)) {
                navItem[i].classList.add("active");
            } else {
                navItem[i].classList.remove("active");
            }
        }
    }
}

document.addEventListener("scroll", function () {
    document.querySelectorAll("body > div").forEach(activeNav);
});

function animate(el) {
    if (el.getBoundingClientRect().top <= window.innerHeight / 1.5) {
        el.classList.add("visible");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    animate(document.querySelector("#banner-section .social"));
});

document.addEventListener("scroll", function () {
    document.querySelectorAll(".title-wrapper").forEach(animate);
    animate(document.querySelector(".contact__block hr"));
    document.querySelectorAll(".progress-bar").forEach(animate);
    animate(document.querySelector(".contact .social"));
});


// pagination

const pagination = document.querySelectorAll(".works__nav li"),
    works = document.querySelectorAll(".works");

pagination[0].classList.add("active");
works[0].classList.add("active");

for (let i = 0, length = pagination.length; i < length; i++) {
    pagination[i].addEventListener("click", function () {
        for (let i = 0, length = works.length; i < length; i++) {
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

document.querySelector(".burger").addEventListener("click", function () {
    this.classList.toggle("open");
    document.querySelector("nav").classList.toggle("open");
});


// info

let info = document.querySelectorAll(".info"),
    close = document.querySelectorAll(".close");

info.forEach(function (el) {
    el.addEventListener("click", function () {
        this.nextElementSibling.classList.add("open")
    });
});

close.forEach(function (el) {
    el.addEventListener("click", function () {
        this.parentElement.classList.remove("open")
    });
});
