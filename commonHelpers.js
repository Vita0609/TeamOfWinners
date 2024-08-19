import{S as f,N as y,K as h,A as j,i as g,a as S}from"./assets/vendor-ClbaxMW0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const b=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"/img/projects/projects-mobile_1_1x.jpg",imageSrc2xM:"/img/projects/projects-mobile_1_2x.jpg",imageSrcTD:"/img/projects/projects_1_1x.jpg",imageSrc2xTD:"/img/projects/projects_1_2x.jpg",altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"/img/projects/projects-mobile_2_1x.jpg",imageSrc2xM:"/img/projects/projects-mobile_2_2x.jpg",imageSrcTD:"/img/projects/projects_2_1x.jpg",imageSrc2xTD:"/img/projects/projects_2_2x.jpg",altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"/img/projects/projects-mobile_3_1x.jpg",imageSrc2xM:"/img/projects/projects-mobile_3_2x.jpg",imageSrcTD:"/img/projects/projects_3_1x.jpg",imageSrc2xTD:"/img/projects/projects_3_2x.jpg",altText:"Third project"}],L=t=>`
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${t.tags.map(r=>`<li><p class="tag">${r}</p></li>`).join("")}
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
`;function E(){const t=document.querySelector(".swiper-wrapper"),r=b.map(n=>`
      <li class="swiper-slide">
        ${L(n)}
      </li>
    `).join("");t.innerHTML=r}function x(){new f(".swiper-container",{modules:[y,h],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"}})}document.addEventListener("DOMContentLoaded",()=>{E(),x()});const a=document.querySelector(".reviews-section");if(a){let n=function(e){return e.map(o=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${o.avatar_url}" alt="${o.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${o.author}</h3>
          <p class="review-text">${o.review}</p>
        </div>
      </li>
  `).join("")};const t=a.querySelector(".reviews-cards");a.querySelector(".reviews-btn-prev"),a.querySelector(".reviews-btn-next");async function r(e){const w="https://portfolio-js.b.goit.study/api"+"/reviews";try{return(await fetch(w)).json()}catch(p){return console.log(p),g.error({position:"topRight",message:"Not Found"}),[]}}async function i(){try{const e=await r();if(e.length>0){const o=n(e);t.insertAdjacentHTML("beforeend",o);const c=new f(a.querySelector(".swiper"),{modules:[y,j],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".project-btn-left",prevEl:".project-btn-right"}})}else console.log("No reviews to display")}catch(e){console.log(e),g.error({position:"topRight",message:"Failed to load reviews"})}}i()}addEventListener("DOMContentLoaded",function(){const t=document.getElementById("covers-section"),r=document.querySelectorAll(".covers-marquee__inner");function n(e){const o=e.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function i(){n(t)?r.forEach(e=>e.classList.add("moving")):r.forEach(e=>e.classList.remove("moving"))}window.addEventListener("scroll",i),window.addEventListener("resize",i),i()});const _=document.querySelector(".header-menu-link"),s=document.querySelector(".header-menu-list"),T=document.querySelector(".burger-btn"),l=document.querySelector(".burger-menu"),q=document.querySelector(".close-btn"),A=document.querySelector(".burger-order-btn"),M=document.querySelector(".burger-menu-list"),O=window.matchMedia("(min-width: 768px)");_.addEventListener("click",d);T.addEventListener("click",R);q.addEventListener("click",u);s.addEventListener("click",d);A.addEventListener("click",u);M.addEventListener("click",u);O.addEventListener("change",V);document.body.addEventListener("click",t=>{!s.classList.contains("visually-hidden")&&!t.target.classList.contains("header-menu-link")&&d()});document.addEventListener("keydown",t=>{t.key==="Escape"&&!s.classList.contains("visually-hidden")&&d()});const P=new KeyframeEffect(s,[{opacity:"0"},{opacity:"1"}],{duration:240,easing:"ease-in-out"}),k=new KeyframeEffect(s,[{opacity:"1"},{opacity:"0"}],{duration:240,easing:"ease-in-out"}),D=new Animation(P,document.timeline),B=new Animation(k,document.timeline),$=new KeyframeEffect(l,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:150}),I=new KeyframeEffect(l,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:150}),N=new Animation($,document.timeline),C=new Animation(I,document.timeline);function d(){if(s.classList.contains("visually-hidden")){D.play(),s.classList.remove("visually-hidden");return}B.play(),setTimeout(()=>{s.classList.add("visually-hidden")},150)}function R(){l.classList.add("is-open"),N.play(),document.body.style.overflow="hidden"}function u(){C.play(),setTimeout(()=>{l.classList.remove("is-open")},150),document.body.style.overflow=""}function V(t){t.matches&&l.classList.contains("is-open")&&u()}new S(".accordion-container-faq",{duration:900,showMultiple:!0});const K=document.querySelectorAll(".btn-faq");K.forEach(t=>{t.addEventListener("click",()=>{t.querySelectorAll(".faq-btn-icon").forEach(n=>{n.classList.toggle("active")})})});const m=document.querySelector(".overlay"),H=document.querySelector(".change-theme");H.addEventListener("click",v);m.addEventListener("click",W);function v(){m.classList.toggle("open")}function W(t){if(t.target===m)return v();if(t.target.localName==="button"){const r=t.target,n=getComputedStyle(r).backgroundColor;document.body.style.setProperty("--accent",n)}}
//# sourceMappingURL=commonHelpers.js.map
