const openPhone = () => {
    const headerContactsPhoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord'),
    headerContactsPhoneNumber = document.querySelector('.header-contacts__phone-number'),
    headerContactsArrow = document.querySelector('.header-contacts__arrow');

    const togglePhoneClass = () => {
        headerContactsPhoneNumberAccord.classList.toggle('active');
        headerContactsPhoneNumber.classList.toggle('active');
        headerContactsArrow.classList.toggle('active');
    };

    headerContactsArrow.addEventListener('click', togglePhoneClass);
}

export default openPhone;