const repairSlider = () => {
    const formulaSlider = document.querySelector('.repair-types-slider');
    let sliderTypeRepair = formulaSlider.querySelector('.types-repair1');
    let formulaSliderSlide = sliderTypeRepair.querySelectorAll('.repair-types-slider__slide');
    const wrap = document.querySelector('.repair-types-slider-wrap');
    const repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item');
    const repairCounter = document.getElementById('repair-counter');
    const sliderCounterContentCurrent = repairCounter.querySelector('.slider-counter-content__current');
    const sliderCounterContentTotal = repairCounter.querySelector('.slider-counter-content__total');
    const repairTypesTab = document.querySelector('.repair-types-tab');
    const navListRepair = document.querySelector('.nav-list-repair');
    sliderCounterContentTotal.textContent = formulaSliderSlide.length;
    let marginCount = 0;
    let typeRepair = 1;
    let currentSlide = 0;
    let interval;

    repairTypesTab.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('#nav-arrow-repair-right_base')) {
            if (marginCount < 850) {
                if (marginCount !== 600) {
                    marginCount += 200;
                } else {
                    marginCount += 250;
                }
                navListRepair.style.transform = `translateX(-${marginCount}px)`;
            }
        }

        if (target.closest('#nav-arrow-repair-left_base')) {
            if (marginCount > 0) {
                if (marginCount !== 850) {
                    marginCount -= 200;
                } else {
                    marginCount -= 250;
                }
                navListRepair.style.transform = `translateX(-${marginCount}px)`;
            }
        }
    });

    document.body.addEventListener('click', (event) => {
        const item = event.target;
        if (item.closest('.repair-types-nav__item')) {
            document.querySelector('.nav-wrap-repair').querySelector('.active').classList.remove('active');
            item.classList.add('active');
            typeRepair = item.classList[2][23];
            sliderTypeRepair.style.display = 'none';
            sliderTypeRepair = formulaSlider.querySelector(`.types-repair${typeRepair}`);
            sliderTypeRepair.style.display = 'block';
            formulaSliderSlide = sliderTypeRepair.querySelectorAll('.repair-types-slider__slide');
            currentSlide = 0;
            sliderCounterContentCurrent.textContent = currentSlide + 1;
            sliderCounterContentTotal.textContent = formulaSliderSlide.length;
        }
    });

    wrap.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        if (target.closest('#repair-types-arrow_right')) {
            currentSlide++;
            sliderCounterContentCurrent.textContent = currentSlide + 1;
            if (currentSlide > formulaSliderSlide.length - 1) {
                currentSlide = 0;
                sliderCounterContentCurrent.textContent = currentSlide + 1;
            }
        } else if (target.closest('#repair-types-arrow_left')) {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = formulaSliderSlide.length - 1;
                sliderCounterContentCurrent.textContent = currentSlide + 1;
            }
            sliderCounterContentCurrent.textContent = currentSlide + 1;
        }

        
        formulaSliderSlide.forEach((slide, i) => {
            if (i === currentSlide) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
        
    });

    document.body.addEventListener('mouseover', event => {
        const target = event.target;
        if (target.closest('#repair-types-arrow_right') || event.target.closest('#repair-types-arrow_left') ||
            target.closest('.repair-types-nav__item')) {
        }
    });

    document.body.addEventListener('mouseout', event => {
        const target = event.target;
        if (event.target.closest('#repair-types-arrow_right') || event.target.closest('#repair-types-arrow_left') ||
            target.closest('.repair-types-nav__item')) {
        }
    });

}

export default repairSlider;