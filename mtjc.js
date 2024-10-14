        AOS.init({
            duration: 1000,
            once: true,
        });

        const slider = document.querySelector('.testimonial-slider');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        let currentSlide = 0;
        const slideCount = document.querySelectorAll('.testimonial').length;

        prev.addEventListener('click', () => {
            if (currentSlide === 0) {
                currentSlide = slideCount - 1;
            } else {
                currentSlide--;
            }
            updateSliderPosition();
        });

        next.addEventListener('click', () => {
            if (currentSlide === slideCount - 1) {
                currentSlide = 0;
            } else {
                currentSlide++;
            }
            updateSliderPosition();
        });

        function updateSliderPosition() {
            const slideWidth = document.querySelector('.testimonial').offsetWidth + 32; 
            slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        AOS.init({
            duration: 1000,
            once: false,
        });