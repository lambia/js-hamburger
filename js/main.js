const menuButtonEl = document.querySelector("#menu-toggle");
const mobileMenuEl = document.querySelector(".mobile-menu");
const closeButtonEl = document.querySelector(".close");

menuButtonEl.addEventListener("click", invertMenu);

closeButtonEl.addEventListener("click", invertMenu);

function invertMenu() {
    mobileMenuEl.classList.toggle("active");
}