import openPhone from './module/openPhone.js';
import toggleMenu from './module/toggleMenu.js';
import togglePopupRepair from './module/togglePopupRepair.js';
import validPhone from './module/validPhone.js';
import sendForm from './module/sendForm.js';
import togglePopupPtivacy from './module/togglePopupPtivacy.js';

openPhone();
toggleMenu();
window.addEventListener('resize', toggleMenu);
togglePopupRepair();
validPhone('[name="phone"]');
sendForm();
togglePopupPtivacy();