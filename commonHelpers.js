import{a as O,S as $,N as F,P as V,A as W,K as z,M as _,i as G}from"./assets/vendor-b78c2430.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const J="/teamproject-js-08/assets/My-projects-finacec-mob-@1x-7181ed85.jpg",K="/teamproject-js-08/assets/My-projects-finacec-mob-@2x-16cd040b.jpg",U="/teamproject-js-08/assets/My-projects-finacec-tab-@1x-38c67f93.jpg",X="/teamproject-js-08/assets/My-projects-finacec-tab@2x-71d97678.jpg",Q="/teamproject-js-08/assets/My-projects-finacec-desck@1x-461ec1ac.jpg",Y="/teamproject-js-08/assets/My-projects-finacec-desck@2x-a8284659.jpg",Z="/teamproject-js-08/assets/My-projects-vegetables-mob-@1x-4991822b.jpg",ee="/teamproject-js-08/assets/My-projects-vegetables-mob-@2x-5ee524b9.jpg",te="/teamproject-js-08/assets/My-projects-vegetables-tab-@1x-80767004.jpg",se="/teamproject-js-08/assets/My-projects-vegetables-tab-@2x-367d187f.jpg",ae="/teamproject-js-08/assets/My-projects-vegetables-desck-@1x-67e11d98.jpg",oe="/teamproject-js-08/assets/My-projects-vegetables-desck-@2x-e4de57fb.jpg",ne="/teamproject-js-08/assets/My-projects-english-mob@1x-cc418ae4.jpg",re="/teamproject-js-08/assets/My-projects-english-mob@2x-8b31b76c.jpg",ie="/teamproject-js-08/assets/My-projects-english-tab@1x-5e9dfd93.jpg",ce="/teamproject-js-08/assets/My-projects-english-tab@2x-df9b7d0a.jpg",le="/teamproject-js-08/assets/My-projects-english-desck@1x-66eaec52.jpg",de="/teamproject-js-08/assets/My-projects-english-desck@2x-52c6a06c.jpg",f="/teamproject-js-08/assets/my-project-business@1x-453dc1a7.jpg",v="/teamproject-js-08/assets/my-project-business@2x-dcb3564d.jpg",h="/teamproject-js-08/assets/my-project-artisty@1x-e1966ce6.jpg",w="/teamproject-js-08/assets/my-project-artisty@2x-f865a371.jpg",M="/teamproject-js-08/assets/my-project-fresh@1x-c88d3a45.jpg",k="/teamproject-js-08/assets/my-project-fresh@2x-7c3cc483.jpg",S="/teamproject-js-08/assets/my-project-mimino@1x-5120051c.jpg",E="/teamproject-js-08/assets/my-project-mimino@2x-2bd02bb8.jpg",L="/teamproject-js-08/assets/my-project-nature@1x-7a40e5ec.jpg",x="/teamproject-js-08/assets/my-project-nature@2x-6d61de72.jpg",T="/teamproject-js-08/assets/my-project-PowerPlus@1x-a0ceb6ad.jpg",D="/teamproject-js-08/assets/my-project-PowerPlus@2x-0ab9547c.jpg",P="/teamproject-js-08/assets/my-project-stayHealhty@1x-3915d0f2.jpg",R="/teamproject-js-08/assets/my-project-stayHealhty@2x-7bb29976.jpg",pe="/teamproject-js-08/assets/sprite_icon_opt-9d89e1bc.svg",me=[{standartMob:J,retinaMob:K,standartTab:U,retinaTab:X,standartDesk:Q,retinaDesk:Y,description:"Wallet webservice",title:"Wallet webservice"},{standartMob:Z,retinaMob:ee,standartTab:te,retinaTab:se,standartDesk:ae,retinaDesk:oe,description:"Green harvest webservice",title:"Green harvest webservice"},{standartMob:ne,retinaMob:re,standartTab:ie,retinaTab:ce,standartDesk:le,retinaDesk:de,description:"English Exellence webservice",title:"English Exellence webservice"},{standartMob:f,retinaMob:v,standartTab:f,retinaTab:v,standartDesk:f,retinaDesk:v,description:"Starlight studio landing page",title:"starlight studio landing page"},{standartMob:h,retinaMob:w,standartTab:h,retinaTab:w,standartDesk:h,retinaDesk:w,description:"Vyshyvanka vibes Landing Page",title:"vyshyvanka vibes Landing Page"},{standartMob:M,retinaMob:k,standartTab:M,retinaTab:k,standartDesk:M,retinaDesk:k,description:"Fruitbox online store",title:"fruitbox online store"},{standartMob:S,retinaMob:E,standartTab:S,retinaTab:E,standartDesk:S,retinaDesk:E,description:"Mimino website",title:"mimino website"},{standartMob:L,retinaMob:x,standartTab:L,retinaTab:x,standartDesk:L,retinaDesk:x,description:"CHEGO jewelry website",title:"chego jewelry website"},{standartMob:T,retinaMob:D,standartTab:T,retinaTab:D,standartDesk:T,retinaDesk:D,description:"Power pulse webservice",title:"power pulse webservice "},{standartMob:P,retinaMob:R,standartTab:P,retinaTab:R,standartDesk:P,retinaDesk:R,description:"Energy flow webservice ",title:"energy flow webservice "}];document.querySelector(".my-project-item-btn-visit");const b=document.querySelector(".js-my-project-list"),H=document.querySelector(".js-my-project-btn-load-more"),p=screen.availWidth;let y=0;const B=me.map(({standartMob:n,retinaMob:s,standartTab:o,retinaTab:a,standartDesk:t,retinaDesk:e,title:r,description:d,technologyStack:l="React, JavaScript, Node JS, Git"})=>{const m=window.devicePixelRatio<2?p<768?n:p>=768&&p<1280?o:t:p<768?s:p>=768&&p<1280?a:e;return`
      <li class="my-project-item">
        <a class="my-project-link" href="${m}">
          <img class="my-project-image" src="${m}" alt="${d}"  width="320" height="194">
          </a>
          <p class="my-project-tech">${l}</p>
         <div class="my-project-div" > <h3 class="my-project-item-title">${r}</h3>
          </svg>
      <button onclick="window.open('https://github.com/smelik81/teamproject-js-08', '_blank')" class="my-project-item-btn-visit">VISIT
    <svg width="18" height="18" class="my-project-item-btn-visit-svg">
        <use href="${pe}#icon-Arrow_visit_up"></use>
</button></div>
         </li>`});function A(){const n=B.slice(y,y+3);y+=3,n.forEach(o=>{const a=document.createElement("div");a.textContent=o.name,b.appendChild(a)});const s=["TEXT","DIV"];for(let o=b.childNodes.length-1;o>=0;o--){const a=b.childNodes[o];s.includes(a.nodeName)&&b.removeChild(a)}n.forEach(o=>{b.insertAdjacentHTML("beforeend",o)}),y>=B.length&&(H.style.display="none")}H.addEventListener("click",A);A();document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("mobileMenuBtn"),s=document.getElementById("modaleClose"),o=document.getElementById("mobileWindow");function a(){o.classList.add("is-open")}function t(){o.classList.remove("is-open")}n.addEventListener("click",a),s.addEventListener("click",t),document.querySelectorAll('.modale-item a[href^="#"]').forEach(e=>{e.addEventListener("click",function(r){r.preventDefault();const d=document.querySelector(this.getAttribute("href"));d&&(d.scrollIntoView({behavior:"smooth"}),t())})}),document.querySelectorAll("#mobileWindow a").forEach(e=>{e.addEventListener("click",function(r){t()})})});const ue=n=>n.map(({_id:s,avatar_url:o,author:a,review:t})=>`<li class="reviews-list-item swiper-slide id="${s}">
                <div class="reviews-container">
                    <p class="list-text">${t.trim()}</p>
                    <div class="user-info">
                        <img class="avatar" src="${o}" alt="${a}" width="40px" height="40px">
                        <p class="reviews-username">${a}</p>
                    </div>

                </div>
            </li>`).join(""),be="https://portfolio-js.b.goit.study/api/reviews",C=document.querySelector(".reviews-list"),je=async()=>{try{let t=function(){const e=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");a.isBeginning?e.disabled=!0:e.disabled=!1,a.isEnd?r.disabled=!0:r.disabled=!1};const s=(await O.get(be)).data;if(s.length===0){C.innerHTML="<p>Not found</p>";return}const o=ue(s);C.insertAdjacentHTML("beforeend",o);const a=new $(".swiper",{modules:[F,V,W,z,_],direction:"horizontal",loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}}})}catch(n){console.error("error fetching data",n),alert`Sorry, reviews not found.`,C.innerHTML="<p>Not found</p>"}};document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".ac-header"),s=document.querySelectorAll(".ac-panel"),o=document.querySelectorAll(".ac-svg"),a=document.querySelectorAll(".ac");a[0].classList.add("open"),o[0].classList.add("rotate"),n[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",s[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",s[0].style.maxHeight=s[0].scrollHeight+"px",n.forEach((t,e)=>{t.addEventListener("click",function(){const r=a[e].classList.contains("open");a.forEach((d,l)=>{d.classList.remove("open"),o[l].classList.remove("rotate"),s[l].classList.remove("open"),s[l].style.maxHeight=null,n[l].style.backgroundColor="#1e2023",s[l].style.backgroundColor="transparent"}),r||(a[e].classList.add("open"),o[e].classList.add("rotate"),s[e].classList.add("open"),s[e].style.maxHeight=s[e].scrollHeight+"px",n[e].style.backgroundColor="rgba(20, 197, 124, 0.2)",s[e].style.backgroundColor="rgba(20, 197, 124, 0.2)")})})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".contact-form"),s=document.getElementById("modal"),o=document.querySelector(".close-button"),a=n.querySelector("#email"),t=n.querySelector("#message");a.addEventListener("focus",e),a.addEventListener("blur",r),t.addEventListener("focus",e),t.addEventListener("blur",d);function e(i){i.target.classList.remove("invalid")}function r(i){const c=i.target;c.checkValidity()||(c.classList.add("invalid"),u("Please enter a valid email address"))}function d(i){const c=i.target;c.value.trim()||(c.classList.add("invalid"),u("Please enter a message"))}n.addEventListener("submit",async i=>{i.preventDefault();const c=a.value.trim(),j=t.value.trim();if(!a.checkValidity()){u("Please enter a valid email address.","Error");return}if(!j){u("Please enter a message.","Error");return}const q={email:c,comment:j};console.log("Sending payload:",q);try{const g=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)});if(!g.ok){const I=await g.json();throw console.error("Server response:",I),new Error("Network response was not ok")}l(),n.reset()}catch(g){u("Failed to send the message. Please try again later.","Error"),console.error("Error fetching data:",g)}}),o.addEventListener("click",()=>{m()}),window.addEventListener("click",i=>{i.target===s&&m()});function l(){s.style.display="block"}function m(){s.style.display="none"}const N={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function u(i,c,j="#EF4040"){G.error({...N,title:c||"",message:`(${i}, ${c})`,backgroundColor:j})}});je();
//# sourceMappingURL=commonHelpers.js.map
