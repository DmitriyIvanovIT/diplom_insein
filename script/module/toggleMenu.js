const toggleMenu = () => {
   const menu = document.querySelector('.menu'),
      popupMenu = document.querySelector('.popup-menu'),
      popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');

   if (window.screen.width < 576) {
      popupDialogMenu.style.transform = 'translate3d(0,-874px,0)';
   } else {
      popupDialogMenu.style.transform = '';
   }

   const openMenu = () => {
         popupMenu.style.visibility = 'visible';
         popupDialogMenu.style.transform = 'translate3d(0,0,0)';

      },
      closeMenu = () => {
         popupMenu.style.visibility = '';
         if (window.screen.width < 576) {
            popupDialogMenu.style.transform = 'translate3d(0,-874px,0)';
         } else {
            popupDialogMenu.style.transform = '';
         }
      };

   menu.addEventListener('click', openMenu);
   popupMenu.addEventListener('click', event => {
      const target = event.target;
      console.log(target);

      if (target === popupMenu ||
         target.closest('.close-menu')) {
            closeMenu();
         }
   });
};

export default toggleMenu;