// FIXME: Try to compile or minify

const hamburgerButton = document.getElementsByClassName('hamburger')[0];
const navMenu = document.getElementById('nav-menu');

let isMenuOpen = false;

const toggleMenu = () => {
    isMenuOpen = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', !isMenuOpen);

    if (isMenuOpen) {
        navMenu.classList.add('animate-opacity-0');
    } else {
        navMenu.classList.remove('hidden');
    }
};

const toggleMenuClick = () => {
    toggleMenu();
};

const toggleMenuKeyDown = (e) => {
    const key = e.key;
    console.log({ key });

    if (![' ', 'Enter', 'ArrowDown', 'Down'].includes(key)) {
        return;
    }

    toggleMenu();
};

hamburgerButton.addEventListener('mousedown', toggleMenuClick);
hamburgerButton.addEventListener('keydown', toggleMenuKeyDown);

navMenu.addEventListener('animationend', () => {
    if (isMenuOpen) {
        navMenu.classList.add('hidden');
        navMenu.classList.add('animate-opacity-100');
        navMenu.classList.remove('animate-opacity-0');
    } else {
        navMenu.classList.remove('animate-opacity-100');
    }
});
