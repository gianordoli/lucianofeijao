!function(){"use strict";const i=["client/index.205a1865.js","client/about.e68e6948.js","client/index.8ac8f25a.js","client/[slug].0794ccbf.js","client/work.122b2207.js","client/client.0f972ba0.js","client/Body.b16c4a1b.js"].concat(["service-worker-index.html",".DS_Store","favicon.png","fonts/.DS_Store","fonts/infini-bold.eot","fonts/infini-bold.otf","fonts/infini-bold.svg","fonts/infini-bold.ttf","fonts/infini-bold.woff","fonts/infini-bold.woff2","fonts/infini-italic.eot","fonts/infini-italic.otf","fonts/infini-italic.svg","fonts/infini-italic.ttf","fonts/infini-italic.woff","fonts/infini-italic.woff2","fonts/infini-regular.eot","fonts/infini-regular.otf","fonts/infini-regular.svg","fonts/infini-regular.ttf","fonts/infini-regular.woff","fonts/infini-regular.woff2","global.css","images/a-morte-de-ivan-illitch-1-1050.jpg","images/a-morte-de-ivan-illitch-1-1050_x2.jpg","images/a-morte-de-ivan-illitch-1-1440.jpg","images/a-morte-de-ivan-illitch-1-1440_x2.jpg","images/a-morte-de-ivan-illitch-1-180.jpg","images/a-morte-de-ivan-illitch-1-180_x2.jpg","images/a-morte-de-ivan-illitch-1-2000.jpg","images/a-morte-de-ivan-illitch-1-2000_x2.jpg","images/a-morte-de-ivan-illitch-1-300.jpg","images/a-morte-de-ivan-illitch-1-300_x2.jpg","images/a-morte-de-ivan-illitch-1-460.jpg","images/a-morte-de-ivan-illitch-1-460_x2.jpg","images/a-morte-de-ivan-illitch-1-720.jpg","images/a-morte-de-ivan-illitch-1-720_x2.jpg","images/a-morte-de-ivan-illitch-4-1050.jpg","images/a-morte-de-ivan-illitch-4-1050_x2.jpg","images/a-morte-de-ivan-illitch-4-1440.jpg","images/a-morte-de-ivan-illitch-4-1440_x2.jpg","images/a-morte-de-ivan-illitch-4-180.jpg","images/a-morte-de-ivan-illitch-4-180_x2.jpg","images/a-morte-de-ivan-illitch-4-2000.jpg","images/a-morte-de-ivan-illitch-4-2000_x2.jpg","images/a-morte-de-ivan-illitch-4-300.jpg","images/a-morte-de-ivan-illitch-4-300_x2.jpg","images/a-morte-de-ivan-illitch-4-460.jpg","images/a-morte-de-ivan-illitch-4-460_x2.jpg","images/a-morte-de-ivan-illitch-4-720.jpg","images/a-morte-de-ivan-illitch-4-720_x2.jpg","images/a-morte-de-ivan-illitch-6-1050.jpg","images/a-morte-de-ivan-illitch-6-1050_x2.jpg","images/a-morte-de-ivan-illitch-6-1440.jpg","images/a-morte-de-ivan-illitch-6-1440_x2.jpg","images/a-morte-de-ivan-illitch-6-180.jpg","images/a-morte-de-ivan-illitch-6-180_x2.jpg","images/a-morte-de-ivan-illitch-6-2000.jpg","images/a-morte-de-ivan-illitch-6-2000_x2.jpg","images/a-morte-de-ivan-illitch-6-300.jpg","images/a-morte-de-ivan-illitch-6-300_x2.jpg","images/a-morte-de-ivan-illitch-6-460.jpg","images/a-morte-de-ivan-illitch-6-460_x2.jpg","images/a-morte-de-ivan-illitch-6-720.jpg","images/a-morte-de-ivan-illitch-6-720_x2.jpg","images/amas-1-1050.jpg","images/amas-1-1050_x2.jpg","images/amas-1-1440.jpg","images/amas-1-1440_x2.jpg","images/amas-1-180.jpg","images/amas-1-180_x2.jpg","images/amas-1-2000.jpg","images/amas-1-2000_x2.jpg","images/amas-1-300.jpg","images/amas-1-300_x2.jpg","images/amas-1-460.jpg","images/amas-1-460_x2.jpg","images/amas-1-720.jpg","images/amas-1-720_x2.jpg","images/amas-11-1050.jpg","images/amas-11-1050_x2.jpg","images/amas-11-1440.jpg","images/amas-11-1440_x2.jpg","images/amas-11-180.jpg","images/amas-11-180_x2.jpg","images/amas-11-2000.jpg","images/amas-11-2000_x2.jpg","images/amas-11-300.jpg","images/amas-11-300_x2.jpg","images/amas-11-460.jpg","images/amas-11-460_x2.jpg","images/amas-11-720.jpg","images/amas-11-720_x2.jpg","images/amas-2-1050.jpg","images/amas-2-1050_x2.jpg","images/amas-2-1440.jpg","images/amas-2-1440_x2.jpg","images/amas-2-180.jpg","images/amas-2-180_x2.jpg","images/amas-2-2000.jpg","images/amas-2-2000_x2.jpg","images/amas-2-300.jpg","images/amas-2-300_x2.jpg","images/amas-2-460.jpg","images/amas-2-460_x2.jpg","images/amas-2-720.jpg","images/amas-2-720_x2.jpg","images/amas-3-1050.jpg","images/amas-3-1050_x2.jpg","images/amas-3-1440.jpg","images/amas-3-1440_x2.jpg","images/amas-3-180.jpg","images/amas-3-180_x2.jpg","images/amas-3-2000.jpg","images/amas-3-2000_x2.jpg","images/amas-3-300.jpg","images/amas-3-300_x2.jpg","images/amas-3-460.jpg","images/amas-3-460_x2.jpg","images/amas-3-720.jpg","images/amas-3-720_x2.jpg","images/amas-5-1050.jpg","images/amas-5-1050_x2.jpg","images/amas-5-1440.jpg","images/amas-5-1440_x2.jpg","images/amas-5-180.jpg","images/amas-5-180_x2.jpg","images/amas-5-2000.jpg","images/amas-5-2000_x2.jpg","images/amas-5-300.jpg","images/amas-5-300_x2.jpg","images/amas-5-460.jpg","images/amas-5-460_x2.jpg","images/amas-5-720.jpg","images/amas-5-720_x2.jpg","images/amas-9-1050.jpg","images/amas-9-1050_x2.jpg","images/amas-9-1440.jpg","images/amas-9-1440_x2.jpg","images/amas-9-180.jpg","images/amas-9-180_x2.jpg","images/amas-9-2000.jpg","images/amas-9-2000_x2.jpg","images/amas-9-300.jpg","images/amas-9-300_x2.jpg","images/amas-9-460.jpg","images/amas-9-460_x2.jpg","images/amas-9-720.jpg","images/amas-9-720_x2.jpg","images/antianatomia-12-1050.jpg","images/antianatomia-12-1050_x2.jpg","images/antianatomia-12-1440.jpg","images/antianatomia-12-1440_x2.jpg","images/antianatomia-12-180.jpg","images/antianatomia-12-180_x2.jpg","images/antianatomia-12-2000.jpg","images/antianatomia-12-2000_x2.jpg","images/antianatomia-12-300.jpg","images/antianatomia-12-300_x2.jpg","images/antianatomia-12-460.jpg","images/antianatomia-12-460_x2.jpg","images/antianatomia-12-720.jpg","images/antianatomia-12-720_x2.jpg","images/antianatomia-14-1050.jpg","images/antianatomia-14-1050_x2.jpg","images/antianatomia-14-1440.jpg","images/antianatomia-14-1440_x2.jpg","images/antianatomia-14-180.jpg","images/antianatomia-14-180_x2.jpg","images/antianatomia-14-2000.jpg","images/antianatomia-14-2000_x2.jpg","images/antianatomia-14-300.jpg","images/antianatomia-14-300_x2.jpg","images/antianatomia-14-460.jpg","images/antianatomia-14-460_x2.jpg","images/antianatomia-14-720.jpg","images/antianatomia-14-720_x2.jpg","images/antianatomia-2-1050.jpg","images/antianatomia-2-1050_x2.jpg","images/antianatomia-2-1440.jpg","images/antianatomia-2-1440_x2.jpg","images/antianatomia-2-180.jpg","images/antianatomia-2-180_x2.jpg","images/antianatomia-2-2000.jpg","images/antianatomia-2-2000_x2.jpg","images/antianatomia-2-300.jpg","images/antianatomia-2-300_x2.jpg","images/antianatomia-2-460.jpg","images/antianatomia-2-460_x2.jpg","images/antianatomia-2-720.jpg","images/antianatomia-2-720_x2.jpg","images/diario-do-hospicio-1-1050.jpg","images/diario-do-hospicio-1-1050_x2.jpg","images/diario-do-hospicio-1-1440.jpg","images/diario-do-hospicio-1-1440_x2.jpg","images/diario-do-hospicio-1-180.jpg","images/diario-do-hospicio-1-180_x2.jpg","images/diario-do-hospicio-1-2000.jpg","images/diario-do-hospicio-1-2000_x2.jpg","images/diario-do-hospicio-1-300.jpg","images/diario-do-hospicio-1-300_x2.jpg","images/diario-do-hospicio-1-460.jpg","images/diario-do-hospicio-1-460_x2.jpg","images/diario-do-hospicio-1-720.jpg","images/diario-do-hospicio-1-720_x2.jpg","images/diario-do-hospicio-2-1050.jpg","images/diario-do-hospicio-2-1050_x2.jpg","images/diario-do-hospicio-2-1440.jpg","images/diario-do-hospicio-2-1440_x2.jpg","images/diario-do-hospicio-2-180.jpg","images/diario-do-hospicio-2-180_x2.jpg","images/diario-do-hospicio-2-2000.jpg","images/diario-do-hospicio-2-2000_x2.jpg","images/diario-do-hospicio-2-300.jpg","images/diario-do-hospicio-2-300_x2.jpg","images/diario-do-hospicio-2-460.jpg","images/diario-do-hospicio-2-460_x2.jpg","images/diario-do-hospicio-2-720.jpg","images/diario-do-hospicio-2-720_x2.jpg","images/diario-do-hospicio-3-1050.jpg","images/diario-do-hospicio-3-1050_x2.jpg","images/diario-do-hospicio-3-1440.jpg","images/diario-do-hospicio-3-1440_x2.jpg","images/diario-do-hospicio-3-180.jpg","images/diario-do-hospicio-3-180_x2.jpg","images/diario-do-hospicio-3-2000.jpg","images/diario-do-hospicio-3-2000_x2.jpg","images/diario-do-hospicio-3-300.jpg","images/diario-do-hospicio-3-300_x2.jpg","images/diario-do-hospicio-3-460.jpg","images/diario-do-hospicio-3-460_x2.jpg","images/diario-do-hospicio-3-720.jpg","images/diario-do-hospicio-3-720_x2.jpg","images/diario-do-hospicio-4-1050.jpg","images/diario-do-hospicio-4-1050_x2.jpg","images/diario-do-hospicio-4-1440.jpg","images/diario-do-hospicio-4-1440_x2.jpg","images/diario-do-hospicio-4-180.jpg","images/diario-do-hospicio-4-180_x2.jpg","images/diario-do-hospicio-4-2000.jpg","images/diario-do-hospicio-4-2000_x2.jpg","images/diario-do-hospicio-4-300.jpg","images/diario-do-hospicio-4-300_x2.jpg","images/diario-do-hospicio-4-460.jpg","images/diario-do-hospicio-4-460_x2.jpg","images/diario-do-hospicio-4-720.jpg","images/diario-do-hospicio-4-720_x2.jpg","images/diario-do-hospicio-5-1050.jpg","images/diario-do-hospicio-5-1050_x2.jpg","images/diario-do-hospicio-5-1440.jpg","images/diario-do-hospicio-5-1440_x2.jpg","images/diario-do-hospicio-5-180.jpg","images/diario-do-hospicio-5-180_x2.jpg","images/diario-do-hospicio-5-2000.jpg","images/diario-do-hospicio-5-2000_x2.jpg","images/diario-do-hospicio-5-300.jpg","images/diario-do-hospicio-5-300_x2.jpg","images/diario-do-hospicio-5-460.jpg","images/diario-do-hospicio-5-460_x2.jpg","images/diario-do-hospicio-5-720.jpg","images/diario-do-hospicio-5-720_x2.jpg","images/diario-do-hospicio-6-1050.jpg","images/diario-do-hospicio-6-1050_x2.jpg","images/diario-do-hospicio-6-1440.jpg","images/diario-do-hospicio-6-1440_x2.jpg","images/diario-do-hospicio-6-180.jpg","images/diario-do-hospicio-6-180_x2.jpg","images/diario-do-hospicio-6-2000.jpg","images/diario-do-hospicio-6-2000_x2.jpg","images/diario-do-hospicio-6-300.jpg","images/diario-do-hospicio-6-300_x2.jpg","images/diario-do-hospicio-6-460.jpg","images/diario-do-hospicio-6-460_x2.jpg","images/diario-do-hospicio-6-720.jpg","images/diario-do-hospicio-6-720_x2.jpg","images/diario-do-hospicio-9-1050.jpg","images/diario-do-hospicio-9-1050_x2.jpg","images/diario-do-hospicio-9-1440.jpg","images/diario-do-hospicio-9-1440_x2.jpg","images/diario-do-hospicio-9-180.jpg","images/diario-do-hospicio-9-180_x2.jpg","images/diario-do-hospicio-9-2000.jpg","images/diario-do-hospicio-9-2000_x2.jpg","images/diario-do-hospicio-9-300.jpg","images/diario-do-hospicio-9-300_x2.jpg","images/diario-do-hospicio-9-460.jpg","images/diario-do-hospicio-9-460_x2.jpg","images/diario-do-hospicio-9-720.jpg","images/diario-do-hospicio-9-720_x2.jpg","images/folha-de-sao-paulo-1-1050.jpg","images/folha-de-sao-paulo-1-1050_x2.jpg","images/folha-de-sao-paulo-1-1440.jpg","images/folha-de-sao-paulo-1-1440_x2.jpg","images/folha-de-sao-paulo-1-180.jpg","images/folha-de-sao-paulo-1-180_x2.jpg","images/folha-de-sao-paulo-1-2000.jpg","images/folha-de-sao-paulo-1-2000_x2.jpg","images/folha-de-sao-paulo-1-300.jpg","images/folha-de-sao-paulo-1-300_x2.jpg","images/folha-de-sao-paulo-1-460.jpg","images/folha-de-sao-paulo-1-460_x2.jpg","images/folha-de-sao-paulo-1-720.jpg","images/folha-de-sao-paulo-1-720_x2.jpg","images/luciano-feijao-1050.jpg","images/luciano-feijao-1050_x2.jpg","images/luciano-feijao-1440.jpg","images/luciano-feijao-1440_x2.jpg","images/luciano-feijao-180.jpg","images/luciano-feijao-180_x2.jpg","images/luciano-feijao-2000.jpg","images/luciano-feijao-2000_x2.jpg","images/luciano-feijao-300.jpg","images/luciano-feijao-300_x2.jpg","images/luciano-feijao-460.jpg","images/luciano-feijao-460_x2.jpg","images/luciano-feijao-720.jpg","images/luciano-feijao-720_x2.jpg","images/outros-projetos-10-1050.jpg","images/outros-projetos-10-1050_x2.jpg","images/outros-projetos-10-1440.jpg","images/outros-projetos-10-1440_x2.jpg","images/outros-projetos-10-180.jpg","images/outros-projetos-10-180_x2.jpg","images/outros-projetos-10-2000.jpg","images/outros-projetos-10-2000_x2.jpg","images/outros-projetos-10-300.jpg","images/outros-projetos-10-300_x2.jpg","images/outros-projetos-10-460.jpg","images/outros-projetos-10-460_x2.jpg","images/outros-projetos-10-720.jpg","images/outros-projetos-10-720_x2.jpg","images/outros-projetos-13-1050.jpg","images/outros-projetos-13-1050_x2.jpg","images/outros-projetos-13-1440.jpg","images/outros-projetos-13-1440_x2.jpg","images/outros-projetos-13-180.jpg","images/outros-projetos-13-180_x2.jpg","images/outros-projetos-13-2000.jpg","images/outros-projetos-13-2000_x2.jpg","images/outros-projetos-13-300.jpg","images/outros-projetos-13-300_x2.jpg","images/outros-projetos-13-460.jpg","images/outros-projetos-13-460_x2.jpg","images/outros-projetos-13-720.jpg","images/outros-projetos-13-720_x2.jpg","images/outros-projetos-16-1050.jpg","images/outros-projetos-16-1050_x2.jpg","images/outros-projetos-16-1440.jpg","images/outros-projetos-16-1440_x2.jpg","images/outros-projetos-16-180.jpg","images/outros-projetos-16-180_x2.jpg","images/outros-projetos-16-2000.jpg","images/outros-projetos-16-2000_x2.jpg","images/outros-projetos-16-300.jpg","images/outros-projetos-16-300_x2.jpg","images/outros-projetos-16-460.jpg","images/outros-projetos-16-460_x2.jpg","images/outros-projetos-16-720.jpg","images/outros-projetos-16-720_x2.jpg","images/outros-projetos-21-1050.jpg","images/outros-projetos-21-1050_x2.jpg","images/outros-projetos-21-1440.jpg","images/outros-projetos-21-1440_x2.jpg","images/outros-projetos-21-180.jpg","images/outros-projetos-21-180_x2.jpg","images/outros-projetos-21-2000.jpg","images/outros-projetos-21-2000_x2.jpg","images/outros-projetos-21-300.jpg","images/outros-projetos-21-300_x2.jpg","images/outros-projetos-21-460.jpg","images/outros-projetos-21-460_x2.jpg","images/outros-projetos-21-720.jpg","images/outros-projetos-21-720_x2.jpg","images/outros-projetos-4-1050.jpg","images/outros-projetos-4-1050_x2.jpg","images/outros-projetos-4-1440.jpg","images/outros-projetos-4-1440_x2.jpg","images/outros-projetos-4-180.jpg","images/outros-projetos-4-180_x2.jpg","images/outros-projetos-4-2000.jpg","images/outros-projetos-4-2000_x2.jpg","images/outros-projetos-4-300.jpg","images/outros-projetos-4-300_x2.jpg","images/outros-projetos-4-460.jpg","images/outros-projetos-4-460_x2.jpg","images/outros-projetos-4-720.jpg","images/outros-projetos-4-720_x2.jpg","images/outros-projetos-5-1050.jpg","images/outros-projetos-5-1050_x2.jpg","images/outros-projetos-5-1440.jpg","images/outros-projetos-5-1440_x2.jpg","images/outros-projetos-5-180.jpg","images/outros-projetos-5-180_x2.jpg","images/outros-projetos-5-2000.jpg","images/outros-projetos-5-2000_x2.jpg","images/outros-projetos-5-300.jpg","images/outros-projetos-5-300_x2.jpg","images/outros-projetos-5-460.jpg","images/outros-projetos-5-460_x2.jpg","images/outros-projetos-5-720.jpg","images/outros-projetos-5-720_x2.jpg","images/outros-projetos-6-1050.jpg","images/outros-projetos-6-1050_x2.jpg","images/outros-projetos-6-1440.jpg","images/outros-projetos-6-1440_x2.jpg","images/outros-projetos-6-180.jpg","images/outros-projetos-6-180_x2.jpg","images/outros-projetos-6-2000.jpg","images/outros-projetos-6-2000_x2.jpg","images/outros-projetos-6-300.jpg","images/outros-projetos-6-300_x2.jpg","images/outros-projetos-6-460.jpg","images/outros-projetos-6-460_x2.jpg","images/outros-projetos-6-720.jpg","images/outros-projetos-6-720_x2.jpg","images/torcoes-1-1050.jpg","images/torcoes-1-1050_x2.jpg","images/torcoes-1-1440.jpg","images/torcoes-1-1440_x2.jpg","images/torcoes-1-180.jpg","images/torcoes-1-180_x2.jpg","images/torcoes-1-2000.jpg","images/torcoes-1-2000_x2.jpg","images/torcoes-1-300.jpg","images/torcoes-1-300_x2.jpg","images/torcoes-1-460.jpg","images/torcoes-1-460_x2.jpg","images/torcoes-1-720.jpg","images/torcoes-1-720_x2.jpg","images/torcoes-10-1050.jpg","images/torcoes-10-1050_x2.jpg","images/torcoes-10-1440.jpg","images/torcoes-10-1440_x2.jpg","images/torcoes-10-180.jpg","images/torcoes-10-180_x2.jpg","images/torcoes-10-2000.jpg","images/torcoes-10-2000_x2.jpg","images/torcoes-10-300.jpg","images/torcoes-10-300_x2.jpg","images/torcoes-10-460.jpg","images/torcoes-10-460_x2.jpg","images/torcoes-10-720.jpg","images/torcoes-10-720_x2.jpg","images/torcoes-11-1050.jpg","images/torcoes-11-1050_x2.jpg","images/torcoes-11-1440.jpg","images/torcoes-11-1440_x2.jpg","images/torcoes-11-180.jpg","images/torcoes-11-180_x2.jpg","images/torcoes-11-2000.jpg","images/torcoes-11-2000_x2.jpg","images/torcoes-11-300.jpg","images/torcoes-11-300_x2.jpg","images/torcoes-11-460.jpg","images/torcoes-11-460_x2.jpg","images/torcoes-11-720.jpg","images/torcoes-11-720_x2.jpg","images/torcoes-2-1050.jpg","images/torcoes-2-1050_x2.jpg","images/torcoes-2-1440.jpg","images/torcoes-2-1440_x2.jpg","images/torcoes-2-180.jpg","images/torcoes-2-180_x2.jpg","images/torcoes-2-2000.jpg","images/torcoes-2-2000_x2.jpg","images/torcoes-2-300.jpg","images/torcoes-2-300_x2.jpg","images/torcoes-2-460.jpg","images/torcoes-2-460_x2.jpg","images/torcoes-2-720.jpg","images/torcoes-2-720_x2.jpg","images/torcoes-3-1050.jpg","images/torcoes-3-1050_x2.jpg","images/torcoes-3-1440.jpg","images/torcoes-3-1440_x2.jpg","images/torcoes-3-180.jpg","images/torcoes-3-180_x2.jpg","images/torcoes-3-2000.jpg","images/torcoes-3-2000_x2.jpg","images/torcoes-3-300.jpg","images/torcoes-3-300_x2.jpg","images/torcoes-3-460.jpg","images/torcoes-3-460_x2.jpg","images/torcoes-3-720.jpg","images/torcoes-3-720_x2.jpg","images/torcoes-7-1050.jpg","images/torcoes-7-1050_x2.jpg","images/torcoes-7-1440.jpg","images/torcoes-7-1440_x2.jpg","images/torcoes-7-180.jpg","images/torcoes-7-180_x2.jpg","images/torcoes-7-2000.jpg","images/torcoes-7-2000_x2.jpg","images/torcoes-7-300.jpg","images/torcoes-7-300_x2.jpg","images/torcoes-7-460.jpg","images/torcoes-7-460_x2.jpg","images/torcoes-7-720.jpg","images/torcoes-7-720_x2.jpg","images/torcoes-9-1050.jpg","images/torcoes-9-1050_x2.jpg","images/torcoes-9-1440.jpg","images/torcoes-9-1440_x2.jpg","images/torcoes-9-180.jpg","images/torcoes-9-180_x2.jpg","images/torcoes-9-2000.jpg","images/torcoes-9-2000_x2.jpg","images/torcoes-9-300.jpg","images/torcoes-9-300_x2.jpg","images/torcoes-9-460.jpg","images/torcoes-9-460_x2.jpg","images/torcoes-9-720.jpg","images/torcoes-9-720_x2.jpg","logo-192.png","logo-512.png","manifest.json","successkid.jpg"]),o=new Set(i);self.addEventListener("install",o=>{o.waitUntil(caches.open("cache1599853415707").then(o=>o.addAll(i)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",i=>{i.waitUntil(caches.keys().then(async i=>{for(const o of i)"cache1599853415707"!==o&&await caches.delete(o);self.clients.claim()}))}),self.addEventListener("fetch",i=>{if("GET"!==i.request.method||i.request.headers.has("range"))return;const a=new URL(i.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&o.has(a.pathname)?i.respondWith(caches.match(i.request)):"only-if-cached"!==i.request.cache&&i.respondWith(caches.open("offline1599853415707").then(async o=>{try{const a=await fetch(i.request);return o.put(i.request,a.clone()),a}catch(a){const s=await o.match(i.request);if(s)return s;throw a}}))))})}();
