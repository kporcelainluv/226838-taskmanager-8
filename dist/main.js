!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1),r(2)},function(e,t){[{name:"card--black",color:"black",text:"This is example of new task, you can add picture, set date and time, add tags.",hashtag:!1,date:!1,time:!1,img:!1},{name:"card--pink card--repeat",color:"pink",text:"It is example of repeating task. It marks by wave.",hashtag:!0,date:!1,time:!1,img:!1},{name:"card--yellow card--deadline",color:"red",text:"This is card with missing deadline",hashtag:!0,date:!1,time:!1,img:!1},{name:"card--yellow card--repeat",color:"yellow",text:"Here is a card with filled data",hashtag:!0,date:"23 SEPTEMBER",time:"11:15 PM",img:!0},{name:"card--blue",color:"blue",text:"",hashtag:!0,date:!1,time:!1,img:!1},{name:"card--blue",color:"blue",text:"",hashtag:!0,date:"23 SEPTEMBER",time:"11:15 PM",img:!0}].map(e=>(({name:e,hashtag:t,text:r,date:a,time:n,img:d})=>{const o=document.querySelector(".card_board_card").content.querySelector(".card").cloneNode(!0);o.className=`card ${e}`,o.querySelector(".card__text").value=r,t||o.querySelector(".card__details").removeChild(o.querySelector(".card__hashtag")),a||n||o.querySelector(".card__details").removeChild(o.querySelector(".card__dates")),d||o.querySelector(".card__settings").removeChild(o.querySelector(".card__img-wrap")),document.querySelector(".board__tasks").appendChild(o)})(e))},function(e,t){[{name:"ALL",amount:15,checked:!0,disabled:!1},{name:"OVERDUE",amount:0,checked:!1,disabled:!0},{name:"TODAY",amount:0,checked:!1,disabled:!0},{name:"FAVORITES",amount:7,checked:!1,disabled:!1},{name:"REPEATING",amount:2,checked:!1,disabled:!1},{name:"TAGS",amount:6,checked:!1,disabled:!1},{name:"ARCHIVE",amount:115,checked:!1,disabled:!1}].reduce((e,t)=>{const r=(({name:e,amount:t})=>{const r=document.createElement("span");return r.className=`filter__${e.toLowerCase()}-count`,r.innerText=` ${t}`,r})(t),a=(({name:e})=>{const t=document.createElement("label");return t.htmlFor=`filter__${e.toLowerCase()}`,t.className="filter__label",t.innerText=`${e}`,t})(t);a.appendChild(r);const n=(({disabled:e,checked:t,name:r})=>{const a=document.createElement("input");return a.className="filter__input visually-hidden",a.id=`filter__${r.toLowerCase()}`,a.name="filter",a.type="radio",a.checked=t,a.disabled=e,a})(t);return e.appendChild(n),e.appendChild(a),e},document.querySelector(".main__filter"));function r(e=0,t=6){return Math.floor(Math.random()*(t-e)+e)}Array.from(document.querySelectorAll(".main__filter label")).forEach(e=>{e.addEventListener("click",()=>{if(filterID=e.htmlFor,!1===document.querySelector(`#${filterID}`).disabled){const e=r(1,20);(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(document.querySelector(".board__tasks"));for(let t=0;t<=e;t++)randomIndex=r(),createCars(cardsFilling[randomIndex])}})})}]);
//# sourceMappingURL=main.js.map