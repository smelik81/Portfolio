import{a as u,S as h,N as x,P as v,A as f,K as w,M}from"./assets/vendor-814922e1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(s){if(s.ep)return;s.ep=!0;const e=i(s);fetch(s.href,e)}})();const k=[{standartMob:"./img/My-projects-finacec-mob-@1x.jpg",retinaMob:"../img/My-projects-finacec-mob-@2x.jpg",standartTab:"./img/My-projects-finacec-tab-@1x.jpg",retinaTab:"./img/My-projects-finacec-tab@2x.jpg",standartDesk:"./img/My-projects-finacec-desck@1x.jpg",retinaDesk:"./img/My-projects-finacec-desck@2x.jpg",description:"Wallet webservice",title:"Wallet webservice"},{standartMob:"./src/img/My-projects-vegetables-mob-@1x.jpg",retinaMob:"./src/img/My-projects-vegetables-mob-@2x.jpg",standartTab:"./src/img/My-projects-vegetables-tab-@1x.jpg",retinaTab:"./src/img/My-projects-vegetables-tab-@2x.jpg",standartDesk:"./src/img/My-projects-vegetables-desck-@1x.jpg",retinaDesk:"./src/img/My-projects-vegetables-desck-@2x.jpg",description:"Green harvest webservice",title:"Green harvest webservice"},{standartMob:"/src/img/My-projects-english-mob@1x.jpg",retinaMob:"/src/img/My-projects-english-mob@2x.jpg",standartTab:"/src/img/My-projects-english-tab@1x.jpg",retinaTab:"/src/img/My-projects-english-tab@2x.jpg",standartDesk:"/src/img/My-projects-english-desck@1x.jpg",retinaDesk:"/src/img/My-projects-english-desck@2x.jpg",description:"English Exellence webservice",title:"English Exellence webservice"},{standartMob:"/img/my-project-business@1x.jpg",retinaMob:"/img/my-project-business@2x.jpg",standartTab:"/img/my-project-business@1x.jpg",retinaTab:"/img/my-project-business@2x.jpg",standartDesk:"/img/my-project-business@1x.jpg",retinaDesk:"/img/my-project-business@2x.jpg",description:"Starlight studio landing page",title:"starlight studio landing page"},{standartMob:"/src/img/my-project-artisty@1x.jpg",retinaMob:"/src/img/my-project-artisty@2x.jpg",standartTab:"/src/img/my-project-artisty@1x.jpg",retinaTab:"/src/img/my-project-artisty@2x.jpg",standartDesk:"/src/img/my-project-artisty@1x.jpg",retinaDesk:"/src/img/my-project-artisty@2x.jpg",description:"Vyshyvanka vibes Landing Page",title:"vyshyvanka vibes Landing Page"},{standartMob:"/src/img/my-project-fresh@1x.jpg",retinaMob:"/src/img/my-project-fresh@2x.jpg",standartTab:"/src/img/my-project-fresh@1x.jpg",retinaTab:"/src/img/my-project-fresh@2x.jpg",standartDesk:"/src/img/my-project-fresh@1x.jpg",retinaDesk:"/src/img/my-project-fresh@2x.jpg",description:"Fruitbox online store",title:"fruitbox online store"},{standartMob:"/src/img/my-project-mimino@1x.jpg",retinaMob:"/src/img/my-project-mimino@2x.jpg",standartTab:"/src/img/my-project-mimino@1x.jpg",retinaTab:"/src/img/my-project-mimino@2x.jpg",standartDesk:"/src/img/my-project-mimino@1x.jpg",retinaDesk:"/src/img/my-project-mimino@2x.jpg",description:"Mimino website",title:"mimino website"},{standartMob:"/src/img/my-project-nature@1x.jpg",retinaMob:"/src/img/my-project-nature@2x.jpg",standartTab:"/src/img/my-project-nature@1x.jpg",retinaTab:"/src/img/my-project-nature@2x.jpg",standartDesk:"/src/img/my-project-nature@1x.jpg",retinaDesk:"/src/img/my-project-nature@2x.jpg",description:"CHEGO jewelry website",title:"chego jewelry website"},{standartMob:"/src/img/my-project-PowerPlus@1x.jpg",retinaMob:"/src/img/my-project-PowerPlus@2x.jpg",standartTab:"/src/img/my-project-PowerPlus@1x.jpg",retinaTab:"/src/img/my-project-PowerPlus@2x.jpg",standartDesk:"/src/img/my-project-PowerPlus@1x.jpg",retinaDesk:"/src/img/my-project-PowerPlus@2x.jpg",description:"Power pulse webservice",title:"power pulse webservice "},{standartMob:"/src/img/my-project-stayHealhty@1x.jpg",retinaMob:"/src/img/my-project-stayHealhty@2x.jpg",standartTab:"/src/img/my-project-stayHealhty@1x.jpg",retinaTab:"/src/img/my-project-stayHealhty@2x.jpg",standartDesk:"/src/img/my-project-stayHealhty@1x.jpg",retinaDesk:"/src/img/my-project-stayHealhty@2x.jpg",description:"Energy flow webservice ",title:"energy flow webservice "}];document.querySelector(".my-project-item-btn-visit");const p=document.querySelector(".js-my-project-list"),y=document.querySelector(".js-my-project-btn-load-more"),n=screen.availWidth;let l=0;const j=k.map(({standartMob:o,retinaMob:t,standartTab:i,retinaTab:r,standartDesk:s,retinaDesk:e,title:a,description:g,technologyStack:c="React, JavaScript, Node JS, Git"})=>{const d=window.devicePixelRatio<2?n<768?o:n>=768&&n<1280?i:s:n<768?t:n>=768&&n<1280?r:e;return`
      <li class="my-project-item">
        <a class="my-project-link" href="${d}">
          <img class="my-project-image" src="${d}" alt="${g}"  width="320" height="194">
          </a>
          <p class="my-project-tech">${c}</p>
         <div class="my-project-div" > <h3 class="my-project-item-title">${a}</h3>
          </svg>
      <button onclick="window.open('https://github.com/smelik81/teamproject-js-08', '_blank')" class="my-project-item-btn-visit">VISIT
    <svg width="18" height="18" class="my-project-item-btn-visit-svg">
        <use href="../img/sprite_icon_opt.svg#icon-Arrow_visit_up"></use>
</button></div>
         </li>`});function b(){const o=j.slice(l,l+3);l+=3,o.forEach(i=>{const r=document.createElement("div");r.textContent=i.name,p.appendChild(r)});const t=["TEXT","DIV"];for(let i=p.childNodes.length-1;i>=0;i--){const r=p.childNodes[i];t.includes(r.nodeName)&&p.removeChild(r)}o.forEach(i=>{p.insertAdjacentHTML("beforeend",i)}),l>=j.length&&(y.style.display="none")}y.addEventListener("click",b);b();const T=o=>o.map(({_id:t,avatar_url:i,author:r,review:s})=>`<li class="reviews-list-item swiper-slide id="${t}">
                <div class="reviews-container">
                    <p class="list-text">${s.trim()}</p>
                    <div class="user-info">
                        <img class="avatar" src="${i}" alt="${r}" width="40px" height="40px">
                        <p class="reviews-username">${r}</p>
                    </div>

                </div>
            </li>`).join(""),P="https://portfolio-js.b.goit.study/api/reviews",m=document.querySelector(".reviews-list"),L=async()=>{try{let s=function(){const e=document.querySelector(".swiper-button-prev"),a=document.querySelector(".swiper-button-next");r.isBeginning?e.disabled=!0:e.disabled=!1,r.isEnd?a.disabled=!0:a.disabled=!1};const t=(await u.get(P)).data;if(t.length===0){m.innerHTML="<p>Not found</p>";return}const i=T(t);m.insertAdjacentHTML("beforeend",i);const r=new h(".swiper",{modules:[x,v,f,w,M],direction:"horizontal",loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}}})}catch(o){console.error("error fetching data",o),alert`Sorry, reviews not found.`,m.innerHTML="<p>Not found</p>"}};document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".ac-header"),t=document.querySelectorAll(".ac-panel"),i=document.querySelectorAll(".ac-svg"),r=document.querySelectorAll(".ac");r[0].classList.add("open"),i[0].classList.add("rotate"),o[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",t[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",t[0].style.maxHeight=t[0].scrollHeight+"px",o.forEach((s,e)=>{s.addEventListener("click",function(){const a=r[e].classList.contains("open");r.forEach((g,c)=>{g.classList.remove("open"),i[c].classList.remove("rotate"),t[c].classList.remove("open"),t[c].style.maxHeight=null,o[c].style.backgroundColor="#1e2023",t[c].style.backgroundColor="transparent"}),a||(r[e].classList.add("open"),i[e].classList.add("rotate"),t[e].classList.add("open"),t[e].style.maxHeight=t[e].scrollHeight+"px",o[e].style.backgroundColor="rgba(20, 197, 124, 0.2)",t[e].style.backgroundColor="rgba(20, 197, 124, 0.2)")})})});L();
//# sourceMappingURL=commonHelpers.js.map
