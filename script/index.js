'use stict';

import openPhone from './module/openPhone';
import toggleMenu from './module/toggleMenu';
import togglePopupRepair from './module/togglePopupRepair';
import validPhone from './module/validPhone';
import sendForm from './module/sendForm';
import togglePopupPtivacy from './module/togglePopupPtivacy';
import showLaterFormula from './module/showLaterFormula';
import sliderFormula from './module/sliderFormula';
import repairSlider from './module/repairSlider';
import documents from './module/documents';
import showLaterProblems from './module/showLaterProblems';
import sliderProblems from './module/sliderProblems';
import designs from './module/designs';
import consultantion from './module/consultantion';
import renderPopup from './module/renderPopup';
import addFullPriceList from './module/fullPriceList';
import accordion from './module/acord';
import sliderPortfolio from './module/sliderPortfolio';
import reviews from './module/reviews';
import scheme from './module/scheme';
import partners from './module/partners';

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
reviews();
scheme();
partners();

window.addEventListener('resize', () => {
    toggleMenu();
    repairSlider();
    designs();
    sliderPortfolio();
    addFullPriceList();
    accordion();
    reviews();
    scheme();
    partners();
});