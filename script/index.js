import openPhone from './module/openPhone.js';
import toggleMenu from './module/toggleMenu.js';
import togglePopupRepair from './module/togglePopupRepair.js';
import validPhone from './module/validPhone.js';


openPhone();
toggleMenu();
window.addEventListener('resize', toggleMenu);
togglePopupRepair();
validPhone('#feedback-input1');