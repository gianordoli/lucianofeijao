import{S as t,i as s,s as a,f as e,e as n,t as o,q as i,d as r,g as l,c,h as u,k as h,a as f,b as m,l as p,m as d,n as g}from"./client.ff766a3c.js";function v(t){let s,a,v,x,j,y,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),x=o(E),j=e(),y=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),v=c(t,"H1",{});var s=u(v);x=h(s,E),s.forEach(r),j=l(t),y=c(t,"DIV",{class:!0}),u(y).forEach(r),this.h()},h(){f(y,"class","content svelte-gnxal1")},m(t,s){m(t,a,s),m(t,v,s),p(v,x),m(t,j,s),m(t,y,s),y.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&d(x,E),1&a&&H!==(H=t[0].html+"")&&(y.innerHTML=H)},i:g,o:g,d(t){t&&r(a),t&&r(v),t&&r(j),t&&r(y)}}}async function x({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,v,a,{post:0})}}export{x as preload};
