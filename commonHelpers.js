(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"../img/projects/projects-mobile_1_1x.jpg",imageSrc2xM:"../img/projects/projects-mobile_1_2x.jpg",imageSrcTD:"../img/projects/projects_1_1x.jpg",imageSrc2xTD:"../img/projects/projects_1_2x.jpg",altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"../img/projects/projects-mobile_2_1x.jpg",imageSrc2xM:"../img/projects/projects-mobile_2_2x.jpg",imageSrcTD:"../img/projects/projects_2_1x.jpg",imageSrc2xTD:"../img/projects/projects_2_2x.jpg",altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"../img/projects/projects-mobile_3_1x.jpg",imageSrc2xM:"../img/projects/projects-mobile_3_2x.jpg",imageSrcTD:"../img/projects/projects_3_1x.jpg",imageSrc2xTD:"../img/projects/projects_3_2x.jpg",altText:"Third project"}],n=r=>`
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${r.tags.map(i=>`<li><p class="tag">${i}</p></li>`).join("")}
            </ul>
            <h3 class="project-card-title">${r.title}</h3>
            <a href="https://github.com/Vita0609/TeamOfWinners" target="_blank" rel="noopener norefferer" class="project-card-btn">See project</a>
        </div>
        <div class="project-image-wrapper">
            <picture>
                <source srcset="${r.imageSrc2xM}" media="(max-width: 767px) and (min-resolution: 192dpi)" />
                <source srcset="${r.imageSrcM}" media="(max-width: 767px)" />
                <source srcset="${r.imageSrc2xTD}" media="(min-width: 768px) and (min-resolution: 192dpi)" />
                <source srcset="${r.imageSrcTD}" media="(min-width: 768px)" />
                <img src="${r.imageSrcM}" alt="${r.altText}" loading="lazy" />
            </picture>
        </div>
    </div>
`;function p(){const r=document.querySelector(".swiper-wrapper"),i=a.map(s=>`
      <li class="swiper-slide">
        ${n(s)}
      </li>
    `).join("");r.innerHTML=i}function g(){new Swiper(".swiper-container",{loop:!1,navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"},slidesPerView:1,spaceBetween:30})}document.addEventListener("DOMContentLoaded",()=>{p(),g()});
//# sourceMappingURL=commonHelpers.js.map
