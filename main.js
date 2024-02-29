let navElement = document.querySelectorAll(".navList ul li");
navElement.forEach(function (el) {
    el.onmouseenter = function () {
        navElement.forEach(function (el) {
            el.classList.remove("home");
        });
        el.classList.add("home")
    }
    el.onmouseleave = function () {
        el.classList.remove("home")
        navElement[0].classList.add("home");
    }
});

let bars = document.querySelector(".bars label");
let list = document.querySelector(".navList");
let bar2 = document.querySelector(".bars .bar2")

bars.addEventListener("click", function () {
    list.classList.toggle("nList")
    bar2.classList.toggle("b2")
});

