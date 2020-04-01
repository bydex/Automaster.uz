import "@babel/polyfill";
import "classlist-polyfill";
import "element-closest-polyfill";

let menuBtn = document.querySelector(".js-main-menu");

menuBtn.addEventListener("click", function() {
    this.closest(".main-menu").classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
});
