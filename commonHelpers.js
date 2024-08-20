import{A,S as v,N as b,K as _,a as T,i as x,b as F}from"./assets/vendor-BBMlQ5Ue.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const S=document.querySelector(".overlay"),N=document.querySelector(".change-theme");N.addEventListener("click",k);S.addEventListener("click",K);function k(){S.classList.toggle("open")}function K(e){if(e.target===S)return k();if(e.target.localName==="button"){const n=e.target.dataset.color;document.body.style.setProperty("--accent",n),config.lineColor=config.dotColor=n}}const P=document.querySelector(".back-to-top");window.onscroll=I;P.onclick=X;I();function X(){document.documentElement.scrollTo({top:0,behavior:"smooth"})}function I(){P.hidden=document.documentElement.scrollTop<400}new A(".about-me-accordion-container",{duration:400,showMultiple:!0,openOnInit:[0]});const H=new v(".about-me-swiper",{modules:[b,_],loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0}});document.querySelector(".swiper-button-next").addEventListener("click",e=>{H.slideNext()});const l=document.querySelector(".canvas-decoration"),c=l.getContext("2d");B();window.addEventListener("resize",B);const a={maxSpeed:20,minSpeed:50,density:150,lineThreshold:150,dotColor:"#ed3b44",lineColor:"#ed3b44",bgColor:"#1c1d20"};let m=[];function B(){l.width=innerWidth,l.height=innerHeight}function d(e,t){return e+Math.round(Math.random()*(t-e))}const i=70;function U(){let e,t;return Math.random()>.5?(e=Math.random()>.5?l.width+i+d(1,i):-i-d(1,i),t=d(-i,l.height+i)):(t=Math.random()>.5?l.height+i+d(1,i):-i-d(1,i),e=d(-i,l.width+i)),{x:e,y:t}}function G(e){const t={},n=d(a.minSpeed,a.maxSpeed),s=d(a.minSpeed,a.maxSpeed);return t.x=e.x<0?n:e.x>l.width?-n:d(-a.maxSpeed,a.maxSpeed),t.y=e.y<0?s:e.y>l.height?-s:d(-a.maxSpeed,a.maxSpeed),t}function Q(e){return e.pos.x<-i&&e.speed.x<0||e.pos.y<-i&&e.speed.y<0||e.pos.x>l.width+i&&e.speed.x>0||e.pos.y>l.height+i&&e.speed.y>0}class Y{constructor(){this.pos=U(),this.radius=d(2,4),this.speed=G(this.pos),this.shouldBeRemoved=!1}update(t){this.pos.x+=this.speed.x*t,this.pos.y+=this.speed.y*t,this.shouldBeRemoved=Q(this)}}function J(){for(let e=m.length;e<a.density;e++)m.push(new Y)}function Z(){m=m.filter(e=>!e.shouldBeRemoved)}function L(e){const t=/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/.exec(e),n=parseInt(t[1],16),s=parseInt(t[2],16),o=parseInt(t[3],16);return[n,s,o]}function ee(e){c.beginPath(),c.moveTo(e.pos.x,e.pos.y),c.arc(e.pos.x,e.pos.y,e.radius,0,Math.PI*2);const[t,n,s]=L(a.dotColor);c.fillStyle=`rgb(${t} ${n} ${s})`,c.fill()}function te(){for(const e of m)ee(e)}function ne(e){c.lineWidth=2;for(const t of e){const[n,s]=t;c.beginPath(),c.moveTo(n.x,n.y),c.lineTo(s.x,s.y),c.closePath();const o=W(n,s),r=(a.lineThreshold-o)/a.lineThreshold,[u,V,z]=L(a.lineColor);c.strokeStyle=`rgb(${u} ${V} ${z} / ${r})`,c.stroke()}}function oe(){const[e,t,n]=L(a.bgColor);c.fillStyle=`rgb(${e} ${t} ${n})`,c.fillRect(0,0,l.width,l.height)}function se(e){oe(),ne(re()),te()}function W(e,t){const n=Math.max(e.x,t.x)-Math.min(e.x,t.x),s=Math.max(e.y,t.y)-Math.min(e.y,t.y);return Math.sqrt(n**2+s**2)}function re(){const e=[],t=m.length;for(let n=0;n<t;n++){const s=m[n];for(let o=0;o<t;o++){if(n==o)continue;const r=m[o];W(s.pos,r.pos)<=a.lineThreshold&&e.push([s.pos,r.pos])}}return e}function ie(e){let t=null;function n(s){if(t){const o=Math.min(100,s-t)/1e3;e(o)&&requestAnimationFrame(n)}else requestAnimationFrame(n);t=s}requestAnimationFrame(n)}ie(e=>{Z(),J();for(const t of m)t.update(e);return se(),!0});window.config=a;addEventListener("DOMContentLoaded",function(){const e=document.getElementById("covers-section"),t=document.querySelectorAll(".covers-marquee__inner");function n(o){const r=o.getBoundingClientRect();return r.top>=0&&r.left>=0&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&r.right<=(window.innerWidth||document.documentElement.clientWidth)}function s(){n(e)?t.forEach(o=>o.classList.add("moving")):t.forEach(o=>o.classList.remove("moving"))}window.addEventListener("scroll",s),window.addEventListener("resize",s),s()});const E="/TeamOfWinners/assets/icons-xKU4PvbT.svg";document.addEventListener("DOMContentLoaded",function(){new A(".accordion-container",{duration:300,elementClass:"faq-item",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",showMultiple:!0,beforeOpen:e=>{e.querySelector(".icon-answer use").setAttribute("href",`${E}#icon-up`)},beforeClose:e=>{e.querySelector(".icon-answer use").setAttribute("href",`${E}#icon-down`)}})});class ae{async sendEmail(t){try{return(await T.post("https://scary-bellanca-subx1s0o-48ef86b3.koyeb.app/mail/send",t)).data}catch(n){throw n}}async getReviews(){try{return(await T.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(t){throw t}}}const R=new ae;function ce(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase())}function le(){let e=!1;function t(s){e=s}function n(){return e}return[n,t]}function M(e,t){t?(e.textContent="Loading...",e.disabled=!0):(e.textContent="Submit",e.disabled=!1)}const w=document.getElementById("form-footer"),de=document.querySelector(".modal-text"),ue=document.querySelector(".modal-description"),f=document.querySelector(".modal-overlay"),C=document.querySelector("#email"),q=document.querySelector("#comment"),me=document.querySelector(".close-modal"),D=document.querySelector(".submit-btn-footer"),[O,$]=le();w.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(w),n=t.get("email"),s=t.get("comments"),o={email:n,comment:s};let r=!0;if(C.style.borderColor="",q.style.borderColor="",ce(n)||(C.style.borderColor="red",r=!1),s.trim()||(q.style.borderColor="red",r=!1),!!r)try{$(!0),M(D,O());const u=await R.sendEmail(o);w.reset(),de.textContent=u.title,ue.textContent=u.message,f.style.visibility="visible",f.classList.add("visible")}catch{x.error({position:"topCenter",title:"Error",message:"Error while sending email, please try later."})}finally{$(!1),M(D,O())}});function j(){f.classList.remove("visible"),setTimeout(()=>{f.style.visibility="hidden"},500)}me.addEventListener("click",j);document.addEventListener("click",e=>{e.target===f&&j()});window.addEventListener("keydown",e=>{e.key==="Escape"&&j()});const pe=document.querySelector(".header-menu-link"),p=document.querySelector(".header-menu-list"),fe=document.querySelector(".burger-btn"),g=document.querySelector(".burger-menu"),ge=document.querySelector(".close-btn"),he=document.querySelector(".burger-order-btn"),ye=document.querySelector(".burger-menu-list"),we=window.matchMedia("(min-width: 768px)");pe.addEventListener("click",h);fe.addEventListener("click",Me);ge.addEventListener("click",y);p.addEventListener("click",h);he.addEventListener("click",y);ye.addEventListener("click",y);we.addEventListener("change",Ce);document.body.addEventListener("click",e=>{!p.classList.contains("visually-hidden")&&!e.target.classList.contains("header-menu-link")&&h()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!p.classList.contains("visually-hidden")&&h()});const ve=new KeyframeEffect(p,[{opacity:"0"},{opacity:"1"}],{duration:240,easing:"ease-in-out"}),be=new KeyframeEffect(p,[{opacity:"1"},{opacity:"0"}],{duration:240,easing:"ease-in-out"}),xe=new Animation(ve,document.timeline),Se=new Animation(be,document.timeline),Le=new KeyframeEffect(g,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:150}),je=new KeyframeEffect(g,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:150}),Te=new Animation(Le,document.timeline),Ee=new Animation(je,document.timeline);function h(){if(p.classList.contains("visually-hidden")){xe.play(),p.classList.remove("visually-hidden");return}Se.play(),setTimeout(()=>{p.classList.add("visually-hidden")},150)}function Me(){g.classList.add("is-open"),Te.play(),document.body.style.overflow="hidden"}function y(){Ee.play(),setTimeout(()=>{g.classList.remove("is-open")},150),document.body.style.overflow=""}function Ce(e){e.matches&&g.classList.contains("is-open")&&y()}const qe="/TeamOfWinners/assets/projects-mobile_1_1x-BPIF1pfW.jpg",De="/TeamOfWinners/assets/projects-mobile_1_2x-D2Fb9Dfe.jpg",Oe="/TeamOfWinners/assets/projects_1_1x-wy01NqWO.jpg",$e="/TeamOfWinners/assets/projects_1_2x-rSFEGpoI.jpg",Ae="/TeamOfWinners/assets/projects-mobile_2_1x-C_nzhLeg.jpg",_e="/TeamOfWinners/assets/projects-mobile_2_2x-BMv1qWxb.jpg",ke="/TeamOfWinners/assets/projects_2_1x-2XM29LCS.jpg",Pe="/TeamOfWinners/assets/projects_2_2x-AtI0zLSA.jpg",Ie="/TeamOfWinners/assets/projects-mobile_3_1x-Cr5udOza.jpg",Be="/TeamOfWinners/assets/projects-mobile_3_2x-D0fyeRNh.jpg",We="/TeamOfWinners/assets/projects_3_1x-CvcX1Vug.jpg",Re="/TeamOfWinners/assets/projects_3_2x-DGoGwmgz.jpg",Ve=[{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:qe,imageSrc2xM:De,imageSrcTD:Oe,imageSrc2xTD:$e,altText:"First project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:Ae,imageSrc2xM:_e,imageSrcTD:ke,imageSrc2xTD:Pe,altText:"Second project"},{title:"Programming Across Borders: Ideas, Technologies, Innovations",tags:["#react","#js","#node js","#git"],imageSrcM:Ie,imageSrc2xM:Be,imageSrcTD:We,imageSrc2xTD:Re,altText:"Third project"}],ze=e=>`
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
`;function Fe(){const e=document.querySelector(".swiper-wrapper-projects"),t=Ve.map(n=>`
      <li class="swiper-slide">
        ${ze(n)}
      </li>
    `).join("");e.innerHTML=t}function Ne(){new v(".swiper-projects",{modules:[b,_],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".projects-btn-right",prevEl:".projects-btn-left"}})}document.addEventListener("DOMContentLoaded",()=>{Fe(),Ne()});const Ke=document.querySelector(".reviews-section"),Xe=document.querySelector(".reviews-cards");async function He(){try{return await R.getReviews()}catch{return x.error({position:"topRight",message:"Not Found"}),[]}}function Ue(e){return e.map(t=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${t.avatar_url}" alt="${t.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${t.author}</h3>
          <p class="review-text">${t.review}</p>
        </div>
      </li>
  `).join("")}async function Ge(){try{const e=await He();if(e.length>0){const t=Ue(e);Xe.insertAdjacentHTML("beforeend",t);const n=new v(Ke.querySelector(".swiper"),{modules:[b,F],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".project-btn-right",prevEl:".project-btn-left"}})}}catch{x.error({position:"topRight",message:"Failed to load reviews"})}}Ge();
//# sourceMappingURL=commonHelpers.js.map
