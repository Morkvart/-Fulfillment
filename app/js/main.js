const menu = document.getElementById('menu-toggler');

let menuLinks = document.getElementsByClassName('menu__link');

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
        if (menu.checked == true) {
            menu.checked = false;
        }
    })
}


// swiper
const swiper = new Swiper('.cases__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.cases__swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.cases__swiper-btn-next',
        prevEl: '.cases__swiper-btn-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});