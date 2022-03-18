import handleCheckBox from './Module/checkbox.js';
import handleTabs from './Module/tabs.js';
import createLoading from './Module/loading.js';
import handleMenu from './Module/menu.js';
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
    new Canvas().init();
});