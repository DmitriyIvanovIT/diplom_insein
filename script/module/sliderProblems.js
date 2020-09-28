const sliderProblems = () => {
    const problemsSlider = document.querySelector('.problems-slider'),
    problemsItem = document.querySelectorAll('.problems-item.problems-slider__slide');
    
    let count = 0,
    maxCount = problemsItem.length - 1,
    slideHeight = problemsItem[1].offsetHeight;

    const changeSlide = () => {
        problemsItem.forEach((item, i) => {
            if (i === count) {
                item.classList.add('active-item');
            } else {
                item.classList.remove('active-item');
            }
            
        });
        problemsSlider.style.transform = `translateY(-${count * slideHeight}px)`;
    };

    changeSlide();

    document.body.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('#problems-arrow_left')) {
            count--;
            if (count < 0) {
                count = maxCount;
            }
        }

        if (target.closest('#problems-arrow_right')) {
            count++;
            if (count > maxCount) {
                count = 0;
            }
        }
        changeSlide();
    });
};

export default sliderProblems;