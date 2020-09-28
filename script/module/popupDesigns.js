const popupDesigns = (index = 0) => {
    const popupDesign = document.querySelector('.popup-design'),
    popupDesignSlider = document.querySelectorAll('.popup-design-slider>div'),
    navListPopupDesignsItem = document.querySelectorAll('.designs-nav__item_popup'),
    popupDesignText = document.querySelectorAll('.popup-design-text'),
    popupDesignsCounter = document.getElementById('popup-designs-counter'),
    sliderCurrent = popupDesignsCounter.querySelector('.slider-counter-content__current'),
    sliderTotall = popupDesignsCounter.querySelector('.slider-counter-content__total'),
    prevButton = document.getElementById('popup_design_left'),
    nextButton = document.getElementById('popup_design_right'),
    navListPopupDesigns = document.getElementById('nav-list-popup-designs');

    const activeSlider = indexSlider => {
        popupDesignSlider.forEach((item, i) => {
            if (i === indexSlider) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });

        const slider = popupDesignSlider[indexSlider],
        slide = slider.querySelectorAll('.popup-design-slider__style-slide');

        slider.style.transform = '';
        let count = 0,
        maxCount = slide.length - 1,
        slideHeight = slide[0].offsetHeight;

        sliderCurrent.textContent = count + 1;
        sliderTotall.textContent =  slide.length;
        
        nextButton.addEventListener('click', () => {
            count++;
            if (count > maxCount) {
                count = 0;
            }
            sliderCurrent.textContent = count + 1;
            slider.style.transform = `translateY(-${count * slideHeight}px)`;
        });

        prevButton.addEventListener('click', () => {
            count--;
            if (count < 0) {
                count = maxCount;
            }
            sliderCurrent.textContent = count + 1;
            slider.style.transform = `translateY(-${count * slideHeight}px)`;
        });
    },
    sliderTabs = (indexSlider) => {
        let count = indexSlider,
        maxCount = navListPopupDesignsItem.length - 1;

        const changeTab = () => {
            let marginSlider = 0;

            navListPopupDesignsItem.forEach((item, i) => {
                if (i < count) {
                    marginSlider += item.offsetWidth;
                }
            });

            navListPopupDesigns.style.transform = `translateX(-${marginSlider}px)`;
        };

        document.body.addEventListener('click', event => {
            const target = event.target;

            if (target.closest('#nav-arrow-popup-designs_left')) {
                count--;
                if (count < 0) {
                    count = maxCount;
                }
                changeTab();
            }

            if (target.closest('#nav-arrow-popup-designs_right')) {
                count++;
                if (count > maxCount) {
                    count = 0;
                }
                changeTab();
            }
        })
    };

    activeSlider(index);
    sliderTabs(index);

    document.body.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.link-list-designs')) {
            popupDesign.style.visibility = 'visible';
        }

        if (target === popupDesign ||
            target.closest('.close')) {
            popupDesign.style.visibility = '';
        }

        if (target.closest('.designs-nav__item_popup')) {
            const elem = target.closest('.designs-nav__item_popup');

            navListPopupDesignsItem.forEach((item,i) => {
                if (item === elem) {
                    item.classList.add('active');
                    activeSlider(i);
                    sliderTabs(i);
                    popupDesignText[i].classList.add('visible-content-block');
                } else {
                    item.classList.remove('active');
                    popupDesignText[i].classList.remove('visible-content-block');
                }
            });
        }

    });
};

export default popupDesigns;