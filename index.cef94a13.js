!function(){document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll("section"),t=document.querySelectorAll("nav a");window.addEventListener("scroll",()=>{let n="";e.forEach(e=>{let t=e.offsetTop,i=e.clientHeight;pageYOffset>=t-i/3&&(n=e.getAttribute("id"))}),t.forEach(e=>{e.classList.remove("header-nav-link--active"),e.getAttribute("href").slice(1)===n&&e.classList.add("header-nav-link--active")})})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".tab"),t=document.querySelectorAll(".pricing-content_item");e.forEach((n,i)=>{n.addEventListener("click",function(){t.forEach(e=>{e.classList.remove("active")});let n=this.getAttribute("data-tab");document.getElementById(n).classList.add("active"),e.forEach(e=>{e.classList.remove("active")}),this.classList.add("active")}),0===i&&n.classList.add("active")})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("href").substring(1),n=document.getElementById(t);if(n){let e;let t=window.scrollY,i=n.offsetTop-t;requestAnimationFrame(function n(s){void 0===e&&(e=s);let o=s-e,c=Math.min(o/1500,1);window.scrollTo(0,t+i*(c<.5?4*c**3:(c-1)*(2*c-2)*(2*c-2)+1)),o<1500&&requestAnimationFrame(n)})}})})});let e=document.getElementById("scrollUpButton");function t(){document.querySelectorAll(".animated-element").forEach(function(e){if(function(e){let t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(1.3*window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(e)){let t=e.dataset.animation;e.classList.add("animated",t)}})}window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight/2?e.style.transform="translate3d(0, 0, 0)":e.style.transform="translate3d(0, 100px, 0)"}),window.addEventListener("scroll",function(){let e=document.querySelector(".header");window.scrollY>=50?e.classList.add("header-sticky"):e.classList.remove("header-sticky")}),document.addEventListener("scroll",t),document.addEventListener("DOMContentLoaded",t),window.onload=function(){window.scrollTo(0,0)},document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("form");async function t(t){t.preventDefault();let i=function(e){let t=0,i=document.querySelectorAll("._req");for(let e=0;e<i.length;e++){let s=i[e];s.parentElement.classList.remove("_error"),s.classList.remove("_error"),s.classList.contains("_email")?!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(s.value)&&(n(s),t++):""===s.value&&(n(s),t++)}return t}(0),s=new FormData(e);if(0===i){e.classList.add("_sending");let t=await fetch("sendmail.php",{method:"POST",body:s});if(t.ok){let n=await t.json();alert(n.message),e.reset(),e.classList.remove("_sending")}else e.reset(),alert("Error happend"),e.classList.remove("_sending")}else alert("Fill all fields please")}function n(e){e.parentElement.classList.add("_error"),e.classList.add("_error")}e.addEventListener("submit",t)});let n=document.querySelector(".nav-menu__btn"),i=document.querySelector(".header-nav-links"),s=document.querySelector(".header-nav-backdrop"),o=document.querySelector(".social-button"),c=document.querySelector(".social-links");n.addEventListener("click",function(){n.classList.toggle("active"),i.classList.toggle("active"),s.classList.toggle("active"),c.classList.remove("active"),o.classList.remove("active")}),s.addEventListener("click",function(){n.classList.remove("active"),i.classList.remove("active"),s.classList.remove("active"),c.classList.remove("active"),o.classList.remove("active")}),o.addEventListener("click",function(){n.classList.remove("active"),i.classList.remove("active"),s.classList.toggle("active"),c.classList.toggle("active"),o.classList.toggle("active")})}();
//# sourceMappingURL=index.cef94a13.js.map
