(()=>{"use strict";function e(e,t){const o=document.createElement("div");return o.className=e,o.id=t,"undefined"===o.id&&(o.id=e),o}function t(e,t){const o=new Image;return o.className=e,o.id=t,"undefined"===o.id&&(o.id=e),o}function o(e,t){const o=document.createElement("button");return o.className=e,o.textContent=t,o}let n=["C"];function c(e){const t=document.querySelector(".set-c"),o=document.querySelector(".set-f");n=[],n.push(e),console.log(n),n.includes("C")?(a(),t.style.backgroundColor="var(--day-button-bg-color)",o.style.backgroundColor="var(--day-bg-color)"):(a(),t.style.backgroundColor="var(--day-bg-color)",o.style.backgroundColor="var(--day-button-bg-color)")}let r=["New York City"];async function a(e){let t;void 0===e||""===e?t=r:(t=e,r=[],r.push(e));let o=`http://api.weatherapi.com/v1/forecast.json?key=4e0461a2596747cfb3e125853230404&days=3&q=${t}`;console.log(o);try{const e=await fetch(o,{mode:"cors"}),t=await e.json();!function(e,t,o){document.querySelector(".city-location").textContent=t.name,document.querySelector(".city-time").textContent=t.localtime.slice(10),document.querySelector(".current-icon").src=o.forecastday[0].day.condition.icon,document.querySelector(".weather-condition").textContent=e.condition.text;const c=document.querySelector(".current-temp"),r=document.querySelector(".feels-like"),a=document.querySelector(".high-temp"),d=document.querySelector(".low-temp");n.includes("C")?(c.textContent=`${e.temp_c}°C`,r.textContent=`Feels Like: ${e.feelslike_c}°C`,a.textContent=`H: ${o.forecastday[0].day.maxtemp_c}°C`,d.textContent=`L: ${o.forecastday[0].day.mintemp_c}°C`):(c.textContent=`${e.temp_f}°F`,r.textContent=`Feels Like: ${e.feelslike_f}°F`,a.textContent=`H: ${o.forecastday[0].day.maxtemp_f}°F`,d.textContent=`L: ${o.forecastday[0].day.mintemp_f}°F`)}(t.current,t.location,t.forecast),function(e){const t=document.querySelector(".tomorrow-forecast"),o=t.querySelectorAll("div"),c=document.querySelector(".two-days-forecast"),r=c.querySelectorAll("div"),a=t.querySelector(".tomorrow-icon"),d=c.querySelector(".two-days-icon");let i;console.log(e.forecastday),a.src=e.forecastday[1].day.condition.icon,d.src=e.forecastday[2].day.condition.icon,i=!!n.includes("C");for(let t=0;t<o.length;t++)0===t?o[t].textContent=e.forecastday[1].date:1===t?o[t].textContent=i?`H: ${e.forecastday[1].day.maxtemp_c}°C`:`H: ${e.forecastday[1].day.maxtemp_f}°F`:2===t&&(o[t].textContent=i?`L: ${e.forecastday[1].day.mintemp_c}°C`:`L: ${e.forecastday[1].day.mintemp_f}°F`);for(let t=0;t<r.length;t++)0===t?r[t].textContent=e.forecastday[2].date:1===t?r[t].textContent=i?`H: ${e.forecastday[2].day.maxtemp_c}°C`:`H: ${e.forecastday[2].day.maxtemp_f}°F`:2===t&&(r[t].textContent=i?`L: ${e.forecastday[2].day.mintemp_c}°C`:`L: ${e.forecastday[2].day.mintemp_f}°F`)}(t.forecast),function(e){const t=document.querySelectorAll(".hour-temp"),o=document.querySelectorAll(".hour-icon"),c=document.querySelectorAll(".hour-time");let r;r=!!n.includes("C");for(let n=0;n<t.length;n++)o[n].src=e.forecastday[0].hour[n].condition.icon,c[n].textContent=e.forecastday[0].hour[n].time.slice(10),t[n].textContent=r?`${e.forecastday[0].hour[n].temp_c}°C`:`${e.forecastday[0].hour[n].temp_f}°F`}(t.forecast)}catch(e){console.log(e)}}a(),function(){const n=document.querySelector(".application"),r=function(){const t=e("header"),n=function(e,t,o,n){const c=document.createElement("input");return c.type="text",c.id="search-bar",c.placeholder="Enter Location",c}();t.appendChild(n),n.addEventListener("keydown",(e=>{"Enter"===e.key&&document.activeElement===n&&a(n.value)}));const r=o("search-button","Search");t.appendChild(r),r.addEventListener("click",(e=>{a(n.value)}));const d=o("set-c","C");d.selected=!0,t.appendChild(d),d.addEventListener("click",(e=>{c("C")}));const i=o("set-f","F");return i.selected=!1,t.appendChild(i),i.addEventListener("click",(e=>{c("F")})),t}();n.appendChild(r);const d=function(){const o=e("main"),n=e("current-weather"),c=e("city-location"),r=e("city-time"),a=t("current-icon"),d=e("weather-condition"),i=e("current-temp"),l=e("feels-like"),s=e("high-temp"),u=e("low-temp");n.append(c,r,a,d,i,l,s,u),o.appendChild(n);const y=e("forecasted-weather");y.textContent="Today Forecasted Weather";for(let o=0;o<24;o++){const o=e("hour");y.appendChild(o);const n=t("hour-icon"),c=e("hour-temp"),r=e("hour-time");o.appendChild(n),o.appendChild(c),o.appendChild(r)}o.appendChild(y);const m=e("upcoming-forecasted-weather");m.textContent="Upcoming Forecasted Weather";const p=e("tomorrow-forecast"),f=t("tomorrow-icon");f.textContent="[weathericon here]";const C=e("tomorrow-date"),h=e("tom-high"),x=e("tom-low");p.append(f,C,h,x);const w=e("two-days-forecast"),g=t("two-days-icon");g.textContent="[weathericon here]";const q=e("2-days-date"),S=e("2-days-high"),$=e("2-days-low");return w.append(g,q,S,$),m.append(p,w),o.appendChild(m),o}();n.appendChild(d);const i=function(){const t=e("footer");return t.textContent="Footer",t}();n.appendChild(i)}()})();