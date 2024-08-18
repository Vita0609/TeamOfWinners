import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container-faq', {
  duration: 900,
  showMultiple: true,
});

// document.addEventListener('DOMContentLoaded', function () {
//   const acc = document.querySelectorAll('.list-faq');
//   faqs.forEach(faq =>
//     faq.addEventListener('click', () => {
//       faq.classList.toggle('active');
//     })
//   );

//   acc.forEach(item => {
//     const btn = item.querySelector('.btn-faq');
//     const content = item.querySelector('.ac-panel');

//     btn.addEventListener('click', function () {
//       if (content.style.display === 'flex') {
//         content.style.overflow = 'hidden';
//       } else {
//         content.style.display = 'flex';
//       }
//     });
//   });
// });
// const faqs = document.querySelectorAll('.list-faq');
