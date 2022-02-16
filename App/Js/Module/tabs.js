import { scroller } from "./locomotiveSroll.js";
export default function handleTabs() {
    const tags = document.querySelectorAll('[data-tab-target]');
    const tagsContent = document.querySelectorAll('[data-tab-content]')
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const target = document.querySelector(tag.dataset.tabTarget)

            if (!target) return;

            tagsContent.forEach(tagContent => {
                tagContent.classList.remove('active')
            })
            tags.forEach(tag => {
                tag.classList.remove('active')
            })
            tag.classList.add('active')
            target.classList.add('active');

            scroller.update();
        })
    })
}