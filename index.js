import{a as p,S as m,i as h}from"./assets/vendor-CNpXvI_o.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="48935513-8997d7f633aa985d826258f4d",g="https://pixabay.com/api/",b=s=>p.get(g,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{console.error(r)}),c=document.querySelector(".gallery"),L=()=>{c.innerHTML=""},v=s=>{const r=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:d,comments:u,downloads:f})=>`<a class="gallery-item" href="${e}">
          <div class="photo-card">
            <img src="${n}" alt="${t}" />
            <div class="info">
              <p><b>Likes:</b> ${i}</p>
              <p><b>Views:</b> ${d}</p>
              <p><b>Comments:</b> ${u}</p>
              <p><b>Downloads:</b> ${f}</p>
            </div>
          </div>
        </a>`).join("");c.insertAdjacentHTML("beforeend",r),new m(".gallery a").refresh()},a=document.querySelector("#search-form"),q=document.querySelector(".form-input"),l=document.querySelector(".loader");function S(){l.classList.add("active")}function x(){l.classList.remove("active")}a.addEventListener("submit",s=>{s.preventDefault();const r=q.value.trim();L(),S(),b(r).then(o=>{if(x(),o.length===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.reset();return}v(o),a.reset()}).catch(o=>{console.error(o)})});
//# sourceMappingURL=index.js.map
