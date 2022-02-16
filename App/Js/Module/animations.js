export default function createdAnimation() {

    const categoriesItems = document.querySelectorAll('.categories-item');
    const worksSlogan = document.querySelector('.works-slogan')
    const aboutTitle = document.querySelector('.about-title')



    if (categoriesItems) {
        const introHomeTimeline = gsap.timeline({ delay: 1.85 });
        introHomeTimeline.from([categoriesItems], 0.75, {
            opacity: 0,
            y: 40,
            stagger: .15,
            ease: 'Slowmo.easeOut'
        }, "=1.85")
        introHomeTimeline.from('#canvas1', 1.5, {
            opacity: 0,
            ease: 'Slowmo.easeOut'
        }, "=-0.55")
    }
    if (worksSlogan) {
        const introWorksTimeline = gsap.timeline({ delay: 1.85 });
        introWorksTimeline.from('.slogan-award__content > h6', 0.6, {
            opacity: 0,
            y: '100%',
            stagger: .15,
        }, "=1.85")
        introWorksTimeline.from('.slogan-logo', 0.5, { opacity: 0 }, "-=0.65")
        introWorksTimeline.from('.works-title > span', 0.5, {
            y: '100%'
        }, "-=0.55")
    }
    if (aboutTitle) {
        const introAboutTimeline = gsap.timeline({ delay: 1.85 });
        const words = document.querySelectorAll('.word')
        introAboutTimeline.from(words, { duration: 0.5, opacity: 0, stagger: 0.02, ease: "power1.inOut" }, "=1.85");
    }
}