
const scrollContainer = document.querySelector('[data-scroll-container]');

export const scroller = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
    multiplier: 1,
});

