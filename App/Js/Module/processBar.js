import { scroller } from "./locomotiveSroll.js";


export default function createdProcessBar() {

    const processBar = document.getElementById('process-bar');
    const scrollElement = document.querySelector('.wrapper');
    if (!processBar) return;
    const animatProcessBar = () => {
        let scrollDistance = scrollElement.getBoundingClientRect().top;
        let processWidth = (scrollDistance / (scrollElement.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;

        let value = -Math.floor(processWidth);

        processBar.style.width = value + "%";

        if (value < 0) {
            processBar.style.width = '0%'
        }

    }

    scroller.on("scroll", animatProcessBar);
}