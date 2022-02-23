
const scrollContainer = document.querySelector('[data-scroll-container]');

export const scroller = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    touchMultiplier: 2.5,
    tablet: {
        smooth: false,
    },
    smartphone: { smooth: false },
    multiplier: 1,
});

