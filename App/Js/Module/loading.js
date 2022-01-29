export default function createLoading() {

    const percent = document.getElementById('percentage');
    const loadingTimeline = gsap.timeline({ pause: true })

    loadingTimeline.from(".loading-percent", 0.75, {
        y: 40,
        opacity: 0,
        ease: "Slowmo.easeOut",
    })
    loadingTimeline.to(".loading", 1, {
        y: '-100%',
        delay: 2.4
    })


    let id = 1;
    let width = 1;
    function loading() {
        id = setInterval(frame, 25)
    }

    function frame() {
        if (width >= 100) {
            clearInterval(id)
            loadingTimeline.play();
        } else {
            width++;
            percent.innerHTML = width + '&rdquo;';
        }
    }

    window.addEventListener('load', loading)
}