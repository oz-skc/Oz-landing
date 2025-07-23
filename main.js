// Main application initialization
import { NavigationModule } from './navigation.js';
import { TestimonialCarousel } from './testimonial-carousel.js';
import { FAQAccordion } from './faq-accordion.js';
import { AnimationModule } from './animations.js';

class HypersonicApp {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeModules();
            });
        } else {
            this.initializeModules();
        }
    }

    initializeModules() {
        // Initialize all modules
        new NavigationModule();
        new TestimonialCarousel();
        new FAQAccordion();
        new AnimationModule();

        console.log('Hypersonic website initialized successfully!');
    }
}

// Initialize the application
new HypersonicApp();
