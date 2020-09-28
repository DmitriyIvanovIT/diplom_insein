const addFullPriceList = () => {
    const priceList = document.querySelector('.popup-repair-types'),
        menuLink = document.querySelector('.link-list-menu'),
        repairLink = document.querySelector('.link-list-repair'),
        popupMenu = document.querySelector('.popup-menu'),
        popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu'),
        width = document.documentElement.clientWidth;


    const openPopup = () => {
        priceList.style.visibility = 'visible';
    };
    const closeDialogMenu = () => {
        popupMenu.style.visibility = 'hidden';

        if (width <= 576) {
            popupDialogMenu.style.top = '0px';
        } else {
            popupDialogMenu.style.right = '0px';
        }
    };
    const addCloseAbility = () => {
        priceList.addEventListener('click', (event) => {
            const target = event.target;
            if (target.matches('.close') || !target.closest('.popup-dialog-repair-types')) {
                priceList.style.visibility = 'hidden';
            }
        });
    };

    document.body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.link-list-menu')) {
            openPopup();
            closeDialogMenu();
            addCloseAbility();
        } else if (target.closest('.link-list-repair')) {
            openPopup();
            addCloseAbility();
        }
    });

}



export default addFullPriceList;