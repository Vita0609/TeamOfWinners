import{S as g,N as f,K as y,A as w,i as u}from"./assets/vendor-uDup64Yp.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const j=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"img/projects/projects-mobile_1_1x.jpg",imageSrc2xM:"img/projects/projects-mobile_1_2x.jpg",imageSrcTD:"img/projects/projects_1_1x.jpg",imageSrc2xTD:"img/projects/projects_1_2x.jpg",altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"./img/projects/projects-mobile_2_1x.jpg",imageSrc2xM:"./img/projects/projects-mobile_2_2x.jpg",imageSrcTD:"./img/projects/projects_2_1x.jpg",imageSrc2xTD:"./img/projects/projects_2_2x.jpg",altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"./img/projects/projects-mobile_3_1x.jpg",imageSrc2xM:"./img/projects/projects-mobile_3_2x.jpg",imageSrcTD:"./img/projects/projects_3_1x.jpg",imageSrc2xTD:"./img/projects/projects_3_2x.jpg",altText:"Third project"}],h=r=>`
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${r.tags.map(n=>`<li><p class="tag">${n}</p></li>`).join("")}
            </ul>
            <h3 class="project-card-title">${r.title}</h3>
            <a href="https://github.com/Vita0609/TeamOfWinners" target="_blank" rel="noopener norefferer" class="project-card-btn">See project</a>
        </div>
        <div class="project-image-wrapper">
            <picture>
                <source srcset="${r.imageSrc2xTD}" media="(min-width: 768px) and (min-resolution: 192dpi)" />
                <source srcset="${r.imageSrcTD}" media="(min-width: 768px)" />
                <source srcset="${r.imageSrc2xM}" media="(max-width: 767px) and (min-resolution: 192dpi)" />
                <source srcset="${r.imageSrcM}" media="(max-width: 767px)" />
                <img src="${r.imageSrcM}" alt="${r.altText}" loading="lazy" />
            </picture>
        </div>
    </div>
`;function S(){const r=document.querySelector(".swiper-wrapper"),n=j.map(s=>`
      <li class="swiper-slide">
        ${h(s)}
      </li>
    `).join("");r.innerHTML=n}function b(){new g(".swiper-container",{modules:[f,y],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"}})}document.addEventListener("DOMContentLoaded",()=>{S(),b()});const a=document.querySelector(".reviews-section");if(a){let s=function(e){return e.map(t=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${t.avatar_url}" alt="${t.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${t.author}</h3>
          <p class="review-text">${t.review}</p>
        </div>
      </li>
  `).join("")};const r=a.querySelector(".reviews-cards");a.querySelector(".reviews-btn-prev"),a.querySelector(".reviews-btn-next");async function n(e){const v="https://portfolio-js.b.goit.study/api"+"/reviews";try{return(await fetch(v)).json()}catch(m){return console.log(m),u.error({position:"topRight",message:"Not Found"}),[]}}async function o(){try{const e=await n();if(e.length>0){const t=s(e);r.insertAdjacentHTML("beforeend",t);const c=new g(a.querySelector(".swiper"),{modules:[f,w],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".project-btn-left",prevEl:".project-btn-right"}})}else console.log("No reviews to display")}catch(e){console.log(e),u.error({position:"topRight",message:"Failed to load reviews"})}}o()}addEventListener("DOMContentLoaded",function(){const r=document.getElementById("covers-section"),n=document.querySelectorAll(".covers-marquee__inner");function s(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function o(){s(r)?n.forEach(e=>e.classList.add("moving")):n.forEach(e=>e.classList.remove("moving"))}window.addEventListener("scroll",o),window.addEventListener("resize",o),o()});const L=document.querySelector(".header-menu-link"),i=document.querySelector(".header-menu-list"),E=document.querySelector(".burger-btn"),l=document.querySelector(".burger-menu"),x=document.querySelector(".close-btn"),_=document.querySelector(".burger-order-btn"),T=document.querySelector(".burger-menu-list"),M=window.matchMedia("(min-width: 768px)");L.addEventListener("click",d);E.addEventListener("click",k);x.addEventListener("click",p);i.addEventListener("click",d);_.addEventListener("click",p);T.addEventListener("click",p);M.addEventListener("change",N);document.body.addEventListener("click",r=>{!i.classList.contains("visually-hidden")&&!r.target.classList.contains("header-menu-link")&&d()});document.addEventListener("keydown",r=>{r.key==="Escape"&&!i.classList.contains("visually-hidden")&&d()});const A=new KeyframeEffect(i,[{opacity:"0"},{opacity:"1"}],{duration:240,easing:"ease-in-out"}),q=new KeyframeEffect(i,[{opacity:"1"},{opacity:"0"}],{duration:240,easing:"ease-in-out"}),O=new Animation(A,document.timeline),D=new Animation(q,document.timeline),P=new KeyframeEffect(l,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:150}),$=new KeyframeEffect(l,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:150}),I=new Animation(P,document.timeline),B=new Animation($,document.timeline);function d(){if(i.classList.contains("visually-hidden")){O.play(),i.classList.remove("visually-hidden");return}D.play(),setTimeout(()=>{i.classList.add("visually-hidden")},150)}function k(){l.classList.add("is-open"),I.play(),document.body.style.overflow="hidden"}function p(){B.play(),setTimeout(()=>{l.classList.remove("is-open")},150),document.body.style.overflow=""}function N(r){r.matches&&l.classList.contains("is-open")&&p()}
//# sourceMappingURL=commonHelpers.js.map
