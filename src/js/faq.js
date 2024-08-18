import Accordion from 'accordion-js';

new Accordion('.accordion-container-faq', {
  duration: 900,
  showMultiple: true,
});
// ОШИБКА!!! если раскоментить код, то получается
// что текст при открытие становится в столбик
// и как-будто прыгает, если оставить все как есть то не крутится кнопка

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
