(function(e){function t(t){for(var n,r,d=t[0],c=t[1],s=t[2],i=0,l=[];i<d.length;i++)r=d[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),a()}function a(){for(var e,t=0;t<u.length;t++){for(var a=u[t],n=!0,r=1;r<a.length;r++){var d=a[r];0!==o[d]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={index:0,404:0},o={index:0,404:0},u=[];function d(e){return c.p+"js/"+({about:"about",home:"home","qa-result":"qa-result","user-result":"user-result","code-data":"code-data","old-data":"old-data","other-data":"other-data","write-data":"write-data","vue-router-data":"vue-router-data","vuex-data":"vuex-data","new-data":"new-data","maogai-data":"maogai-data","zhexue-data":"zhexue-data"}[e]||e)+"."+{about:"df35a458",home:"3018cce0","qa-result":"4d38d388","user-result":"ce192061","chunk-2d0c229c":"f01e7325","chunk-2d0d07b9":"47e3904a","chunk-2d0e1bc2":"8cdfec0f","chunk-2d0e2874":"7972a191","chunk-2d21e042":"6cca0280","chunk-2d221467":"12a77ccf","chunk-2d238a05":"372fdd5f","code-data":"44c61d3f","old-data":"8a863d11","other-data":"e5192ccb","write-data":"f1c84326","vue-router-data":"81dd400e","vuex-data":"719ffcf6","new-data":"c2283ad3","maogai-data":"272a2617","zhexue-data":"3f694d5d"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={home:1,"qa-result":1,"user-result":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about",home:"home","qa-result":"qa-result","user-result":"user-result","code-data":"code-data","old-data":"old-data","other-data":"other-data","write-data":"write-data","vue-router-data":"vue-router-data","vuex-data":"vuex-data","new-data":"new-data","maogai-data":"maogai-data","zhexue-data":"zhexue-data"}[e]||e)+"."+{about:"31d6cfe0",home:"3b8f2d0b","qa-result":"e7288d10","user-result":"b7211809","chunk-2d0c229c":"31d6cfe0","chunk-2d0d07b9":"31d6cfe0","chunk-2d0e1bc2":"31d6cfe0","chunk-2d0e2874":"31d6cfe0","chunk-2d21e042":"31d6cfe0","chunk-2d221467":"31d6cfe0","chunk-2d238a05":"31d6cfe0","code-data":"31d6cfe0","old-data":"31d6cfe0","other-data":"31d6cfe0","write-data":"31d6cfe0","vue-router-data":"31d6cfe0","vuex-data":"31d6cfe0","new-data":"31d6cfe0","maogai-data":"31d6cfe0","zhexue-data":"31d6cfe0"}[e]+".css",o=c.p+n,u=document.getElementsByTagName("link"),d=0;d<u.length;d++){var s=u[d],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===n||i===o))return t()}var l=document.getElementsByTagName("style");for(d=0;d<l.length;d++){s=l[d],i=s.getAttribute("data-href");if(i===n||i===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete r[e],f.parentNode.removeChild(f),a(u)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=u);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=d(e);var l=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(f);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/qa-system/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=i;u.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2327:function(e,t,a){},2652:function(e,t,a){},"4be3":function(e,t,a){"use strict";a("2652")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("8bbf"),r=a.n(n),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("qa-nav"),t("router-view")],1)},u=[],d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"qa-nav"},e._l(e.navList,(function(a){return t("a",{key:a.name,on:{click:function(t){return e.onLink(a)}}},[e._v(e._s(a.name))])})),0)},c=[],s=(a("14d9"),{name:"QaNav",data(){return{navList:[{name:"答题",link:"home"},{name:"结果",link:"user-result"},{name:"关于",link:"about"}]}},methods:{onLink(e){this.$router.push({name:e.link})}}}),i=s,l=(a("d9e9"),a("2877")),f=Object(l["a"])(i,d,c,!1,null,"206aa73b",null),h=f.exports,p={components:{QaNav:h}},m=p,v=(a("4be3"),Object(l["a"])(m,o,u,!1,null,null,null)),b=v.exports,g=a("6389"),y=a.n(g);r.a.use(y.a);const k=[{path:"/",name:"home",component:()=>a.e("home").then(a.bind(null,"6511"))},{path:"/user-result",name:"user-result",component:()=>a.e("user-result").then(a.bind(null,"fe21"))},{path:"/qa-result",name:"qa-result",component:()=>a.e("qa-result").then(a.bind(null,"a531"))},{path:"/about",name:"about",component:()=>a.e("about").then(a.bind(null,"754b"))}],w=y.a.prototype.push;y.a.prototype.push=function(e){return w.call(this,e).catch(e=>e)};const x=new y.a({mode:"history",base:"/qa-system/",routes:k});var q=x,_=a("5f72"),O=a.n(_),j=(a("0fae"),a("48cd")),E=a.n(j),L=(a("f417"),{install(e){e.use(O.a),e.component("MarkdownItVue",E.a)}});r.a.config.productionTip=!1,r.a.use(L),new r.a({router:q,render:e=>e(b)}).$mount("#app")},"5f72":function(e,t){e.exports=ELEMENT},6389:function(e,t){e.exports=VueRouter},"8bbf":function(e,t){e.exports=Vue},d9e9:function(e,t,a){"use strict";a("2327")}});