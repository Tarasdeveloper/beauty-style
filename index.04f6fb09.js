!function(){document.addEventListener("DOMContentLoaded",()=>{let t=window.location.pathname;for(let e of document.querySelectorAll(".navigation a"))e.getAttribute("href")===t&&e.classList.add("current")});let t=document.getElementById("scrollUpButton");window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight/2?t.style.transform="translate3d(0, 0, 0)":t.style.transform="translate3d(0, 100px, 0)"}),t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("DOMContentLoaded",function(){let t=document.querySelectorAll(".tab"),e=document.querySelectorAll(".pricing-content_item");t.forEach(t=>{t.addEventListener("click",function(){e.forEach(t=>{t.style.display="none"});let t=this.getAttribute("data-tab");document.getElementById(t).style.display="block"})})}),document.addEventListener("DOMContentLoaded",function(){let t=document.querySelectorAll(".tab"),e=document.querySelectorAll(".pricing-content_item");t.forEach((n,d)=>{if(n.addEventListener("click",function(){e.forEach(t=>{t.setAttribute("hidden","true"),t.setAttribute("aria-hidden","true")}),t.forEach(t=>{t.classList.remove("active")});let n=this.getAttribute("data-tab"),d=document.getElementById(n);d.removeAttribute("hidden"),d.removeAttribute("aria-hidden"),this.classList.add("active")}),0===d){n.classList.add("active");let t=n.getAttribute("data-tab"),e=document.getElementById(t);e.removeAttribute("hidden"),e.removeAttribute("aria-hidden")}})})}();
//# sourceMappingURL=index.04f6fb09.js.map
