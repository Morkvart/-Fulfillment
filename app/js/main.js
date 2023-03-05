const menu = document.getElementById('menu-toggler');

let menuLinks = document.getElementsByClassName('menu__link');

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
        if (menu.checked == true) {
            menu.checked = false;
        }
    })
}