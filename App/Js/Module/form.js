import { scroller } from "./locomotiveSroll.js";
export default function createdActiveForm() {

    // Footer Form //
    const footerForm = document.querySelector('.footer-form');
    const footerSub = document.querySelector('.footer-sub');
    footerSub.addEventListener('click', handleOpenForm)

    function handleOpenForm() {
        footerForm.classList.toggle('active')
    }


    // Carreer Form //
    const applyButton = document.querySelectorAll('.carreer-button');
    const popupModal = document.querySelector('.popup')
    const contactClose = document.querySelector('.contact-close');
    const body = document.querySelector('body')
    if (applyButton) {
        applyButton.forEach((item) => {
            item.addEventListener('click', () => {
                // scroller.stop();
                popupModal.classList.add('active')
            })
        })
    }
    if (contactClose) {
        contactClose.addEventListener('click', () => {
            scroller.start();
            popupModal.classList.remove('active')
        })
    }
}