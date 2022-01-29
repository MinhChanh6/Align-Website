export default function createdScrollTrigger() {


    const scroller = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: false,
        tablet: { smooth: false },
        smartphone: { smooth: false },
        multiplier: 0.95,
        getSpeed: true,
        getDirection: true
    });

    scroller.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
            return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    });


    //Services Section
    const scrollServices = gsap.timeline({
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.services',
            start: 'top 30%',
            end: 'bottom 50%',
            toggleActions: "play none none reverse",
            onEnter: () => gsap.to(['.services', 'body'], { backgroundColor: '#1500BB' }),
            onLeave: () => gsap.to(['.services', 'body'], { backgroundColor: '#F7F7F7' }),
            onLeaveBack: () => gsap.to(['.services', 'body'], { backgroundColor: '#F7F7F7' }),
            onEnterBack: () => gsap.to(['.services', 'body'], { backgroundColor: '#1500BB' })
        }
    })
    scrollServices.to('.services-item__arrow', { opacity: 1 })
    scrollServices.to(['.services-title', '.services-item__title', '.services-item__desc'], { color: '#FFFFFF' }, "-=0.5")
    scrollServices.from('.services-quote > span', 1, { y: 150, opacity: 0, stagger: { amount: 0.2 }, delay: 0.4 })
    scrollServices.fromTo('.services-symbol', 1.25, { scale: 0 }, { scale: 1 }, "-=1.25")

    //Clients Section
    const scrollClients = gsap.timeline({
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.clients',
            start: 'top 30%',
            end: 'bottom 30%',
        }
    })
    scrollClients.to('.line', 0.75, { width: '100%', stagger: 0.25 })
    scrollClients.from('.clients-list__icon > li > img', 0.3, { opacity: 0, ease: "power4.inOut", stagger: 0.025 }, "-=1.2")

    //Slogan Section
    const scrollSlogan = gsap.timeline({
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.slogan',
            start: 'top 55%',
        }
    })
    scrollSlogan.from('.slogan-animation ', 1, {
        opacity: 0,
        y: 80,
        ease: "Slowmo.easeOut",
        stagger: {
            each: 0.15
        }
    })
    scrollSlogan.from(['.slogan-award__content', '.slogan-logo'], 0.7, {
        opacity: 0
    }, "-=0.8")

    //Project Sections
    const sections = gsap.utils.toArray('.project');
    sections.forEach((section) => {
        const layer = section.querySelectorAll('.project-layer')
        const img = section.querySelectorAll('.project-item > img')
        const scrollProject = gsap.timeline({
            scrollTrigger: {
                scroller: '.smooth-scroll',
                trigger: section,
                start: 'top 50%',
            }
        })

        scrollProject.to(layer, 1.25, {
            width: '0%',
            stagger: { amount: 0.25 }
        })
        scrollProject.from(img, 1, {
            scale: 1.25,
            ease: "Slowmo.easeOut",
        }, "=-1")
    })

    //Insights Section
    const scrollInSights = gsap.timeline({
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.insights',
            start: 'top 50%',
        }
    })

    scrollInSights.to('.insights-layer', 1.25, {
        width: '0%',
        stagger: { amount: 0.25 }
    })
    scrollInSights.from('.insights-item > img', 1, {
        scale: 1.25,
        ease: "Slowmo.easeOut",
    }, "=-1.25")


    //Footer Section 
    const scrollFooter = gsap.timeline({
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.footer',
            start: 'top 50%',
        }
    })
    scrollFooter.from('.footer-heading__text > span', 0.85, {
        y: 70,
        opacity: 0,
        stagger: {
            amount: 0.05
        }
    })
    scrollFooter.set('#circle-footer', {
        duration: .75,
        strokeDashoffset: "0",
        ease: 'expo.inOut',
    }, "-=0.75")
    scrollFooter.fromTo('#arrow-footer', {
        opacity: 0
    }, { opacity: 1 }, "-=0.5")
    scrollFooter.from(['.footer-gmail', '.footer-address', '.footer-times', '.footer-end'], 1.25, { opacity: 0 }, "-=0.3")


    ScrollTrigger.addEventListener('refresh', () => scroller.update())

    ScrollTrigger.refresh()

}