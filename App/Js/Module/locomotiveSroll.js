
const scrollContainer = document.querySelector('[data-scroll-container]');

export const scroller = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    lerp: 0.07,
    tablet: {
        smooth: false,
    },
    smartphone: { smooth: false },
    multiplier: 1,
});

