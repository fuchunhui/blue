function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function l(){return f(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t){return Array.from(t.childNodes)}function m(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const u=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||u.push(t.name)}for(let t=0;t<u.length;t++)o.removeAttribute(u[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):i(n)}function $(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return f(n)}function g(t){return $(t," ")}function b(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let y;function _(t){y=t}const x=[],v=[],k=[],w=[],E=Promise.resolve();let A=!1;function N(t){k.push(t)}let j=!1;const S=new Set;function O(){if(!j){j=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];_(n),T(n.$$)}for(_(null),x.length=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];S.has(n)||(S.add(n),n())}k.length=0}while(x.length);for(;w.length;)w.pop()();A=!1,j=!1,S.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const q=new Set;function C(t,n){t&&t.i&&(q.delete(t),t.i(n))}function L(t,n,e,o){if(t&&t.o){if(q.has(t))return;q.add(t),undefined.c.push((()=>{q.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function B(t){t&&t.c()}function M(t,n){t&&t.l(n)}function P(t,e,u,c){const{fragment:s,on_mount:a,on_destroy:i,after_update:f}=t.$$;s&&s.m(e,u),c||N((()=>{const e=a.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(N)}function z(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function D(t,n){-1===t.$$.dirty[0]&&(x.push(t),A||(A=!0,E.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function F(n,r,u,c,s,i,f=[-1]){const l=y;_(n);const d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:e(),dirty:f,skip_bound:!1};let h=!1;if(d.ctx=u?u(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&D(n,t)),e})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),r.target){if(r.hydrate){const t=p(r.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();r.intro&&C(n.$$.fragment),P(n,r.target,r.anchor,r.customElement),O()}_(l)}class G{$destroy(){z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{G as S,p as a,$ as b,m as c,a as d,i as e,h as f,s as g,c as h,F as i,b as j,l as k,d as l,B as m,t as n,g as o,M as p,P as q,C as r,u as s,f as t,L as u,z as v};
