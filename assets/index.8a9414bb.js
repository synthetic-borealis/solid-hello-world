const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}};V();const w={},W=(e,t)=>e===t,q={equals:W};let J=M;const b={},x=1,C=2,D={owned:null,cleanups:null,context:null,owner:null};var c=null;let S=null,f=null,m=null,u=null,p=null,L=0;function X(e,t){const s=f,n=c,i=e.length===0?D:{owned:null,cleanups:null,context:null,owner:t||n};c=i,f=null;try{return I(()=>e(()=>P(i)),!0)}finally{f=s,c=n}}function Y(e,t){t=t?Object.assign({},q,t):q;const s={value:e,observers:null,observerSlots:null,pending:b,comparator:t.equals||void 0},n=i=>(typeof i=="function"&&(i=i(s.pending!==b?s.pending:s.value)),O(s,i));return[z.bind(s),n]}function T(e,t,s){const n=ee(e,t,!1,x);B(n)}function Z(e){if(m)return e();let t;const s=m=[];try{t=e()}finally{m=null}return I(()=>{for(let n=0;n<s.length;n+=1){const i=s[n];if(i.pending!==b){const l=i.pending;i.pending=b,O(i,l)}}},!1),t}function _(e){let t,s=f;return f=null,t=e(),f=s,t}function z(){const e=S;if(this.sources&&(this.state||e)){const t=u;u=null,this.state===x||e?B(this):A(this),u=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function O(e,t,s){if(m)return e.pending===b&&m.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let n=!1;return e.value=t,e.observers&&e.observers.length&&I(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];n&&S.disposed.has(l),(n&&!l.tState||!n&&!l.state)&&(l.pure?u.push(l):p.push(l),l.observers&&R(l)),n||(l.state=x)}if(u.length>1e6)throw u=[],new Error},!1),t}function B(e){if(!e.fn)return;P(e);const t=c,s=f,n=L;f=c=e,k(e,e.value,n),f=s,c=t}function k(e,t,s){let n;try{n=e.fn(t)}catch(i){G(i)}(!e.updatedAt||e.updatedAt<=s)&&(e.observers&&e.observers.length?O(e,n):e.value=n,e.updatedAt=s)}function ee(e,t,s,n,i){const l={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:c,context:null,pure:s};return c===null||c!==D&&(c.owned?c.owned.push(l):c.owned=[l]),l}function F(e){const t=S;if(e.state===0||t)return;if(e.state===C||t)return A(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<L);)(e.state||t)&&s.push(e);for(let n=s.length-1;n>=0;n--)if(e=s[n],e.state===x||t)B(e);else if(e.state===C||t){const i=u;u=null,A(e,s[0]),u=i}}function I(e,t){if(u)return e();let s=!1;t||(u=[]),p?s=!0:p=[],L++;try{const n=e();return te(s),n}catch(n){G(n)}finally{u=null,s||(p=null)}}function te(e){u&&(M(u),u=null),!e&&(p.length?Z(()=>{J(p),p=null}):p=null)}function M(e){for(let t=0;t<e.length;t++)F(e[t])}function A(e,t){const s=S;e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];i.sources&&(i.state===x||s?i!==t&&F(i):(i.state===C||s)&&A(i,t))}}function R(e){const t=S;for(let s=0;s<e.observers.length;s+=1){const n=e.observers[s];(!n.state||t)&&(n.state=C,n.pure?u.push(n):p.push(n),n.observers&&R(n))}}function P(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),i=s.observers;if(i&&i.length){const l=i.pop(),o=s.observerSlots.pop();n<i.length&&(l.sourceSlots[o]=n,i[n]=l,s.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)P(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function G(e){throw e}function H(e,t){return _(()=>e(t||{}))}function se(e,t,s){let n=s.length,i=t.length,l=n,o=0,r=0,a=t[i-1].nextSibling,d=null;for(;o<i||r<l;){if(t[o]===s[r]){o++,r++;continue}for(;t[i-1]===s[l-1];)i--,l--;if(i===o){const h=l<n?r?s[r-1].nextSibling:s[l-r]:a;for(;r<l;)e.insertBefore(s[r++],h)}else if(l===r)for(;o<i;)(!d||!d.has(t[o]))&&t[o].remove(),o++;else if(t[o]===s[l-1]&&s[r]===t[i-1]){const h=t[--i].nextSibling;e.insertBefore(s[r++],t[o++].nextSibling),e.insertBefore(s[--l],h),t[i]=s[l]}else{if(!d){d=new Map;let g=r;for(;g<l;)d.set(s[g],g++)}const h=d.get(t[o]);if(h!=null)if(r<h&&h<l){let g=o,E=1,$;for(;++g<i&&g<l&&!(($=d.get(t[g]))==null||$!==h+E);)E++;if(E>h-r){const Q=t[o];for(;r<h;)e.insertBefore(s[r++],Q)}else e.replaceChild(s[r++],t[o++])}else o++;else t[o++].remove()}}}function ne(e,t,s){let n;return X(i=>{n=i,t===document?e():K(t,e(),t.firstChild?null:void 0,s)}),()=>{n(),t.textContent=""}}function j(e,t,s){const n=document.createElement("template");n.innerHTML=e;let i=n.content.firstChild;return s&&(i=i.firstChild),i}function K(e,t,s,n){if(s!==void 0&&!n&&(n=[]),typeof t!="function")return N(e,t,n,s);T(i=>N(e,t(),i,s),n)}function N(e,t,s,n,i){for(w.context&&!s&&(s=[...e.childNodes]);typeof s=="function";)s=s();if(t===s)return s;const l=typeof t,o=n!==void 0;if(e=o&&s[0]&&s[0].parentNode||e,l==="string"||l==="number"){if(w.context)return s;if(l==="number"&&(t=t.toString()),o){let r=s[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),s=y(e,s,n,r)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||l==="boolean"){if(w.context)return s;s=y(e,s,n)}else{if(l==="function")return T(()=>{let r=t();for(;typeof r=="function";)r=r();s=N(e,r,s,n)}),()=>s;if(Array.isArray(t)){const r=[];if(v(r,t,i))return T(()=>s=N(e,r,s,n,!0)),()=>s;if(w.context){for(let a=0;a<r.length;a++)if(r[a].parentNode)return s=r}if(r.length===0){if(s=y(e,s,n),o)return s}else Array.isArray(s)?s.length===0?U(e,r,n):se(e,s,r):(s&&y(e),U(e,r));s=r}else if(t instanceof Node){if(w.context&&t.parentNode)return s=o?[t]:t;if(Array.isArray(s)){if(o)return s=y(e,s,n,t);y(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function v(e,t,s){let n=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],r;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))n=v(e,o)||n;else if((r=typeof o)=="string")e.push(document.createTextNode(o));else if(r==="function")if(s){for(;typeof o=="function";)o=o();n=v(e,Array.isArray(o)?o:[o])||n}else e.push(o),n=!0;else e.push(document.createTextNode(o.toString()))}return n}function U(e,t,s){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],s)}function y(e,t,s,n){if(s===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const a=r.parentNode===e;!l&&!o?a?e.replaceChild(i,r):e.insertBefore(i,s):a&&r.remove()}else l=!0}}else e.insertBefore(i,s);return[i]}const ie=j("<h1>Hello world</h1>");function le(){return ie.cloneNode(!0)}const oe=j('<div><h1 class="header"></h1></div>'),re=()=>{const[e,t]=Y(0);return setInterval(t,1e3,s=>s+1),[(()=>{const s=oe.cloneNode(!0),n=s.firstChild;return K(n,e),s})(),H(le,{})]};ne(()=>H(re,{}),document.getElementById("root"));
