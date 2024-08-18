(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const m=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"../img/projects/projects-mobile_1_1x.jpg",imageSrc2xM:"../img/projects/projects-mobile_1_2x.jpg",imageSrcTD:"../img/projects/projects_1_1x.jpg",imageSrc2xTD:"../img/projects/projects_1_2x.jpg",altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"../img/projects/projects-mobile_2_1x.jpg",imageSrc2xM:"../img/projects/projects-mobile_2_2x.jpg",imageSrcTD:"../img/projects/projects_2_1x.jpg",imageSrc2xTD:"../img/projects/projects_2_2x.jpg",altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"../img/projects/projects-mobile_3_1x.jpg",imageSrc2xM:"../img/projects/projects-mobile_3_2x.jpg",imageSrcTD:"../img/projects/projects_3_1x.jpg",imageSrc2xTD:"../img/projects/projects_3_2x.jpg",altText:"Third project"}],p=e=>`
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
                <source srcset="${e.imageSrc2xM}" media="(max-width: 767px) and (min-resolution: 192dpi)" />
                <source srcset="${e.imageSrcM}" media="(max-width: 767px)" />
                <source srcset="${e.imageSrc2xTD}" media="(min-width: 768px) and (min-resolution: 192dpi)" />
                <source srcset="${e.imageSrcTD}" media="(min-width: 768px)" />
                <img src="${e.imageSrcM}" alt="${e.altText}" loading="lazy" />
            </picture>
        </div>
    </div>
`;function u(){const e=document.querySelector(".swiper-wrapper"),n=m.map(a=>`
      <li class="swiper-slide">
        ${p(a)}
      </li>
    `).join("");e.innerHTML=n}function g(){new Swiper(".swiper-container",{loop:!1,navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"},slidesPerView:1,spaceBetween:30})}document.addEventListener("DOMContentLoaded",()=>{u(),g()});const f=document.querySelector(".header-menu-link"),i=document.querySelector(".header-menu-list"),j=document.querySelector(".burger-btn"),o=document.querySelector(".burger-menu"),y=document.querySelector(".close-btn"),v=document.querySelector(".burger-order-btn"),h=document.querySelector(".burger-menu-list"),w=window.matchMedia("(min-width: 768px)");f.addEventListener("click",s);j.addEventListener("click",A);y.addEventListener("click",c);i.addEventListener("click",s);v.addEventListener("click",c);h.addEventListener("click",c);w.addEventListener("change",D);document.body.addEventListener("click",e=>{!i.classList.contains("visually-hidden")&&!e.target.classList.contains("header-menu-link")&&s()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!i.classList.contains("visually-hidden")&&s()});const x=new KeyframeEffect(i,[{opacity:"0"},{opacity:"1"}],{duration:240,easing:"ease-in-out"}),S=new KeyframeEffect(i,[{opacity:"1"},{opacity:"0"}],{duration:240,easing:"ease-in-out"}),L=new Animation(x,document.timeline),b=new Animation(S,document.timeline),_=new KeyframeEffect(o,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:150}),E=new KeyframeEffect(o,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:150}),T=new Animation(_,document.timeline),M=new Animation(E,document.timeline);function s(){if(i.classList.contains("visually-hidden")){L.play(),i.classList.remove("visually-hidden");return}b.play(),setTimeout(()=>{i.classList.add("visually-hidden")},150)}function A(){o.classList.add("is-open"),T.play(),document.body.style.overflow="hidden"}function c(){M.play(),setTimeout(()=>{o.classList.remove("is-open")},150),document.body.style.overflow=""}function D(e){e.matches&&o.classList.contains("is-open")&&c()}
//# sourceMappingURL=commonHelpers.js.map
