function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,a);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function _(t){return b(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function x(t){w=t}function A(){if(!w)throw new Error("Function called outside component initialization");return w}const R=[],P=[],L=[],j=[],C=Promise.resolve();let N=!1;function q(t){L.push(t)}let O=!1;const k=new Set;function U(){if(!O){O=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];x(e),I(e.$$)}for(R.length=0;P.length;)P.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];k.has(e)||(k.add(e),e())}L.length=0}while(R.length);for(;j.length;)j.pop()();N=!1,O=!1,k.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const D=new Set;let H;function B(){H={r:0,c:[],p:H}}function T(){H.r||o(H.c),H=H.p}function z(t,e){t&&t.i&&(D.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),H.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function V(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function K(t){t&&t.c()}function M(t,e){t&&t.l(e)}function Y(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),q(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(q)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(R.push(t),N||(N=!0,C.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,s,a,c,i,l=[-1]){const u=w;x(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(h.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),d&&W(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=y(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&z(e.$$.fragment),Y(e,n.target,n.anchor),U()}x(u)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Z=[];function tt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const et={},nt=()=>({});function rt(e){let n,r,o,s,a,c,i,p,g,E,S,w,x,A;return{c(){n=h("nav"),r=h("h1"),o=d("Luciano Feijão"),s=m(),a=h("ul"),c=h("li"),i=h("a"),p=d("home"),E=m(),S=h("li"),w=h("a"),x=d("about"),this.h()},l(t){n=v(t,"NAV",{class:!0});var e=y(n);r=v(e,"H1",{class:!0});var l=y(r);o=b(l,"Luciano Feijão"),l.forEach(f),s=_(e),a=v(e,"UL",{class:!0});var u=y(a);c=v(u,"LI",{class:!0});var h=y(c);i=v(h,"A",{"aria-current":!0,href:!0,class:!0});var d=y(i);p=b(d,"home"),d.forEach(f),h.forEach(f),E=_(u),S=v(u,"LI",{class:!0});var m=y(S);w=v(m,"A",{"aria-current":!0,href:!0,class:!0});var g=y(w);x=b(g,"about"),g.forEach(f),m.forEach(f),u.forEach(f),e.forEach(f),this.h()},h(){$(r,"class","svelte-y25y45"),$(i,"aria-current",g=void 0===e[0]?"page":void 0),$(i,"href","."),$(i,"class","svelte-y25y45"),$(c,"class","svelte-y25y45"),$(w,"aria-current",A="about"===e[0]?"page":void 0),$(w,"href","about"),$(w,"class","svelte-y25y45"),$(S,"class","svelte-y25y45"),$(a,"class","svelte-y25y45"),$(n,"class","svelte-y25y45")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(n,s),l(n,a),l(a,c),l(c,i),l(i,p),l(a,E),l(a,S),l(S,w),l(w,x)},p(t,[e]){1&e&&g!==(g=void 0===t[0]?"page":void 0)&&$(i,"aria-current",g),1&e&&A!==(A="about"===t[0]?"page":void 0)&&$(w,"aria-current",A)},i:t,o:t,d(t){t&&f(n)}}}function ot(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class st extends Q{constructor(t){super(),X(this,t,ot,rt,a,{segment:0})}}function at(t){let e,n,r,o;e=new st({props:{segment:t[0]}});const s=t[2].default,a=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){K(e.$$.fragment),n=m(),r=h("main"),a&&a.c(),this.h()},l(t){M(e.$$.fragment,t),n=_(t),r=v(t,"MAIN",{class:!0});var o=y(r);a&&a.l(o),o.forEach(f),this.h()},h(){$(r,"class","svelte-hfzzfw")},m(t,s){Y(e,t,s),u(t,n,s),u(t,r,s),a&&a.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),a&&a.p&&2&n&&i(a,s,t,t[1],n,null,null)},i(t){o||(z(e.$$.fragment,t),z(a,t),o=!0)},o(t){J(e.$$.fragment,t),J(a,t),o=!1},d(t){G(e,t),t&&f(n),t&&f(r),a&&a.d(t)}}}function ct(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class it extends Q{constructor(t){super(),X(this,t,ct,at,a,{segment:0})}}function lt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){e=v(t,"PRE",{});var o=y(e);n=b(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function ut(e){let n,r,o,s,a,c,i,p,w,x=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&lt(e);return{c(){r=m(),o=h("h1"),s=d(e[0]),a=m(),c=h("p"),i=d(x),p=m(),A&&A.c(),w=g(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=v(t,"H1",{class:!0});var n=y(o);s=b(n,e[0]),n.forEach(f),a=_(t),c=v(t,"P",{class:!0});var l=y(c);i=b(l,x),l.forEach(f),p=_(t),A&&A.l(t),w=g(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),A&&A.m(t,e),u(t,w,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&x!==(x=t[1].message+"")&&E(i,x),t[2]&&t[1].stack?A?A.p(t,e):(A=lt(t),A.c(),A.m(w.parentNode,w)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(p),A&&A.d(t),t&&f(w)}}}function ft(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class pt extends Q{constructor(t){super(),X(this,t,ft,ut,a,{status:0,error:1})}}function ht(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&K(n.$$.fragment),r=g()},l(t){n&&M(n.$$.fragment,t),r=g()},m(t,e){n&&Y(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?V(s,[F(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){B();const t=n;J(t.$$.fragment,1,0,()=>{G(t,1)}),T()}a?(n=new a(c()),K(n.$$.fragment),z(n.$$.fragment,1),Y(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&z(n.$$.fragment,t),o=!0)},o(t){n&&J(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&G(n,t)}}}function dt(t){let e,n;return e=new pt({props:{error:t[0],status:t[1]}}),{c(){K(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){Y(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function mt(t){let e,n,r,o;const s=[dt,ht],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(B(),J(a[i],1,1,()=>{a[i]=null}),T(),n=a[e],n||(n=a[e]=s[e](t),n.c()),z(n,1),n.m(r.parentNode,r))},i(t){o||(z(n),o=!0)},o(t){J(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function gt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[mt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new it({props:s}),{c(){K(n.$$.fragment)},l(t){M(n.$$.fragment,t)},m(t,e){Y(n,t,e),r=!0},p(t,[e]){const r=12&e?V(o,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(z(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function $t(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,A().$$.after_update.push(u),f=et,p=r,A().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class yt extends Q{constructor(t){super(),X(this,t,$t,gt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const vt=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],bt=[{js:()=>import("./index.f8191fea.js"),css:[]},{js:()=>import("./about.05f89bab.js"),css:[]},{js:()=>import("./index.d41e68e9.js"),css:[]},{js:()=>import("./[slug].22e8a731.js"),css:[]},{js:()=>import("./work.fa48d0c2.js"),css:[]}],_t=(Et=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:Et(t[1])})}]},{pattern:/^\/work\/?$/,parts:[{i:4}]}]);var Et;const St="undefined"!=typeof __SAPPER__&&__SAPPER__;let wt,xt,At,Rt=!1,Pt=[],Lt="{}";const jt={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:tt(null),session:tt(St&&St.session)};let Ct,Nt;jt.session.subscribe(async t=>{if(Ct=t,!Rt)return;Nt=!0;const e=Bt(new URL(location.href)),n=xt={},{redirect:r,props:o,branch:s}=await Vt(e);n===xt&&await Jt(r,s,o,e.page)});let qt,Ot=null;let kt,Ut=1;const It="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Dt={};function Ht(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Bt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(St.baseUrl))return null;let e=t.pathname.slice(St.baseUrl.length);if(""===e&&(e="/"),!vt.some(t=>t.test(e)))for(let n=0;n<_t.length;n+=1){const r=_t[n],o=r.pattern.exec(e);if(o){const n=Ht(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Tt(){return{x:pageXOffset,y:pageYOffset}}async function zt(t,e,n,r){if(e)kt=e;else{const t=Tt();Dt[kt]=t,e=kt=++Ut,Dt[kt]=n?t:{x:0,y:0}}kt=e,wt&&jt.preloading.set(!0);const o=Ot&&Ot.href===t.href?Ot.promise:Vt(t);Ot=null;const s=xt={},{redirect:a,props:c,branch:i}=await o;if(s===xt&&(await Jt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Dt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Dt[kt]=t,t&&scrollTo(t.x,t.y)}}async function Jt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Bt(new URL(t,document.baseURI));return n?(It[e.replaceState?"replaceState":"pushState"]({id:kt},"",t),zt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(jt.page.set(r),jt.preloading.set(!1),wt)wt.$set(n);else{n.stores={page:{subscribe:jt.page.subscribe},preloading:{subscribe:jt.preloading.subscribe},session:jt.session},n.level0={props:await At},n.notify=jt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Kt(t.nextSibling);Kt(t),Kt(e)}wt=new yt({target:qt,props:n,hydrate:!0})}Pt=e,Lt=JSON.stringify(r.query),Rt=!0,Nt=!1}async function Vt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;At||(At=St.preloaded[0]||nt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ct));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Lt)return!0;const o=Pt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Nt&&!u&&Pt[c]&&Pt[c].part===e.i)return Pt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ft);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(bt[e.i]);let m;return m=Rt||!St.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ct):{}:St.preloaded[c+1],s["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Ft(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Kt(t){t.parentNode.removeChild(t)}function Mt(t){const e=Bt(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Vt(e)),Ot.promise}let Yt;function Gt(t){clearTimeout(Yt),Yt=setTimeout(()=>{Wt(t)},20)}function Wt(t){const e=Qt(t.target);e&&"prefetch"===e.rel&&Mt(e.href)}function Xt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Qt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Bt(o);if(s){zt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),It.pushState({id:kt},"",o.href)}}function Qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Zt(t){if(Dt[kt]=Tt(),t.state){const e=Bt(new URL(location.href));e?zt(e,t.state.id):location.href=location.href}else Ut=Ut+1,function(t){kt=t}(Ut),It.replaceState({id:kt},"",location.href)}var te;te={target:document.querySelector("#sapper")},"scrollRestoration"in It&&(It.scrollRestoration="manual"),addEventListener("beforeunload",()=>{It.scrollRestoration="auto"}),addEventListener("load",()=>{It.scrollRestoration="manual"}),function(t){qt=t}(te.target),addEventListener("click",Xt),addEventListener("popstate",Zt),addEventListener("touchstart",Wt),addEventListener("mousemove",Gt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;It.replaceState({id:Ut},"",e);const n=new URL(location.href);if(St.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=St;At||(At=s&&s[0]),Jt(null,[],{error:c,status:a,session:o,level0:{props:At},level1:{props:{status:a,error:c},component:pt},segments:s},{host:e,path:n,query:Ht(r),params:{}})}();const r=Bt(n);return r?zt(r,Ut,!0,t):void 0});export{b as A,E as B,t as C,Q as S,u as a,J as b,m as c,f as d,g as e,_ as f,T as g,p as h,X as i,h as j,K as k,v as l,y as m,M as n,$ as o,l as p,S as q,Y as r,a as s,z as t,V as u,F as v,G as w,B as x,e as y,d as z};
