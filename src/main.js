import 'accordion-js/dist/accordion.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import 'swiper/css';
import './js/change-theme.js';

import './partials/footer/js/work-together.js';
import './partials/header/js/header.js';

if (document.querySelector('#about-me')) {
  import('./partials/about-me/js/about-me.js');
}

if (document.querySelector('#projects')) {
  import('./partials/projects/js/projects');
}

import('./partials/faq/js/faq.js');
import('./partials/covers/js/covers.js');
import('./partials/reviews/js/reviews.js');

import('./swagger-api.js');
