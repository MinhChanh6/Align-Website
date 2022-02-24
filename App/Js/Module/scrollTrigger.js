import { scroller } from "./locomotiveSroll.js";

export default function createdScrollTrigger() {

    window.addEventListener("load", () => {
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
                    end: '70% 40%',
                    toggleActions: "play none none reverse",
                    onEnter: () => gsap.to(['.wrapper', '.services-section'], { backgroundColor: '#1500BB' }),
                    onLeave: () => gsap.to(['.wrapper', '.services-section'], { backgroundColor: '#F7F7F7' }),
                    onLeaveBack: () => gsap.to(['.wrapper', '.services-section'], { backgroundColor: '#F7F7F7' }),
                    onEnterBack: () => gsap.to(['.wrapper', '.services-section'], { backgroundColor: '#1500BB' })
                }
            })
            scrollServices.to('.services-item__arrow', { opacity: 1 })
            scrollServices.to(['.services-title', '.services-item__title', '.services-item__desc'], { color: '#FFFFFF' }, "-=0.5")
        }

        //Services Quote 
        const servicesQuote = document.querySelector('.services-quote')
        if (servicesQuote) {
            const servicesQuoteTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: servicesQuote,
                    start: 'top 40%',
                }
            });
            servicesQuoteTimeline.from('.services-quote > span > .word', 1, { y: 150, opacity: 0, stagger: { amount: 0.1 }, delay: 0.2, ease: "power4.out" }, "-=2")
        }


        //Slogan Section
        const sloganSection = document.querySelector('.slogan')
        if (sloganSection) {
            const scrollSlogan = gsap.timeline({
                scrollTrigger: {
                    trigger: '.slogan',
                    start: '25% 55%',
                }
            })
            scrollSlogan.from('.slogan-animation .word', 1.25, {
                opacity: 0,
                y: 80,
                ease: "power4.out",
                stagger: { amount: 0.2 }
            }, "-=2")
            scrollSlogan.from(['.slogan-award__content', '.slogan-logo'], 0.7, {
                opacity: 0
            }, "-=2")
        }

        //Clients Section
        const clientSection = document.querySelector('.clients')
        if (clientSection) {
            const listIcon = document.querySelector('.marque');
            const scrollClients = gsap.timeline({
                scrollTrigger: {
                    trigger: '.clients',
                    start: 'top 30%',
                    end: 'bottom 30%',
                }
            })
            scrollClients.to('.line', 0.4, { width: '100%', stagger: 0.25 })
            scrollClients.fromTo('.marque', 30, { x: '0%' }, { x: -listIcon.offsetWidth, ease: Linear.easeNone, repeat: -1, }, "start-=0.7");
            scrollClients.fromTo('.marqueForward', 120, {
                x: '-250%'
            }, {
                x: listIcon.offsetWidth,
                ease: Linear.easeNone,
                repeat: -1,
            }, "start-=0.7")
        }





        //Parallax Image
        const parallaxImage = gsap.utils.toArray('.wrap-parallax');
        if (parallaxImage) {
            parallaxImage.forEach((item) => {
                const imageParallax = item.querySelector('.image-parallax')
                let parallax = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 50%',
                        end: 'bottom top',
                        scrub: true,
                    }
                })
                parallax.fromTo(imageParallax, 
                    {yPercent:-20, ease: "none"},
                    {yPercent:20, ease: "none"})
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

    })


}