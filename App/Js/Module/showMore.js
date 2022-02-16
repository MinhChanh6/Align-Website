import { scroller } from "./locomotiveSroll.js";

export default function createShowMore() {
    const showMoreButton = document.querySelectorAll('.show-more');
    const insightContents = [...document.querySelectorAll('.insightsPage-content')];
    const insightsPage = document.querySelector('.insightsPage');
    let currentItems = 3;


    insightContents.forEach((item, index) => {

        const button = item.querySelector('.show-more');
        const elementList = [...item.querySelectorAll('.insightsPage-item')];

        if (elementList.length <= currentItems) {
            button.style.display = 'none';
        }

        button.addEventListener('click', (e) => {

            for (let i = currentItems; i < currentItems + 3; i++) {
                if (elementList[i]) {
                    elementList[i].style.display = 'block';
                }
            }
            currentItems += 3;

            if (!elementList) return;

            // Load more button will be hidden after list fully loaded
            if (currentItems === elementList.length) {
                button.style.display = 'none';
            }

            scroller.update();
        })
    })
}
