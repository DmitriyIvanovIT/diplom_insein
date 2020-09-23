import openPhone from './module/openPhone.js';
import toggleMenu from './module/toggleMenu.js';
import togglePopupRepair from './module/togglePopupRepair.js';


openPhone();
toggleMenu();
window.addEventListener('resize', toggleMenu);
togglePopupRepair();