// Get the id for the navigation menu animation //
const navLinksHtml = document.getElementById('navigation-links');
const menuOpenHtml = document.getElementById('menu-open');
const menuCloseHtml = document.getElementById('menu-close');

// On click add class from css to navLinks/menuOpen/menuClose & disable scroll on menu mobile //
menuOpenHtml.addEventListener('click', () => {
    navLinksHtml.classList.toggle('d-initial');
    menuOpenHtml.classList.toggle('d-none');
    menuCloseHtml.classList.toggle('d-none');

    document.body.classList.toggle('overflow-h');
});

// On click remove class from css to navLinks/menuOpen/menuClose & enable scroll on menu mobile //
menuCloseHtml.addEventListener('click', () => {
    navLinksHtml.classList.toggle('d-initial');
    menuOpenHtml.classList.toggle('d-none');
    menuCloseHtml.classList.toggle('d-none');

    document.body.classList.toggle('overflow-auto');
});

