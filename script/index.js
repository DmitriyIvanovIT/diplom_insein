import openPhone from './module/openPhone.js';
import toggleMenu from './module/toggleMenu.js';
import togglePopupRepair from './module/togglePopupRepair.js';
import validPhone from './module/validPhone.js';
import sendForm from './module/sendForm.js';
import togglePopupPtivacy from './module/togglePopupPtivacy.js';
import showLaterFormula from './module/showLaterFormula.js';
import sliderFormula from './module/sliderFormula.js';
import repairSlider from './module/repairSlider.js';
import documents from './module/documents.js';
import showLaterProblems from './module/showLaterProblems.js';
import sliderProblems from './module/sliderProblems.js';
import designs from './module/designs.js';
import consultantion from './module/consultantion.js';
import renderPopup from './module/renderPopup.js';
import addFullPriceList from './module/fullPriceList.js';
import accordion from './module/acord.js';
import sliderPortfolio from './module/sliderPortfolio.js';

openPhone();
toggleMenu();

togglePopupRepair();
validPhone('[name="phone"]');
sendForm();
togglePopupPtivacy();
showLaterFormula();
sliderFormula();
repairSlider();
documents();
showLaterProblems();
sliderProblems();
renderPopup();
consultantion();
addFullPriceList();
accordion();
sliderPortfolio();

window.addEventListener('resize', () => {
    toggleMenu();
    repairSlider();
    designs();
    sliderPortfolio();
});