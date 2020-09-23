const toggleMenu = () => {
   const menu = document.querySelector('.menu'),
      popupMenu = document.querySelector('.popup-menu'),
      popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu'),
      popupMenuNavItem = popupMenu.querySelectorAll('.popup-menu-nav__item');

   const openMenu = () => {
         popupMenu.style.visibility = 'visible';
         popupDialogMenu.style.transform = 'translate3d(0,0,0)';

      },
      closeMenu = () => {
         popupMenu.style.visibility = '';
         popupDialogMenu.style.transform = '';
      }, scrolling = (event, elem) => {
         event.preventDefault();
            const w = window.pageYOffset,
                hash = elem.href.replace(/[^#]*(.*)/, '$1');

            const t = document.querySelector(hash).getBoundingClientRect().top;

            let start = null;

            const step = time => {
                if (start === null) {
                    start = time;
                }

                const progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / 0.3, w + t) : Math.min(w + progress / 0.3, w + t));
                window.scrollTo(0, r);
                if (r !== w + t) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            };

            requestAnimationFrame(step);
      };

   menu.addEventListener('click', openMenu);
   popupMenu.addEventListener('click', event => {
      const target = event.target;

      if (target === popupMenu ||
         target.closest('.close-menu')) {
            closeMenu();
         }
   });

   document.body.addEventListener('click', event => {
      let target = event.target;

      if (target.closest('.popup-menu-nav__item')) {
         target = target.closest('.popup-menu-nav__item');
         const itemLink = target.querySelector('.menu-link');
         popupMenuNavItem.forEach(item => item.classList.remove('active_menu'));
         target.classList.add('active_menu');
         closeMenu();
         scrolling(event, itemLink);
      } else if (target.closest('.button-footer')) {
         target = target.closest('.button-footer>a');
         scrolling(event, target);
         popupMenuNavItem.forEach(item => item.classList.remove('active_menu'));
         popupMenuNavItem[0].classList.add('active_menu');
      }
   })
};

export default toggleMenu;