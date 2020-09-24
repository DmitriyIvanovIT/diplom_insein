const sliderFormula = () => {
    const formulaSlider = document.querySelector('.formula-slider'),
        prevButton = document.getElementById('formula-arrow_left'),
        nextButton = document.getElementById('formula-arrow_right'),
        lastClone = document.createElement('div'),
        firstClone = document.createElement('div');

    let formulaSliderSlide = document.querySelectorAll('.formula-slider__slide');

    lastClone.id = 'last-clone';
    firstClone.id = 'first-clone';
    lastClone.className = 'formula-item formula-slider__slide';
    firstClone.className = 'formula-item formula-slider__slide';
    lastClone.innerHTML = formulaSliderSlide[formulaSliderSlide.length - 1].innerHTML;
    firstClone.innerHTML = formulaSliderSlide[0].innerHTML;
    formulaSlider.prepend(lastClone);
    formulaSlider.append(firstClone);

    formulaSliderSlide = document.querySelectorAll('.formula-slider__slide');

    formulaSliderSlide[1].classList.add('active');

    let count = 0,
    maxPositions = formulaSliderSlide.length - 3;

    const carousel = () => {
        if (window.screen.width < 564) {
            formulaSlider.style.transform = `translateX(-${(count + 1) * 100}%)`;
        } else {
            formulaSlider.style.transform = `translateX(-${count * 33}%)`;
        }
        formulaSliderSlide.forEach(item => item.classList.remove('active'));
        formulaSliderSlide[count+1].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        count--;

        if (count < 0) {
            count = maxPositions;
        }
        carousel();
    });

    nextButton.addEventListener('click', () => {
        count++;

        if (count > maxPositions) {
            count = 0;
        }
        carousel();

    });

}

export default sliderFormula;