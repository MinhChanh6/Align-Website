export default function customizeCursor() {
    const cursorFollow = document.querySelector('.cursor-follow');
    const cursorView = document.querySelector('.cursor-view');
    const cursorClick = document.querySelector('.cursor-click')
    const projectItems = document.querySelectorAll('.project-item')
    const hoverElement = document.querySelectorAll('.hover');
    const hideCursors = document.querySelectorAll('.hide-cursor');
    const burgerMenuClose = document.querySelector('.menu-black__close');
    const mainSwiper = document.querySelector('.mainSwiper');

    function mouseMove(e) {
        const { clientX, clientY } = e;

        gsap.to(cursorFollow, 0.2, {
            x: clientX,
            y: clientY,
        })
    }

    hoverElement.forEach((item) => {

        function handleHoverIn() {
            gsap.to(cursorFollow, 0.3, {
                scale: 2,
            })
        }
        function handleHoverOut() {
            gsap.to(cursorFollow, 0.3, {
                scale: 0.8,
            })
        }

        item.addEventListener('mouseenter', handleHoverIn)
        item.addEventListener('mouseleave', handleHoverOut)
    })


    projectItems.forEach(item => {
        function handleMouseViewIn() {
            gsap.to(cursorFollow, 0.3, {
                backgroundColor: 'black',
                mixBlendMode: 'unset',
                border: '1px solid black',
                scale: 2.5,
            })

            gsap.set(cursorView, { opacity: 1 })
        }
        function handleMouseViewOut() {
            gsap.to(cursorFollow, 0.3, {
                scale: 0.8,
                backgroundColor: '#F7F7F7',
                mixBlendMode: 'difference',
                border: '1px solid #F7F7F7',
            })

            gsap.set(cursorView, { opacity: 0 })
        }
        item.addEventListener('mouseenter', handleMouseViewIn);
        item.addEventListener('mouseleave', handleMouseViewOut);
    })

    hideCursors.forEach((item) => {
        function handleHideCursors(e) {
            if (e.type === 'mouseenter') {
                gsap.to(cursorFollow, 0.3, {
                    opacity: 0,
                })
            } else if (e.type === 'mouseleave') {
                gsap.to(cursorFollow, 0.3, {
                    opacity: 1,
                })
            }
        }
        item.addEventListener('mouseenter', handleHideCursors);
        item.addEventListener('mouseleave', handleHideCursors);
    })

    if (mainSwiper) {
        const handleClickCursor = (e) => {
            if (e.type === 'mouseenter') {

                gsap.killTweensOf('.js-cursor-text');
                gsap.killTweensOf('.js-cursor-text__clone');
                gsap.killTweensOf(cursorFollow)


                gsap.to(cursorFollow, 0.3, {
                    scale: 2.5,
                })
                gsap.set(cursorFollow, {
                    backgroundColor: 'black',
                    mixBlendMode: 'normal',
                    border: '1px solid black',
                })
                gsap.set(cursorClick, { opacity: 1 })
                gsap.set('.js-cursor-text__clone', { yPercent: -100 })
                gsap.fromTo('.js-cursor-text', 0.4, { yPercent: 100, ease: 'power4.out' }, { yPercent: 0, ease: 'power4.out' }, "-=0.05")
            } else if (e.type === 'mouseleave') {

                gsap.killTweensOf('.js-cursor-text');
                gsap.killTweensOf('.js-cursor-text__clone');
                gsap.killTweensOf(cursorFollow)


                gsap.to(cursorFollow, 0.3, {
                    scale: 0.8,
                })
                gsap.set(cursorFollow, {
                    backgroundColor: '#F7F7F7',
                    mixBlendMode: 'difference',
                })
                gsap.set(cursorClick, { opacity: 0 })
            }
        }
        mainSwiper.addEventListener('mouseenter', handleClickCursor);
        mainSwiper.addEventListener('mouseleave', handleClickCursor);
    }
    window.addEventListener('mousemove', mouseMove)
}