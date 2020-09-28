const consultantion = () => {
    const buttonWide = document.querySelectorAll('.button_wide');
    const popupConsultation = document.querySelector('.popup-consultation');
    buttonWide.forEach(item => {
        item.addEventListener('click', () => {
            popupConsultation.style.visibility = 'visible';
        });
    });

    popupConsultation.addEventListener('click', event => {
        if (!event.target.closest('.feedback-wrap') || event.target.closest('.close-consultation')) {
            popupConsultation.style.visibility = 'hidden';
        }
    });
};

export default consultantion;