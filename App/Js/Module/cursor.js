export default function customizeCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollow = document.querySelector('.cursor-follow');
    const cursorView = document.querySelector('.cursor-view');
    const categoriesItems = document.querySelectorAll('.categories-item');
    const categoriesImg = document.querySelector('.categories-img');
    const projectItems = document.querySelectorAll('.project-item')
    const serviceHeadings = document.querySelectorAll('.services-item__heading');
    const hoverFooters = document.querySelectorAll('.hover-footer');
    const hideCursors = document.querySelectorAll('.hide-cursor');
    const burgerMenuClose = document.querySelector('.menu-black__close')
    const menuLinks = document.querySelectorAll('.menu-black__link')


    function mouseMove(e) {
        const { clientX, clientY } = e;

        TweenMax.to(cursorFollow, 0.45, {
            x: clientX,
            y: clientY,
        })
    }

    hoverFooters.forEach((item) => {

        function handleHoverFooterIn() {
            TweenMax.to(cursor, 0.3, {
                opacity: 0,
            })
            TweenMax.to(cursorFollow, 0.3, {
                scale: 2,
            })
        }
        function handleHoverFooterOut() {
            TweenMax.to(cursor, 0.3, {
                opacity: 1,
            })
            TweenMax.to(cursorFollow, 0.3, {
                scale: 1,
            })
        }

        item.addEventListener('mouseenter', handleHoverFooterIn)
        item.addEventListener('mouseleave', handleHoverFooterOut)
    })

    serviceHeadings.forEach((item) => {
        const arrow = item.querySelector('.services-item__arrow > img')

        function handleMouseTitleIn() {

            arrow.classList.add('active')
            TweenMax.to(cursorFollow, 0.3, {
                scale: 0,
            })

            TweenMax.to(arrow, 0.3, { scale: 0.7 })
        }
        function handleMouseTitleOut() {
            TweenMax.to(cursorFollow, 0.3, {
                scale: 0.8,
            })

            TweenMax.to(arrow, 0.3, { scale: 1 })
        }

        item.addEventListener('mouseenter', handleMouseTitleIn)
        item.addEventListener('mouseleave', handleMouseTitleOut)
    })

    categoriesItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function (e) {
            let imageSrc = e.target.dataset.src;
            TweenMax.to(cursorFollow, 0.3, {
                scale: 3,
            })
            categoriesImg.style.zIndex = "99";

            TweenMax.set('.categories-img > img', {
                attr: { src: imageSrc }
            })
            TweenMax.to('.categories-img', { autoAlpha: 1 })
            TweenMax.to('.categories-img > img ', { scale: 1 })
        })

        item.addEventListener('mouseleave', function () {
            TweenMax.to(cursorFollow, 0.3, {
                scale: 0.8,
            })
            categoriesImg.style.zIndex = "-1";
            TweenMax.to('.categories-img', { autoAlpha: 0 })
            TweenMax.to('.categories-img > img ', { scale: 0.5 })
        })
    })

    projectItems.forEach(item => {
        function handleMouseViewIn() {
            TweenMax.to(cursorFollow, 0.3, {
                backgroundColor: 'black',
                mixBlendMode: 'unset',
                border: '1px solid black',
                scale: 2.5,
            })

            TweenMax.set(cursorView, { opacity: 1 })
        }

        function handleMouseViewOut() {
            TweenMax.to(cursorFollow, 0.3, {
                scale: 0.8,
                backgroundColor: '#F7F7F7',
                mixBlendMode: 'difference',
                border: '1px solid #F7F7F7',
            })

            TweenMax.set(cursorView, { opacity: 0 })
        }
        item.addEventListener('mouseenter', handleMouseViewIn);
        item.addEventListener('mouseleave', handleMouseViewOut);
    })

    hideCursors.forEach((item) => {
        function handleHideCursors(e) {
            if (e.type === 'mouseenter') {
                TweenMax.to(cursorFollow, 0.3, {
                    opacity: 0,
                })
            } else if (e.type === 'mouseleave') {
                TweenMax.to(cursorFollow, 0.3, {
                    opacity: 1,
                })
            }
        }
        item.addEventListener('mouseenter', handleHideCursors);
        item.addEventListener('mouseleave', handleHideCursors);
    })
    menuLinks.forEach((item) => {

        function handleMenuLink(e) {
            if (e.type === 'mouseenter') {
                TweenMax.to(cursorFollow, 0.3, {
                    scale: 2,
                })
            } else if (e.type === 'mouseleave') {
                TweenMax.to(cursorFollow, 0.3, {
                    scale: 0.8,
                })
            }
        }

        item.addEventListener('mouseenter', handleMenuLink)
        item.addEventListener('mouseleave', handleMenuLink)
    })
    window.addEventListener('mousemove', mouseMove)
}