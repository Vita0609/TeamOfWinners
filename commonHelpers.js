(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c="/TeamOfWinners/assets/projects-mobile_1_1x.jpg",a="/TeamOfWinners/assets/projects-mobile_1_2x.jpg",m="/TeamOfWinners/assets/projects_1_1x.jpg",l="/TeamOfWinners/assets/projects_1_2x.jpg",p="/TeamOfWinners/assets/projects-mobile_2_1x.jpg",g="/TeamOfWinners/assets/projects-mobile_2_2x.jpg",d="/TeamOfWinners/assets/projects_2_1x.jpg",f="/TeamOfWinners/assets/projects_2_2x.jpg",u="/TeamOfWinners/assets/projects-mobile_3_1x.jpg",x="/TeamOfWinners/assets/projects-mobile_3_2x.jpg",j="/TeamOfWinners/assets/projects_3_1x.jpg",_="/TeamOfWinners/assets/projects_3_2x.jpg",T=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:c,imageSrc2xM:a,imageSrcTD:m,imageSrc2xTD:l,altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:p,imageSrc2xM:g,imageSrcTD:d,imageSrc2xTD:f,altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:u,imageSrc2xM:x,imageSrcTD:j,imageSrc2xTD:_,altText:"Third project"}],S=s=>`
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${s.tags.map(r=>`<li><p class="tag">${r}</p></li>`).join("")}
            </ul>
            <h3 class="project-card-title">${s.title}</h3>
            <a href="https://github.com/Vita0609/TeamOfWinners" target="_blank" rel="noopener norefferer" class="project-card-btn">See project</a>
        </div>
        <div class="project-image-wrapper">
            <picture>
                <source srcset="${s.imageSrc2xM}" media="(max-width: 767px) and (min-resolution: 192dpi)" />
                <source srcset="${s.imageSrcM}" media="(max-width: 767px)" />
                <source srcset="${s.imageSrc2xTD}" media="(min-width: 768px) and (min-resolution: 192dpi)" />
                <source srcset="${s.imageSrcTD}" media="(min-width: 768px)" />
                <img src="${s.imageSrcM}" alt="${s.altText}" loading="lazy" />
            </picture>
        </div>
    </div>
`;function h(){const s=document.querySelector(".swiper-wrapper"),r=T.map(i=>`
      <li class="swiper-slide">
        ${S(i)}
      </li>
    `).join("");s.innerHTML=r}function b(){new Swiper(".swiper-container",{loop:!1,navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"},slidesPerView:1,spaceBetween:30})}document.addEventListener("DOMContentLoaded",()=>{h(),b()});
//# sourceMappingURL=commonHelpers.js.map
