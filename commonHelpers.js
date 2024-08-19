import{S as g,N as f,K as y,A as w,i as m,a as h}from"./assets/vendor-ClbaxMW0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const j=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"/img/projects/projects-mobile_1_1x.jpg",imageSrc2xM:"/img/projects/projects-mobile_1_2x.jpg",imageSrcTD:"/img/projects/projects_1_1x.jpg",imageSrc2xTD:"/img/projects/projects_1_2x.jpg",altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"/img/projects/projects-mobile_2_1x.jpg",imageSrc2xM:"/img/projects/projects-mobile_2_2x.jpg",imageSrcTD:"/img/projects/projects_2_1x.jpg",imageSrc2xTD:"/img/projects/projects_2_2x.jpg",altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"/img/projects/projects-mobile_3_1x.jpg",imageSrc2xM:"/img/projects/projects-mobile_3_2x.jpg",imageSrcTD:"/img/projects/projects_3_1x.jpg",imageSrc2xTD:"/img/projects/projects_3_2x.jpg",altText:"Third project"}],S=t=>`
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${t.tags.map(n=>`<li><p class="tag">${n}</p></li>`).join("")}
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
`;function E(){const t=document.querySelector(".swiper-wrapper"),n=j.map(o=>`
      <li class="swiper-slide">
        ${S(o)}
      </li>
    `).join("");t.innerHTML=n}function L(){new g(".swiper-container",{modules:[f,y],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"}})}document.addEventListener("DOMContentLoaded",()=>{E(),L()});const a=document.querySelector(".reviews-section");if(a){let o=function(e){return e.map(r=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${r.avatar_url}" alt="${r.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${r.author}</h3>
          <p class="review-text">${r.review}</p>
        </div>
      </li>
  `).join("")};const t=a.querySelector(".reviews-cards");a.querySelector(".reviews-btn-prev"),a.querySelector(".reviews-btn-next");async function n(e){const v="https://portfolio-js.b.goit.study/api"+"/reviews";try{return(await fetch(v)).json()}catch(u){return console.log(u),m.error({position:"topRight",message:"Not Found"}),[]}}async function i(){try{const e=await n();if(e.length>0){const r=o(e);t.insertAdjacentHTML("beforeend",r);const c=new g(a.querySelector(".swiper"),{modules:[f,w],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".project-btn-left",prevEl:".project-btn-right"}})}else console.log("No reviews to display")}catch(e){console.log(e),m.error({position:"topRight",message:"Failed to load reviews"})}}i()}addEventListener("DOMContentLoaded",function(){const t=document.getElementById("covers-section"),n=document.querySelectorAll(".covers-marquee__inner");function o(e){const r=e.getBoundingClientRect();return r.top>=0&&r.left>=0&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&r.right<=(window.innerWidth||document.documentElement.clientWidth)}function i(){o(t)?n.forEach(e=>e.classList.add("moving")):n.forEach(e=>e.classList.remove("moving"))}window.addEventListener("scroll",i),window.addEventListener("resize",i),i()});const b=document.querySelector(".header-menu-link"),s=document.querySelector(".header-menu-list"),x=document.querySelector(".burger-btn"),l=document.querySelector(".burger-menu"),_=document.querySelector(".close-btn"),T=document.querySelector(".burger-order-btn"),q=document.querySelector(".burger-menu-list"),A=window.matchMedia("(min-width: 768px)");b.addEventListener("click",d);x.addEventListener("click",N);_.addEventListener("click",p);s.addEventListener("click",d);T.addEventListener("click",p);q.addEventListener("click",p);A.addEventListener("change",R);document.body.addEventListener("click",t=>{!s.classList.contains("visually-hidden")&&!t.target.classList.contains("header-menu-link")&&d()});document.addEventListener("keydown",t=>{t.key==="Escape"&&!s.classList.contains("visually-hidden")&&d()});const M=new KeyframeEffect(s,[{opacity:"0"},{opacity:"1"}],{duration:240,easing:"ease-in-out"}),O=new KeyframeEffect(s,[{opacity:"1"},{opacity:"0"}],{duration:240,easing:"ease-in-out"}),D=new Animation(M,document.timeline),P=new Animation(O,document.timeline),$=new KeyframeEffect(l,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:150}),B=new KeyframeEffect(l,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:150}),I=new Animation($,document.timeline),k=new Animation(B,document.timeline);function d(){if(s.classList.contains("visually-hidden")){D.play(),s.classList.remove("visually-hidden");return}P.play(),setTimeout(()=>{s.classList.add("visually-hidden")},150)}function N(){l.classList.add("is-open"),I.play(),document.body.style.overflow="hidden"}function p(){k.play(),setTimeout(()=>{l.classList.remove("is-open")},150),document.body.style.overflow=""}function R(t){t.matches&&l.classList.contains("is-open")&&p()}new h(".accordion-container-faq",{duration:900,showMultiple:!0});const V=document.querySelectorAll(".btn-faq");V.forEach(t=>{t.addEventListener("click",()=>{t.querySelectorAll(".faq-btn-icon").forEach(o=>{o.classList.toggle("active")})})});
//# sourceMappingURL=commonHelpers.js.map