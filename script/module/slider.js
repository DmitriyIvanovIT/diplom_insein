const slider = (selector, sliderTotal, prevSlide, nextSlide) => {
    // typesRepair.forEach(slider => slider.style.display = 'none');
    // selector.style.display = '';

    const slide = selector.querySelectorAll('div');
    console.log(slide);

    // sliderTotal.textContent = slide.length;

    // let count = 0,
    //     slideHeight = slide[0].offsetHeight;

    // const carousel = () => {
    //     selector.style.transform = `translateY(-${count*slideHeight}px)`;
    //     sliderCurrent.textContent = count + 1;
    // };

    // carousel();
    
    // prevSlide.addEventListener('click', () => {
    //     count--; 
    //     if (count < 0) {
    //         count = slide.length - 1;
    //     }
    //     carousel();
    // });
    // nextSlide.addEventListener('click', () => {
    //     count++; 
    //     if (count > (slide.length - 1)) {
    //         count = 0;
    //     }
    //     carousel();
    // });

};

export default slider;