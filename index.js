/* empty css                      */import{S as l,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="47057239-824e754b75c5fca36ae14ba66",m="https://pixabay.com/api/";async function u(s){const o=`${m}?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`,n=await fetch(o);if(!n.ok)throw new Error("Failed to fetch images");return(await n.json()).hits}function f(s){const o=document.getElementById("gallery"),n=s.map(t=>`
            <li>
                <a href="${t.largeImageURL}">
                    <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
                    <div class="info">
                        <p>Likes: ${t.likes}</p>
                        <p>Views: ${t.views}</p>
                        <p>Comments: ${t.comments}</p>
                        <p>Downloads: ${t.downloads}</p>
                    </div>
                </a>
            </li>
        `).join("");o.innerHTML=n}function g(){document.getElementById("gallery").innerHTML=""}const p=10;console.log(p);const y=document.getElementById("search-form"),h=document.getElementById("search-input");document.getElementById("gallery");document.getElementById("loader");let L=new l("#gallery a");y.addEventListener("submit",async s=>{s.preventDefault();const o=h.value.trim();if(!o){i.error({message:"Please enter a search term!"});return}g(),w();try{const n=await u(o);n.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!"}):(f(n),L.refresh())}catch{i.error({message:"An error occurred while fetching images. Please try again!"})}finally{I()}});const c=document.getElementById("loading-message");function w(){c.classList.remove("hidden")}function I(){c.classList.add("hidden")}
//# sourceMappingURL=index.js.map
