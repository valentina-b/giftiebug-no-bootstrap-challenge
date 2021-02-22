const burgerMenu = document.querySelector('.div-burger-menu');
const burgerMenuTop = document.querySelector('.top-burger-menu');

burgerMenu.addEventListener('click', openBurgerMenu);

function openBurgerMenu() {
    burgerMenuTop.classList.toggle('top-burger-menu-transform');
}
