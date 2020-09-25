import openPhone from './module/openPhone.js';
import toggleMenu from './module/toggleMenu.js';
import togglePopupRepair from './module/togglePopupRepair.js';
import validPhone from './module/validPhone.js';
import sendForm from './module/sendForm.js';
import togglePopupPtivacy from './module/togglePopupPtivacy.js';
import showLaterFormula from './module/showLaterFormula.js';
import sliderFormula from './module/sliderFormula.js';
import repairSlider from './module/repairSlider.js';
import sliderPortfolio from './module/sliderPortfolio.js';
import documents from './module/documents.js';
import showLaterProblems from './module/showLaterProblems.js';
import sliderProblems from './module/sliderProblems.js';

openPhone();
toggleMenu();

togglePopupRepair();
validPhone('[name="phone"]');
sendForm();
togglePopupPtivacy();
showLaterFormula();
sliderFormula();
repairSlider();
sliderPortfolio();
documents();
showLaterProblems();
sliderProblems();

window.addEventListener('resize', () => {
    toggleMenu();
    repairSlider();
    sliderPortfolio();
});