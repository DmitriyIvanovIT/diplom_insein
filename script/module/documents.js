const documents = () => {
    const transparencyItem = document.querySelectorAll('.transparency-item'),
        transparencySlider = document.querySelector('.transparency-slider.row');

    const desctopVersion = () => {
            transparencySlider.style.transform = '';
            tabs();
        },
        mobailVersion = () => {
            let count = 0,
                maxCount = transparencyItem.length - 1,
                widthSlide = transparencyItem[0].offsetWidth;

            const carousel = () => {
                transparencySlider.style.transform = `translateX(calc(-${count * widthSlide}px + 1%))`;
            }

            carousel();

            document.body.addEventListener('click', event => {
                const target = event.target;

                if (target.closest('#transparency-arrow_right')) {
                    count++;
                    if (count > maxCount) {
                        count = 0;
                    }
                } else if (target.closest('#transparency-arrow_left')) {
                    count--;
                    if (count < 0) {
                        count = maxCount;
                    }
                }

                carousel();
            });

            tabs();
        },
        tabs = () => {
            const popupTransparency = document.querySelector('.popup-transparency'),
                popupTransparencySlider = document.querySelectorAll('.popup-transparency-slider__slide'),
                transparencyPopupCounter = document.getElementById('transparency-popup-counter'),
                sliderCurrent = transparencyPopupCounter.querySelector('.slider-counter-content__current'),
                sliderTotal = transparencyPopupCounter.querySelector('.slider-counter-content__total');

            let maxCount = popupTransparencySlider.length - 1,
                slideHeight = popupTransparencySlider[0].offsetHeight;

            sliderTotal.textContent = popupTransparencySlider.length;

            const showSlide = index => {
                let count = index;
                console.log(count);

                const changeSlide = () => {
                    popupTransparencySlider.forEach(slide => slide.style.transform = `translateY(-${count * slideHeight}px)`);
                    sliderCurrent.textContent = count + 1;
                };

                changeSlide();

                document.body.addEventListener('click', event => {
                    const target = event.target;
                    if (target.closest('.popup-arrow_transparency_left')) {
                        count--;
                        if (count < 0) {
                            count = maxCount;
                        }
                    } else if (target.closest('.popup-arrow_transparency_right')) {
                        count++;
                        if (count > maxCount) {
                            count = 0;
                        }
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

    if (window.screen.width > 1090) {
        desctopVersion();
    } else {
        mobailVersion();
    }

};

export default documents;