
import Swiper from 'swiper';
import 'swiper/css';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const swiperCont = document.querySelector('.about-skills .swiper');

new Swiper(swiperCont, {
  initialSlide: 0,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    invert: true,
  },
  touchEventsTarget: 'wrapper',
  slideClass: 'about-skills-item',
  slideActiveClass: 'about-skills-item-accent',
  wrapperClass: 'about-skills-list',
  rewind: true,

  breakpoints: {
  
    375: {
      slidesPerView: 2,
      width: 260,
    },
    
    768: {
      slidesPerView: 3,
      width: 600,
    },
  
    1440: {
      slidesPerView: 6,
      width: 1200,
    },
  },
});

const container = document.querySelector('.about-accordion-container');

new Accordion(container, {
  openOnInit: [0],
  showMultiple: true,
  duration: 500,
  elementClass: 'about-ac',
  panelClass: 'about-ac-panel',
  triggerClass: 'about-ac-btn',
});
