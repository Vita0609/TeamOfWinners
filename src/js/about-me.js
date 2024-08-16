const generateSkillsMarkup = () => {
    return `
      <div class="about-skills-container swiper-container">
        <ul class="about-skills-list swiper-wrapper">
          <li class="about-skills-item swiper-slide">HTML/CSS</li>
          <li class="about-skills-item swiper-slide">JavaScript</li>
          <li class="about-skills-item swiper-slide">React</li>
          <li class="about-skills-item swiper-slide">Node.js</li>
          <li class="about-skills-item swiper-slide">React Native</li>
          <li class="about-skills-item swiper-slide">Soft skills</li>
        </ul>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    `;
  };

  const aboutMeContainer = document.querySelector('.about-accordion-container');

  const skillsMarkup = generateSkillsMarkup();

  aboutMeContainer.insertAdjacentHTML('beforeend', skillsMarkup);



  
  document.addEventListener('DOMContentLoaded', () => {
    const accButtons = document.querySelectorAll('.aboutme-accordion-btn');
  
    accButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const targetTextClass = button.classList.contains('about-btn') ? 'about-text' :
                                button.classList.contains('role-btn') ? 'role-text' :
                                button.classList.contains('education-btn') ? 'education-text' :
                                null;
        if (targetTextClass) {
          const targetTexts = document.querySelectorAll(`.${targetTextClass}`);
  
          targetTexts.forEach((text) => {
            text.classList.toggle('visually-hidden');
          });

          const icon = button.querySelector('svg use');
          const isExpanded = !targetTexts[0].classList.contains('visually-hidden');
  
          if (isExpanded) {
            icon.setAttribute('href', '../img/icons.svg#collapse'); 
          } else {
            icon.setAttribute('href', '../img/icons.svg#expand'); 
          }
        }
      });
    });
  
    const firstItem = document.querySelector('.about-ac-item.open .about-inform-container');
    if (firstItem) {
      firstItem.querySelectorAll('.about-text').forEach((text) => {
        text.classList.remove('visually-hidden');
      });
    }
  });

// Иници Swiper
  
const newSwiper = new Swiper('.swiper-container',{
  loop: true,
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: true,
})

const swiperBtn = document.querySelector(".swiper-button-next").swiper;
swiper.slideNext();