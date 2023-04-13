(()=>{"use strict";function e(e,t){const o=document.createElement("div");return o.className=e,o.id=t,"undefined"===o.id&&(o.id=e),o}function t(e,t){const o=document.createElement("button");return o.className=e,o.textContent=t,o}let o=["C"];function n(e){const t=document.querySelector(".set-c"),n=document.querySelector(".set-f");o=[],o.push(e),console.log(o),o.includes("C")?(r(),t.style.backgroundColor="var(--day-button-bg-color)",n.style.backgroundColor="var(--day-bg-color)"):(r(),t.style.backgroundColor="var(--day-bg-color)",n.style.backgroundColor="var(--day-button-bg-color)")}let c=["New York City"];async function r(e){let t;void 0===e||""===e?t=c:(t=e,c=[],c.push(e));let n=`http://api.weatherapi.com/v1/forecast.json?key=4e0461a2596747cfb3e125853230404&days=3&q=${t}`;console.log(n);try{const e=await fetch(n,{mode:"cors"}),t=await e.json();!function(e,t,n){document.querySelector(".city-location").textContent=t.name,document.querySelector(".city-time").textContent=t.localtime.slice(10),document.querySelector(".weather-condition").textContent=e.condition.text;const c=document.querySelector(".current-temp"),r=document.querySelector(".feels-like"),a=document.querySelector(".high-temp"),d=document.querySelector(".low-temp");o.includes("C")?(c.textContent=`${e.temp_c}°C`,r.textContent=`Feels Like: ${e.feelslike_c}°C`,a.textContent=`H: ${n.forecastday[0].day.maxtemp_c}°C`,d.textContent=`L: ${n.forecastday[0].day.mintemp_c}°C`):(c.textContent=`${e.temp_f}°F`,r.textContent=`Feels Like: ${e.feelslike_f}°F`,a.textContent=`H: ${n.forecastday[0].day.maxtemp_f}°F`,d.textContent=`L: ${n.forecastday[0].day.mintemp_f}°F`)}(t.current,t.location,t.forecast),function(e){const t=document.querySelector(".tomorrow-forecast").querySelectorAll("div"),n=document.querySelector(".two-days-forecast").querySelectorAll("div");let c;c=!!o.includes("C");for(let o=0;o<t.length;o++)1===o?t[o].textContent=e.forecastday[1].date:2===o?t[o].textContent=c?`H: ${e.forecastday[1].day.maxtemp_c}°C`:`H: ${e.forecastday[1].day.maxtemp_f}°F`:3===o&&(t[o].textContent=c?`L: ${e.forecastday[1].day.mintemp_c}°C`:`L: ${e.forecastday[1].day.mintemp_f}°F`);for(let t=0;t<n.length;t++)1===t?n[t].textContent=e.forecastday[2].date:2===t?n[t].textContent=c?`H: ${e.forecastday[2].day.maxtemp_c}°C`:`H: ${e.forecastday[2].day.maxtemp_f}°F`:3===t&&(n[t].textContent=c?`L: ${e.forecastday[2].day.mintemp_c}°C`:`L: ${e.forecastday[2].day.mintemp_f}°F`)}(t.forecast),r=t.forecast,console.log(r.forecastday[0]),console.log(r.forecastday[1]),console.log(r.forecastday[2])}catch(e){console.log(e)}var r}r(),function(){const o=document.querySelector(".application"),c=function(){const o=e("header"),c=function(e,t,o,n){const c=document.createElement("input");return c.type="text",c.id="search-bar",c.placeholder="Enter Location",c}();o.appendChild(c),c.addEventListener("keydown",(e=>{"Enter"===e.key&&document.activeElement===c&&r(c.value)}));const a=t("search-button","Search");o.appendChild(a),a.addEventListener("click",(e=>{r(c.value)}));const d=t("set-c","C");d.selected=!0,o.appendChild(d),d.addEventListener("click",(e=>{n("C")}));const s=t("set-f","F");return s.selected=!1,o.appendChild(s),s.addEventListener("click",(e=>{n("F")})),o}();o.appendChild(c);const a=function(){const t=e("main"),o=e("current-weather"),n=e("city-location"),c=e("city-time"),r=e("weather-condition"),a=e("current-temp"),d=e("feels-like"),s=e("high-temp"),l=e("low-temp");o.append(n,c,r,a,d,s,l),t.appendChild(o);const u=e("forecasted-weather");u.textContent="Today Forecasted Weather";const i=e("hour"),y=e("hour"),m=e("hour"),h=e("hour"),p=e("hour"),f=e("hour"),C=e("hour"),x=e("hour"),g=e("hour"),w=e("hour"),k=e("hour"),v=e("hour"),$=e("hour"),_=e("hour"),q=e("hour"),F=e("hour"),S=e("hour"),b=e("hour"),L=e("hour"),E=e("hour"),H=e("hour"),N=e("hour"),j=e("hour"),A=e("hour");u.append(i,y,m,h,p,f,C,x,g,w,k,v,$,_,q,F,S,b,L,E,H,N,j,A),t.appendChild(u);const W=e("upcoming-forecasted-weather");W.textContent="Upcoming Forecasted Weather";const T=e("tomorrow-forecast"),U=e("tomorrow-icon");U.textContent="[weathericon here]";const Y=e("tomorrow-date"),z=e("tom-high"),B=e("tom-low");T.append(U,Y,z,B);const D=e("two-days-forecast"),G=e("2-days-icon");G.textContent="[weathericon here]";const I=e("2-days-date"),J=e("2-days-high"),K=e("2-days-low");return D.append(G,I,J,K),W.append(T,D),t.appendChild(W),t}();o.appendChild(a);const d=function(){const t=e("footer");return t.textContent="Footer",t}();o.appendChild(d)}()})();