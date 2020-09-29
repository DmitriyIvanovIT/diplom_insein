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
import carouselSlider from './module/carouselSlider';
import popupDesigns from './module/popupDesigns';
import 'element-remove-polyfill';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
import 'formdata-polyfill';
import 'fetch-polyfill';
import 'parent-node-prepend-polyfill';

const Promise = require('es6-promise').Promise;

elementClosest(window);

openPhone();
toggleMenu();

togglePopupRepair();
validPhone('[name="phone"]');
sendForm();
togglePopupPtivacy();
showLaterFormula();
sliderFormula();
repairSlider();
documents(carouselSlider);
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
designs();
popupDesigns();

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
    documents(carouselSlider);
    designs(); 
    popupDesigns();
});