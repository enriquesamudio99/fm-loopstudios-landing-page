const body = document.querySelector('body');
const navbarToggler = document.getElementById('navbarToggler');
const navContainer = document.getElementById('navContainer');

document.addEventListener('DOMContentLoaded', () => initApp());

const initApp = () => {

    navbarToggler.addEventListener('click', toggleNav);

}

const toggleNav = () => {

    navContainer.classList.toggle('nav__container--show');

    if (navContainer.classList.contains('nav__container--show')) {
        body.style.overflowY = 'hidden';
    } else {
        body.style.overflowY = 'auto';
    }

}