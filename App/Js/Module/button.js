export default function createdMagneticButton() {
    const buttons = document.querySelectorAll('.button');
    const cursorFollow = document.querySelector('.cursor-follow');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    buttons.forEach((button) => {
        const filter = button.querySelector('.button__filler')
        const textInner = button.querySelector('.button__text-inner')
        const textOunner = button.querySelector('.button__text')
        const boundingRect = button.getBoundingClientRect();

        function enter(e) {
            const tl = gsap.timeline();
            button.classList.add('button-hover')

            tl.killTweensOf(filter);
            tl.killTweensOf(textInner);


            tl.to(filter, 0.3, {
                ease: 'Power3.easeOut',
                startAt: { y: '75%' },
                y: '0%'
            })
            tl.to(textInner, 0.1, {
                ease: 'Power3.easeOut',
                opacity: 0,
                y: '-10%'
            }, 0)
            tl.to(textInner, 0.3, {
                ease: 'Power3.easeOut',
                opacity: 1,
                startAt: { y: '80%', opacity: 1 },
                y: '0%'
            }, 0.15);
        }

        function leave(e) {
            button.classList.remove('button-hover')

            const tl = gsap.timeline();

            tl.killTweensOf(filter);
            tl.killTweensOf(textInner);

            tl.to(filter, 0.3, {
                ease: 'Power3.easeOut',
                y: '-75%'
            })
                .to(textInner, 0.1, {
                    ease: 'Power3.easeOut',
                    opacity: 0,
                    y: '10%'
                }, 0)
                .to(textInner, 0.3, {
                    ease: 'Power3.easeOut',
                    opacity: 1,
                    startAt: { y: '-80%', opacity: 1 },
                    y: '0%'
                }, 0.15);
        }
        button.addEventListener('mouseenter', enter);
        button.addEventListener('mouseleave', leave);
    })
}