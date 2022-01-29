export default function createdAnimation() {
    const categoriesItems = document.querySelectorAll('.categories-item');

    const introTimeline = gsap.timeline({ delay: 1.85 });
    introTimeline.from([categoriesItems], 0.75, {
        opacity: 0,
        y: 40,
        stagger: .15,
        ease: 'Slowmo.easeOut'
    }, "=1.85")
    introTimeline.from('#canvas1', 1.5, {
        opacity: 0,
        ease: 'Slowmo.easeOut'
    }, "=-0.55")
}