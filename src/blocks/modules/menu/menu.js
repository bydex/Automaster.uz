import Swiper from 'swiper';

let swiper;
let menu = document.querySelectorAll(".menu")[1],
    menuBody = menu.querySelector('.menu__body'),
    menuItem = menu.querySelectorAll('.menu__item');


function initSlider() {
    menuBody.classList.add('swiper-wrapper');
    menuItem.forEach(e => e.classList.add('swiper-slide'));

    return new Swiper(menu, {
        pagination: {
            el: '.menu__dots',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="menu__dot ${className}"></span>`;
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerColumn: 3,
            },
            660: {
                slidesPerView: 2,
                slidesPerColumn: 3,
            },
        }
    });
}

function adaptiveMenu() {
    if (window.innerWidth < 760) {
        let dots = document.createElement('div');
        dots.classList.add("menu__dots");

        let height = [];
        menuBody.style.height = "auto";
        menuItem.forEach((e) => {
            height.push(e.offsetHeight);
        });
        height = (Math.max(...height) / 16) * 3;
        console.log(height)
        menuBody.style.height = height + "rem";

        if (swiper) return;
        else {
            menuBody.classList.add('swiper-wrapper');
            menu.appendChild(dots);
            menuItem.forEach(e => {
                e.classList.add('swiper-slide');
            });
            swiper = initSlider();
        }
    } else if (swiper) {
        menuBody.classList.remove('swiper-wrapper');
        menuItem.forEach(e => e.classList.remove('swiper-slide'));
        swiper.destroy();
        swiper = undefined;
        menuBody.style.height = 'auto';
        menu.querySelector(".menu__dots").remove();
    }
}

document.addEventListener('DOMContentLoaded', adaptiveMenu);
window.addEventListener('resize', adaptiveMenu);
