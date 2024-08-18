import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const section = document.querySelector('.reviews-section');
if (section) {
  const list = section.querySelector('.reviews-cards');
  const prevButton = section.querySelector('.reviews-btn-prev');
  const nextButton = section.querySelector('.reviews-btn-next');
  async function getReviews(value) {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api';
    const END_POINT = '/reviews';
    const url = BASE_URL + END_POINT;
    try {
      const res = await fetch(url);
      return res.json();
    } catch (err) {
      console.log(err);
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
        <img class="reviews-card-img" src="${review.avatar_url}" alt="${review.author}'s avatar">
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
        const $swiper = new Swiper(section.querySelector('.swiper'), {
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
          autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          },
          keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
          },
          navigation: {
            nextEl: '.reviews-btn-next',
            prevEl: '.reviews-btn-prev',
          },
        });
      } else {
        console.log('No reviews to display');
      }
    } catch (err) {
      console.log(err);
      iziToast.error({
        position: 'topRight',
        message: 'Failed to load reviews',
      });
    }
  }
  renderReviews();
}
