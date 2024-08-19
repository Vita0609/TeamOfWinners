import{A,S as L,N as E,K as M,a as k,i as g,b as w}from"./assets/vendor-CFaU8ryu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const f=document.querySelector(".overlay"),B=document.querySelector(".change-theme");B.addEventListener("click",x);f.addEventListener("click",D);function x(){f.classList.toggle("open")}function D(e){if(e.target===f)return x();if(e.target.localName==="button"){const o=e.target,r=getComputedStyle(o).backgroundColor;document.body.style.setProperty("--accent",r)}}const q=document.querySelector(".back-to-top");window.onscroll=T;q.onclick=O;T();function O(){document.documentElement.scrollTo({top:0,behavior:"smooth"})}function T(){q.hidden=document.documentElement.scrollTop<400}addEventListener("DOMContentLoaded",function(){const e=document.getElementById("covers-section"),o=document.querySelectorAll(".covers-marquee__inner");function r(t){const n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}function s(){r(e)?o.forEach(t=>t.classList.add("moving")):o.forEach(t=>t.classList.remove("moving"))}window.addEventListener("scroll",s),window.addEventListener("resize",s),s()});new A(".accordion-container-faq",{duration:900,showMultiple:!0});const P=document.querySelectorAll(".btn-faq");P.forEach(e=>{e.addEventListener("click",()=>{e.querySelectorAll(".faq-btn-icon").forEach(r=>{r.classList.toggle("active")})})});const $=document.querySelector(".header-menu-link"),i=document.querySelector(".header-menu-list"),C=document.querySelector(".burger-btn"),d=document.querySelector(".burger-menu"),I=document.querySelector(".close-btn"),N=document.querySelector(".burger-order-btn"),R=document.querySelector(".burger-menu-list"),V=window.matchMedia("(min-width: 768px)");$.addEventListener("click",u);C.addEventListener("click",G);I.addEventListener("click",m);i.addEventListener("click",u);N.addEventListener("click",m);R.addEventListener("click",m);V.addEventListener("change",J);document.body.addEventListener("click",e=>{!i.classList.contains("visually-hidden")&&!e.target.classList.contains("header-menu-link")&&u()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!i.classList.contains("visually-hidden")&&u()});const K=new KeyframeEffect(i,[{opacity:"0"},{opacity:"1"}],{duration:240,easing:"ease-in-out"}),F=new KeyframeEffect(i,[{opacity:"1"},{opacity:"0"}],{duration:240,easing:"ease-in-out"}),H=new Animation(K,document.timeline),W=new Animation(F,document.timeline),z=new KeyframeEffect(d,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:150}),U=new KeyframeEffect(d,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:150}),X=new Animation(z,document.timeline),Q=new Animation(U,document.timeline);function u(){if(i.classList.contains("visually-hidden")){H.play(),i.classList.remove("visually-hidden");return}W.play(),setTimeout(()=>{i.classList.add("visually-hidden")},150)}function G(){d.classList.add("is-open"),X.play(),document.body.style.overflow="hidden"}function m(){Q.play(),setTimeout(()=>{d.classList.remove("is-open")},150),document.body.style.overflow=""}function J(e){e.matches&&d.classList.contains("is-open")&&m()}const Y=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"/img/projects/projects-mobile_1_1x.jpg",imageSrc2xM:"/img/projects/projects-mobile_1_2x.jpg",imageSrcTD:"/img/projects/projects_1_1x.jpg",imageSrc2xTD:"/img/projects/projects_1_2x.jpg",altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"/img/projects/projects-mobile_2_1x.jpg",imageSrc2xM:"/img/projects/projects-mobile_2_2x.jpg",imageSrcTD:"/img/projects/projects_2_1x.jpg",imageSrc2xTD:"/img/projects/projects_2_2x.jpg",altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:"/img/projects/projects-mobile_3_1x.jpg",imageSrc2xM:"/img/projects/projects-mobile_3_2x.jpg",imageSrcTD:"/img/projects/projects_3_1x.jpg",imageSrc2xTD:"/img/projects/projects_3_2x.jpg",altText:"Third project"}],Z=e=>`
    <div class="project-card">
        <div class="project-card-info">
            <ul class="tags-list">
                ${e.tags.map(o=>`<li><p class="tag">${o}</p></li>`).join("")}
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
`;function ee(){const e=document.querySelector(".swiper-wrapper"),o=Y.map(r=>`
      <li class="swiper-slide">
        ${Z(r)}
      </li>
    `).join("");e.innerHTML=o}function te(){new L(".swiper-container",{modules:[E,M],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"}})}document.addEventListener("DOMContentLoaded",()=>{ee(),te()});const a=document.querySelector(".reviews-section");if(a){let r=function(t){return t.map(n=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${n.avatar_url}" alt="${n.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${n.author}</h3>
          <p class="review-text">${n.review}</p>
        </div>
      </li>
  `).join("")};const e=a.querySelector(".reviews-cards");a.querySelector(".reviews-btn-prev"),a.querySelector(".reviews-btn-next");async function o(t){const _="https://portfolio-js.b.goit.study/api"+"/reviews";try{return(await fetch(_)).json()}catch(v){return console.log(v),g.error({position:"topRight",message:"Not Found"}),[]}}async function s(){try{const t=await o();if(t.length>0){const n=r(t);e.insertAdjacentHTML("beforeend",n);const c=new L(a.querySelector(".swiper"),{modules:[E,k],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".project-btn-left",prevEl:".project-btn-right"}})}else console.log("No reviews to display")}catch(t){console.log(t),g.error({position:"topRight",message:"Failed to load reviews"})}}s()}class oe{async sendEmail(o){try{return(await w.post("https://scary-bellanca-subx1s0o-48ef86b3.koyeb.app/mail/send",o)).data}catch(r){throw r}}async getReviews(){try{return(await w.get("https://portfolio-js.b.goit.study/api/requests")).data}catch(o){throw o}}}const ne=new oe;function re(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase())}function se(){let e=!1;function o(s){e=s}function r(){return e}return[r,o]}function h(e,o){o?(e.textContent="Loading...",e.disabled=!0):(e.textContent="Submit",e.disabled=!1)}const p=document.getElementById("form-footer"),ie=document.querySelector(".modal-text"),ce=document.querySelector(".modal-description"),l=document.querySelector(".modal-overlay"),ae=document.querySelector("#email"),le=document.querySelector(".close-modal"),b=document.querySelector(".submit-btn-footer"),[j,S]=se();p.addEventListener("submit",async e=>{e.preventDefault();const o=new FormData(p),r=o.get("email"),s={email:r,comment:o.get("comments")};if(!re(r)){ae.style.borderColor=" red";return}try{S(!0),h(b,j());const t=await ne.sendEmail(s);p.reset(),ie.textContent=t.title,ce.textContent=t.message,l.style.visibility="visible",l.classList.add("visible")}catch{g.error({position:"topCenter",title:"Error",message:"Error while sending email, please try later."})}finally{S(!1),h(b,j())}});function y(){l.classList.remove("visible"),setTimeout(()=>{l.style.visibility="hidden"},500)}le.addEventListener("click",y);document.addEventListener("click",e=>{e.target===l&&y()});window.addEventListener("keydown",e=>{e.key==="Escape"&&y()});
//# sourceMappingURL=commonHelpers.js.map
