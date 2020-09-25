import openPhone from './module/openPhone.js';
import toggleMenu from './module/toggleMenu.js';
import togglePopupRepair from './module/togglePopupRepair.js';
import validPhone from './module/validPhone.js';
import sendForm from './module/sendForm.js';
import togglePopupPtivacy from './module/togglePopupPtivacy.js';
import showLater from './module/showLater.js';
import sliderFormula from './module/sliderFormula.js';
import repairSlider from './module/repairSlider.js';
import sliderPortfolio from './module/sliderPortfolio.js';

openPhone();
toggleMenu();

togglePopupRepair();
validPhone('[name="phone"]');
sendForm();
togglePopupPtivacy();
showLater();
sliderFormula();
repairSlider();
sliderPortfolio();

window.addEventListener('resize', () => {
    toggleMenu();
    repairSlider();
    sliderPortfolio();
});