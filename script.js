function toggleMenu() {

    const menu = document.querySelector('.menu-links');
    const hamIcon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    hamIcon.classList.toggle("open");

}