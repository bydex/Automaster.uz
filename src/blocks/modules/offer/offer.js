import Swiper from "swiper";

new Swiper(".offers-slider", {
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1.2
        },
        400: {
            slidesPerView: 1.5
        },
        660: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        }
    }
});
