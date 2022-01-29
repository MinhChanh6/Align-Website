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

        TweenMax.to(cursor, 0.3, {
            x: clientX,
            y: clientY,
        })

        TweenMax.to(cursorFollow, 0.75, {
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
            TweenMax.to([cursor, cursorFollow], 0.3, {
                scale: 0,
            })

            TweenMax.to(arrow, 0.3, { scale: 0.7 })
        }
        function handleMouseTitleOut() {
            TweenMax.to([cursor, cursorFollow], 0.3, {
                scale: 1,
            })

            TweenMax.to(arrow, 0.3, { scale: 1 })
        }

        item.addEventListener('mouseenter', handleMouseTitleIn)
        item.addEventListener('mouseleave', handleMouseTitleOut)
    })

    categoriesItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function () {
            TweenMax.to(cursor, 0.3, {
                opacity: 0,
            })
            TweenMax.to(cursorFollow, 0.3, {
                scale: 3,
            })
            categoriesImg.style.zIndex = "99";
            if (index === 0) {
                categoriesImg.style.backgroundImage = "url('Images/Website.png')";
            } else if (index === 1) {
                categoriesImg.style.backgroundImage = "url('Images/Branding.png')";
            }
            else if (index === 2) {
                categoriesImg.style.backgroundImage = "url('Images/SEO.png')";
            }
        })

        item.addEventListener('mouseleave', function () {
            TweenMax.to(cursor, 0.3, {
                opacity: 1,
            })
            TweenMax.to(cursorFollow, 0.3, {
                scale: 1,
            })
            categoriesImg.style.zIndex = "-1";
            categoriesImg.style.backgroundImage = "url()";
        })
    })

    projectItems.forEach(item => {
        function handleMouseViewIn() {
            TweenMax.to(cursor, 0.3, {
                opacity: 0,
            })
            TweenMax.to(cursorFollow, 0.3, {
                backgroundColor: 'black',
                mixBlendMode: 'unset',
                border: '1px solid black',
                scale: 2.5,
            })

            TweenMax.set(cursorView, { opacity: 1 })
        }

        function handleMouseViewOut() {
            TweenMax.to(cursor, 0.3, {
                opacity: 1,
            })
            TweenMax.to(cursorFollow, 0.3, {
                scale: 1,
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
        function handleHideMouseIn() {
            TweenMax.to([cursor, cursorFollow], 0.3, {
                opacity: 0,
            })
        }
        function handleHideMouseOut() {
            TweenMax.to([cursor, cursorFollow], 0.3, {
                opacity: 1,
            })
        }
        item.addEventListener('mouseenter', handleHideMouseIn);
        item.addEventListener('mouseleave', handleHideMouseOut);
    })

    menuLinks.forEach((item) => {

        function handleMenuLinkIn() {
            TweenMax.to(cursor, 0.3, {
                opacity: 0,
            })
            TweenMax.to(cursorFollow, 0.3, {
                scale: 2,
            })
        }
        function handleMenuLinkOut() {
            TweenMax.to(cursor, 0.3, {
                opacity: 1,
            })
            TweenMax.to(cursorFollow, 0.3, {
                scale: 1,
            })
        }

        item.addEventListener('mouseenter', handleMenuLinkIn)
        item.addEventListener('mouseleave', handleMenuLinkOut)
    })
    window.addEventListener('mousemove', mouseMove)
}