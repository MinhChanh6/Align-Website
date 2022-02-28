export default function createdAnimation() {

    window.addEventListener("load", () => {
        const categoriesItems = document.querySelectorAll('.categories-link');
        const worksSlogan = document.querySelector('.works-slogan')

        if (categoriesItems) {
            const introHomeTimeline = gsap.timeline();
            introHomeTimeline.from([categoriesItems], 1.1, {
                opacity: 0,
                yPercent: 100,
                ease: "power4.out",
                stagger: 0.15
            })
        }
        if (worksSlogan) {
            const introWorksTimeline = gsap.timeline();
            introWorksTimeline.from('.works-title > span', 1.3, {
                y: '150%',
                ease: 'power4.out'
            })
            introWorksTimeline.from('.slogan-award__content > a', 0.75, {
                opacity: 0,
                y: '100%',
                stagger: { amount: 0.15 },
                ease: 'power4.out'
            }, "-=1")
            introWorksTimeline.from('.slogan-logo', 0.5, { opacity: 0 }, "-=1")
        }

        //About title 
        const aboutTitle = document.querySelector('.about-title')
        if (aboutTitle) {
            const introAboutTimeline = gsap.timeline();
            introAboutTimeline.from('.about-title > span > .word', 1.25, {
                opacity: 0,
                y: 100,
                ease: "power4.out",
                stagger: { amount: 0.1 }
            });
        }
    })

}