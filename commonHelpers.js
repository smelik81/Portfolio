import{a as W,S as z,N as K,P as _,A as G,K as J,M as U,i as X}from"./assets/vendor-b78c2430.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const Q="/teamproject-js-08/assets/My-projects-finacec-mob-@1x-7181ed85.jpg",Y="/teamproject-js-08/assets/My-projects-finacec-mob-@2x-16cd040b.jpg",Z="/teamproject-js-08/assets/My-projects-finacec-tab-@1x-38c67f93.jpg",ee="/teamproject-js-08/assets/My-projects-finacec-tab@2x-71d97678.jpg",te="/teamproject-js-08/assets/My-projects-finacec-desck@1x-461ec1ac.jpg",se="/teamproject-js-08/assets/My-projects-finacec-desck@2x-a8284659.jpg",ae="/teamproject-js-08/assets/My-projects-vegetables-mob-@1x-4991822b.jpg",oe="/teamproject-js-08/assets/My-projects-vegetables-mob-@2x-5ee524b9.jpg",ne="/teamproject-js-08/assets/My-projects-vegetables-tab-@1x-80767004.jpg",re="/teamproject-js-08/assets/My-projects-vegetables-tab-@2x-367d187f.jpg",ce="/teamproject-js-08/assets/My-projects-vegetables-desck-@1x-67e11d98.jpg",ie="/teamproject-js-08/assets/My-projects-vegetables-desck-@2x-e4de57fb.jpg",le="/teamproject-js-08/assets/My-projects-english-mob@1x-cc418ae4.jpg",de="/teamproject-js-08/assets/My-projects-english-mob@2x-8b31b76c.jpg",pe="/teamproject-js-08/assets/My-projects-english-tab@1x-5e9dfd93.jpg",me="/teamproject-js-08/assets/My-projects-english-tab@2x-df9b7d0a.jpg",ue="/teamproject-js-08/assets/My-projects-english-desck@1x-66eaec52.jpg",be="/teamproject-js-08/assets/My-projects-english-desck@2x-52c6a06c.jpg",w="/teamproject-js-08/assets/my-project-business@1x-453dc1a7.jpg",k="/teamproject-js-08/assets/my-project-business@2x-dcb3564d.jpg",M="/teamproject-js-08/assets/my-project-artisty@1x-e1966ce6.jpg",E="/teamproject-js-08/assets/my-project-artisty@2x-f865a371.jpg",L="/teamproject-js-08/assets/my-project-fresh@1x-c88d3a45.jpg",S="/teamproject-js-08/assets/my-project-fresh@2x-7c3cc483.jpg",x="/teamproject-js-08/assets/my-project-mimino@1x-5120051c.jpg",T="/teamproject-js-08/assets/my-project-mimino@2x-2bd02bb8.jpg",D="/teamproject-js-08/assets/my-project-nature@1x-7a40e5ec.jpg",P="/teamproject-js-08/assets/my-project-nature@2x-6d61de72.jpg",q="/teamproject-js-08/assets/my-project-PowerPlus@1x-a0ceb6ad.jpg",R="/teamproject-js-08/assets/my-project-PowerPlus@2x-0ab9547c.jpg",C="/teamproject-js-08/assets/my-project-stayHealhty@1x-3915d0f2.jpg",B="/teamproject-js-08/assets/my-project-stayHealhty@2x-7bb29976.jpg",je="/teamproject-js-08/assets/sprite_icon_opt-a290974e.svg",ge=[{standartMob:Q,retinaMob:Y,standartTab:Z,retinaTab:ee,standartDesk:te,retinaDesk:se,description:"Wallet webservice",title:"Wallet webservice"},{standartMob:ae,retinaMob:oe,standartTab:ne,retinaTab:re,standartDesk:ce,retinaDesk:ie,description:"Green harvest webservice",title:"Green harvest webservice"},{standartMob:le,retinaMob:de,standartTab:pe,retinaTab:me,standartDesk:ue,retinaDesk:be,description:"English Exellence webservice",title:"English Exellence webservice"},{standartMob:w,retinaMob:k,standartTab:w,retinaTab:k,standartDesk:w,retinaDesk:k,description:"Starlight studio landing page",title:"starlight studio landing page"},{standartMob:M,retinaMob:E,standartTab:M,retinaTab:E,standartDesk:M,retinaDesk:E,description:"Vyshyvanka vibes Landing Page",title:"vyshyvanka vibes Landing Page"},{standartMob:L,retinaMob:S,standartTab:L,retinaTab:S,standartDesk:L,retinaDesk:S,description:"Fruitbox online store",title:"fruitbox online store"},{standartMob:x,retinaMob:T,standartTab:x,retinaTab:T,standartDesk:x,retinaDesk:T,description:"Mimino website",title:"mimino website"},{standartMob:D,retinaMob:P,standartTab:D,retinaTab:P,standartDesk:D,retinaDesk:P,description:"CHEGO jewelry website",title:"chego jewelry website"},{standartMob:q,retinaMob:R,standartTab:q,retinaTab:R,standartDesk:q,retinaDesk:R,description:"Power pulse webservice",title:"power pulse webservice "},{standartMob:C,retinaMob:B,standartTab:C,retinaTab:B,standartDesk:C,retinaDesk:B,description:"Energy flow webservice ",title:"energy flow webservice "}];document.querySelector(".my-project-item-btn-visit");const b=document.querySelector(".js-my-project-list"),j=document.querySelector(".js-my-project-btn-load-more"),m=screen.availWidth;let v=0;const N=ge.map(({standartMob:n,retinaMob:s,standartTab:a,retinaTab:o,standartDesk:t,retinaDesk:e,title:r,description:d,technologyStack:l="React, JavaScript, Node JS, Git"})=>{const g=window.devicePixelRatio<2?m<768?n:m>=768&&m<1280?a:t:m<768?s:m>=768&&m<1280?o:e;return`
      <li class="my-project-item">
        <a class="my-project-link" href="${g}">
          <img class="my-project-image" src="${g}" alt="${d}"  width="320" height="194">
          </a>
          <p class="my-project-tech">${l}</p>
         <div class="my-project-div" > <h3 class="my-project-item-title">${r}</h3>
          </svg>
      <button onclick="window.open('https://github.com/smelik81/teamproject-js-08', '_blank')" class="my-project-item-btn-visit">VISIT
    <svg width="18" height="18" class="my-project-item-btn-visit-svg">
        <use href="${je}#icon-Arrow_visit_up"></use>
</button></div>
         </li>`});function O(){const n=N.slice(v,v+3);v+=3,n.forEach(a=>{const o=document.createElement("div");o.textContent=a.name,b.appendChild(o)});const s=["TEXT","DIV"];for(let a=b.childNodes.length-1;a>=0;a--){const o=b.childNodes[a];s.includes(o.nodeName)&&b.removeChild(o)}n.forEach(a=>{b.insertAdjacentHTML("beforeend",a)}),v>=N.length&&(j.style.display="none",j.removeEventListener("click",$))}function $(){j.scrollIntoView({behavior:"smooth"})}j.addEventListener("click",$);j.addEventListener("click",O);O();document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("mobileMenuBtn"),s=document.getElementById("modaleClose"),a=document.getElementById("mobileWindow");function o(){a.classList.add("is-open")}function t(){a.classList.remove("is-open")}n.addEventListener("click",o),s.addEventListener("click",t),document.querySelectorAll('.modale-item a[href^="#"]').forEach(e=>{e.addEventListener("click",function(r){r.preventDefault();const d=document.querySelector(this.getAttribute("href"));d&&(d.scrollIntoView({behavior:"smooth"}),t())})}),document.querySelectorAll("#mobileWindow a").forEach(e=>{e.addEventListener("click",function(r){t()})})});const ye=n=>n.map(({_id:s,avatar_url:a,author:o,review:t})=>`<li class="reviews-list-item swiper-slide id="${s}">
                <div class="reviews-container">
                    <p class="list-text">${t.trim()}</p>
                    <div class="user-info">
                        <img class="avatar" src="${a}" alt="${o}" width="40px" height="40px">
                        <p class="reviews-username">${o}</p>
                    </div>

                </div>
            </li>`).join(""),fe="https://portfolio-js.b.goit.study/api/reviews",A=document.querySelector(".reviews-list"),he=async()=>{try{let t=function(){const e=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");o.isBeginning?e.disabled=!0:e.disabled=!1,o.isEnd?r.disabled=!0:r.disabled=!1};const s=(await W.get(fe)).data;if(s.length===0){A.innerHTML="<p>Not found</p>";return}const a=ye(s);A.insertAdjacentHTML("beforeend",a);const o=new z(".swiper",{modules:[K,_,G,J,U],direction:"horizontal",loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}}})}catch(n){console.error("error fetching data",n),alert`Sorry, reviews not found.`,A.innerHTML="<p>Not found</p>"}};document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".ac-header"),s=document.querySelectorAll(".ac-panel"),a=document.querySelectorAll(".ac-svg"),o=document.querySelectorAll(".ac");o[0].classList.add("open"),a[0].classList.add("rotate"),n[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",s[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",s[0].style.maxHeight=s[0].scrollHeight+"px",n.forEach((t,e)=>{t.addEventListener("click",function(){const r=o[e].classList.contains("open");o.forEach((d,l)=>{d.classList.remove("open"),a[l].classList.remove("rotate"),s[l].classList.remove("open"),s[l].style.maxHeight=null,n[l].style.backgroundColor="#1e2023",s[l].style.backgroundColor="transparent"}),r||(o[e].classList.add("open"),a[e].classList.add("rotate"),s[e].classList.add("open"),s[e].style.maxHeight=s[e].scrollHeight+"px",n[e].style.backgroundColor="rgba(20, 197, 124, 0.2)",s[e].style.backgroundColor="rgba(20, 197, 124, 0.2)")})})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".contact-form"),s=document.getElementById("modal"),a=document.getElementById("backdrop"),o=document.querySelector(".close-button"),t=n.querySelector("#email"),e=n.querySelector("#message");t.addEventListener("focus",r),t.addEventListener("blur",d),e.addEventListener("focus",r),e.addEventListener("blur",l);function r(c){c.target.classList.remove("invalid")}function d(c){const i=c.target;i.checkValidity()||(i.classList.add("invalid"),u("Please enter a valid email address"))}function l(c){const i=c.target;i.value.trim()||(i.classList.add("invalid"),u("Please enter a message"))}n.addEventListener("submit",async c=>{c.preventDefault();const i=t.value.trim(),p=e.value.trim();if(!t.checkValidity()){u("Please enter a valid email address.","Error");return}if(!p){u("Please enter a message.","Error");return}const f={email:i,comment:p};console.log("Sending payload:",f);try{const h=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)});if(!h.ok){const V=await h.json();throw console.error("Server response:",V),new Error("Network response was not ok")}g(),n.reset()}catch(h){u("Failed to send the message. Please try again later.","Error"),console.error("Error fetching data:",h)}}),o.addEventListener("click",()=>{y()}),window.addEventListener("click",c=>{c.target===s&&y()});function g(){s.style.display="block",a.classList.add("show"),document.body.style.overflow="hidden",document.addEventListener("keydown",H),I()}function y(){s.style.display="none",a.classList.remove("show"),document.body.style.overflow="auto",document.removeEventListener("keydown",H)}function H(c){console.log("Key pressed:",c.key),c.key==="Escape"&&y()}a.addEventListener("click",y);function I(){const c=document.querySelector("main"),i=document.querySelector("header"),p=document.querySelector("footer");c&&i&&p&&document.querySelectorAll("main, header, footer").forEach(f=>{f.classList.add("disable-interaction")})}I();const F={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function u(c,i,p="#EF4040"){X.error({...F,title:i||"",message:`(${c}, ${i})`,backgroundColor:p})}});he();
//# sourceMappingURL=commonHelpers.js.map
