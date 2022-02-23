export default function customizeCursor() {
    const cursorFollow = document.querySelector('.cursor-follow');
    const cursorView = document.querySelector('.cursor-view');
    const cursorClick = document.querySelector('.cursor-click')
    const categoriesItems = document.querySelectorAll('.categories-item');
    const categoriesImg = document.querySelector('.categories-img');
    const projectItems = document.querySelectorAll('.project-item')
    const serviceHeadings = document.querySelectorAll('.services-item__heading');
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

    serviceHeadings.forEach((item) => {
        const arrow = item.querySelector('.services-item__arrow > img')

        function handleMouseTitleIn() {

            arrow.classList.add('active')
            gsap.to(cursorFollow, 0.3, {
                scale: 0,
            })

            gsap.to(arrow, 0.3, { scale: 0.7 })
        }
        function handleMouseTitleOut() {
            gsap.to(cursorFollow, 0.3, {
                scale: 0.8,
            })

            gsap.to(arrow, 0.3, { scale: 1 })
        }

        item.addEventListener('mouseenter', handleMouseTitleIn)
        item.addEventListener('mouseleave', handleMouseTitleOut)
    })

    categoriesItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function (e) {
            let imageSrc = e.target.dataset.src;
            gsap.to(cursorFollow, 0.3, {
                scale: 3,
            })
            categoriesImg.style.zIndex = "99";

            gsap.set('.categories-img > img', {
                attr: { src: imageSrc }
            })
            gsap.to('.categories-img', { autoAlpha: 1 })
            gsap.to('.categories-img > img ', { scale: 1 })
        })

        item.addEventListener('mouseleave', function () {
            gsap.to(cursorFollow, 0.3, {
                scale: 0.8,
            })
            categoriesImg.style.zIndex = "-1";
            gsap.to('.categories-img', { autoAlpha: 0 })
            gsap.to('.categories-img > img ', { scale: 0.5 })
        })
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