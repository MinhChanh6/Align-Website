import handleMenu from './Module/menu.js';
import createCanvas from './Module/canvas.js';
import customizeCursor from './Module/cursor.js';
import createdButton from './Module/button.js';
import createdScrollTrigger from './Module/scrollTrigger.js';
window.addEventListener('DOMContentLoaded', () => {
    handleMenu();
    createCanvas();
    customizeCursor();
    createdButton();
    createdScrollTrigger();
});