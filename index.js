import{a as f,S as p,i as l}from"./assets/vendor-Pp936Fs7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="58356222-807f47e5b0c6de8e7572d2af6";f.defaults.baseURL="https://pixabay.com/api/";async function g(i){return(await f.get("",{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const h=new p(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),a=document.querySelector(".loader");function y(i){const r=i.map(({largeImageURL:o,webformatURL:n,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${n}" alt="${e}" />
          </a>
          <div class="info">
            <p class="info-item">Likes: ${t}</p>
            <p class="info-item">Views: ${s}</p>
            <p class="info-item">Comments: ${u}</p>
            <p class="info-item">Downloads: ${d}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c&&(c.innerHTML="")}function b(){a&&a.classList.remove("hidden")}function v(){a&&a.classList.add("hidden")}const $=document.querySelector(".form");$.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){l.error({title:"увага",message:"Будь ласка, заповніть поле для пошуку",position:"topRight"});return}L(),b(),g(r).then(o=>{if(!o.hits||o.hits.length===0){l.error({title:"увага",message:"Вибачте, картинку не знайдено. Спробуйте ще раз!",position:"topRight"});return}y(o.hits)}).catch(o=>{console.error("Помилка",o),l.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз!",position:"topRight"})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
