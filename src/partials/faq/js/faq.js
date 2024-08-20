import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import spriteUrl from '../../../img/icons.svg';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    duration: 300,
    elementClass: 'faq-item',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
    showMultiple: true,
    beforeOpen: item => {
      const icon = item.querySelector('.icon-answer use');
      icon.setAttribute('href', `${spriteUrl}#icon-up`);
    },
    beforeClose: item => {
      const icon = item.querySelector('.icon-answer use');

      icon.setAttribute('href', `${spriteUrl}#icon-down`);
    },
  });
});
