import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
const projects = [
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['#react', '#js', '#node js', '#git'],
    imageSrcM: '/img/projects/projects-mobile_1_1x.jpg',
    imageSrc2xM: '/img/projects/projects-mobile_1_2x.jpg',
    imageSrcTD: '/img/projects/projects_1_1x.jpg',
    imageSrc2xTD: '/img/projects/projects_1_2x.jpg',
    altText: 'First project',
  },
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['#react', '#js', '#node js', '#git'],
    imageSrcM: '/img/projects/projects-mobile_2_1x.jpg',
    imageSrc2xM: '/img/projects/projects-mobile_2_2x.jpg',
    imageSrcTD: '/img/projects/projects_2_1x.jpg',
    imageSrc2xTD: '/img/projects/projects_2_2x.jpg',
    altText: 'Second project',
  },
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['#react', '#js', '#node js', '#git'],
    imageSrcM: '/img/projects/projects-mobile_3_1x.jpg',
    imageSrc2xM: '/img/projects/projects-mobile_3_2x.jpg',
    imageSrcTD: '/img/projects/projects_3_1x.jpg',
    imageSrc2xTD: '/img/projects/projects_3_2x.jpg',
    altText: 'Third project',
  },
];

const generateProjectCard = project => `
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${project.tags
                  .map(tag => `<li><p class="tag">${tag}</p></li>`)
                  .join('')}
            </ul>
            <h3 class="project-card-title">${project.title}</h3>
            <a href="https://github.com/Vita0609/TeamOfWinners" target="_blank" rel="noopener norefferer" class="project-card-btn">See project</a>
        </div>
        <div class="project-image-wrapper">
            <picture>
                <source srcset="${
                  project.imageSrc2xTD
                }" media="(min-width: 768px) and (min-resolution: 192dpi)" />
                <source srcset="${
                  project.imageSrcTD
                }" media="(min-width: 768px)" />
                <source srcset="${
                  project.imageSrc2xM
                }" media="(max-width: 767px) and (min-resolution: 192dpi)" />
                <source srcset="${
                  project.imageSrcM
                }" media="(max-width: 767px)" />
                <img src="${project.imageSrcM}" alt="${
  project.altText
}" loading="lazy" />
            </picture>
        </div>
    </div>
`;

function renderProjects() {
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  const slidesHTML = projects
    .map(project => {
      return `
      <li class="swiper-slide">
        ${generateProjectCard(project)}
      </li>
    `;
    })
    .join('');

  swiperWrapper.innerHTML = slidesHTML;
}

function initializeSwiper() {
  const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Keyboard],
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: {
      nextEl: '.project-btn-right',
      prevEl: '.project-btn-left',
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initializeSwiper();
});
