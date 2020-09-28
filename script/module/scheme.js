const scheme = () => {
    const schemeList = document.getElementById('scheme-list'),
    schemeNavItem = document.querySelectorAll('.scheme-nav__item'),
    schemeSliderSlide = document.querySelectorAll('.scheme-slider__slide'),
    schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block');

    let marginCount = 0;

    const changeSlide = index => {
        schemeSliderSlide.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
                schemeDescriptionBlock[i].classList.add('visible-content-block');
            } else {
                slide.style.display = 'none';
                schemeDescriptionBlock[i].classList.remove('visible-content-block');
            }
        });
    };

    document.body.addEventListener('click', event => {
        let target = event.target;

        if (target.closest('.scheme-nav__item')) {
            target = target.closest('.scheme-nav__item');

            schemeNavItem.forEach((item, i) => {
                if (item === target) {
                    item.classList.add('active');
                    changeSlide(i);
                } else {
                    item.classList.remove('active');
                }
            });
        }

        if (target.closest('#nav-arrow-scheme_right')) {
            if (marginCount < 820) {
                if (marginCount < 280) {
                    marginCount += 140;
                } else {
                    marginCount += 200;
                }
                schemeList.style.transform = `translateX(-${marginCount}px)`;
            } else {
                marginCount = 0;
                schemeList.style.transform = `translateX(-${marginCount}px)`;
            }
        }

        if (target.closest('#nav-arrow-scheme_left')) {
            if (marginCount > 0) {
                if (marginCount > 280) {
                    marginCount -= 200;
                } else {
                    marginCount -= 140;
                }
                schemeList.style.transform = `translateX(-${marginCount}px)`;
            } else {
                marginCount = 880;
                schemeList.style.transform = `translateX(-${marginCount}px)`;
            }
        }
    });
};

export default scheme;