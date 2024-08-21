import iziToast from 'izitoast';

import Swiper from 'swiper';

import { Autoplay, Navigation } from 'swiper/modules';
import ApiService from '../../../swagger-api';

const section = document.querySelector('.reviews-section');
const list = document.querySelector('.reviews-cards');

async function getReviews() {
  try {
    const res = await ApiService.getReviews();
    return res;
  } catch (err) {
    iziToast.error({
      position: 'topRight',
      message: 'Not Found',
    });
    return [];
  }
}

function renderReview(data) {
  return data
    .map(
      review => `
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${review.avatar_url}" alt="${review.author}'s avatar" loading="lazy">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${review.author}</h3>
          <p class="review-text">${review.review}</p>
        </div>
      </li>
  `
    )
    .join('');
}

async function renderReviews() {
  try {
    const data = await getReviews();

    if (data.length > 0) {
      const markup = renderReview(data);
      list.insertAdjacentHTML('beforeend', markup);

      const swiper = new Swiper(section.querySelector('.swiper'), {
        modules: [Navigation, Autoplay],

        breakpoints: {
          320: {
            slidesPerView: 1,
            loop: false,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 16,
            loop: false,
          },

          1440: {
            slidesPerView: 4,
            spaceBetween: 16,
            loop: false,
          },
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },

        navigation: {
          nextEl: '.project-btn-right',
          prevEl: '.project-btn-left',
        },
      });
    }
  } catch (err) {
    iziToast.error({
      position: 'topRight',
      message: 'Failed to load reviews',
    });
  }
}

renderReviews();
