const burgerMenu = document.querySelector('.div-burger-menu');
const burgerMenuTop = document.querySelector('.top-burger-menu');
const burgerMenuLinks = document.querySelector('#burger-menu-links');

burgerMenu.addEventListener('click', openBurgerMenu);

function openBurgerMenu() {
    burgerMenuTop.classList.toggle('top-burger-menu-transform');
    burgerMenuLinks.classList.toggle('display-block-slide');
}

const burgerMenuLinkArr = document.querySelectorAll('.burger-menu-link')

for (let burgerMenuLinkArrLink of burgerMenuLinkArr) {
    burgerMenuLinkArrLink.addEventListener('click', closeBurgerMenu);
}

function closeBurgerMenu() {
    burgerMenuLinks.classList.toggle('display-block-slide');
    burgerMenuTop.classList.toggle('top-burger-menu-transform');
}