const navSlide = () => {
    const navBar = document.querySelector('nav');
    const nav = document.querySelector('.nav_Link');
    const burger = document.querySelector('.burger');
    const navLink = document.querySelectorAll('.nav_Link li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle');
    })
    window.addEventListener('scroll', () => {
        navBar.classList.toggle("sticky", window.scrollY > 0);
    });

}
navSlide()