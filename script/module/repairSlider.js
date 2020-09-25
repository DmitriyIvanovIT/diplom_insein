const repairSlider = () => {
    const prevSlide = document.getElementById('repair-types-arrow_left'),
        nextSlide = document.getElementById('repair-types-arrow_right'),
        repairTypesSlider = document.querySelector('.repair-types-slider'),
        typesRepair = repairTypesSlider.querySelectorAll('.repair-types-slider>div'),
        repairCounter = document.getElementById('repair-counter'),
        sliderCurrent = repairCounter.querySelector('.slider-counter-content__current'),
        sliderTotal = repairCounter.querySelector('.slider-counter-content__total'),
        navListRepair = document.querySelector('.nav-list-repair'),
        navItem = navListRepair.querySelectorAll('.repair-types-nav__item');

    const activeSlider = selector => {
        typesRepair.forEach(slider => slider.style.display = 'none');
        selector.style.display = '';

        const slide = selector.querySelectorAll('.repair-types-slider__slide');

        sliderTotal.textContent = slide.length;

        let count = 0,
            slideHeight = slide[0].offsetHeight;

        const carousel = () => {
            selector.style.transform = `translateY(-${count*slideHeight}px)`;
            sliderCurrent.textContent = count + 1;
        };

        carousel();
        
        prevSlide.addEventListener('click', () => {
            count--; 
            if (count < 0) {
                count = slide.length - 1;
            }
            carousel();
        });
        nextSlide.addEventListener('click', () => {
            count++; 
            if (count > (slide.length - 1)) {
                count = 0;
            }
            carousel();
        });

    };

    activeSlider(typesRepair[0]);

    if (window.screen.width > 1024) {
        navListRepair.transform = '';
        navListRepair.addEventListener('click', event => {
            let target = event.target;
    
            if (target.closest('.repair-types-nav__item')) {
                target = target.closest('.repair-types-nav__item');
                navItem.forEach((item, i) => {
                    if (item === target) {
                        item.classList.add('active');
                        activeSlider(typesRepair[i]);
                    } else {
                        item.classList.remove('active');
                    }
                    
                });
            }
        });
    } else {
        const prevButton = document.getElementById('nav-arrow-repair-left_base'),
        nextButton = document.getElementById('nav-arrow-repair-right_base');
        
        let count = 0,
        driveSlider = 0,
        maxDrive = 0; 
        navItem.forEach(item => {
            maxDrive += (item.offsetWidth + 10);
        });

        const drivesSlide = () => {
            navItem.forEach((item, i) => {
                if (i === count) {
                    item.classList.add('active');
                    activeSlider(typesRepair[i]);
                } else {
                    item.classList.remove('active');
                }
                
            });
            navListRepair.style.transform = `translateX(-${driveSlider}px)`;
        };

        prevButton.addEventListener('click', () => {
            driveSlider -= (navItem[count].offsetWidth + 10);
            if (driveSlider < 0) {
                driveSlider = 0;
            }

            count--; 
            if (count < 0) {
                count = navItem.length - 1;
                driveSlider = maxDrive - navItem[navItem.length - 1].offsetWidth;
            }
            drivesSlide();
        });
        nextButton.addEventListener('click', () => {
            driveSlider += navItem[count].offsetWidth + 10;
            count++; 
            if (count > (navItem.length - 1)) {
                count = 0;
                driveSlider = 0;
            }
            drivesSlide();
        });
    }
};

export default repairSlider;