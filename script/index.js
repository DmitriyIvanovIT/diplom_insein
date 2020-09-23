import openPhone from './module/openPhone.js';
import toggleMenu from './module/toggleMenu.js';


openPhone();
toggleMenu();
window.addEventListener('resize', toggleMenu);