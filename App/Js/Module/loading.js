export default function createLoading() {

    const loadingBar = document.getElementById('loading')
    if (loadingBar) {


        let id = 1;
        let width = 1;
        function loading() {
            id = setInterval(frame, 5)
        }

        function frame() {
            if (width >= 100) {
                clearInterval(id)
                loadingBar.style.display = 'none';
            } else {
                width++;
                loadingBar.style.width = width + "%";
            }
        }

        window.addEventListener('load', loading)
    }


}