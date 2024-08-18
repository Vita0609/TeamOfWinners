import Swiper from 'swiper';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsList = document.querySelector('.reviews-list');

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      updateNavButtons(this);
    },
    slideChange: function () {
      updateNavButtons(this);
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

function updateNavButtons(swiper) {
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');

  prevButton.classList.toggle('disabled', swiper.isBeginning);
  nextButton.classList.toggle('disabled', swiper.isEnd);
}
fetch('https://portfolio-js.b.goit.study/api/reviews')
  .then(response => response.json())
  .then(data => {
    if (data && data.length) {
      data.forEach(review => {
        const listItem = document.createElement('li');
        listItem.classList.add('swiper-slide');
        listItem.innerHTML = `
                    <img src="${review.avatar_url}" alt="${review.author}">
                    <p class="author-name">${review.author}</p>
                    <p class="author-review">${review.review}</p>
                `;
        reviewsList.append(listItem);
      });

      swiper.update();
    } else {
      document.querySelector('.message-err').style.display = 'block';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.querySelector('.message-err').style.display = 'block';
  });
