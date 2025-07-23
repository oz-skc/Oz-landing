// FAQ accordion functionality
export class FAQAccordion {
    constructor() {
        this.init();
    }

    init() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');

            if (question && answer && icon) {
                question.addEventListener('click', () => {
                    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            const otherAnswer = otherItem.querySelector('.faq-answer');
                            const otherIcon = otherItem.querySelector('.faq-icon');
                            if (otherAnswer) otherAnswer.style.maxHeight = '0px';
                            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                        }
                    });

                    // Toggle current item
                    if (isOpen) {
                        answer.style.maxHeight = '0px';
                        icon.style.transform = 'rotate(0deg)';
                    } else {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        icon.style.transform = 'rotate(45deg)';
                    }
                });
            }
        });
    }
}
