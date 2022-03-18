import TextScramble from './scrambleText.js';
export default function createdAutoChangeText() {

    const words = ['fastest', 'seo'];

    const el = document.querySelector('.works-words');
    const subText = new TextScramble(el)

    if (el) {
        let counterSub = 0
        const animeSub = () => {
            subText.setText(words[counterSub]).then(() => {
                setTimeout(animeSub, 1000)
            })
            counterSub = (counterSub + 1) % words.length
        }

        setTimeout(() => {
            animeSub()
        }, 5000)
    }
}