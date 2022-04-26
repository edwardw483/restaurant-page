(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>g});var r=t(81),i=t.n(r),a=t(645),o=t.n(a),c=t(667),s=t.n(c),l=new URL(t(734),t.b),d=new URL(t(825),t.b),p=new URL(t(314),t.b),u=o()(i()),m=s()(l),f=s()(d),h=s()(p);u.push([n.id,"@font-face {\n    font-family: 'Yellowtail';\n    src: url("+m+');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: "Epilogue";\n    src: url('+f+");\n    font-weight: 600;\n    font-style: normal;\n}\n\na{\n    text-decoration: none;\n}\n\nbody{\n    background-image: url("+h+");\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center;\n    margin: 0;\n    height: 100%;\n}\n\nhtml{\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    height: 100%;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.headerContainer{\n    display: flex;\n    width: 100vw;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.7);\n}\n\n.headerContainer h1{\n    font-family: 'Yellowtail';\n    font-size: min(15vw, 120px);\n    color: #FFFAFA;\n    margin: 16px;\n    font-weight: 200;\n}\n\n.headerList{\n    display: flex;\n    list-style: none;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 24px;\n    gap: min(2vw, 24px);\n}\n\n.headerList li a{\n    color: white;\n    font-size: min(10vw, 30px);\n    font-family: 'Epilogue';\n    margin: 8px;\n}\n\n.headerList li a{\n    transition: color 0.5s;\n\n    margin: 10px;\n}\n\n.headerList li a:hover{\n    color: #FFDEAD;\n}\n\n.mainContainer{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.7);\n    margin: 80px 20px;\n    width: min(50vw, 750px);\n    padding: 50px;\n    gap: 10px;\n}\n\n.mainContainer img{\n    width: min(50vw, 500px);\n}\n\n.mainContainer p{\n    font-family: 'Epilogue';\n    color: white;\n    text-align: center;\n    font-size: 20px;\n    line-height: 30px;\n}\n\n.menuContainer{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.7);\n    margin: 80px 20px;\n    max-width: 750px;\n    padding: 50px;\n    gap: 10px;\n}\n\n.menuContainer img{\n    width: 100%;\n}\n\n.responsive{\n    width: min(50vw, 680px);\n    height: min(50vh, 500px);\n}",""]);const g=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=i(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var c=t(a[o]);e[c].references--}for(var s=r(n,i),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},837:(n,e,t)=>{t.d(e,{Z:()=>i});const r=t.p+"35e90fb92a55e979354e.png";function i(){const n=document.querySelector(".content"),e=n.lastElementChild;n.removeChild(e);const t=function(){const n=document.createElement("div"),e=new Image;return e.src=r,n.appendChild(e),n.classList.add("menuContainer"),n}();n.appendChild(t)}},825:(n,e,t)=>{n.exports=t.p+"af3534ba12caeaf677c7.ttf"},734:(n,e,t)=>{n.exports=t.p+"68015177cbf9575be4a4.ttf"},314:(n,e,t)=>{n.exports=t.p+"3abfdea8a3989dd0859d.jpeg"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),a=t(569),o=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"45bae9a9916a0e1125fa.png";var g=t(837);function v(){const n=document.createElement("div"),e=document.createElement("h1");e.innerHTML="Roll Call";const t=document.createElement("nav"),r=document.createElement("li"),i=document.createElement("a");i.innerHTML="Home",i.onclick=function(){!function(){const n=document.querySelector(".content"),e=n.lastElementChild;n.removeChild(e);const t=b();n.appendChild(t)}()},r.appendChild(i),t.appendChild(r);const a=document.createElement("li"),o=document.createElement("a");o.innerHTML="Menu",o.onclick=function(){(0,g.Z)()},a.appendChild(o),t.appendChild(a);const c=document.createElement("li"),s=document.createElement("a");return s.innerHTML="Contact",s.onclick=function(){!function(){const n=document.querySelector(".content"),e=n.lastElementChild;n.removeChild(e);const t=function(){const n=document.createElement("div"),e=document.createElement("p");e.innerHTML="📞 123 456 789";const t=document.createElement("p");t.innerHTML="🏠 256 Philip Street, Waterloo, ON";const r=document.createElement("div"),i=document.createElement("iframe");return i.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.7443708729993!2d-80.53263471477895!3d43.472015326696166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4073db305fb%3A0xd1c941c0baf0fdb5!2sKEN%20Sushi%20House%20Phillip%20Square!5e0!3m2!1sen!2sca!4v1650926583062!5m2!1sen!2sca"),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("frameborder","0"),i.setAttribute("style","border:0;"),i.setAttribute("allowfullscreen",""),i.setAttribute("loading","lazy"),r.appendChild(i),n.appendChild(e),n.appendChild(t),n.appendChild(r),r.classList.add("responsive"),n.classList.add("mainContainer"),n}();n.appendChild(t)}()},c.appendChild(s),t.appendChild(c),t.classList.add("headerList"),n.classList.add("headerContainer"),n.appendChild(e),n.appendChild(t),n}function b(){const n=document.createElement("div"),e=document.createElement("p");e.innerHTML="Invented in the 19th century, sushi is a staple of Japanese cuisine. We offer the best sushi in the country, with an emphasis on fresh, seasonal ingredients for a refined culinary experience.",n.appendChild(e);const t=new Image;t.src=h,n.appendChild(t);const r=document.createElement("p");return r.innerHTML="Make a reservation today!",n.appendChild(r),n.classList.add("mainContainer"),e.classList.add("mainText"),n}document.body.appendChild(function(){const n=document.createElement("div"),e=v(),t=b();return n.appendChild(e),n.appendChild(t),n.classList.add("content"),n}())})()})();