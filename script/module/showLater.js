const showLater = () => {
    const formulaItemPopup = document.querySelectorAll('.formula-item-popup');

    const clearStyle = () => {
        formulaItemPopup.forEach(item => {
            item.closest('.formula-item').classList.remove('primary');
            item.style.visibility = '';
            item.style.opacity = '';
            item.classList.remove('rotate');
            item.style.transform = '';
        });
    }

    document.body.addEventListener('mousemove', event => {
        const target = event.target;

        if (target.closest('.formula-item__icon')) {
            clearStyle();
            const block = target.closest('.formula-item'),
            elem = target.closest('.formula-item__icon'),
            later = elem.querySelector('.formula-item-popup');
            later.style.visibility = 'visible';
            later.style.opacity = '1';
            if (elem.getBoundingClientRect().top < later.offsetHeight) {
                later.style.transform = `translate3d(0, ${later.offsetHeight + block.offsetHeight + 10}px,10px)`;
                later.classList.add('rotate');
                block.classList.add('primary');
            }
        } else {
            clearStyle();
        }
    });
};

export default showLater;