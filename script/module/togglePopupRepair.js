const togglePopupRepair = () => {
    const popupRepairTypes = document.querySelector('.popup-repair-types');

    const openPopup = () => {
        popupRepairTypes.style.visibility = 'visible';

    }, closePopup = () => {
        popupRepairTypes.style.visibility = '';
    };

    document.body.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.link-list.link-list-menu.mobile-hide') ||
        target.closest('.link-list.link-list-repair.mobile-hide.tablet-hide')) {
            openPopup();
        } else if (target === popupRepairTypes ||
            target.closest('.close.mobile-hide')) {
                closePopup();
            }
    });
};

export default togglePopupRepair;