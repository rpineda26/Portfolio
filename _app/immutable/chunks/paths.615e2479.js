import{n as c,s as _}from"./scheduler.7a274a43.js";const e=[];function d(n,l=c){let i;const o=new Set;function b(t){if(_(n,t)&&(n=t,i)){const r=!e.length;for(const s of o)s[1](),e.push(s,n);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){b(t(n))}function g(t,r=c){const s=[t,r];return o.add(s),o.size===1&&(i=l(b,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:b,update:f,subscribe:g}}var u;const h=((u=globalThis.__sveltekit_1sgb6bg)==null?void 0:u.base)??"";var a;const q=((a=globalThis.__sveltekit_1sgb6bg)==null?void 0:a.assets)??h;export{q as a,h as b,d as w};
