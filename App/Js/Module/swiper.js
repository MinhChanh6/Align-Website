export default function createSwiper() {
    const reviewSwiper = new Swiper(".reviewSwiper", {
        effect: 'fade',
        loop: true,
        touchStartPreventDefault: false,
    });

    const personSwiper = new Swiper(".personSwiper", {
        effect: 'fade',
        loop: true,
        touchStartPreventDefault: false,
    })

    reviewSwiper.controller.control = personSwiper;
    personSwiper.controller.control = reviewSwiper;

    const mainSwiper = document.querySelector('.mainSwiper');

    if (mainSwiper) {
        mainSwiper.addEventListener('click', () => {
            function handleCursor() {

                gsap.fromTo('.js-cursor-text', 0.7, {
                    yPercent: 0,
                    ease: 'power4',
                }, {
                    yPercent: -100,
                    ease: 'power4',
                })
                gsap.fromTo('.js-cursor-text__clone', 0.7,
                    {
                        yPercent: 100,
                        ease: 'power4',
                    },
                    {
                        yPercent: 0,
                        ease: 'power4',
                    })
            }
            handleCursor()
            reviewSwiper.slideNext();
        })

        mainSwiper.addEventListener('mouseup', function (e) {
            e.preventDefault();
            gsap.to('.cursor-follow', 0.25, { scale: 2.5, ease: 'power3' })
        }, false)
        mainSwiper.addEventListener('mousedown', function (e) {
            gsap.to('.cursor-follow', 0.25, { scale: 2.3, ease: 'power3' })
        }, false)
    }

}