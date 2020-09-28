const designs = () => {
    const designsSlider = document.querySelector('.designs-slider'),
        sliders = document.querySelectorAll('.designs-slider>div'),
        designsList = document.getElementById('designs-list'),
        designTabs = designsList.querySelectorAll('.designs-nav__item'),
        previewBlock = document.querySelectorAll('.preview-block'),
        designsCounter = document.getElementById('designs-counter'),
        designCurrent = designsCounter.querySelector('.slider-counter-content__current'),
        designTottal = designsCounter.querySelector('.slider-counter-content__total');

    const desctopVersion = index => {
            activateSlider(index);
            previewBlock.forEach((item, i) => {
                if (i === index) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }
            });

            changeSlide(sliders[index], index);

        },
        mobailVersion = () => {
            let count = 0,
            maxCount = 1,
            length = 0;

            // document.body.addEventListener('click', event => {
            //     let target = event.target;
                
            //     // if (target.closest('.'))
            // });
        },
        activateSlider = index => {
            sliders.forEach((item, i) => {
                if (i !== index) {
                    item.style.display = 'none';
                } else {
                    item.style.display = '';
                }
            });
        },
        changeSlider = () => {
            if (window.screen.width > 575) {
                desctopVersion(0);
                document.body.addEventListener('click', event => {
                    let target = event.target;

                    if (target.closest('.button_o.designs-nav__item.designs-nav__item_base')) {
                        designTabs.forEach((item, i) => {
                            if (item === target) {
                                item.classList.add('active');
                                desctopVersion(i);
                            } else {
                                item.classList.remove('active');
                            }
                        });
                    }
                });
            } else {
                mobailVersion();
            }

        },
        changeSlide = (slider, index) => {
            const slide = slider.querySelectorAll('.designs-slider__style-slide'),
                preview = previewBlock[index].querySelectorAll('.preview-block__item-inner');
            let count = 0,
                maxCount = slider.length - 1,
                slideHeight = slide[0].offsetHeight;

            designTottal.textContent = slide.length;

            const carousel = () => {
                    slider.style.transform = `translateY(-${count * slideHeight}px)`;
                    if (window.screen.width < 576) {
                        designCurrent.textContent = count + 1;
                    }
                },
                changeActivePreview = index => {
                    preview.forEach((item, i) => {
                        if (i === index) {
                            item.classList.add('preview_active');
                        } else {
                            item.classList.remove('preview_active');
                        }
                    });
                };

            changeActivePreview(0);
            carousel();

            if (window.screen.width > 575) {
                document.body.addEventListener('click', event => {
                    let target = event.target;
    
                    if (target.closest('.preview-block__item-inner')) {
                        target = target.closest('.preview-block__item-inner');
                        preview.forEach((item, i) => {
                            if (item === target) {
                                count = i;
                                changeActivePreview(i);
                                carousel();
                            }
                        });
                    }
                });
            } else if (window.screen.width < 576) {
                document.body.addEventListener('click', event => {
                    const target = event.target;
                    console.log(target);

                    if (target.closest('#design_left')) {
                        count--;
                        if (count < 0) {
                            count = maxCount;
                        }

                        carousel();
                    }

                    if (target.closest('#design_right')) {
                        count++;
                        if (count > maxCount) {
                            count = 0;
                        }

                        carousel();
                    }
                });  
            }
            
        };

    changeSlider();
};

export default designs;