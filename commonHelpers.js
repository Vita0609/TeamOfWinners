import{S as m,N as p,K as u}from"./assets/vendor-BRI4oL3R.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const g=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"./img/projects/projects-mobile_1_1x.jpg",imageSrc2xM:"./img/projects/projects-mobile_1_2x.jpg",imageSrcTD:"./img/projects/projects_1_1x.jpg",imageSrc2xTD:"./img/projects/projects_1_2x.jpg",altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"./img/projects/projects-mobile_2_1x.jpg",imageSrc2xM:"./img/projects/projects-mobile_2_2x.jpg",imageSrcTD:"./img/projects/projects_2_1x.jpg",imageSrc2xTD:"./img/projects/projects_2_2x.jpg",altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"./img/projects/projects-mobile_3_1x.jpg",imageSrc2xM:"./img/projects/projects-mobile_3_2x.jpg",imageSrcTD:"./img/projects/projects_3_1x.jpg",imageSrc2xTD:"./img/projects/projects_3_2x.jpg",altText:"Third project"}],f=e=>`
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${e.tags.map(n=>`<li><p class="tag">${n}</p></li>`).join("")}
            </ul>
            <h3 class="project-card-title">${e.title}</h3>
            <a href="https://github.com/Vita0609/TeamOfWinners" target="_blank" rel="noopener norefferer" class="project-card-btn">See project</a>
        </div>
        <div class="project-image-wrapper">
            <picture>
                <source srcset="${e.imageSrc2xTD}" media="(min-width: 768px) and (min-resolution: 192dpi)" />
                <source srcset="${e.imageSrcTD}" media="(min-width: 768px)" />
                <source srcset="${e.imageSrc2xM}" media="(max-width: 767px) and (min-resolution: 192dpi)" />
                <source srcset="${e.imageSrcM}" media="(max-width: 767px)" />
                <img src="${e.imageSrcM}" alt="${e.altText}" loading="lazy" />
            </picture>
        </div>
    </div>
`;function y(){const e=document.querySelector(".swiper-wrapper"),n=g.map(a=>`
      <li class="swiper-slide">
        ${f(a)}
      </li>
    `).join("");e.innerHTML=n}function j(){new m(".swiper-container",{modules:[p,u],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"}})}document.addEventListener("DOMContentLoaded",()=>{y(),j()});const v=document.querySelector(".header-menu-link"),i=document.querySelector(".header-menu-list"),h=document.querySelector(".burger-btn"),o=document.querySelector(".burger-menu"),w=document.querySelector(".close-btn"),x=document.querySelector(".burger-order-btn"),S=document.querySelector(".burger-menu-list"),L=window.matchMedia("(min-width: 768px)");v.addEventListener("click",s);h.addEventListener("click",P);w.addEventListener("click",c);i.addEventListener("click",s);x.addEventListener("click",c);S.addEventListener("click",c);L.addEventListener("change",$);document.body.addEventListener("click",e=>{!i.classList.contains("visually-hidden")&&!e.target.classList.contains("header-menu-link")&&s()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!i.classList.contains("visually-hidden")&&s()});const b=new KeyframeEffect(i,[{opacity:"0"},{opacity:"1"}],{duration:240,easing:"ease-in-out"}),_=new KeyframeEffect(i,[{opacity:"1"},{opacity:"0"}],{duration:240,easing:"ease-in-out"}),E=new Animation(b,document.timeline),T=new Animation(_,document.timeline),M=new KeyframeEffect(o,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:150}),A=new KeyframeEffect(o,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:150}),D=new Animation(M,document.timeline),O=new Animation(A,document.timeline);function s(){if(i.classList.contains("visually-hidden")){E.play(),i.classList.remove("visually-hidden");return}T.play(),setTimeout(()=>{i.classList.add("visually-hidden")},150)}function P(){o.classList.add("is-open"),D.play(),document.body.style.overflow="hidden"}function c(){O.play(),setTimeout(()=>{o.classList.remove("is-open")},150),document.body.style.overflow=""}function $(e){e.matches&&o.classList.contains("is-open")&&c()}
//# sourceMappingURL=commonHelpers.js.map
