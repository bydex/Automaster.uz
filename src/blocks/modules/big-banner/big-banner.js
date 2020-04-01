import Swiper from "swiper";




let topSliderBg = new Swiper(".js-top-slider-bg", {
  speed: 1000,
  slidesPerView: 1,
  effect: "fade",
});
let topSliderThumbs = new Swiper(".js-top-slider-dots", {
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
let topSlider = new Swiper(".js-top-slider", {
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
topSlider.on("slideChange", function() {
  topSliderBg.slideTo(this.realIndex);
});
topSliderBg.on("slideChange", function() {
  topSlider.slideTo(this.realIndex + 1);
});
