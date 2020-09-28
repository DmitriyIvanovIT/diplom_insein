const carouselSlider = (wrap, nextArrow, prevArrow) => {

    const slider = document.querySelector(wrap),
        slides = document.querySelector(wrap).children,
        nextButton = document.querySelector(nextArrow),
        prevButton = document.querySelector(prevArrow);



    let count = 0,
        maxCount,
        slideWidth = slides[0].offsetWidth;

    const changeSlide = () => {
        slider.style.transform = `translateX(-${count * slideWidth}px)`;
    };

    changeSlide();

    if (wrap === '.partners-slider' && window.screen.width > 575) {
        maxCount = slides.length - 3;
    } else {
        maxCount = slides.length - 1;
    }

    nextButton.addEventListener('click', () => {
        count++;
        if (count > maxCount) {
            count = 0;
        }

        changeSlide();
    });

    prevButton.addEventListener('click', () => {
        count--;
        if (count < 0) {
            count = maxCount;
        }

        changeSlide();
    });
};

export default carouselSlider;