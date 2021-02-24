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

// modal code adjusted from https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
let modal = document.getElementById('modal');

// Get the elements that open the modal
let ctas = document.getElementsByClassName('cta');
let modalLinks = document.getElementsByClassName('modal-link');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks on the cta/modalLink, open the modal
for (let cta of ctas) {
    cta.addEventListener('click', openModal);
}

for (let modalLink of modalLinks) {
    modalLink.addEventListener('click', openModal);
}

function openModal() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}