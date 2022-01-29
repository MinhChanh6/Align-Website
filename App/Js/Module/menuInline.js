export default function createdMenuIneLine() {
    const cursor = document.querySelector('.cursor');
    const cursorFollow = document.querySelector('.cursor-follow');

    const menuList = document.querySelectorAll('.services-quote > span')

    menuList.forEach((item) => {

        function handleMenuInline() {
            const itemID = item.getAttribute('data-content')
            const servicesContent = document.querySelectorAll('.services-content')
            const symbol = document.querySelector('.services-symbol')

            symbol.classList.add('active')
            servicesContent.forEach((el) => {
                el.classList.remove('active')
            })
            const servicesContentID = document.querySelector(`.services-content[id="${itemID}"]`);
            servicesContentID.classList.add('active')

        }

        item.addEventListener('mouseover', handleMenuInline)
    })
}