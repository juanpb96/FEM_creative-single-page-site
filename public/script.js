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

const buttonKeyDown = (e, cb, type = "button") => {
    const key = e.key;
    
    switch (type) {
        case 'button':
            if (![' ', 'Enter'].includes(key)) {
                return;
            }
            break;
        case 'combobox':
            if (![' ', 'Enter', 'ArrowDown', 'Down'].includes(key)) {
                return;
            }
            break;
        default:
            return;
    }

    cb();
};

hamburgerButton.addEventListener('mousedown', toggleMenuClick);
hamburgerButton.addEventListener('keydown', (e) => buttonKeyDown(e, toggleMenuClick, 'combobox'));

navMenu.addEventListener('animationend', () => {
    if (isMenuOpen) {
        navMenu.classList.add('hidden');
        navMenu.classList.add('animate-opacity-100');
        navMenu.classList.remove('animate-opacity-0');
    } else {
        navMenu.classList.remove('animate-opacity-100');
    }
});

const carousel = document.getElementById('carousel');
const carouselLength = carousel.children.length;
let currentSlide = 0;

const carouselControls = document.getElementById('carousel-controls');
const previousButton = carouselControls.children[0];
const nextButton = carouselControls.children[1];

const changeCarouselSlide = (direction) => {
    return () => {
        carousel.children[currentSlide].classList.add('hidden');

        if (currentSlide + direction < 0) {
            currentSlide = carouselLength - 1;
        } else if (currentSlide + direction >= carouselLength) {
            currentSlide = 0;
        } else {
            currentSlide += direction; 
        }

        carousel.children[currentSlide].classList.remove('hidden');
    };
};

const previousSlide = changeCarouselSlide(-1);
const nextSlide = changeCarouselSlide(1);

previousButton.addEventListener('mousedown', previousSlide);
previousButton.addEventListener('keydown', (e) => buttonKeyDown(e, previousSlide, 'button'));

nextButton.addEventListener('mousedown', nextSlide);
nextButton.addEventListener('keydown', (e) => buttonKeyDown(e, nextSlide, 'button'));