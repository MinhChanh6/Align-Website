export default function handleMenu() {
    const menuTimeLine = gsap.timeline();

    const menuItems = document.querySelectorAll('.menu-black__item');
    const menuSocialItems = document.querySelectorAll('.menu-grey__social > a')
    const burgerMenu = document.querySelector('.burger')
    const burgerMenuClose = document.querySelector('.menu-black__close')
    const menu = document.querySelector('.menu')
    const svgIcon = document.getElementById('circle');
    const svgArrow = document.getElementById('arrow');

    menuTimeLine.to(menu, 0.2, {
        right: '0',
    })


    menuTimeLine.set(svgIcon, {
        duration: 0.2,
        strokeDashoffset: "0",
        ease: 'expo.inOut',
    }, "=0.2")

    menuTimeLine.fromTo(svgArrow, {
        opacity: 0
    }, { opacity: 1 }, "-=0.2")

    menuTimeLine.from(menuSocialItems, {
        duration: 0.2,
        opacity: 0,
        y: 10,
        stagger: 0.075,
        ease: 'expo.inOut',
    }, "-=0.2");


    menuTimeLine.from(menuItems, {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: 'expo.inOut',
    }, "-=0.3");




    menuTimeLine.reverse();


    const handleOpenMenu = () => {
        menuTimeLine.reversed(!menuTimeLine.reversed());
    }
    burgerMenuClose.addEventListener('click', handleOpenMenu);
    burgerMenu.addEventListener('click', handleOpenMenu);


}