import{S as t,N as i,K as a}from"./vendor-DxL_t5AH.js";const o="/TeamOfWinners/assets/projects-mobile_1_1x-BPIF1pfW.jpg",n="/TeamOfWinners/assets/projects-mobile_1_2x-D2Fb9Dfe.jpg",c="/TeamOfWinners/assets/projects_1_1x-wy01NqWO.jpg",p="/TeamOfWinners/assets/projects_1_2x-rSFEGpoI.jpg",m="/TeamOfWinners/assets/projects-mobile_2_1x-C_nzhLeg.jpg",g="/TeamOfWinners/assets/projects-mobile_2_2x-BMv1qWxb.jpg",j="/TeamOfWinners/assets/projects_2_1x-2XM29LCS.jpg",l="/TeamOfWinners/assets/projects_2_2x-AtI0zLSA.jpg",d="/TeamOfWinners/assets/projects-mobile_3_1x-Cr5udOza.jpg",x="/TeamOfWinners/assets/projects-mobile_3_2x-D0fyeRNh.jpg",T="/TeamOfWinners/assets/projects_3_1x-CvcX1Vug.jpg",S="/TeamOfWinners/assets/projects_3_2x-DGoGwmgz.jpg",_=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:o,imageSrc2xM:n,imageSrcTD:c,imageSrc2xTD:p,altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:m,imageSrc2xM:g,imageSrcTD:j,imageSrc2xTD:l,altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:d,imageSrc2xM:x,imageSrcTD:T,imageSrc2xTD:S,altText:"Third project"}],f=e=>`
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${e.tags.map(s=>`<li><p class="tag">${s}</p></li>`).join("")}
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
`;function u(){const e=document.querySelector(".swiper-wrapper-projects"),s=_.map(r=>`
      <li class="swiper-slide">
        ${f(r)}
      </li>
    `).join("");e.innerHTML=s}function w(){new t(".swiper-projects",{modules:[i,a],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".projects-btn-right",prevEl:".projects-btn-left"}})}document.addEventListener("DOMContentLoaded",()=>{u(),w()});
//# sourceMappingURL=projects-D9xcJ8Y2.js.map
