import{S as g,N as f,K as v,A as w,i as u}from"./assets/vendor-uDup64Yp.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const j=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"./img/projects/projects-mobile_1_1x.jpg",imageSrc2xM:"./img/projects/projects-mobile_1_2x.jpg",imageSrcTD:"./img/projects/projects_1_1x.jpg",imageSrc2xTD:"./img/projects/projects_1_2x.jpg",altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"./img/projects/projects-mobile_2_1x.jpg",imageSrc2xM:"./img/projects/projects-mobile_2_2x.jpg",imageSrcTD:"./img/projects/projects_2_1x.jpg",imageSrc2xTD:"./img/projects/projects_2_2x.jpg",altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"./img/projects/projects-mobile_3_1x.jpg",imageSrc2xM:"./img/projects/projects-mobile_3_2x.jpg",imageSrcTD:"./img/projects/projects_3_1x.jpg",imageSrc2xTD:"./img/projects/projects_3_2x.jpg",altText:"Third project"}],h=t=>`
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${t.tags.map(s=>`<li><p class="tag">${s}</p></li>`).join("")}
            </ul>
            <h3 class="project-card-title">${t.title}</h3>
            <a href="https://github.com/Vita0609/TeamOfWinners" target="_blank" rel="noopener norefferer" class="project-card-btn">See project</a>
        </div>
        <div class="project-image-wrapper">
            <picture>
                <source srcset="${t.imageSrc2xTD}" media="(min-width: 768px) and (min-resolution: 192dpi)" />
                <source srcset="${t.imageSrcTD}" media="(min-width: 768px)" />
                <source srcset="${t.imageSrc2xM}" media="(max-width: 767px) and (min-resolution: 192dpi)" />
                <source srcset="${t.imageSrcM}" media="(max-width: 767px)" />
                <img src="${t.imageSrcM}" alt="${t.altText}" loading="lazy" />
            </picture>
        </div>
    </div>
`;function S(){const t=document.querySelector(".swiper-wrapper"),s=j.map(i=>`
      <li class="swiper-slide">
        ${h(i)}
      </li>
    `).join("");t.innerHTML=s}function b(){new g(".swiper-container",{modules:[f,v],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"}})}document.addEventListener("DOMContentLoaded",()=>{S(),b()});const a=document.querySelector(".reviews-section");if(a){let i=function(e){return e.map(r=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${r.avatar_url}" alt="${r.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${r.author}</h3>
          <p class="review-text">${r.review}</p>
        </div>
      </li>
  `).join("")};const t=a.querySelector(".reviews-cards");a.querySelector(".reviews-btn-prev"),a.querySelector(".reviews-btn-next");async function s(e){const y="https://portfolio-js.b.goit.study/api"+"/reviews";try{return(await fetch(y)).json()}catch(m){return console.log(m),u.error({position:"topRight",message:"Not Found"}),[]}}async function l(){try{const e=await s();if(e.length>0){const r=i(e);t.insertAdjacentHTML("beforeend",r);const n=new g(a.querySelector(".swiper"),{modules:[f,w],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}})}else console.log("No reviews to display")}catch(e){console.log(e),u.error({position:"topRight",message:"Failed to load reviews"})}}l()}const x=document.querySelector(".header-menu-link"),o=document.querySelector(".header-menu-list"),L=document.querySelector(".burger-btn"),c=document.querySelector(".burger-menu"),_=document.querySelector(".close-btn"),E=document.querySelector(".burger-order-btn"),T=document.querySelector(".burger-menu-list"),M=window.matchMedia("(min-width: 768px)");x.addEventListener("click",d);L.addEventListener("click",I);_.addEventListener("click",p);o.addEventListener("click",d);E.addEventListener("click",p);T.addEventListener("click",p);M.addEventListener("change",N);document.body.addEventListener("click",t=>{!o.classList.contains("visually-hidden")&&!t.target.classList.contains("header-menu-link")&&d()});document.addEventListener("keydown",t=>{t.key==="Escape"&&!o.classList.contains("visually-hidden")&&d()});const A=new KeyframeEffect(o,[{opacity:"0"},{opacity:"1"}],{duration:240,easing:"ease-in-out"}),O=new KeyframeEffect(o,[{opacity:"1"},{opacity:"0"}],{duration:240,easing:"ease-in-out"}),P=new Animation(A,document.timeline),D=new Animation(O,document.timeline),$=new KeyframeEffect(c,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:150}),q=new KeyframeEffect(c,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:150}),k=new Animation($,document.timeline),B=new Animation(q,document.timeline);function d(){if(o.classList.contains("visually-hidden")){P.play(),o.classList.remove("visually-hidden");return}D.play(),setTimeout(()=>{o.classList.add("visually-hidden")},150)}function I(){c.classList.add("is-open"),k.play(),document.body.style.overflow="hidden"}function p(){B.play(),setTimeout(()=>{c.classList.remove("is-open")},150),document.body.style.overflow=""}function N(t){t.matches&&c.classList.contains("is-open")&&p()}
//# sourceMappingURL=commonHelpers.js.map
