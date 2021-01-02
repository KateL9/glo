(()=>{"use strict";const e=function(e){var t=document.getElementById(e),n=document.createElement("div");n.style.cssText="font-size: 2rem",n.style.color="#fff",t.addEventListener("submit",(function(e){o(e,t)}));var o=function(e,t){e.preventDefault(),t.appendChild(n),n.textContent="Загрузка...";var o=new FormData(t),r={};o.forEach((function(e,t){r[t]=e})),a(r).then((function(e){if(200!==e.status)throw new Error("status network not 200");var o,a,r;n.textContent="Спасибо! Мы скоро свяжемся с вами!",t.reset(),o=document.querySelector(".popup"),a=document.querySelector(".popup-content"),r=Date.now(),setTimeout((function(){n.textContent=""}),1e3),setTimeout((function(){var e=Date.now()-r;a.style.left=3*e+"px",o.style.display="none"}),2e3)})).catch((function(e){n.textContent="Что-то пошло не так...",console.log(e)}))},a=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}};var t,n,o,a,r,c,s,l,u,i,d,m,v;i=document.querySelector("#timer-hours"),d=document.querySelector("#timer-minutes"),m=document.querySelector("#timer-seconds"),v=setInterval((function(){var e,t,n,o=(e=(new Date("26 january 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),{timeRemaining:e,hours:Math.floor(e/60/60),minutes:n,seconds:t});o.hours.toString().length<=1?i.textContent="0"+o.hours:i.textContent=o.hours,o.minutes.toString().length<=1?d.textContent="0"+o.minutes:d.textContent=o.minutes,o.seconds.toString().length<=1?m.textContent="0"+o.seconds:m.textContent=o.seconds,o.timeRemaining<=0&&(clearInterval(v),i.textContent="00",d.textContent="00",m.textContent="00")}),10),l=document.querySelector(".menu"),u=document.querySelector("menu"),l.addEventListener("click",(function(){u.style.transform&&"translate(-100%)"!==u.style.transform?u.style.transform="translate(-100%)":u.style.transform="translate(0)"})),u.addEventListener("click",(function(e){var t=e.target;(t.classList.contains("close-btn")||t.closest(".menu")||t.closest("a"))&&(u.style.transform="translate(-100%)")})),r=document.querySelector(".popup"),c=document.querySelectorAll(".popup-btn"),s=document.querySelector(".popup-content"),c.forEach((function(e){e.addEventListener("click",(function(){if(document.documentElement.clientWidth>768)var e=Date.now(),t=setInterval((function(){var n=Date.now()-e;r.style.display="block",s.style.left=2*n+"px",n>=300&&clearInterval(t)}),20);else r.style.display="block"})),r.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?r.style.display="none":(t=t.closest(".popup-content"))||(r.style.display="none")}))})),n=document.querySelector(".service-header"),o=n.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab"),n.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&o.forEach((function(e,n){e===t&&function(e){for(var t=0;t<a.length;t++)e===t?(o[t].classList.add("active"),a[t].classList.remove("d-none")):(o[t].classList.remove("active"),a[t].classList.add("d-none"))}(n)}))})),function(){var e,t,n=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots"),a=document.querySelector(".portfolio-content"),r=0;!function(){for(var t=0;t<=n.length-1;t++){var a=document.createElement("li");a.classList.add("dot"),0==t&&a.classList.add("dot-active"),o.append(a)}e=document.querySelectorAll(".dot")}();var c=function(e,t,n){e[t].classList.remove(n)},s=function(e,t,n){e[t].classList.add(n)},l=function(){c(n,r,"portfolio-item-active"),c(e,r,"dot-active"),++r>=n.length&&(r=0),s(n,r,"portfolio-item-active"),s(e,r,"dot-active")},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;t=setInterval(l,e)};a.addEventListener("click",(function(t){t.preventDefault();var o=t.target;o.matches(".portfolio-btn, .dot")&&(c(n,r,"portfolio-item-active"),c(e,r,"dot-active"),o.matches("#arrow-right")?r++:o.matches("#arrow-left")?r--:o.matches(".dot")&&e.forEach((function(e,t){e===o&&(r=t)})),r>=n.length&&(r=0),r<0&&(r=n.length-1),s(n,r,"portfolio-item-active"),s(e,r,"dot-active"))})),a.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(t)})),a.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(1500)}(),(t=document.querySelector("#command .row")).addEventListener("mouseover",(function(e){if(e.target.classList.contains("command__photo")){var t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}})),t.addEventListener("mouseout",(function(e){if(e.target.classList.contains("command__photo")){var t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=function(){document.querySelector(".calc-block").addEventListener("input",(function(e){"INPUT"==e.target.tagName&&(e.target.value=e.target.value.replace(/\D/g,""))}))};t();var n=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),s=document.getElementById("total"),l=function(){var t=0,n=1,l=1,u=o.options[o.selectedIndex].value,i=+a.value;c.value>1&&(n+=(c.value-1)/10),r.value&&r.value<5?l*=2:r.value&&r.value<10&&(l*=1.5),u&&i&&(t=Math.floor(e*u*i*n*l)),s.textContent=t,o.options[o.selectedIndex].value||(t=0,a.value="",c.value="",r.value="")};n.addEventListener("change",(function(e){var t=e.target;(t.matches(".calc-type")||t.matches(".calc-square")||t.matches(".calc-day")||t.matches(".calc-count"))&&l()}))}(100),document.body.addEventListener("input",(function(e){var t=e.target;"INPUT"===t.tagName&&"user_name"==t.name?t.value=t.value.replace(/[^а-я\s]/gi,""):"INPUT"===t.tagName&&"user_phone"==t.name?(t.setAttribute("maxLength",13),t.value=t.value.replace(/[^+\d$]/,"")):"INPUT"===t.tagName&&"user_message"==t.name?t.value=t.value.replace(/[^а-яёА-ЯЁ\s\,\.\!\?\-]/gi,""):"INPUT"===t.tagName&&"user_email"==t.name&&(t.value=t.value.replace(/[^a-z-0-9@.\s]/i,""))})),document.body.addEventListener("focusout",(function(e){var t=e.target;"user_phone"==t.name?t.value.length<7&&alert("Введите от 7 до 13 цифр, включая +"):"user_email"==t.name&&!1===/^\w+@\w+\.\w{2,}$/.test(t.value)&&alert("Введите корректный e-mail")})),e("form1"),e("form2"),e("form3")})();