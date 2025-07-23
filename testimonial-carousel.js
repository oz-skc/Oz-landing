// Testimonial carousel functionality
export class TestimonialCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = [];
        this.init();
    }

    init() {
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.totalSlides = this.slides.length;

        if (this.totalSlides > 0) {
            this.setupCarousel();
            this.startAutoSlide();
        }
    }

    setupCarousel() {
        // Hide all slides except the first one
        this.slides.forEach((slide, index) => {
            if (index === 0) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Setup navigation dots
        this.setupDots();
    }

    setupDots() {
        const dotsContainer = document.querySelector('.carousel-dots');
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < this.totalSlides; i++) {
                const dot = document.createElement('button');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }
    }

    goToSlide(slideIndex) {
        this.slides[this.currentSlide].classList.remove('active');
        document.querySelectorAll('.dot')[this.currentSlide].classList.remove('active');

        this.currentSlide = slideIndex;

        this.slides[this.currentSlide].classList.add('active');
        document.querySelectorAll('.dot')[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    startAutoSlide() {
        setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
}
