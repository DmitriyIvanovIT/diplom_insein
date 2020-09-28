const documents = (carousel) => {
    const transparencyItem = document.querySelectorAll('.transparency-item'),
    transparencySlider = document.querySelector('.transparency-slider.row');

    const tabs = () => {
            const popupTransparency = document.querySelector('.popup-transparency'),
                popupTransparencySlider = document.querySelectorAll('.popup-transparency-slider__slide'),
                transparencyPopupCounter = document.getElementById('transparency-popup-counter'),
                sliderCurrent = transparencyPopupCounter.querySelector('.slider-counter-content__current'),
                sliderTotal = transparencyPopupCounter.querySelector('.slider-counter-content__total'),
                prevButton = document.querySelector('.popup-arrow_transparency_left'),
                nextButton = document.querySelector('.popup-arrow_transparency_right');

            let maxCount = popupTransparencySlider.length - 1,
                slideHeight = popupTransparencySlider[0].offsetHeight;

            sliderTotal.textContent = popupTransparencySlider.length;

            const showSlide = index => {
                let count = index;
                popupTransparencySlider.forEach(slide => slide.style.transform = '');

                const changeSlide = () => {
                    popupTransparencySlider.forEach(slide => slide.style.transform = `translateY(-${count * slideHeight}px)`);
                    sliderCurrent.textContent = count + 1;
                };

                changeSlide();

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

            document.body.addEventListener('click', event => {
                let target = event.target;

                if (target.closest('.transparency-item')) {
                    target = target.closest('.transparency-item');
                    popupTransparency.style.visibility = 'visible';

                    transparencyItem.forEach((item, i) => {
                        if (item === target) {
                            showSlide(i);
                        }
                    });
                }

                if (target === popupTransparency ||
                    target.closest('.close')) {
                    popupTransparency.style.visibility = '';
                }
            });
        };

    if (window.screen.width > 1091) {
        transparencySlider.style.transform = '';
    }

    tabs();

    carousel('.transparency-slider', '#transparency-arrow_right', '#transparency-arrow_left');

    window.addEventListener('resize', () => {
        carousel('.transparency-slider', '#transparency-arrow_right', '#transparency-arrow_left');
    });

};

export default documents;