!function(){"use strict";const o=["client/index.5c078718.js","client/about.475a4982.js","client/client.50ade2cb.js","client/Body.9890023a.js"].concat(["service-worker-index.html",".DS_Store","CNAME","android-icon-144x144.png","android-icon-192x192.png","android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png","android-icon-96x96.png","apple-icon-114x114.png","apple-icon-120x120.png","apple-icon-144x144.png","apple-icon-152x152.png","apple-icon-180x180.png","apple-icon-57x57.png","apple-icon-60x60.png","apple-icon-72x72.png","apple-icon-76x76.png","apple-icon-precomposed.png","apple-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon-96x96.png","favicon.ico","fonts/.DS_Store","fonts/infini-bold.eot","fonts/infini-bold.otf","fonts/infini-bold.svg","fonts/infini-bold.ttf","fonts/infini-bold.woff","fonts/infini-bold.woff2","fonts/infini-italic.eot","fonts/infini-italic.otf","fonts/infini-italic.svg","fonts/infini-italic.ttf","fonts/infini-italic.woff","fonts/infini-italic.woff2","fonts/infini-regular.eot","fonts/infini-regular.otf","fonts/infini-regular.svg","fonts/infini-regular.ttf","fonts/infini-regular.woff","fonts/infini-regular.woff2","global.css","images/.DS_Store","images/a-morte-de-ivan-illitch-1-1050.jpg","images/a-morte-de-ivan-illitch-1-1050_x2.jpg","images/a-morte-de-ivan-illitch-1-1440.jpg","images/a-morte-de-ivan-illitch-1-1440_x2.jpg","images/a-morte-de-ivan-illitch-1-180.jpg","images/a-morte-de-ivan-illitch-1-180_x2.jpg","images/a-morte-de-ivan-illitch-1-2000.jpg","images/a-morte-de-ivan-illitch-1-2000_x2.jpg","images/a-morte-de-ivan-illitch-1-300.jpg","images/a-morte-de-ivan-illitch-1-300_x2.jpg","images/a-morte-de-ivan-illitch-1-460.jpg","images/a-morte-de-ivan-illitch-1-460_x2.jpg","images/a-morte-de-ivan-illitch-1-720.jpg","images/a-morte-de-ivan-illitch-1-720_x2.jpg","images/a-morte-de-ivan-illitch-4-1050.jpg","images/a-morte-de-ivan-illitch-4-1050_x2.jpg","images/a-morte-de-ivan-illitch-4-1440.jpg","images/a-morte-de-ivan-illitch-4-1440_x2.jpg","images/a-morte-de-ivan-illitch-4-180.jpg","images/a-morte-de-ivan-illitch-4-180_x2.jpg","images/a-morte-de-ivan-illitch-4-2000.jpg","images/a-morte-de-ivan-illitch-4-2000_x2.jpg","images/a-morte-de-ivan-illitch-4-300.jpg","images/a-morte-de-ivan-illitch-4-300_x2.jpg","images/a-morte-de-ivan-illitch-4-460.jpg","images/a-morte-de-ivan-illitch-4-460_x2.jpg","images/a-morte-de-ivan-illitch-4-720.jpg","images/a-morte-de-ivan-illitch-4-720_x2.jpg","images/amas-2-1050.jpg","images/amas-2-1050_x2.jpg","images/amas-2-1440.jpg","images/amas-2-1440_x2.jpg","images/amas-2-180.jpg","images/amas-2-180_x2.jpg","images/amas-2-2000.jpg","images/amas-2-2000_x2.jpg","images/amas-2-300.jpg","images/amas-2-300_x2.jpg","images/amas-2-460.jpg","images/amas-2-460_x2.jpg","images/amas-2-720.jpg","images/amas-2-720_x2.jpg","images/amas-3-1050.jpg","images/amas-3-1050_x2.jpg","images/amas-3-1440.jpg","images/amas-3-1440_x2.jpg","images/amas-3-180.jpg","images/amas-3-180_x2.jpg","images/amas-3-2000.jpg","images/amas-3-2000_x2.jpg","images/amas-3-300.jpg","images/amas-3-300_x2.jpg","images/amas-3-460.jpg","images/amas-3-460_x2.jpg","images/amas-3-720.jpg","images/amas-3-720_x2.jpg","images/amas-5-1050.jpg","images/amas-5-1050_x2.jpg","images/amas-5-1440.jpg","images/amas-5-1440_x2.jpg","images/amas-5-180.jpg","images/amas-5-180_x2.jpg","images/amas-5-2000.jpg","images/amas-5-2000_x2.jpg","images/amas-5-300.jpg","images/amas-5-300_x2.jpg","images/amas-5-460.jpg","images/amas-5-460_x2.jpg","images/amas-5-720.jpg","images/amas-5-720_x2.jpg","images/antianatomia-2-1050.jpg","images/antianatomia-2-1050_x2.jpg","images/antianatomia-2-1440.jpg","images/antianatomia-2-1440_x2.jpg","images/antianatomia-2-180.jpg","images/antianatomia-2-180_x2.jpg","images/antianatomia-2-2000.jpg","images/antianatomia-2-2000_x2.jpg","images/antianatomia-2-300.jpg","images/antianatomia-2-300_x2.jpg","images/antianatomia-2-460.jpg","images/antianatomia-2-460_x2.jpg","images/antianatomia-2-720.jpg","images/antianatomia-2-720_x2.jpg","images/diario-do-hospicio-2-1050.jpg","images/diario-do-hospicio-2-1050_x2.jpg","images/diario-do-hospicio-2-1440.jpg","images/diario-do-hospicio-2-1440_x2.jpg","images/diario-do-hospicio-2-180.jpg","images/diario-do-hospicio-2-180_x2.jpg","images/diario-do-hospicio-2-2000.jpg","images/diario-do-hospicio-2-2000_x2.jpg","images/diario-do-hospicio-2-300.jpg","images/diario-do-hospicio-2-300_x2.jpg","images/diario-do-hospicio-2-460.jpg","images/diario-do-hospicio-2-460_x2.jpg","images/diario-do-hospicio-2-720.jpg","images/diario-do-hospicio-2-720_x2.jpg","images/diario-do-hospicio-5-1050.jpg","images/diario-do-hospicio-5-1050_x2.jpg","images/diario-do-hospicio-5-1440.jpg","images/diario-do-hospicio-5-1440_x2.jpg","images/diario-do-hospicio-5-180.jpg","images/diario-do-hospicio-5-180_x2.jpg","images/diario-do-hospicio-5-2000.jpg","images/diario-do-hospicio-5-2000_x2.jpg","images/diario-do-hospicio-5-300.jpg","images/diario-do-hospicio-5-300_x2.jpg","images/diario-do-hospicio-5-460.jpg","images/diario-do-hospicio-5-460_x2.jpg","images/diario-do-hospicio-5-720.jpg","images/diario-do-hospicio-5-720_x2.jpg","images/diario-do-hospicio-6-1050.jpg","images/diario-do-hospicio-6-1050_x2.jpg","images/diario-do-hospicio-6-1440.jpg","images/diario-do-hospicio-6-1440_x2.jpg","images/diario-do-hospicio-6-180.jpg","images/diario-do-hospicio-6-180_x2.jpg","images/diario-do-hospicio-6-2000.jpg","images/diario-do-hospicio-6-2000_x2.jpg","images/diario-do-hospicio-6-300.jpg","images/diario-do-hospicio-6-300_x2.jpg","images/diario-do-hospicio-6-460.jpg","images/diario-do-hospicio-6-460_x2.jpg","images/diario-do-hospicio-6-720.jpg","images/diario-do-hospicio-6-720_x2.jpg","images/diario-do-hospicio-9-1050.jpg","images/diario-do-hospicio-9-1050_x2.jpg","images/diario-do-hospicio-9-1440.jpg","images/diario-do-hospicio-9-1440_x2.jpg","images/diario-do-hospicio-9-180.jpg","images/diario-do-hospicio-9-180_x2.jpg","images/diario-do-hospicio-9-2000.jpg","images/diario-do-hospicio-9-2000_x2.jpg","images/diario-do-hospicio-9-300.jpg","images/diario-do-hospicio-9-300_x2.jpg","images/diario-do-hospicio-9-460.jpg","images/diario-do-hospicio-9-460_x2.jpg","images/diario-do-hospicio-9-720.jpg","images/diario-do-hospicio-9-720_x2.jpg","images/luciano-feijao-1050.jpg","images/luciano-feijao-1050_x2.jpg","images/luciano-feijao-1440.jpg","images/luciano-feijao-1440_x2.jpg","images/luciano-feijao-180.jpg","images/luciano-feijao-180_x2.jpg","images/luciano-feijao-2000.jpg","images/luciano-feijao-2000_x2.jpg","images/luciano-feijao-300.jpg","images/luciano-feijao-300_x2.jpg","images/luciano-feijao-460.jpg","images/luciano-feijao-460_x2.jpg","images/luciano-feijao-720.jpg","images/luciano-feijao-720_x2.jpg","images/outros-projetos-10-1050.jpg","images/outros-projetos-10-1050_x2.jpg","images/outros-projetos-10-1440.jpg","images/outros-projetos-10-1440_x2.jpg","images/outros-projetos-10-180.jpg","images/outros-projetos-10-180_x2.jpg","images/outros-projetos-10-2000.jpg","images/outros-projetos-10-2000_x2.jpg","images/outros-projetos-10-300.jpg","images/outros-projetos-10-300_x2.jpg","images/outros-projetos-10-460.jpg","images/outros-projetos-10-460_x2.jpg","images/outros-projetos-10-720.jpg","images/outros-projetos-10-720_x2.jpg","images/outros-projetos-13-1050.jpg","images/outros-projetos-13-1050_x2.jpg","images/outros-projetos-13-1440.jpg","images/outros-projetos-13-1440_x2.jpg","images/outros-projetos-13-180.jpg","images/outros-projetos-13-180_x2.jpg","images/outros-projetos-13-2000.jpg","images/outros-projetos-13-2000_x2.jpg","images/outros-projetos-13-300.jpg","images/outros-projetos-13-300_x2.jpg","images/outros-projetos-13-460.jpg","images/outros-projetos-13-460_x2.jpg","images/outros-projetos-13-720.jpg","images/outros-projetos-13-720_x2.jpg","images/outros-projetos-15-1050.jpg","images/outros-projetos-15-1050_x2.jpg","images/outros-projetos-15-1440.jpg","images/outros-projetos-15-1440_x2.jpg","images/outros-projetos-15-180.jpg","images/outros-projetos-15-180_x2.jpg","images/outros-projetos-15-2000.jpg","images/outros-projetos-15-2000_x2.jpg","images/outros-projetos-15-300.jpg","images/outros-projetos-15-300_x2.jpg","images/outros-projetos-15-460.jpg","images/outros-projetos-15-460_x2.jpg","images/outros-projetos-15-720.jpg","images/outros-projetos-15-720_x2.jpg","images/outros-projetos-5-1050.jpg","images/outros-projetos-5-1050_x2.jpg","images/outros-projetos-5-1440.jpg","images/outros-projetos-5-1440_x2.jpg","images/outros-projetos-5-180.jpg","images/outros-projetos-5-180_x2.jpg","images/outros-projetos-5-2000.jpg","images/outros-projetos-5-2000_x2.jpg","images/outros-projetos-5-300.jpg","images/outros-projetos-5-300_x2.jpg","images/outros-projetos-5-460.jpg","images/outros-projetos-5-460_x2.jpg","images/outros-projetos-5-720.jpg","images/outros-projetos-5-720_x2.jpg","images/outros-projetos-6-1050.jpg","images/outros-projetos-6-1050_x2.jpg","images/outros-projetos-6-1440.jpg","images/outros-projetos-6-1440_x2.jpg","images/outros-projetos-6-180.jpg","images/outros-projetos-6-180_x2.jpg","images/outros-projetos-6-2000.jpg","images/outros-projetos-6-2000_x2.jpg","images/outros-projetos-6-300.jpg","images/outros-projetos-6-300_x2.jpg","images/outros-projetos-6-460.jpg","images/outros-projetos-6-460_x2.jpg","images/outros-projetos-6-720.jpg","images/outros-projetos-6-720_x2.jpg","images/torcoes-1-1050.jpg","images/torcoes-1-1050_x2.jpg","images/torcoes-1-1440.jpg","images/torcoes-1-1440_x2.jpg","images/torcoes-1-180.jpg","images/torcoes-1-180_x2.jpg","images/torcoes-1-2000.jpg","images/torcoes-1-2000_x2.jpg","images/torcoes-1-300.jpg","images/torcoes-1-300_x2.jpg","images/torcoes-1-460.jpg","images/torcoes-1-460_x2.jpg","images/torcoes-1-720.jpg","images/torcoes-1-720_x2.jpg","images/torcoes-11-1050.jpg","images/torcoes-11-1050_x2.jpg","images/torcoes-11-1440.jpg","images/torcoes-11-1440_x2.jpg","images/torcoes-11-180.jpg","images/torcoes-11-180_x2.jpg","images/torcoes-11-2000.jpg","images/torcoes-11-2000_x2.jpg","images/torcoes-11-300.jpg","images/torcoes-11-300_x2.jpg","images/torcoes-11-460.jpg","images/torcoes-11-460_x2.jpg","images/torcoes-11-720.jpg","images/torcoes-11-720_x2.jpg","images/torcoes-2-1050.jpg","images/torcoes-2-1050_x2.jpg","images/torcoes-2-1440.jpg","images/torcoes-2-1440_x2.jpg","images/torcoes-2-180.jpg","images/torcoes-2-180_x2.jpg","images/torcoes-2-2000.jpg","images/torcoes-2-2000_x2.jpg","images/torcoes-2-300.jpg","images/torcoes-2-300_x2.jpg","images/torcoes-2-460.jpg","images/torcoes-2-460_x2.jpg","images/torcoes-2-720.jpg","images/torcoes-2-720_x2.jpg","images/torcoes-3-1050.jpg","images/torcoes-3-1050_x2.jpg","images/torcoes-3-1440.jpg","images/torcoes-3-1440_x2.jpg","images/torcoes-3-180.jpg","images/torcoes-3-180_x2.jpg","images/torcoes-3-2000.jpg","images/torcoes-3-2000_x2.jpg","images/torcoes-3-300.jpg","images/torcoes-3-300_x2.jpg","images/torcoes-3-460.jpg","images/torcoes-3-460_x2.jpg","images/torcoes-3-720.jpg","images/torcoes-3-720_x2.jpg","images/torcoes-9-1050.jpg","images/torcoes-9-1050_x2.jpg","images/torcoes-9-1440.jpg","images/torcoes-9-1440_x2.jpg","images/torcoes-9-180.jpg","images/torcoes-9-180_x2.jpg","images/torcoes-9-2000.jpg","images/torcoes-9-2000_x2.jpg","images/torcoes-9-300.jpg","images/torcoes-9-300_x2.jpg","images/torcoes-9-460.jpg","images/torcoes-9-460_x2.jpg","images/torcoes-9-720.jpg","images/torcoes-9-720_x2.jpg","luciano-feijao-website.jpg","manifest.json","ms-icon-144x144.png","ms-icon-150x150.png","ms-icon-310x310.png","ms-icon-70x70.png"]),i=new Set(o);self.addEventListener("install",i=>{i.waitUntil(caches.open("cache1615909893395").then(i=>i.addAll(o)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",o=>{o.waitUntil(caches.keys().then(async o=>{for(const i of o)"cache1615909893395"!==i&&await caches.delete(i);self.clients.claim()}))}),self.addEventListener("fetch",o=>{if("GET"!==o.request.method||o.request.headers.has("range"))return;const s=new URL(o.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&i.has(s.pathname)?o.respondWith(caches.match(o.request)):"only-if-cached"!==o.request.cache&&o.respondWith(caches.open("offline1615909893395").then(async i=>{try{const s=await fetch(o.request);return i.put(o.request,s.clone()),s}catch(s){const a=await i.match(o.request);if(a)return a;throw s}}))))})}();
