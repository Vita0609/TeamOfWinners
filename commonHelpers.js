import{A as x,S as p,N as g,K as E,a as v,i as f,b as _}from"./assets/vendor-D7RW9HRX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();new x(".about-me-accordion-container",{duration:400,showMultiple:!0,openOnInit:[0]});const C=new p(".about-me-swiper",{modules:[g,E],loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0}});document.querySelector(".swiper-button-next").addEventListener("click",e=>{C.slideNext()});const y=document.querySelector(".overlay"),k=document.querySelector(".change-theme");k.addEventListener("click",T);y.addEventListener("click",A);function T(){y.classList.toggle("open")}function A(e){if(e.target===y)return T();if(e.target.localName==="button"){const t=e.target,o=getComputedStyle(t).backgroundColor;document.body.style.setProperty("--accent",o)}}const D=document.querySelector(".header-menu-link"),i=document.querySelector(".header-menu-list"),W=document.querySelector(".burger-btn"),c=document.querySelector(".burger-menu"),B=document.querySelector(".close-btn"),I=document.querySelector(".burger-order-btn"),P=document.querySelector(".burger-menu-list"),$=window.matchMedia("(min-width: 768px)");D.addEventListener("click",l);W.addEventListener("click",U);B.addEventListener("click",d);i.addEventListener("click",l);I.addEventListener("click",d);P.addEventListener("click",d);$.addEventListener("change",G);document.body.addEventListener("click",e=>{!i.classList.contains("visually-hidden")&&!e.target.classList.contains("header-menu-link")&&l()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!i.classList.contains("visually-hidden")&&l()});const V=new KeyframeEffect(i,[{opacity:"0"},{opacity:"1"}],{duration:240,easing:"ease-in-out"}),N=new KeyframeEffect(i,[{opacity:"1"},{opacity:"0"}],{duration:240,easing:"ease-in-out"}),R=new Animation(V,document.timeline),z=new Animation(N,document.timeline),F=new KeyframeEffect(c,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:150}),K=new KeyframeEffect(c,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:150}),X=new Animation(F,document.timeline),H=new Animation(K,document.timeline);function l(){if(i.classList.contains("visually-hidden")){R.play(),i.classList.remove("visually-hidden");return}z.play(),setTimeout(()=>{i.classList.add("visually-hidden")},150)}function U(){c.classList.add("is-open"),X.play(),document.body.style.overflow="hidden"}function d(){H.play(),setTimeout(()=>{c.classList.remove("is-open")},150),document.body.style.overflow=""}function G(e){e.matches&&c.classList.contains("is-open")&&d()}const J="/TeamOfWinners/assets/projects-mobile_1_1x-BPIF1pfW.jpg",Q="/TeamOfWinners/assets/projects-mobile_1_2x-D2Fb9Dfe.jpg",Z="/TeamOfWinners/assets/projects_1_1x-wy01NqWO.jpg",Y="/TeamOfWinners/assets/projects_1_2x-rSFEGpoI.jpg",ee="/TeamOfWinners/assets/projects-mobile_2_1x-C_nzhLeg.jpg",te="/TeamOfWinners/assets/projects-mobile_2_2x-BMv1qWxb.jpg",ne="/TeamOfWinners/assets/projects_2_1x-2XM29LCS.jpg",oe="/TeamOfWinners/assets/projects_2_2x-AtI0zLSA.jpg",se="/TeamOfWinners/assets/projects-mobile_3_1x-Cr5udOza.jpg",re="/TeamOfWinners/assets/projects-mobile_3_2x-D0fyeRNh.jpg",ie="/TeamOfWinners/assets/projects_3_1x-CvcX1Vug.jpg",ae="/TeamOfWinners/assets/projects_3_2x-DGoGwmgz.jpg",ce=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:J,imageSrc2xM:Q,imageSrcTD:Z,imageSrc2xTD:Y,altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:ee,imageSrc2xM:te,imageSrcTD:ne,imageSrc2xTD:oe,altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:se,imageSrc2xM:re,imageSrcTD:ie,imageSrc2xTD:ae,altText:"Third project"}],le=e=>`
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${e.tags.map(t=>`<li><p class="tag">${t}</p></li>`).join("")}
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
`;function de(){const e=document.querySelector(".swiper-wrapper-projects"),t=ce.map(o=>`
      <li class="swiper-slide">
        ${le(o)}
      </li>
    `).join("");e.innerHTML=t}function ue(){new p(".swiper-projects",{modules:[g,E],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".projects-btn-right",prevEl:".projects-btn-left"}})}document.addEventListener("DOMContentLoaded",()=>{de(),ue()});const O=document.querySelector(".back-to-top");window.onscroll=q;O.onclick=me;q();function me(){document.documentElement.scrollTo({top:0,behavior:"smooth"})}function q(){O.hidden=document.documentElement.scrollTop<400}addEventListener("DOMContentLoaded",function(){const e=document.getElementById("covers-section"),t=document.querySelectorAll(".covers-marquee__inner");function o(n){const s=n.getBoundingClientRect();return s.top>=0&&s.left>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&s.right<=(window.innerWidth||document.documentElement.clientWidth)}function r(){o(e)?t.forEach(n=>n.classList.add("moving")):t.forEach(n=>n.classList.remove("moving"))}window.addEventListener("scroll",r),window.addEventListener("resize",r),r()});const h="/TeamOfWinners/assets/icons-CJdEZIMB.svg";document.addEventListener("DOMContentLoaded",function(){new x(".accordion-container",{duration:300,elementClass:"faq-item",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",showMultiple:!0,beforeOpen:e=>{e.querySelector(".icon-answer use").setAttribute("href",`${h}#icon-up`)},beforeClose:e=>{e.querySelector(".icon-answer use").setAttribute("href",`${h}#icon-down`)}})});class pe{async sendEmail(t){try{return(await v.post("https://scary-bellanca-subx1s0o-48ef86b3.koyeb.app/mail/send",t)).data}catch(o){throw o}}async getReviews(){try{return(await v.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(t){throw t}}}const M=new pe;function ge(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase())}function fe(){let e=!1;function t(r){e=r}function o(){return e}return[o,t]}function b(e,t){t?(e.textContent="Loading...",e.disabled=!0):(e.textContent="Submit",e.disabled=!1)}const m=document.getElementById("form-footer"),ye=document.querySelector(".modal-text"),we=document.querySelector(".modal-description"),a=document.querySelector(".modal-overlay"),ve=document.querySelector("#email"),he=document.querySelector(".close-modal"),j=document.querySelector(".submit-btn-footer"),[S,L]=fe();m.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(m),o=t.get("email"),r={email:o,comment:t.get("comments")};if(!ge(o)){ve.style.borderColor=" red";return}try{L(!0),b(j,S());const n=await M.sendEmail(r);m.reset(),ye.textContent=n.title,we.textContent=n.message,a.style.visibility="visible",a.classList.add("visible")}catch{f.error({position:"topCenter",title:"Error",message:"Error while sending email, please try later."})}finally{L(!1),b(j,S())}});function w(){a.classList.remove("visible"),setTimeout(()=>{a.style.visibility="hidden"},500)}he.addEventListener("click",w);document.addEventListener("click",e=>{e.target===a&&w()});window.addEventListener("keydown",e=>{e.key==="Escape"&&w()});const be=document.querySelector(".reviews-section"),je=document.querySelector(".reviews-cards");async function Se(){try{return await M.getReviews()}catch{return f.error({position:"topRight",message:"Not Found"}),[]}}function Le(e){return e.map(t=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${t.avatar_url}" alt="${t.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${t.author}</h3>
          <p class="review-text">${t.review}</p>
        </div>
      </li>
  `).join("")}async function xe(){try{const e=await Se();if(e.length>0){const t=Le(e);je.insertAdjacentHTML("beforeend",t);const o=new p(be.querySelector(".swiper"),{modules:[g,_],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".project-btn-right",prevEl:" .project-btn-left"}})}}catch{f.error({position:"topRight",message:"Failed to load reviews"})}}xe();
//# sourceMappingURL=commonHelpers.js.map
