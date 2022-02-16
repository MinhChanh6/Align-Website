import { scroller } from "./locomotiveSroll.js";

export default function createdScrollTrigger() {

    const scrollContainer = document.querySelector('[data-scroll-container]');

    scroller.on('scroll', ScrollTrigger.update)
    ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
            return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: scrollContainer.style.transform ? "transform" : "fixed"
    });

    const isUpdate = () => {
        if (scroller) {
            scroller.update();
        }
    };
    ScrollTrigger.addEventListener('refresh', isUpdate)

    ScrollTrigger.refresh()

    ScrollTrigger.defaults({ scroller: scrollContainer });


    //Services Section
    const servicesSection = document.querySelector('.services-section')
    if (servicesSection) {
        const scrollServices = gsap.timeline({
            scrollTrigger: {
                trigger: '.services-section',
                start: 'top 30%',
                end: 'bottom 50%',
                toggleActions: "play none none reverse",
                onEnter: () => gsap.to(['body', '.services-section'], { backgroundColor: '#1500BB' }),
                onLeave: () => gsap.to(['body', '.services-section'], { backgroundColor: '#F7F7F7' }),
                onLeaveBack: () => gsap.to(['body', '.services-section'], { backgroundColor: '#F7F7F7' }),
                onEnterBack: () => gsap.to(['body', '.services-section'], { backgroundColor: '#1500BB' })
            }
        })
        scrollServices.to('.services-item__arrow', { opacity: 1 })
        scrollServices.to(['.services-title', '.services-item__title', '.services-item__desc'], { color: '#FFFFFF' }, "-=0.5")
        scrollServices.from('.services-quote > span', 0.4, { y: 150, opacity: 0, stagger: { amount: 0.2 }, delay: 0.4 })
    }


    //Clients Section
    const scrollClients = gsap.timeline({
        scrollTrigger: {
            trigger: '.clients',
            start: 'top 30%',
            end: 'bottom 30%',
        }
    })
    scrollClients.to('.line', 0.4, { width: '100%', stagger: 0.25 })
    scrollClients.from('.clients-list__icon > li > img', 0.3, { opacity: 0, ease: "power4.inOut", stagger: 0.025 }, "-=0.7")

    //Slogan Section
    const sloganSection = document.querySelector('.slogan')
    if (sloganSection) {
        const scrollSlogan = gsap.timeline({
            scrollTrigger: {
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
    }



    //Parallax Image
    const parallaxImage = document.querySelector('.wrap-parallax');
    const blogDetailSection = document.querySelector('.blogDetail')
    if (parallaxImage) {
        let parallax = gsap.timeline({
            scrollTrigger: {
                trigger: parallaxImage,
                start: 'top 50%',
                end: 'bottom 20%',
                scrub: true
            }
        })
        parallax.from('.image-parallax', {
            yPercent: -10,
        })
        parallax.to('.image-parallax', {
            yPercent: 10,
        })
    }
    //Footer Section 
    gsap.set('.footer-container', { yPercent: -50 })

    const uncover = gsap.timeline({ paused: true })

    uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

    ScrollTrigger.create({
        trigger: '.last-section',
        start: 'bottom bottom',
        end: '+=90%',
        animation: uncover,
        scrub: true,
    })


}