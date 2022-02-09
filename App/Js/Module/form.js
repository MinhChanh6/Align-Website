export default function createdActiveForm() {
    const footerForm = document.querySelector('.footer-form');
    const footerSub = document.querySelector('.footer-sub');
    footerSub.addEventListener('click', handleOpenForm)

    function handleOpenForm() {
        footerForm.classList.toggle('active')
    }
}