const reviews = () => {
    const reviewsSliderSlide = document.querySelectorAll('.reviews-slider__slide');

    let count = 0,
    maxCount = reviewsSliderSlide.length - 1,
    slideHeight = reviewsSliderSlide[0].offsetHeight;

    const carousel = () => {
        reviewsSliderSlide.forEach(slide => {
            slide.style.transform = `translateY(-${count * slideHeight}px)`;
        });
    };

    document.body.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('#reviews-arrow_left')) {
            count--;
            if (count < 0) {
                count = maxCount;
            }
            carousel();
        }

        if (target.closest('#reviews-arrow_right')) {
            count++;
            if (count > maxCount) {
                count = 0;
            }
            carousel();
        }
    });
};

export default reviews;