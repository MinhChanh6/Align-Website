export default function handleMenu() {
    const menuTimeLine = gsap.timeline();

    const menuItems = document.querySelectorAll('.menu-black__item');
    const menuSocialItems = document.querySelectorAll('.menu-grey__social > a')
    const burgerMenu = document.querySelector('.burger')
    const burgerMenuClose = document.querySelector('.menu-black__close')
    const menu = document.querySelector('.menu')
    const svgIcon = document.getElementById('circle');
    const svgArrow = document.getElementById('arrow');

    menuTimeLine.set(svgIcon, {
        duration: 0.25,
        strokeDashoffset: "0",
        ease: 'expo.inOut',
    }, "=0.75")

    menuTimeLine.fromTo(svgArrow, {
        opacity: 0
    }, { opacity: 1 }, "-=0.25")

    menuTimeLine.to(menu, 0.25, {
        right: '0'
    }, "-=1.75")

    menuTimeLine.from(menuSocialItems, {
        duration: 0.25,
        opacity: 0,
        y: 10,
        stagger: 0.075,
        ease: 'expo.inOut',
    }, "-=0.75");


    menuTimeLine.from(menuItems, {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: 'expo.inOut',
    }, "-=1");




    menuTimeLine.reverse(-2);


    const handleOpenMenu = () => {
        menuTimeLine.reversed(!menuTimeLine.reversed());
    }
    burgerMenuClose.addEventListener('click', handleOpenMenu);
    burgerMenu.addEventListener('click', handleOpenMenu);


}