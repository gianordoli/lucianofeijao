import{c as t,_ as e,a,b as i,d as o,i as s,s as n,e as r,S as l,f as u,g as c,h as g,j as p,n as d,k as f,l as h,q as m,m as v,o as y,p as z,r as j}from"./client.f48f6fa1.js";t((function(t){!function(e,a){var i=function(t,e,a){var i,o;if(function(){var e,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in o=t.lazySizesConfig||t.lazysizesConfig||{},a)e in o||(o[e]=a[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:o,noSupport:!0};var s=e.documentElement,n=t.HTMLPictureElement,r=t.addEventListener.bind(t),l=t.setTimeout,u=t.requestAnimationFrame||l,c=t.requestIdleCallback,g=/^picture$/i,p=["load","error","lazyincluded","_lazyloaded"],d={},f=Array.prototype.forEach,h=function(t,e){return d[e]||(d[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),d[e].test(t.getAttribute("class")||"")&&d[e]},m=function(t,e){h(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},v=function(t,e){var a;(a=h(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(a," "))},y=function t(e,a,i){var o=i?"addEventListener":"removeEventListener";i&&t(e,a),p.forEach((function(t){e[o](t,a)}))},z=function(t,a,o,s,n){var r=e.createEvent("Event");return o||(o={}),o.instance=i,r.initEvent(a,!s,!n),r.detail=o,t.dispatchEvent(r),r},j=function(e,a){var i;!n&&(i=t.picturefill||o.pf)?(a&&a.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",a.src),i({reevaluate:!0,elements:[e]})):a&&a.src&&(e.src=a.src)},b=function(t,e){return(getComputedStyle(t,null)||{})[e]},x=function(t,e,a){for(a=a||t.offsetWidth;a<o.minSize&&e&&!t._lazysizesWidth;)a=e.offsetWidth,e=e.parentNode;return a},A=(dt=[],ft=[],ht=dt,mt=function(){var t=ht;for(ht=dt.length?ft:dt,gt=!0,pt=!1;t.length;)t.shift()();gt=!1},vt=function(t,a){gt&&!a?t.apply(this,arguments):(ht.push(t),pt||(pt=!0,(e.hidden?l:u)(mt)))},vt._lsFlush=mt,vt),k=function(t,e){return e?function(){A(t)}:function(){var e=this,a=arguments;A((function(){t.apply(e,a)}))}},R=function(t){var e,i,o=function(){e=null,t()},s=function t(){var e=a.now()-i;e<99?l(t,99-e):(c||o)(o)};return function(){i=a.now(),e||(e=l(s,99))}},E=(U=/^img$/i,G=/^iframe$/i,V="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),J=0,K=0,Q=-1,X=function(t){K--,(!t||K<0||!t.target)&&(K=0)},Y=function(t){return null==$&&($="hidden"==b(e.body,"visibility")),$||!("hidden"==b(t.parentNode,"visibility")&&"hidden"==b(t,"visibility"))},Z=function(t,a){var i,o=t,n=Y(t);for(O-=a,H+=a,P-=a,q+=a;n&&(o=o.offsetParent)&&o!=e.body&&o!=s;)(n=(b(o,"opacity")||1)>0)&&"visible"!=b(o,"overflow")&&(i=o.getBoundingClientRect(),n=q>i.left&&P<i.right&&H>i.top-1&&O<i.bottom+1);return n},tt=function(){var t,a,n,r,l,u,c,g,p,d,f,h,m=i.elements;if((N=o.loadMode)&&K<8&&(t=m.length)){for(a=0,Q++;a<t;a++)if(m[a]&&!m[a]._lazyRace)if(!V||i.prematureUnveil&&i.prematureUnveil(m[a]))rt(m[a]);else if((g=m[a].getAttribute("data-expand"))&&(u=1*g)||(u=J),d||(d=!o.expand||o.expand<1?s.clientHeight>500&&s.clientWidth>500?500:370:o.expand,i._defEx=d,f=d*o.expFactor,h=o.hFac,$=null,J<f&&K<1&&Q>2&&N>2&&!e.hidden?(J=f,Q=0):J=N>1&&Q>1&&K<6?d:0),p!==u&&(W=innerWidth+u*h,F=innerHeight+u,c=-1*u,p=u),n=m[a].getBoundingClientRect(),(H=n.bottom)>=c&&(O=n.top)<=F&&(q=n.right)>=c*h&&(P=n.left)<=W&&(H||q||P||O)&&(o.loadHidden||Y(m[a]))&&(w&&K<3&&!g&&(N<3||Q<4)||Z(m[a],u))){if(rt(m[a]),l=!0,K>9)break}else!l&&w&&!r&&K<4&&Q<4&&N>2&&(D[0]||o.preloadAfterLoad)&&(D[0]||!g&&(H||q||P||O||"auto"!=m[a].getAttribute(o.sizesAttr)))&&(r=D[0]||m[a]);r&&!l&&rt(r)}},et=function(t){var e,i=0,s=o.throttleDelay,n=o.ricTimeout,r=function(){e=!1,i=a.now(),t()},u=c&&n>49?function(){c(r,{timeout:n}),n!==o.ricTimeout&&(n=o.ricTimeout)}:k((function(){l(r)}),!0);return function(t){var o;(t=!0===t)&&(n=33),e||(e=!0,(o=s-(a.now()-i))<0&&(o=0),t||o<9?u():l(u,o))}}(tt),at=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(X(t),m(e,o.loadedClass),v(e,o.loadingClass),y(e,ot),z(e,"lazyloaded"))},it=k(at),ot=function(t){it({target:t.target})},st=function(t){var e,a=t.getAttribute(o.srcsetAttr);(e=o.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),a&&t.setAttribute("srcset",a)},nt=k((function(t,e,a,i,s){var n,r,u,c,p,d;(p=z(t,"lazybeforeunveil",e)).defaultPrevented||(i&&(a?m(t,o.autosizesClass):t.setAttribute("sizes",i)),r=t.getAttribute(o.srcsetAttr),n=t.getAttribute(o.srcAttr),s&&(c=(u=t.parentNode)&&g.test(u.nodeName||"")),d=e.firesLoad||"src"in t&&(r||n||c),p={target:t},m(t,o.loadingClass),d&&(clearTimeout(M),M=l(X,2500),y(t,ot,!0)),c&&f.call(u.getElementsByTagName("source"),st),r?t.setAttribute("srcset",r):n&&!c&&(G.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(a){t.src=e}}(t,n):t.src=n),s&&(r||c)&&j(t,{src:n})),t._lazyRace&&delete t._lazyRace,v(t,o.lazyClass),A((function(){var e=t.complete&&t.naturalWidth>1;d&&!e||(e&&m(t,"ls-is-cached"),at(p),t._lazyCache=!0,l((function(){"_lazyCache"in t&&delete t._lazyCache}),9)),"lazy"==t.loading&&K--}),!0)})),rt=function(t){if(!t._lazyRace){var e,a=U.test(t.nodeName),i=a&&(t.getAttribute(o.sizesAttr)||t.getAttribute("sizes")),s="auto"==i;(!s&&w||!a||!t.getAttribute("src")&&!t.srcset||t.complete||h(t,o.errorClass)||!h(t,o.lazyClass))&&(e=z(t,"lazyunveilread").detail,s&&C.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,K++,nt(t,e,s,i,a))}},lt=R((function(){o.loadMode=3,et()})),ut=function(){3==o.loadMode&&(o.loadMode=2),lt()},ct=function t(){w||(a.now()-S<999?l(t,999):(w=!0,o.loadMode=3,et(),r("scroll",ut,!0)))},{_:function(){S=a.now(),i.elements=e.getElementsByClassName(o.lazyClass),D=e.getElementsByClassName(o.lazyClass+" "+o.preloadClass),r("scroll",et,!0),r("resize",et,!0),r("pageshow",(function(t){if(t.persisted){var a=e.querySelectorAll("."+o.loadingClass);a.length&&a.forEach&&u((function(){a.forEach((function(t){t.complete&&rt(t)}))}))}})),t.MutationObserver?new MutationObserver(et).observe(s,{childList:!0,subtree:!0,attributes:!0}):(s.addEventListener("DOMNodeInserted",et,!0),s.addEventListener("DOMAttrModified",et,!0),setInterval(et,999)),r("hashchange",et,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){e.addEventListener(t,et,!0)})),/d$|^c/.test(e.readyState)?ct():(r("load",ct),e.addEventListener("DOMContentLoaded",et),l(ct,2e4)),i.elements.length?(tt(),A._lsFlush()):et()},checkElems:et,unveil:rt,_aLSL:ut}),C=(B=k((function(t,e,a,i){var o,s,n;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),g.test(e.nodeName||""))for(s=0,n=(o=e.getElementsByTagName("source")).length;s<n;s++)o[s].setAttribute("sizes",i);a.detail.dataAttr||j(t,a.detail)})),I=function(t,e,a){var i,o=t.parentNode;o&&(a=x(t,o,a),(i=z(t,"lazybeforesizes",{width:a,dataAttr:!!e})).defaultPrevented||(a=i.detail.width)&&a!==t._lazysizesWidth&&B(t,o,i,a))},L=R((function(){var t,e=_.length;if(e)for(t=0;t<e;t++)I(_[t])})),{_:function(){_=e.getElementsByClassName(o.autosizesClass),r("resize",L)},checkElems:L,updateElem:I}),T=function t(){!t.i&&e.getElementsByClassName&&(t.i=!0,C._(),E._())};var _,B,I,L;var D,w,M,N,S,W,F,O,P,q,H,$,U,G,V,J,K,Q,X,Y,Z,tt,et,at,it,ot,st,nt,rt,lt,ut,ct;var gt,pt,dt,ft,ht,mt,vt;return l((function(){o.init&&T()})),i={cfg:o,autoSizer:C,loader:E,init:T,uP:j,aC:m,rC:v,hC:h,fire:z,gW:x,rAF:A}}(e,e.document,Date);e.lazySizes=i,t.exports&&(t.exports=i)}("undefined"!=typeof window?window:{})}));var b=[{slug:"a-morte-de-ivan-illitch-1",extension:"jpg",ratio:1,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"a-morte-de-ivan-illitch-4",extension:"jpg",ratio:1,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"a-morte-de-ivan-illitch-6",extension:"jpg",ratio:.6961506961506961,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"amas-1",extension:"jpg",ratio:1.2828947368421053,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"amas-11",extension:"jpg",ratio:1,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"amas-2",extension:"jpg",ratio:1.2785087719298245,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"amas-3",extension:"jpg",ratio:.6151315789473685,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"amas-5",extension:"jpg",ratio:1.5,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"amas-9",extension:"jpg",ratio:.6666666666666666,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"antianatomia-12",extension:"jpg",ratio:.75,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"antianatomia-14",extension:"jpg",ratio:1.5182998819362457,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"antianatomia-2",extension:"jpg",ratio:.66748046875,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"diario-do-hospicio-1",extension:"jpg",ratio:1.484087591240876,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"diario-do-hospicio-2",extension:"jpg",ratio:.7413138686131386,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"diario-do-hospicio-3",extension:"jpg",ratio:.6672158154859967,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"diario-do-hospicio-4",extension:"jpg",ratio:1.4843795620437956,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"diario-do-hospicio-5",extension:"jpg",ratio:1.481924198250729,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"diario-do-hospicio-6",extension:"jpg",ratio:.6666666666666666,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"diario-do-hospicio-9",extension:"jpg",ratio:1.4833333333333334,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"folha-de-sao-paulo-1",extension:"jpg",ratio:.48804780876494025,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"outros-projetos-10",extension:"jpg",ratio:1.5647517039922103,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"outros-projetos-13",extension:"jpg",ratio:1.4143646408839778,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"outros-projetos-16",extension:"jpg",ratio:1.4141961231470923,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"outros-projetos-21",extension:"jpg",ratio:.7274900398406374,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"outros-projetos-4",extension:"jpg",ratio:.8348736906962415,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"outros-projetos-5",extension:"jpg",ratio:.6658364466583645,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"outros-projetos-6",extension:"jpg",ratio:1.4092570036540804,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"torcoes-1",extension:"jpg",ratio:1.4340712223291627,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"torcoes-10",extension:"jpg",ratio:.6798387096774193,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"torcoes-11",extension:"jpg",ratio:1.338095238095238,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"torcoes-2",extension:"jpg",ratio:1.410182516810759,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"torcoes-3",extension:"jpg",ratio:1.3976608187134503,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"torcoes-7",extension:"jpg",ratio:.6666666666666666,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0},{slug:"torcoes-9",extension:"jpg",ratio:1.4,sizes:[180,300,460,720,1050,1440,2e3],hasRetina:!0}],x=[{type:"image",value:{slug:"torcoes-1.jpg",caption:"Torções, 2020"}},{type:"image",value:{slug:"torcoes-2.jpg",caption:"Torções, 2020"}},{type:"image",value:{slug:"torcoes-3.jpg",caption:"Torções, 2020"}},{type:"image",value:{slug:"torcoes-7.jpg",caption:"Torções, 2020"}},{type:"image",value:{slug:"torcoes-9.jpg",caption:"Torções, 2020"}},{type:"image",value:{slug:"torcoes-10.jpg",caption:"Torções, 2020"}},{type:"image",value:{slug:"torcoes-11.jpg",caption:"Torções, 2020"}},{type:"image",value:{slug:"a-morte-de-ivan-illitch-1.jpg",caption:"Illustration for the book “The Death of Ivan Illitch,” published by Antofágica, 2020"}},{type:"image",value:{slug:"a-morte-de-ivan-illitch-4.jpg",caption:"Illustration for the book “The Death of Ivan Illitch,” published by Antofágica, 2020"}},{type:"image",value:{slug:"a-morte-de-ivan-illitch-6.jpg",caption:"Illustration for the book “The Death of Ivan Illitch,” published by Antofágica, 2020"}},{type:"image",value:{slug:"amas-1.jpg",caption:"Amas, 2019"}},{type:"image",value:{slug:"amas-2.jpg",caption:"Amas, 2019"}},{type:"image",value:{slug:"amas-3.jpg",caption:"Amas, 2019"}},{type:"image",value:{slug:"amas-5.jpg",caption:"Amas, 2019"}},{type:"image",value:{slug:"amas-9.jpg",caption:"Amas, 2019"}},{type:"image",value:{slug:"amas-11.jpg",caption:"Amas, 2019"}},{type:"image",value:{slug:"antianatomia-2.jpg",caption:"Antianatomia, 2019"}},{type:"image",value:{slug:"antianatomia-12.jpg",caption:"Antianatomia, 2019"}},{type:"image",value:{slug:"antianatomia-14.jpg",caption:"Antianatomia, 2019"}},{type:"image",value:{slug:"diario-do-hospicio-1.jpg",caption:"Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020"}},{type:"image",value:{slug:"diario-do-hospicio-2.jpg",caption:"Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020"}},{type:"image",value:{slug:"diario-do-hospicio-3.jpg",caption:"Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020"}},{type:"image",value:{slug:"diario-do-hospicio-4.jpg",caption:"Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020"}},{type:"image",value:{slug:"diario-do-hospicio-5.jpg",caption:"Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020"}},{type:"image",value:{slug:"diario-do-hospicio-6.jpg",caption:"Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020"}},{type:"image",value:{slug:"diario-do-hospicio-9.jpg",caption:"Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020"}},{type:"image",value:{slug:"folha-de-sao-paulo-1.jpg",caption:"Ilustração para Folha de São Paulo, 2010"}},{type:"image",value:{slug:"outros-projetos-4.jpg",caption:"Tk tk tk título, tk ano"}},{type:"image",value:{slug:"outros-projetos-4.jpg",caption:"Tk tk tk título, tk ano"}},{type:"image",value:{slug:"outros-projetos-5.jpg",caption:"Tk tk tk título, tk ano"}},{type:"image",value:{slug:"outros-projetos-6.jpg",caption:"Tk tk tk título, tk ano"}},{type:"image",value:{slug:"outros-projetos-10.jpg",caption:"Tk tk tk título, tk ano"}},{type:"image",value:{slug:"outros-projetos-13.jpg",caption:"Tk tk tk título, tk ano"}},{type:"image",value:{slug:"outros-projetos-16.jpg",caption:"Tk tk tk título, tk ano"}},{type:"image",value:{slug:"outros-projetos-21.jpg",caption:"Tk tk tk título, tk ano"}}];function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,s=a(t);if(e){var n=a(this).constructor;o=Reflect.construct(s,arguments,n)}else o=s.apply(this,arguments);return i(this,o)}}function k(t,e,a){var i=t.slice();return i[2]=e[a].type,i[3]=e[a].value,i}function R(t){var e;return{c:function(){e=u("img"),this.h()},l:function(t){e=c(t,"IMG",{alt:!0,"data-sizes":!0,"data-src":!0,"data-srcset":!0,class:!0}),this.h()},h:function(){g(e,"alt",""),g(e,"data-sizes","auto"),g(e,"data-src",t[3].src),g(e,"data-srcset",t[3].srcset),g(e,"class","big lazyload svelte-mtp1x6")},m:function(t,a){p(t,e,a)},p:d,d:function(t){t&&f(e)}}}function E(t){for(var e,a,i=x,o=[],s=0;s<i.length;s+=1)o[s]=R(k(t,i,s));return{c:function(){e=h(),a=u("div");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){m('[data-svelte="svelte-mqpxkj"]',document.head).forEach(f),e=v(t),a=c(t,"DIV",{class:!0});for(var i=y(a),s=0;s<o.length;s+=1)o[s].l(i);i.forEach(f),this.h()},h:function(){document.title="Luciano Feijão",g(a,"class","grid svelte-mtp1x6")},m:function(t,i){p(t,e,i),p(t,a,i);for(var s=0;s<o.length;s+=1)o[s].m(a,null)},p:function(t,e){var s=z(e,1)[0];if(0&s){var n;for(i=x,n=0;n<i.length;n+=1){var r=k(t,i,n);o[n]?o[n].p(r,s):(o[n]=R(r),o[n].c(),o[n].m(a,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=i.length}},i:d,o:d,d:function(t){t&&f(e),t&&f(a),j(o,t)}}}function C(t){return b.map((function(t){var e=t.slug,a=t.sizes,i=t.extension,o=t.hasRetina;return t.srcset=a.reduce((function(t,a,s,n){return t+="".concat("/images/").concat(e,"-").concat(a,".").concat(i," ").concat(a,"w"),o&&(t+=", ".concat("/images/").concat(e,"-").concat(a,"_x2.").concat(i," ").concat(2*a,"w")),s<n.length-1&&(t+=","),t}),""),t.src="".concat("/images/").concat(e,"-").concat(a[Math.ceil(a.length/2)],".").concat(i),t})),x.filter((function(t){return"image"===t.type})).map((function(t){return function(t){var e=function(t){return b.find((function(e){return e.slug===t}))}(t.value.slug.substring(0,t.value.slug.indexOf(".")));e?t.value=Object.assign(t.value,e):console.log("Could not find imageData for ".concat(t.value.slug))}(t)})),[]}var T=function(t){e(i,l);var a=A(i);function i(t){var e;return o(this,i),e=a.call(this),s(r(e),t,C,E,n,{}),e}return i}();export default T;