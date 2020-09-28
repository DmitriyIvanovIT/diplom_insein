const partners = () => {
    const partnersSlider = document.querySelector('.partners-slider'),
    partnersSliderSlide = document.querySelectorAll('.partners-slider__slide');

    let count = 0,
    maxCount = window.screen.width > 575 ? (partnersSliderSlide.length - 3) : (partnersSliderSlide.length - 1),
    slideWidth = partnersSliderSlide[0].offsetWidth;

    partnersSlider.style.transform = '';

    document.body.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('#partners-arrow_left')) {
            count--;
            if (count < 0) {
                count = maxCount;
            }

            partnersSlider.style.transform = `translateX(-${count * slideWidth}px)`;
        }

        if (target.closest('#partners-arrow_right')) {
            count++;
            if (count > maxCount) {
                count = 0;
            }

            partnersSlider.style.transform = `translateX(-${count * slideWidth}px)`;
        }
    });

};

export default partners;