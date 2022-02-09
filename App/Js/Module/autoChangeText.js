export default function createdAutoChangeText() {

    const words = ['fastest', 'seo'];
    let counter = 0;
    const el = document.querySelector('.works-words');
    const handleFunc = setInterval(handleChangeText, 1000);

    function handleChangeText() {
        if (el) {
            el.innerHTML = words[counter];
            counter++
            if (counter >= words.length) {
                counter = 0
            }
        }
    }
}