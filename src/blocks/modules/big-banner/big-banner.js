import Swiper from "swiper";



// let topSliderThumbs = new Swiper(".js-top-slider-bg", {
//     spaceBetween: 30,
//     slidesPerView: 3,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true
// });
let topSliderThumbs = new Swiper(".js-top-slider-dots", {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
});
new Swiper(".js-top-slider", {
    thumbs: {
        swiper: topSliderThumbs
    },
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
});
