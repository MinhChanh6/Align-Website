export default function createdMagneticButton() {
    const buttons = document.querySelectorAll('.button');
    const cursor = document.querySelector('.cursor');
    const cursorFollow = document.querySelector('.cursor-follow');
    let movement = 40;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    buttons.forEach((button) => {
        const filter = button.querySelector('.button__filler')
        const textInner = button.querySelector('.button__text-inner')
        const textOunner = button.querySelector('.button__text')
        const boundingRect = button.getBoundingClientRect();

        function move(e) {

            var relX = e.pageX - boundingRect.left;
            var relY = e.pageY - boundingRect.top;

            gsap.to(button, 0.3, {
                x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
                y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.width * movement,
                ease: 'Power3.easeOut',
            });
            gsap.to(textOunner, 0.3, {
                x: (relX - boundingRect.width / 2) / boundingRect.width * 10,
                y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.width * 10,
                ease: 'Power3.easeOut',
            });
        }

        function enter(e) {
            const tl = gsap.timeline();
            button.classList.add('button-hover')

            gsap.killTweensOf(filter);
            gsap.killTweensOf(textInner);


            tl.to(cursorFollow, 0.1, {
                scale: 0
            })
            tl.to(filter, 0.25, {
                ease: 'Power3.easeOut',
                startAt: { y: '75%' },
                y: '0%'
            })
            tl.to(textInner, 0.1, {
                ease: 'Power3.easeOut',
                opacity: 0,
                y: '-10%'
            }, 0)
            tl.to(textInner, 0.25, {
                ease: 'Power3.easeOut',
                opacity: 1,
                startAt: { y: '80%', opacity: 1 },
                y: '0%'
            }, 0.15);
        }

        function leave(e) {
            button.classList.remove('button-hover')

            const tl = gsap.timeline();

            gsap.killTweensOf(filter);
            gsap.killTweensOf(textInner);


            tl.to(cursorFollow, 0.1, {
                scale: 1
            })
            tl.to(filter, 0.25, {
                ease: 'Power3.easeOut',
                y: '-75%'
            })
                .to(textInner, 0.1, {
                    ease: 'Power3.easeOut',
                    opacity: 0,
                    y: '10%'
                }, 0)
                .to(textInner, 0.25, {
                    ease: 'Power3.easeOut',
                    opacity: 1,
                    startAt: { y: '-80%', opacity: 1 },
                    y: '0%'
                }, 0.15);
        }

        button.addEventListener('mousemove', move);
        button.addEventListener('mouseenter', enter);
        button.addEventListener('mouseleave', leave);
    })






}