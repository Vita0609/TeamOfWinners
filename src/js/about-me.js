import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';

const generateSkillsMarkup = () => {
  return `
    <div class="skills-wrapper">
      <div class="about-skills-container">
        <ul class="about-skills-list">
          <li class="about-skills-item swiper-slide">HTML/CSS</li>
          <li class="about-skills-item swiper-slide">JavaScript</li>
          <li class="about-skills-item swiper-slide">React</li>
          <li class="about-skills-item swiper-slide">Node.js</li>
          <li class="about-skills-item swiper-slide">React Native</li>
          <li class="about-skills-item swiper-slide">Soft skills</li>
        </ul>
      </div>
      <div class="swiper-container">
        <button type="button" class="swiper-btn">
          <svg class="project-icon-right">
            <use href="../img/icons.svg#arrow-right"></use>
          </svg>
        </button>
      </div>
    </div>
  `;
};

const aboutMeContainer = document.querySelector('.about-accordion-container');
const skillsMarkup = generateSkillsMarkup();
aboutMeContainer.insertAdjacentHTML('beforeend', skillsMarkup);

document.addEventListener('DOMContentLoaded', () => {
  // Инициализация аккордеона
  new Accordion('.about-accordion-container', {
    duration: 400,
    showMultiple: true,
    openOnInit: [0],
  });

  // Функция для обновления иконок
  const updateIcons = () => {
    const items = document.querySelectorAll('.aboutme-accordion-btn');
    items.forEach((button) => {
      const icon = button.querySelector('svg use');
      const isExpanded = button.parentElement.classList.contains('is-open');
      if (isExpanded) {
        icon.setAttribute('href', '../img/icons.svg#collapse'); 
      } else {
        icon.setAttribute('href', '../img/icons.svg#expand'); 
      }
    });
  };

  // Добавление обработчиков событий для обновления иконок
  document.querySelectorAll('.about-me-accordion-container .accordion-item').forEach((item) => {
    item.addEventListener('accordion:open', updateIcons);
    item.addEventListener('accordion:close', updateIcons);
  });

  // Убедитесь, что иконки обновлены после инициализации
  updateIcons();

  // Инициализация Swiper
  const newSwiper = new Swiper('.about-skills-container', {
    modules: [Navigation, Keyboard],
    loop: true,
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    mousewheel: true,
  });

  document.querySelector(".swiper-btn").addEventListener('click', () => {
    newSwiper.slideNext();
  });
});
