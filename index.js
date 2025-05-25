import{a as u,S as f,i as n}from"./assets/vendor-D2uqdJS0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const y="47540419-36cc7af233202b3a7b66af182",m="https://pixabay.com/api/";async function d(e){const o={key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await u.get(m,{params:o})).data}catch(t){return console.error("Помилка отримання зображень:",t),{hits:[]}}}let i;function g(e){const o=document.querySelector(".gallery");if(!o){console.error("Елемент .gallery не знайдено!");return}const t=e.hits.map(l=>`
         <li class="gallery-item">
      <a href="${l.largeImageURL}" class="gallery-link">
        <img src="${l.webformatURL}" alt="${l.tags}" loading="lazy">
      </a>
      <div class="image-info">
        <p>❤️ ${l.likes}</p>
        <p>👁️ ${l.views}</p>
        <p>💬 ${l.comments}</p>
        <p>⬇️ ${l.downloads}</p>
      </div>
    </li>

    `).join("");o.innerHTML=t,i?i.refresh():i=new f(".gallery a")}const c=document.querySelector(".gallery");c?c.querySelectorAll(".gallery-item").forEach(o=>o.remove()):console.error("Елемент .gallery не знайдено!");function p(){const e=document.querySelector(".loader");e?e.classList.remove("visible"):console.error("Елемент .loader не знайдено!")}function h(){const e=document.querySelector(".loader");e?e.classList.add("visible"):console.error("Елемент .loader не знайдено!")}function L(){const e=document.querySelector(".gallery");e?e.querySelectorAll(".gallery-item").forEach(t=>t.remove()):console.error("Елемент .gallery не знайдено!")}const S=document.querySelector(".form");S.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.elements["search-text"].value.trim();if(!o){n.error({message:"Будь ласка, введіть запит!"});return}L(),h();try{const t=await d(o);t.hits.length===0?n.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):g(t)}catch{n.error({message:"Не вдалося завантажити зображення!"})}p()});
//# sourceMappingURL=index.js.map
