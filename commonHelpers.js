(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",function(){const c=document.querySelectorAll(".ac-header"),o=document.querySelectorAll(".ac-panel"),n=document.querySelectorAll(".ac-svg"),s=document.querySelectorAll(".ac");s[0].classList.add("open"),o[0].classList.add("open"),n[0].classList.add("rotate"),c[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",o[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",c.forEach((t,e)=>{t.addEventListener("click",function(){const a=s[e].classList.contains("open");s.forEach(r=>{r.classList.remove("open")}),o.forEach(r=>{r.classList.remove("open"),r.style.backgroundColor="transparent"}),n.forEach(r=>{r.classList.remove("rotate")}),c.forEach(r=>{r.style.backgroundColor="#1e2023"}),a||(s[e].classList.add("open"),o[e].classList.add("open"),n[e].classList.add("rotate"),c[e].style.backgroundColor="rgba(20, 197, 124, 0.2)",o[e].style.backgroundColor="rgba(20, 197, 124, 0.2)")})})});
//# sourceMappingURL=commonHelpers.js.map