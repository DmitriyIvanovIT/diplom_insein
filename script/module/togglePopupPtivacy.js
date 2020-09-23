const togglePopupPtivacy = () => {
    const popupPrivacy = document.querySelector('.popup-privacy');

    const openPopup = () => {
            popupPrivacy.style.visibility = 'visible';
        },
        closePopup = () => {
            popupPrivacy.style.visibility = '';
        }

    document.body.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('link-privacy')) {
            openPopup();
        }

        if (target === popupPrivacy ||
            target.closest('.close.mobile-hide')) {
            closePopup();
        }
    })
}

export default togglePopupPtivacy;