import{S as t,i as s,s as a,a as e,e as n,p as o,q as i,d as r,b as l,f as c,g as u,r as h,j as f,k as p,u as d,v as m,n as v}from"./client.0f972ba0.js";function g(t){let s,a,g,j,x,b,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(y),x=e(),b=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),g=c(t,"H1",{});var s=u(g);j=h(s,y),s.forEach(r),x=l(t),b=c(t,"DIV",{class:!0}),u(b).forEach(r),this.h()},h(){f(b,"class","content svelte-gnxal1")},m(t,s){p(t,a,s),p(t,g,s),d(g,j),p(t,x,s),p(t,b,s),b.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&m(j,y),1&a&&E!==(E=t[0].html+"")&&(b.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(x),t&&r(b)}}}async function j({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function x(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,g,a,{post:0})}}export{j as preload};
