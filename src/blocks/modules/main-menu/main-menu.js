import "@babel/polyfill";
import "classlist-polyfill";
import "element-closest-polyfill";

let menuBtn = document.querySelector(".js-main-menu"),
    mainMenu = document.querySelector('.main-menu'),
    body = document.body,
    html = document.querySelector('html');

function toggleMenu() {
    mainMenu.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
    document.querySelector('html').classList.toggle("overflow-hidden");
}
menuBtn.addEventListener("click", toggleMenu);

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && mainMenu.classList.contains("active")) toggleMenu();
})
