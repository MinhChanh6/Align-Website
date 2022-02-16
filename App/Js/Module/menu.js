export default function handleMenu() {
    const menuTimeLine = gsap.timeline();

    const menuItems = document.querySelectorAll('.menu-black__item');
    const menuSocialItems = document.querySelectorAll('.menu-grey__social > a')
    const burgerMenu = document.querySelector('.burger')
    const burgerMenuClose = document.querySelector('.menu-black__close')
    const popupForm = document.querySelector('.popup')
    const formClose = document.querySelector('.popup-wrap > div > .contact-close')

    const menu = document.querySelector('.menu')
    const svgIcon = document.getElementById('circle');
    const svgArrow = document.getElementById('arrow');

    menuTimeLine.to(menu, 0.12, {
        right: '0',
    })


    menuTimeLine.from(menuSocialItems, {
        duration: 0.2,
        opacity: 0,
    }, "-=0.2");


    menuTimeLine.from(menuItems, {
        duration: 0.3,
        opacity: 0,
        y: 10,
        stagger: 0.05,
        ease: 'expo.inOut',
    }, "=0.15");




    menuTimeLine.reverse(-2);

    const handleOpenMenu = () => {
        menuTimeLine.reversed(!menuTimeLine.reversed());
    }
    burgerMenuClose.addEventListener('click', handleOpenMenu);
    burgerMenu.addEventListener('click', handleOpenMenu);


}