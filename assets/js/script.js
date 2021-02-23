const burgerMenu = document.querySelector('.div-burger-menu');
const burgerMenuTop = document.querySelector('.top-burger-menu');
const burgerMenuLinks = document.querySelector('#burger-menu-links');

burgerMenu.addEventListener('click', openBurgerMenu);

function openBurgerMenu() {
    burgerMenuTop.classList.toggle('top-burger-menu-transform');
    burgerMenuLinks.classList.toggle('display-block-slide');
    console.log(burgerMenuLinks);
}
