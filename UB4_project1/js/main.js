const navSlide = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burgerMenu.addEventListener('click', () => {
        //toggle Nav
        navList.classList.toggle('nav-active');
        //animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
        //animate burger menu onclick
        burgerMenu.classList.toggle('animate')
    })
}

navSlide();