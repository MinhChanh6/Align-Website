export default function createdScrollTrigger() {

    const scroll = gsap.timeline({
        scrollTrigger: {
            trigger: '.services',
            start: 'top 30%',
            end: 'bottom 50%',
            toggleActions: "play none none reverse",
            onEnter: () => gsap.to('body', { backgroundColor: '#1500BB' }),
            onLeave: () => gsap.to('body', { backgroundColor: 'white' }),
            onLeaveBack: () => gsap.to('body', { backgroundColor: 'white' }),
            onEnterBack: () => gsap.to('body', { backgroundColor: '#1500BB' })
        }
    })
    scroll.to('.services-item__arrow', { opacity: 1 })
    scroll.to(['.services-title', '.services-item__title', '.services-item__desc'], { color: '#FFFFFF' }, "-=0.5")
}