import{a as u,S as h,N as f,P as v,A as x,K as w,M}from"./assets/vendor-db44d75e.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const k=[{standartMob:"./img/My-projects-finacec-mob-@1x.jpg",retinaMob:"./img/My-projects-finacec-mob-@2x.jpg",standartTab:"./img/My-projects-finacec-tab-@1x.jpg",retinaTab:"./img/My-projects-finacec-tab@2x.jpg",standartDesk:"./img/My-projects-finacec-desck@1x.jpg",retinaDesk:"./img/My-projects-finacec-desck@2x.jpg",description:"Wallet webservice",title:"Wallet webservice"},{standartMob:"./img/My-projects-vegetables-mob-@1x.jpg",retinaMob:"./img/My-projects-vegetables-mob-@2x.jpg",standartTab:"./img/My-projects-vegetables-tab-@1x.jpg",retinaTab:"./img/My-projects-vegetables-tab-@2x.jpg",standartDesk:"./img/My-projects-vegetables-desck-@1x.jpg",retinaDesk:"./img/My-projects-vegetables-desck-@2x.jpg",description:"Green harvest webservice",title:"Green harvest webservice"},{standartMob:"./img/My-projects-english-mob@1x.jpg",retinaMob:"./img/My-projects-english-mob@2x.jpg",standartTab:"./img/My-projects-english-tab@1x.jpg",retinaTab:"./img/My-projects-english-tab@2x.jpg",standartDesk:"./img/My-projects-english-desck@1x.jpg",retinaDesk:"./img/My-projects-english-desck@2x.jpg",description:"English Exellence webservice",title:"English Exellence webservice"},{standartMob:"./img/my-project-business@1x.jpg",retinaMob:"./img/my-project-business@2x.jpg",standartTab:"./img/my-project-business@1x.jpg",retinaTab:"./img/my-project-business@2x.jpg",standartDesk:"./img/my-project-business@1x.jpg",retinaDesk:"./img/my-project-business@2x.jpg",description:"Starlight studio landing page",title:"starlight studio landing page"},{standartMob:"./img/my-project-artisty@1x.jpg",retinaMob:"./img/my-project-artisty@2x.jpg",standartTab:"./img/my-project-artisty@1x.jpg",retinaTab:"./img/my-project-artisty@2x.jpg",standartDesk:"./img/my-project-artisty@1x.jpg",retinaDesk:"./img/my-project-artisty@2x.jpg",description:"Vyshyvanka vibes Landing Page",title:"vyshyvanka vibes Landing Page"},{standartMob:"./img/my-project-fresh@1x.jpg",retinaMob:"./img/my-project-fresh@2x.jpg",standartTab:"./img/my-project-fresh@1x.jpg",retinaTab:"./img/my-project-fresh@2x.jpg",standartDesk:"./img/my-project-fresh@1x.jpg",retinaDesk:"./img/my-project-fresh@2x.jpg",description:"Fruitbox online store",title:"fruitbox online store"},{standartMob:"./img/my-project-mimino@1x.jpg",retinaMob:"./img/my-project-mimino@2x.jpg",standartTab:"./img/my-project-mimino@1x.jpg",retinaTab:"./img/my-project-mimino@2x.jpg",standartDesk:"./img/my-project-mimino@1x.jpg",retinaDesk:"./img/my-project-mimino@2x.jpg",description:"Mimino website",title:"mimino website"},{standartMob:"./img/my-project-nature@1x.jpg",retinaMob:"./img/my-project-nature@2x.jpg",standartTab:"./img/my-project-nature@1x.jpg",retinaTab:"./img/my-project-nature@2x.jpg",standartDesk:"./img/my-project-nature@1x.jpg",retinaDesk:"./img/my-project-nature@2x.jpg",description:"CHEGO jewelry website",title:"chego jewelry website"},{standartMob:"./img/my-project-PowerPlus@1x.jpg",retinaMob:"./img/my-project-PowerPlus@2x.jpg",standartTab:"./img/my-project-PowerPlus@1x.jpg",retinaTab:"./img/my-project-PowerPlus@2x.jpg",standartDesk:"./img/my-project-PowerPlus@1x.jpg",retinaDesk:"./img/my-project-PowerPlus@2x.jpg",description:"Power pulse webservice",title:"power pulse webservice "},{standartMob:"./img/my-project-stayHealhty@1x.jpg",retinaMob:"./img/my-project-stayHealhty@2x.jpg",standartTab:"./img/my-project-stayHealhty@1x.jpg",retinaTab:"./img/my-project-stayHealhty@2x.jpg",standartDesk:"./img/my-project-stayHealhty@1x.jpg",retinaDesk:"./img/my-project-stayHealhty@2x.jpg",description:"Energy flow webservice ",title:"energy flow webservice "}];document.querySelector(".my-project-item-btn-visit");const p=document.querySelector(".js-my-project-list"),j=document.querySelector(".js-my-project-btn-load-more"),c=screen.availWidth;let l=0;const d=k.map(({standartMob:o,retinaMob:i,standartTab:r,retinaTab:s,standartDesk:t,retinaDesk:e,title:a,description:n,technologyStack:b="React, JavaScript, Node JS, Git"})=>{const m=window.devicePixelRatio<2?c<768?o:c>=768&&c<1280?r:t:c<768?i:c>=768&&c<1280?s:e;return`
      <li class="my-project-item">
        <a class="my-project-link" href="${m}">
          <img class="my-project-image" src="${m}" alt="${n}"  width="320" height="194">
          </a>
          <p class="my-project-tech">${b}</p>
         <div class="my-project-div" > <h3 class="my-project-item-title">${a}</h3>
          </svg>
      <button onclick="window.open('https://github.com/smelik81/teamproject-js-08', '_blank')" class="my-project-item-btn-visit">VISIT
    <svg width="18" height="18" class="my-project-item-btn-visit-svg">
        <use href="../img/sprite_icon_opt.svg#icon-Arrow_visit_up"></use>
</button></div>
         </li>`});function y(){const o=d.slice(l,l+3);l+=3,o.forEach(r=>{const s=document.createElement("div");s.textContent=r.name,p.appendChild(s)});const i=["TEXT","DIV"];for(let r=p.childNodes.length-1;r>=0;r--){const s=p.childNodes[r];i.includes(s.nodeName)&&p.removeChild(s)}o.forEach(r=>{p.insertAdjacentHTML("beforeend",r)}),l>=d.length&&(j.style.display="none")}j.addEventListener("click",y);y();const T=o=>o.map(({_id:i,avatar_url:r,author:s,review:t})=>`<li class="reviews-list-item swiper-slide id="${i}">
                <div class="reviews-container">
                    <p class="list-text">${t.trim()}</p>
                    <div class="user-info">
                        <img class="avatar" src="${r}" alt="${s}" width="40px" height="40px">
                        <p class="reviews-username">${s}</p>
                    </div>

                </div>
            </li>`).join(""),P="https://portfolio-js.b.goit.study/api/reviews",g=document.querySelector(".reviews-list"),L=async()=>{try{let t=function(){const e=document.querySelector(".swiper-button-prev"),a=document.querySelector(".swiper-button-next");s.isBeginning?e.disabled=!0:e.disabled=!1,s.isEnd?a.disabled=!0:a.disabled=!1};const i=(await u.get(P)).data;if(i.length===0){g.innerHTML="<p>Not found</p>";return}const r=T(i);g.insertAdjacentHTML("beforeend",r);const s=new h(".swiper",{modules:[f,v,x,w,M],direction:"horizontal",loop:!1,autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}}})}catch(o){console.error("error fetching data",o),alert`Sorry, reviews not found.`,g.innerHTML="<p>Not found</p>"}};document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".ac-header"),i=document.querySelectorAll(".ac-panel"),r=document.querySelectorAll(".ac-svg"),s=document.querySelectorAll(".ac");s[0].classList.add("open"),i[0].classList.add("open"),r[0].classList.add("rotate"),o[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",i[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",o.forEach((t,e)=>{t.addEventListener("click",function(){const a=s[e].classList.contains("open");s.forEach(n=>{n.classList.remove("open")}),i.forEach(n=>{n.classList.remove("open"),n.style.backgroundColor="transparent"}),r.forEach(n=>{n.classList.remove("rotate")}),o.forEach(n=>{n.style.backgroundColor="#1e2023"}),a||(s[e].classList.add("open"),i[e].classList.add("open"),r[e].classList.add("rotate"),o[e].style.backgroundColor="rgba(20, 197, 124, 0.2)",i[e].style.backgroundColor="rgba(20, 197, 124, 0.2)")})})});L();
//# sourceMappingURL=commonHelpers.js.map