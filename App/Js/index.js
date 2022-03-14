
import handleCheckBox from './Module/checkbox.js';
import handleTabs from './Module/tabs.js';
import createLoading from './Module/loading.js';
import handleMenu from './Module/menu.js';
import createCanvas from './Module/canvas.js';
import customizeCursor from './Module/cursor.js';
import createdButton from './Module/button.js';
import createdScrollTrigger from './Module/scrollTrigger.js';
import createdMenuIneLine from './Module/menuInline.js';
import createTimeZone from './Module/timeZone.js';
import createdActiveForm from './Module/form.js';
import createdAnimation from './Module/animations.js';
import createdAutoChangeText from './Module/autoChangeText.js';
import createShowMore from './Module/showMore.js';
import createdProcessBar from './Module/processBar.js';
import createLightGallarey from './Module/lightGallarey.js';
import createSwiper from './Module/swiper.js';
import Canvas from './Module/canvas.js';
import TextScramble from './Module/scrambleText.js';
import playVideo from './Module/playVideo.js';
import { scroller } from './Module/locomotiveSroll.js';
import SmtpMail from './Module/smtpMail.js';
window.addEventListener('DOMContentLoaded', () => {

    gsap.to("body", 0, { css: { visibility: "visible" } });
    gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
    });

    createShowMore();
    createdAutoChangeText();
    createLoading();
    handleMenu();
    customizeCursor();
    createdButton();
    createdScrollTrigger();
    createdMenuIneLine();
    createTimeZone();
    createdActiveForm();
    handleTabs();
    handleCheckBox();
    createdAnimation();
    createdProcessBar();
    Splitting({ by: 'lines' });
    createLightGallarey();
    createSwiper();
    SmtpMail();
    const phrasesSub = [
        'Creative',
        'Design',
        'Web &'
    ]

    const phrasesSubClone = [
        'Agency',
        'with strategy',
        'Brand Identity',
    ]

    const subEl = document.querySelector('.canvas1-subtitle')
    const subElClone = document.querySelector('.canvas1-subtitle__clone')
    const subText = new TextScramble(subEl)
    const subClone = new TextScramble(subElClone)

    if (subEl || subElClone) {
        let counterSub = 0
        const animeSub = () => {
            subText.setText(phrasesSub[counterSub]).then(() => {
                setTimeout(animeSub, 3500)
            })
            counterSub = (counterSub + 1) % phrasesSub.length
        }

        let counterSubClone = 0
        const animeSubClone = () => {
            subClone.setText(phrasesSubClone[counterSubClone]).then(() => {
                setTimeout(animeSubClone, 3500)
            })
            counterSubClone = (counterSubClone + 1) % phrasesSubClone.length
        }

        setTimeout(() => {
            animeSub()
            animeSubClone()
        }, 5000)

        new Canvas().init();
    }

});