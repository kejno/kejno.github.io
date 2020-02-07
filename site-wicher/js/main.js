let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow'
    },
    breakpoints: {
        // when window width is >= 640px
        540: {
            slidesPerView: 2,
        }
    }
});

let menuBtn = document.querySelector('.menu-button');
let menu = document.querySelector('.header')

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('header-active');
    menuBtn.classList.toggle('menu-button-active');
})

