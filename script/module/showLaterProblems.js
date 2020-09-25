const showLaterFormula = () => {
    const problemsItemPopup = document.querySelectorAll('.problems-item-popup');

    const clearStyle = () => {
        problemsItemPopup.forEach(item => {
            item.classList.remove('rotate');
            item.style.transform = '';
        });
    }

    document.body.addEventListener('mousemove', event => {
        const target = event.target;

        if (target.closest('.problems-item__icon')) {
            clearStyle();
            const block = target.closest('.problems-item'),
            elem = target.closest('.problems-item__icon'),
            later = elem.querySelector('.problems-item-popup');
            if(later.classList.contains('problems-item-popup-1')) {
                if (elem.getBoundingClientRect().bottom > later.offsetHeight) {
                    later.classList.add('rotate');
                    later.style.transform = `translateY(-${later.offsetHeight + 150}px)`;
                }
            } else {
                if (elem.getBoundingClientRect().top < later.offsetHeight) {
                    later.classList.add('rotate');
                    later.style.transform = `translateY(${later.offsetHeight + 150}px)`;
                }
            }
        } else {
            clearStyle();
        }
    });
};

export default showLaterFormula;