(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["qa-result"],{"057f":function(t,e,n){var r=n("c6b6"),o=n("fc6a"),a=n("241c").f,i=n("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return a(t)}catch(e){return i(c)}};t.exports.f=function(t){return c&&"Window"==r(t)?u(t):a(o(t))}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),a=n("2d00"),i=o("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d87":function(t,e,n){var r=n("4930");t.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},"428f":function(t,e,n){var r=n("da84");t.exports=r},"4dae":function(t,e,n){var r=n("da84"),o=n("23cb"),a=n("07fa"),i=n("8418"),c=r.Array,u=Math.max;t.exports=function(t,e,n){for(var r=a(t),f=o(e,r),s=o(void 0===n?r:n,r),d=c(u(s-f,0)),b=0;f<s;f++,b++)i(d,b,t[f]);return d.length=b,d}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,a=n("1dde"),i=a("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"57b9":function(t,e,n){var r=n("c65b"),o=n("d066"),a=n("b622"),i=n("cb2d");t.exports=function(){var t=o("Symbol"),e=t&&t.prototype,n=e&&e.valueOf,c=a("toPrimitive");e&&!e[c]&&i(e,c,(function(t){return r(n,this)}),{arity:1})}},"5a47":function(t,e,n){var r=n("23e7"),o=n("4930"),a=n("d039"),i=n("7418"),c=n("7b0b"),u=!o||a((function(){i.f(1)}));r({target:"Object",stat:!0,forced:u},{getOwnPropertySymbols:function(t){var e=i.f;return e?e(c(t)):[]}})},"746f":function(t,e,n){var r=n("428f"),o=n("1a2d"),a=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||i(e,t,{value:a.f(t)})}},8418:function(t,e,n){"use strict";var r=n("a04b"),o=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,a(0,n)):t[i]=n}},a4d3:function(t,e,n){n("d9f5"),n("b4f8"),n("c513"),n("e9c4"),n("5a47")},a531:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qa-result"},[n("div",{staticClass:"qa-top"},[n("span",{on:{click:t.onBack}},[t._v("返回")]),n("span",{staticClass:"qa-category-type"},[t._v(t._s(t.categoryType))])]),n("div",{staticClass:"qa-navs"},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:t.onChageType},model:{value:t.typeIndex,callback:function(e){t.typeIndex=e},expression:"typeIndex"}},t._l(t.typeList,(function(t){return n("el-option",{key:t.typeName,attrs:{label:t.typeName,value:t.typeName}})})),1),n("ul",t._l(t.answerList,(function(e){return n("li",{key:e.q},[n("a",{on:{click:function(n){return t.linkItem(e)}}},[t._v(t._s(e.id+"、"+e.q))])])})),0)],1),t._l(t.answerList,(function(e){return[e.answerContent?n("div",{key:e.q,staticClass:"qa-item"},[n("markdown-it-vue",{attrs:{content:e.answerContent,id:"md_"+e.id}})],1):t._e()]}))],2)},o=[],a=n("5530"),i=n("1da1"),c=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("7db0"),n("d81d"),n("159b"),{name:"QaResult",data:function(){return{categoryType:"",answerList:[],indexNum:0,indexPage:0,typeIndex:"",typeList:[]}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$route.query.categoryType,t.categoryType=r||"",document.title+=" "+r,e.next=5,n("13c8")("./"+t.categoryType+"/index.js");case 5:o=e.sent,t.typeList=o.default;case 7:case"end":return e.stop()}}),e)})))()},methods:{onChageType:function(t){var e=this.typeList.find((function(e){return e.typeName===t}));this.answerList=e.typeList.map((function(t,e){return Object(a["a"])(Object(a["a"])({id:e+1},t),{},{answerContent:""})})),this.getAnswer()},onBack:function(){this.$router.push({name:"home"})},linkItem:function(t){var e=document.getElementById("md_"+t.id);document.getElementById("app").scrollTo(0,e.offsetTop-40)},add:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.indexNum+=10,t.answerList.length<t.indexNum&&(t.indexNum=t.answerList.length),n=t.indexPage;case 3:if(!(n<t.indexNum)){e.next=11;break}return e.next=6,t.answerList[n].a;case 6:r=e.sent,t.answerList[n].answerContent=r.default;case 8:n++,e.next=3;break;case 11:case"end":return e.stop()}}),e)})))()},getAnswer:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.answerList.forEach(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.a;case 2:n=t.sent,e.answerContent=n.default;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))()}}}),u=c,f=(n("e3a3"),n("2877")),s=Object(f["a"])(u,r,o,!1,null,"03bc5bec",null);e["default"]=s.exports},b4f8:function(t,e,n){var r=n("23e7"),o=n("d066"),a=n("1a2d"),i=n("577e"),c=n("5692"),u=n("3d87"),f=c("string-to-symbol-registry"),s=c("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=i(t);if(a(f,e))return f[e];var n=o("Symbol")(e);return f[e]=n,s[n]=e,n}})},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),a=n("df75"),i=n("d039"),c=i((function(){a(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return a(o(t))}})},c513:function(t,e,n){var r=n("23e7"),o=n("1a2d"),a=n("d9b5"),i=n("0d51"),c=n("5692"),u=n("3d87"),f=c("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!u},{keyFor:function(t){if(!a(t))throw TypeError(i(t)+" is not a symbol");if(o(f,t))return f[t]}})},cced:function(t,e,n){},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,a=n("1dde"),i=a("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},d9f5:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),a=n("c65b"),i=n("e330"),c=n("c430"),u=n("83ab"),f=n("4930"),s=n("d039"),d=n("1a2d"),b=n("3a9b"),l=n("825a"),p=n("fc6a"),y=n("a04b"),v=n("577e"),m=n("5c6c"),g=n("7c73"),h=n("df75"),w=n("241c"),O=n("057f"),x=n("7418"),j=n("06cf"),k=n("9bf2"),S=n("37e8"),P=n("d1e7"),C=n("cb2d"),L=n("5692"),N=n("f772"),D=n("d012"),_=n("90e3"),F=n("b622"),T=n("e538"),q=n("746f"),E=n("57b9"),I=n("d44e"),R=n("69f3"),A=n("b727").forEach,B=N("hidden"),$="Symbol",J="prototype",Q=R.set,M=R.getterFor($),W=Object[J],z=o.Symbol,G=z&&z[J],H=o.TypeError,K=o.QObject,U=j.f,V=k.f,X=O.f,Y=P.f,Z=i([].push),tt=L("symbols"),et=L("op-symbols"),nt=L("wks"),rt=!K||!K[J]||!K[J].findChild,ot=u&&s((function(){return 7!=g(V({},"a",{get:function(){return V(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=U(W,e);r&&delete W[e],V(t,e,n),r&&t!==W&&V(W,e,r)}:V,at=function(t,e){var n=tt[t]=g(G);return Q(n,{type:$,tag:t,description:e}),u||(n.description=e),n},it=function(t,e,n){t===W&&it(et,e,n),l(t);var r=y(e);return l(n),d(tt,r)?(n.enumerable?(d(t,B)&&t[B][r]&&(t[B][r]=!1),n=g(n,{enumerable:m(0,!1)})):(d(t,B)||V(t,B,m(1,{})),t[B][r]=!0),ot(t,r,n)):V(t,r,n)},ct=function(t,e){l(t);var n=p(e),r=h(n).concat(bt(n));return A(r,(function(e){u&&!a(ft,n,e)||it(t,e,n[e])})),t},ut=function(t,e){return void 0===e?g(t):ct(g(t),e)},ft=function(t){var e=y(t),n=a(Y,this,e);return!(this===W&&d(tt,e)&&!d(et,e))&&(!(n||!d(this,e)||!d(tt,e)||d(this,B)&&this[B][e])||n)},st=function(t,e){var n=p(t),r=y(e);if(n!==W||!d(tt,r)||d(et,r)){var o=U(n,r);return!o||!d(tt,r)||d(n,B)&&n[B][r]||(o.enumerable=!0),o}},dt=function(t){var e=X(p(t)),n=[];return A(e,(function(t){d(tt,t)||d(D,t)||Z(n,t)})),n},bt=function(t){var e=t===W,n=X(e?et:p(t)),r=[];return A(n,(function(t){!d(tt,t)||e&&!d(W,t)||Z(r,tt[t])})),r};f||(z=function(){if(b(G,this))throw H("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,e=_(t),n=function(t){this===W&&a(n,et,t),d(this,B)&&d(this[B],e)&&(this[B][e]=!1),ot(this,e,m(1,t))};return u&&rt&&ot(W,e,{configurable:!0,set:n}),at(e,t)},G=z[J],C(G,"toString",(function(){return M(this).tag})),C(z,"withoutSetter",(function(t){return at(_(t),t)})),P.f=ft,k.f=it,S.f=ct,j.f=st,w.f=O.f=dt,x.f=bt,T.f=function(t){return at(F(t),t)},u&&(V(G,"description",{configurable:!0,get:function(){return M(this).description}}),c||C(W,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:z}),A(h(nt),(function(t){q(t)})),r({target:$,stat:!0,forced:!f},{useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!f,sham:!u},{create:ut,defineProperty:it,defineProperties:ct,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:dt}),E(),I(z,$),D[B]=!0},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),a=n("56ef"),i=n("fc6a"),c=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),o=c.f,f=a(r),s={},d=0;while(f.length>d)n=o(r,e=f[d++]),void 0!==n&&u(s,e,n);return s}})},e3a3:function(t,e,n){"use strict";n("cced")},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),a=n("fc6a"),i=n("06cf").f,c=n("83ab"),u=o((function(){i(1)})),f=!c||u;r({target:"Object",stat:!0,forced:f,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(a(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e9c4:function(t,e,n){var r=n("23e7"),o=n("d066"),a=n("2ba4"),i=n("c65b"),c=n("e330"),u=n("d039"),f=n("e8b5"),s=n("1626"),d=n("861d"),b=n("d9b5"),l=n("f36a"),p=n("4930"),y=o("JSON","stringify"),v=c(/./.exec),m=c("".charAt),g=c("".charCodeAt),h=c("".replace),w=c(1..toString),O=/[\uD800-\uDFFF]/g,x=/^[\uD800-\uDBFF]$/,j=/^[\uDC00-\uDFFF]$/,k=!p||u((function(){var t=o("Symbol")();return"[null]"!=y([t])||"{}"!=y({a:t})||"{}"!=y(Object(t))})),S=u((function(){return'"\\udf06\\ud834"'!==y("\udf06\ud834")||'"\\udead"'!==y("\udead")})),P=function(t,e){var n=l(arguments),r=e;if((d(e)||void 0!==t)&&!b(t))return f(e)||(e=function(t,e){if(s(r)&&(e=i(r,this,t,e)),!b(e))return e}),n[1]=e,a(y,null,n)},C=function(t,e,n){var r=m(n,e-1),o=m(n,e+1);return v(x,t)&&!v(j,o)||v(j,t)&&!v(x,r)?"\\u"+w(g(t,0),16):t};y&&r({target:"JSON",stat:!0,arity:3,forced:k||S},{stringify:function(t,e,n){var r=l(arguments),o=a(k?P:y,null,r);return S&&"string"==typeof o?h(o,O,C):o}})}}]);