import Accordion from 'accordion-js';

new Accordion('.accordion-container-faq', {
  duration: 900,
  showMultiple: true,
});
const faqButtons = document.querySelectorAll('.btn-faq');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const icons = button.querySelectorAll('.faq-btn-icon');

    icons.forEach(icon => {
      icon.classList.toggle('active');
    });
  });
});
