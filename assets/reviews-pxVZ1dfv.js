import{S as s,N as a,b as i,i as t}from"./vendor-DxL_t5AH.js";import{A as o}from"../commonHelpers.js";const n=document.querySelector(".reviews-section"),c=document.querySelector(".reviews-cards");async function l(){try{return await o.getReviews()}catch{return t.error({position:"topRight",message:"Not Found"}),[]}}function p(e){return e.map(r=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${r.avatar_url}" alt="${r.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${r.author}</h3>
          <p class="review-text">${r.review}</p>
        </div>
      </li>
  `).join("")}async function d(){try{const e=await l();if(e.length>0){const r=p(e);c.insertAdjacentHTML("beforeend",r);const w=new s(n.querySelector(".swiper"),{modules:[a,i],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"}})}}catch{t.error({position:"topRight",message:"Failed to load reviews"})}}d();
//# sourceMappingURL=reviews-pxVZ1dfv.js.map
