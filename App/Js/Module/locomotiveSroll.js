
const scrollContainer = document.querySelector('[data-scroll-container]');
export const scroller = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    tablet: {
        smooth: false,
    },
    smartphone: { smooth: false },
});

