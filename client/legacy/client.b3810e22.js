function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var a,i=o((function(e){var n=function(e){var n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=w(i,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var l={};function p(){}function h(){}function v(){}var d={};d[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(_([])));y&&y!==n&&r.call(y,a)&&(d=y);var g=v.prototype=p.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function $(e,n){var o;this._invoke=function(a,i){function u(){return new n((function(o,u){!function o(a,i,u,c){var s=f(e[a],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===t(p)&&r.call(p,"__await")?n.resolve(p.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):n.resolve(p).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}(a,i,o,u)}))}return o=o?o.then(u,u):u()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=g.constructor=v,v.constructor=h,h.displayName=c(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},b($.prototype),$.prototype[i]=function(){return this},e.AsyncIterator=$,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new $(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),c(g,u,"Generator"),g[a]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));function u(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?p(e):n}function v(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(){}function g(t,e){for(var n in e)t[n]=e[n];return t}function b(t){return t()}function $(){return Object.create(null)}function w(t){t.forEach(b)}function x(t){return"function"==typeof t}function E(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function S(t,e,n,r){return t[1]&&r?g(n.ctx.slice(),t[1](r(e))):n.ctx}function _(e,n,r,o,a,i,u){var c=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],u=Math.max(n.dirty.length,a.length),c=0;c<u;c+=1)i[c]=n.dirty[c]|a[c];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(c){var s=S(n,r,o,u);e.p(s,c)}}function L(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function R(t){t.parentNode.removeChild(t)}function j(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function P(){return A(" ")}function N(){return A("")}function q(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t){return Array.from(t.childNodes)}function I(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,u=[];i<a.attributes.length;){var c=a.attributes[i++];n[c.name]||u.push(c.name)}for(var s=0;s<u.length;s++)a.removeAttribute(u[s]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):O(e)}function T(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return A(e)}function D(t){return T(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function G(t){a=t}function z(){if(!a)throw new Error("Function called outside component initialization");return a}var B=[],H=[],J=[],M=[],V=Promise.resolve(),Y=!1;function K(t){J.push(t)}var W=!1,X=new Set;function Q(){if(!W){W=!0;do{for(var t=0;t<B.length;t+=1){var e=B[t];G(e),Z(e.$$)}for(G(null),B.length=0;H.length;)H.pop()();for(var n=0;n<J.length;n+=1){var r=J[n];X.has(r)||(X.add(r),r())}J.length=0}while(B.length);for(;M.length;)M.pop()();Y=!1,W=!1,X.clear()}}function Z(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}var tt,et=new Set;function nt(){tt={r:0,c:[],p:tt}}function rt(){tt.r||w(tt.c),tt=tt.p}function ot(t,e){t&&t.i&&(et.delete(t),t.i(e))}function at(t,e,n,r){if(t&&t.o){if(et.has(t))return;et.add(t),tt.c.push((function(){et.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function it(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],u=e[a];if(u){for(var c in i)c in u||(r[c]=1);for(var s in u)o[s]||(n[s]=u[s],o[s]=1);t[a]=u}else for(var f in i)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function ut(e){return"object"===t(e)&&null!==e?e:{}}function ct(t){t&&t.c()}function st(t,e){t&&t.l(e)}function ft(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,u=r.after_update;o&&o.m(e,n),K((function(){var e=a.map(b).filter(x);i?i.push.apply(i,v(e)):w(e),t.$$.on_mount=[]})),u.forEach(K)}function lt(t,e){var n=t.$$;null!==n.fragment&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){-1===t.$$.dirty[0]&&(B.push(t),Y||(Y=!0,V.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ht(t,e,n,r,o,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=a;G(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:y,not_equal:o,bound:$(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:$(),dirty:u,skip_bound:!1},l=!1;if(f.ctx=n?n(t,s,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return f.ctx&&o(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),l&&pt(t,e)),n})):[],f.update(),l=!0,w(f.before_update),f.fragment=!!r&&r(f.ctx),e.target){if(e.hydrate){var p=C(e.target);f.fragment&&f.fragment.l(p),p.forEach(R)}else f.fragment&&f.fragment.c();e.intro&&ot(t.$$.fragment),ft(t,e.target,e.anchor),Q()}G(c)}var vt=function(){function t(){d(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){lt(this,1),this.$destroy=y}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&m(e.prototype,n),r&&m(e,r),t}(),dt=[];function mt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,r=[];function o(n){if(E(t,n)&&(t=n,e)){for(var o=!dt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),dt.push(i,t)}if(o){for(var u=0;u<dt.length;u+=2)dt[u][0](dt[u+1]);dt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,u=[a,i];return r.push(u),1===r.length&&(e=n(o)||y),a(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var yt={},gt=function(){return{}};function bt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function $t(t){var e,n,o,a,i,u,c,s,f,l,p,h,v,d;return{c:function(){e=O("nav"),n=O("h1"),o=A("Luciano Feijão"),a=P(),i=O("ul"),u=O("li"),c=O("a"),s=A("Work"),l=P(),p=O("li"),h=O("a"),v=A("About"),this.h()},l:function(t){var r=C(e=I(t,"NAV",{class:!0})),f=C(n=I(r,"H1",{class:!0}));o=T(f,"Luciano Feijão"),f.forEach(R),a=D(r);var d=C(i=I(r,"UL",{class:!0})),m=C(u=I(d,"LI",{class:!0})),y=C(c=I(m,"A",{"aria-current":!0,href:!0,class:!0}));s=T(y,"Work"),y.forEach(R),m.forEach(R),l=D(d);var g=C(p=I(d,"LI",{class:!0})),b=C(h=I(g,"A",{"aria-current":!0,href:!0,class:!0}));v=T(b,"About"),b.forEach(R),g.forEach(R),d.forEach(R),r.forEach(R),this.h()},h:function(){q(n,"class","svelte-g4zxb4"),q(c,"aria-current",f=void 0===t[0]?"page":void 0),q(c,"href","."),q(c,"class","svelte-g4zxb4"),q(u,"class","svelte-g4zxb4"),q(h,"aria-current",d="about"===t[0]?"page":void 0),q(h,"href","about"),q(h,"class","svelte-g4zxb4"),q(p,"class","svelte-g4zxb4"),q(i,"class","svelte-g4zxb4"),q(e,"class","svelte-g4zxb4")},m:function(t,r){k(t,e,r),L(e,n),L(n,o),L(e,a),L(e,i),L(i,u),L(u,c),L(c,s),L(i,l),L(i,p),L(p,h),L(h,v)},p:function(t,e){var n=r(e,1)[0];1&n&&f!==(f=void 0===t[0]?"page":void 0)&&q(c,"aria-current",f),1&n&&d!==(d="about"===t[0]?"page":void 0)&&q(h,"aria-current",d)},i:y,o:y,d:function(t){t&&R(e)}}}function wt(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var xt=function(t){l(n,vt);var e=bt(n);function n(t){var r;return d(this,n),ht(p(r=e.call(this)),t,wt,$t,E,{segment:0}),r}return n}();function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function St(t){var e,n,o,a;e=new xt({props:{segment:t[0]}});var i=t[2].default,u=function(t,e,n,r){if(t){var o=S(t,e,n,r);return t[0](o)}}(i,t,t[1],null);return{c:function(){ct(e.$$.fragment),n=P(),o=O("main"),u&&u.c(),this.h()},l:function(t){st(e.$$.fragment,t),n=D(t);var r=C(o=I(t,"MAIN",{class:!0}));u&&u.l(r),r.forEach(R),this.h()},h:function(){q(o,"class","svelte-w06vy9")},m:function(t,r){ft(e,t,r),k(t,n,r),k(t,o,r),u&&u.m(o,null),a=!0},p:function(t,n){var o=r(n,1)[0],a={};1&o&&(a.segment=t[0]),e.$set(a),u&&u.p&&2&o&&_(u,i,t,t[1],o,null,null)},i:function(t){a||(ot(e.$$.fragment,t),ot(u,t),a=!0)},o:function(t){at(e.$$.fragment,t),at(u,t),a=!1},d:function(t){lt(e,t),t&&R(n),t&&R(o),u&&u.d(t)}}}function _t(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var Lt=function(t){l(n,vt);var e=Et(n);function n(t){var r;return d(this,n),ht(p(r=e.call(this)),t,_t,St,E,{segment:0}),r}return n}();function kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function Rt(t){var e,n,r=t[1].stack+"";return{c:function(){e=O("pre"),n=A(r)},l:function(t){var o=C(e=I(t,"PRE",{}));n=T(o,r),o.forEach(R)},m:function(t,r){k(t,e,r),L(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&U(n,r)},d:function(t){t&&R(e)}}}function jt(t){var e,n,o,a,i,u,c,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Rt(t);return{c:function(){n=P(),o=O("h1"),a=A(t[0]),i=P(),u=O("p"),c=A(l),s=P(),p&&p.c(),f=N(),this.h()},l:function(e){F('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(R),n=D(e);var r=C(o=I(e,"H1",{class:!0}));a=T(r,t[0]),r.forEach(R),i=D(e);var h=C(u=I(e,"P",{class:!0}));c=T(h,l),h.forEach(R),s=D(e),p&&p.l(e),f=N(),this.h()},h:function(){q(o,"class","svelte-8od9u6"),q(u,"class","svelte-8od9u6")},m:function(t,e){k(t,n,e),k(t,o,e),L(o,a),k(t,i,e),k(t,u,e),L(u,c),k(t,s,e),p&&p.m(t,e),k(t,f,e)},p:function(t,n){var o=r(n,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&U(a,t[0]),2&o&&l!==(l=t[1].message+"")&&U(c,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Rt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:y,o:y,d:function(t){t&&R(n),t&&R(o),t&&R(i),t&&R(u),t&&R(s),p&&p.d(t),t&&R(f)}}}function Ot(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}var At=function(t){l(n,vt);var e=kt(n);function n(t){var r;return d(this,n),ht(p(r=e.call(this)),t,Ot,jt,E,{status:0,error:1}),r}return n}();function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function Nt(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=g(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&ct(e.$$.fragment),n=N()},l:function(t){e&&st(e.$$.fragment,t),n=N()},m:function(t,o){e&&ft(e,t,o),k(t,n,o),r=!0},p:function(t,r){var u=16&r?it(o,[ut(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){nt();var c=e;at(c.$$.fragment,1,0,(function(){lt(c,1)})),rt()}a?(ct((e=new a(i())).$$.fragment),ot(e.$$.fragment,1),ft(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i:function(t){r||(e&&ot(e.$$.fragment,t),r=!0)},o:function(t){e&&at(e.$$.fragment,t),r=!1},d:function(t){t&&R(n),e&&lt(e,t)}}}function qt(t){var e,n;return e=new At({props:{error:t[0],status:t[1]}}),{c:function(){ct(e.$$.fragment)},l:function(t){st(e.$$.fragment,t)},m:function(t,r){ft(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(ot(e.$$.fragment,t),n=!0)},o:function(t){at(e.$$.fragment,t),n=!1},d:function(t){lt(e,t)}}}function Ct(t){var e,n,r,o,a=[qt,Nt],i=[];function u(t,e){return t[0]?0:1}return e=u(t),n=i[e]=a[e](t),{c:function(){n.c(),r=N()},l:function(t){n.l(t),r=N()},m:function(t,n){i[e].m(t,n),k(t,r,n),o=!0},p:function(t,o){var c=e;(e=u(t))===c?i[e].p(t,o):(nt(),at(i[c],1,1,(function(){i[c]=null})),rt(),(n=i[e])||(n=i[e]=a[e](t)).c(),ot(n,1),n.m(r.parentNode,r))},i:function(t){o||(ot(n),o=!0)},o:function(t){at(n),o=!1},d:function(t){i[e].d(t),t&&R(r)}}}function It(t){for(var e,n,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Ct]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=g(a,o[i]);return e=new Lt({props:a}),{c:function(){ct(e.$$.fragment)},l:function(t){st(e.$$.fragment,t)},m:function(t,r){ft(e,t,r),n=!0},p:function(t,n){var a=r(n,1)[0],i=12&a?it(o,[4&a&&{segment:t[2][0]},8&a&&ut(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){n||(ot(e.$$.fragment,t),n=!0)},o:function(t){at(e.$$.fragment,t),n=!1},d:function(t){lt(e,t)}}}function Tt(t,e,n){var r,o,a,i=e.stores,u=e.error,c=e.status,s=e.segments,f=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return r=h,z().$$.after_update.push(r),o=yt,a=i,z().$$.context.set(o,a),t.$$set=function(t){"stores"in t&&n(5,i=t.stores),"error"in t&&n(0,u=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,s=t.segments),"level0"in t&&n(3,f=t.level0),"level1"in t&&n(4,p=t.level1),"notify"in t&&n(6,h=t.notify)},[u,c,s,f,p,i,h]}var Dt=function(t){l(n,vt);var e=Pt(n);function n(t){var r;return d(this,n),ht(p(r=e.call(this)),t,Tt,It,E,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Ut=[],Ft=[{js:function(){return import("./index.87db7a50.js")},css:[]},{js:function(){return import("./about.5777578f.js")},css:[]}],Gt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]}];function zt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=ce(new URL(t,document.baseURI));return n?(ae[e.replaceState?"replaceState":"pushState"]({id:ee},"",t),fe(n,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Bt,Ht,Jt,Mt,Vt,Yt="undefined"!=typeof __SAPPER__&&__SAPPER__,Kt=!1,Wt=[],Xt="{}",Qt={page:function(t){var e=mt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:mt(null),session:mt(Yt&&Yt.session)};Qt.session.subscribe(function(){var t=c(i.mark((function t(e){var n,r,o,a,u,c;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Mt=e,Kt){t.next=3;break}return t.abrupt("return");case 3:return Vt=!0,n=ce(new URL(location.href)),r=Ht={},t.next=8,de(n);case 8:if(o=t.sent,a=o.redirect,u=o.props,c=o.branch,r===Ht){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,pe(a,c,u,n.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var Zt,te=null;var ee,ne=1;var re,oe,ae="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},ie={};function ue(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],u=void 0===i?"":i;"string"==typeof n[a]&&(n[a]=[n[a]]),"object"===t(n[a])?n[a].push(u):n[a]=u})),n}function ce(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Yt.baseUrl))return null;var e=t.pathname.slice(Yt.baseUrl.length);if(""===e&&(e="/"),!Ut.some((function(t){return t.test(e)})))for(var n=0;n<Gt.length;n+=1){var r=Gt[n],o=r.pattern.exec(e);if(o){var a=ue(t.search),i=r.parts[r.parts.length-1],u=i.params?i.params(o):{},c={host:location.host,path:e,query:a,params:u};return{href:t.href,route:r,match:o,page:c}}}}function se(){return{x:pageXOffset,y:pageYOffset}}function fe(t,e,n,r){return le.apply(this,arguments)}function le(){return(le=c(i.mark((function t(e,n,r,o){var a,u,c,s,f,l,p,h,v;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n?ee=n:(a=se(),ie[ee]=a,n=ee=++ne,ie[ee]=r?a:{x:0,y:0}),ee=n,Bt&&Qt.preloading.set(!0),u=te&&te.href===e.href?te.promise:de(e),te=null,c=Ht={},t.next=8,u;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,c===Ht){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,pe(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),r||(h=ie[n],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),ie[ee]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function pe(t,e,n,r){return he.apply(this,arguments)}function he(){return(he=c(i.mark((function t(e,n,r,o){var a,u;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",zt(e.location,{replaceState:!0}));case 2:if(Qt.page.set(o),Qt.preloading.set(!1),!Bt){t.next=8;break}Bt.$set(r),t.next=18;break;case 8:return r.stores={page:{subscribe:Qt.page.subscribe},preloading:{subscribe:Qt.preloading.subscribe},session:Qt.session},t.next=11,Jt;case 11:if(t.t0=t.sent,r.level0={props:t.t0},r.notify=Qt.page.notify,a=document.querySelector("#sapper-head-start"),u=document.querySelector("#sapper-head-end"),a&&u){for(;a.nextSibling!==u;)be(a.nextSibling);be(a),be(u)}Bt=new Dt({target:Zt,props:r,hydrate:!0});case 18:Wt=n,Xt=JSON.stringify(o.query),Kt=!0,Vt=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ve(t,e,n,r){if(r!==Xt)return!0;var o=Wt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function de(t){return me.apply(this,arguments)}function me(){return(me=c(i.mark((function t(e){var n,r,o,a,u,s,f,l,p,h,v;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route,r=e.page,o=r.path.split("/").filter(Boolean),a=null,u={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},Jt||(Jt=Yt.preloaded[0]||gt.call(s,{host:r.host,path:r.path,query:r.query,params:{}},Mt)),l=1,t.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,t.next=13,Promise.all(n.parts.map(function(){var t=c(i.mark((function t(n,a){var c,f,d,m,y,g;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=o[a],ve(a,c,h,p)&&(v=!0),u.segments[l]=o[a+1],n){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(f=l++,Vt||v||!Wt[a]||Wt[a].part!==n.i){t.next=8;break}return t.abrupt("return",Wt[a]);case 8:return v=!1,t.next=11,ge(Ft[n.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!Kt&&Yt.preloaded[a+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(s,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(e.match):{}},Mt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=Yt.preloaded[a+1];case 26:return t.abrupt("return",u["level".concat(f)]={component:m,props:g,segment:c,match:h,part:n.i});case 27:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),u.error=t.t0,u.status=500,f=[];case 21:return t.abrupt("return",{redirect:a,props:u,branch:f});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function ye(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)}))}function ge(t){var e="string"==typeof t.css?[]:t.css.map(ye);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function be(t){t.parentNode.removeChild(t)}function $e(t){var e=ce(new URL(t,document.baseURI));if(e)return te&&t===te.href||function(t,e){te={href:t,promise:e}}(t,de(e)),te.promise}function we(t){clearTimeout(re),re=setTimeout((function(){xe(t)}),20)}function xe(t){var e=Se(t.target);e&&"prefetch"===e.rel&&$e(e.href)}function Ee(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var n=Se(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=ce(a);if(i)fe(i,null,n.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),ae.pushState({id:ee},"",a.href)}}}else location.hash||e.preventDefault()}}}function Se(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function _e(t){if(ie[ee]=se(),t.state){var e=ce(new URL(location.href));e?fe(e,t.state.id):location.href=location.href}else(function(t){ee=t})(ne=ne+1),ae.replaceState({id:ee},"",location.href)}oe={target:document.querySelector("#sapper")},"scrollRestoration"in ae&&(ae.scrollRestoration="manual"),addEventListener("beforeunload",(function(){ae.scrollRestoration="auto"})),addEventListener("load",(function(){ae.scrollRestoration="manual"})),function(t){Zt=t}(oe.target),addEventListener("click",Ee),addEventListener("popstate",_e),addEventListener("touchstart",xe),addEventListener("mousemove",we),Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;ae.replaceState({id:ne},"",n);var r,o,a,i,u,c,s,f,l=new URL(location.href);if(Yt.error)return r=location,o=r.host,a=r.pathname,i=r.search,u=Yt.session,c=Yt.preloaded,s=Yt.status,f=Yt.error,Jt||(Jt=c&&c[0]),void pe(null,[],{error:f,status:s,session:u,level0:{props:Jt},level1:{props:{status:s,error:f},component:At},segments:c},{host:o,path:a,query:ue(i),params:{}});var p=ce(l);return p?fe(p,ne,!0,e):void 0}));export{r as A,U as B,j as C,N as D,nt as E,rt as F,g as G,it as H,ut as I,vt as S,l as _,s as a,h as b,d as c,p as d,P as e,O as f,ct as g,R as h,ht as i,D as j,I as k,C as l,st as m,q as n,k as o,ft as p,F as q,y as r,E as s,ot as t,at as u,lt as v,o as w,A as x,T as y,L as z};
