import{S as e,i as t,s,e as l,t as a,a as r,c as o,b as n,d as c,f as i,g as h,h as u,j as f,l as p,k as d,n as m,m as v,o as w,p as g,r as b,q as $,u as E,v as x,w as y,x as T,y as k,z as I,R as U}from"./vendor.46c4bee3.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,r)=>{const o=new URL(e,l);if(self[t].moduleMap[o])return s(self[t].moduleMap[o]);const n=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){r(new Error(`Failed to import: ${e}`)),a(c)},onload(){s(self[t].moduleMap[o]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/blue/assets/");function V(e){let t,s,v,w,g,b,$,E,x,y,T,k,I,U,V;return{c(){t=l("button"),s=a("Count: "),v=a(e[0]),w=r(),g=l("p"),b=a(e[0]),$=a(" * 2 = "),E=a(e[1]),x=r(),y=l("p"),T=a(e[1]),k=a(" * 2 = "),I=a(e[2])},l(l){t=o(l,"BUTTON",{});var a=n(t);s=c(a,"Count: "),v=c(a,e[0]),a.forEach(i),w=h(l),g=o(l,"P",{});var r=n(g);b=c(r,e[0]),$=c(r," * 2 = "),E=c(r,e[1]),r.forEach(i),x=h(l),y=o(l,"P",{});var u=n(y);T=c(u,e[1]),k=c(u," * 2 = "),I=c(u,e[2]),u.forEach(i)},m(l,a){u(l,t,a),f(t,s),f(t,v),u(l,w,a),u(l,g,a),f(g,b),f(g,$),f(g,E),u(l,x,a),u(l,y,a),f(y,T),f(y,k),f(y,I),U||(V=p(t,"click",e[3]),U=!0)},p(e,[t]){1&t&&d(v,e[0]),1&t&&d(b,e[0]),2&t&&d(E,e[1]),2&t&&d(T,e[1]),4&t&&d(I,e[2])},i:m,o:m,d(e){e&&i(t),e&&i(w),e&&i(g),e&&i(x),e&&i(y),U=!1,V()}}}function M(e,t,s){let l,a,r=1;return e.$$.update=()=>{1&e.$$.dirty&&s(1,l=2*r),2&e.$$.dirty&&s(2,a=2*l)},[r,l,a,function(){s(0,r+=1)}]}function S(e){let t,s,d,$,E,x;return{c(){t=l("input"),s=r(),d=l("button"),$=a("count"),this.h()},l(e){t=o(e,"INPUT",{type:!0}),s=h(e),d=o(e,"BUTTON",{});var l=n(d);$=c(l,"count"),l.forEach(i),this.h()},h(){v(t,"type","number")},m(l,a){u(l,t,a),w(t,e[0]),u(l,s,a),u(l,d,a),f(d,$),E||(x=[p(t,"input",e[1]),p(d,"click",e[2])],E=!0)},p(e,[s]){1&s&&g(t.value)!==e[0]&&w(t,e[0])},i:m,o:m,d(e){e&&i(t),e&&i(s),e&&i(d),E=!1,b(x)}}}function H(e,t,s){let l=0;return[l,function(){l=g(this.value),s(0,l)},()=>s(0,l+=1)]}function C(e){let t,s,r,h,w;return{c(){t=l("button"),s=a("Clicks: "),r=a(e[0]),this.h()},l(l){t=o(l,"BUTTON",{class:!0});var a=n(t);s=c(a,"Clicks: "),r=c(a,e[0]),a.forEach(i),this.h()},h(){v(t,"class","svelte-1c7643s")},m(l,a){u(l,t,a),f(t,s),f(t,r),h||(w=p(t,"click",e[1]),h=!0)},p(e,[t]){1&t&&d(r,e[0])},i:m,o:m,d(e){e&&i(t),h=!1,w()}}}function O(e,t,s){let l=0;return[l,()=>{s(0,l+=1)}]}class P extends e{constructor(e){super(),t(this,e,O,C,s,{})}}function j(e){let t,s,p,d,w,g,b,I,U,V,M,S,H,C,O,j,z,D,R,B,N;return I=new P({}),{c(){t=l("div"),s=l("img"),d=r(),w=l("h1"),g=a("Hello Typescript!"),b=r(),$(I.$$.fragment),U=r(),V=l("p"),M=a("Visit "),S=l("a"),H=a("svelte.dev"),C=a(" to learn how to build Svelte\n    apps."),O=r(),j=l("p"),z=a("Check out "),D=l("a"),R=a("SvelteKit"),B=a(" for\n    the officially supported framework, also powered by Vite!"),this.h()},l(e){t=o(e,"DIV",{class:!0});var l=n(t);s=o(l,"IMG",{src:!0,alt:!0,class:!0}),d=h(l),w=o(l,"H1",{class:!0});var a=n(w);g=c(a,"Hello Typescript!"),a.forEach(i),b=h(l),E(I.$$.fragment,l),U=h(l),V=o(l,"P",{class:!0});var r=n(V);M=c(r,"Visit "),S=o(r,"A",{href:!0});var u=n(S);H=c(u,"svelte.dev"),u.forEach(i),C=c(r," to learn how to build Svelte\n    apps."),r.forEach(i),O=h(l),j=o(l,"P",{class:!0});var f=n(j);z=c(f,"Check out "),D=o(f,"A",{href:!0});var p=n(D);R=c(p,"SvelteKit"),p.forEach(i),B=c(f," for\n    the officially supported framework, also powered by Vite!"),f.forEach(i),l.forEach(i),this.h()},h(){s.src!==(p="/blue/assets/svelte.d72399d3.png")&&v(s,"src","/blue/assets/svelte.d72399d3.png"),v(s,"alt","Svelte Logo"),v(s,"class","svelte-edqwoz"),v(w,"class","svelte-edqwoz"),v(S,"href","https://svelte.dev"),v(V,"class","svelte-edqwoz"),v(D,"href","https://github.com/sveltejs/kit#readme"),v(j,"class","svelte-edqwoz"),v(t,"class","hello-wrap svelte-edqwoz")},m(e,l){u(e,t,l),f(t,s),f(t,d),f(t,w),f(w,g),f(t,b),x(I,t,null),f(t,U),f(t,V),f(V,M),f(V,S),f(S,H),f(V,C),f(t,O),f(t,j),f(j,z),f(j,D),f(D,R),f(j,B),N=!0},p:m,i(e){N||(y(I.$$.fragment,e),N=!0)},o(e){T(I.$$.fragment,e),N=!1},d(e){e&&i(t),k(I)}}}function z(e){let t,s,d,w,g,$,E,x,y,T,k,I,U,V,M,S,H,C;return{c(){t=l("div"),s=l("p"),d=a("404"),w=r(),g=l("p"),$=a("Whoops! This page does not exist."),E=r(),x=l("p"),y=a("Try a link below to help you find your way."),T=r(),k=l("div"),I=l("button"),U=a("HOME"),V=r(),M=l("button"),S=a("GITHUB"),this.h()},l(e){t=o(e,"DIV",{class:!0});var l=n(t);s=o(l,"P",{class:!0});var a=n(s);d=c(a,"404"),a.forEach(i),w=h(l),g=o(l,"P",{class:!0});var r=n(g);$=c(r,"Whoops! This page does not exist."),r.forEach(i),E=h(l),x=o(l,"P",{class:!0});var u=n(x);y=c(u,"Try a link below to help you find your way."),u.forEach(i),T=h(l),k=o(l,"DIV",{class:!0});var f=n(k);I=o(f,"BUTTON",{class:!0});var p=n(I);U=c(p,"HOME"),p.forEach(i),V=h(f),M=o(f,"BUTTON",{class:!0});var m=n(M);S=c(m,"GITHUB"),m.forEach(i),f.forEach(i),l.forEach(i),this.h()},h(){v(s,"class","not-1 text-8xl text-gray-200 svelte-1i9ss0n"),v(g,"class","text-2xl text-gray-300 italic"),v(x,"class","text-base text-gray-400 italic"),v(I,"class","w-32 btn-blue mr-8"),v(M,"class","w-32 btn-blue"),v(k,"class","mt-10"),v(t,"class","not-found-text p-10 w-full h-full flex-center flex-col svelte-1i9ss0n")},m(l,a){u(l,t,a),f(t,s),f(s,d),f(t,w),f(t,g),f(g,$),f(t,E),f(t,x),f(x,y),f(t,T),f(t,k),f(k,I),f(I,U),f(k,V),f(k,M),f(M,S),H||(C=[p(I,"click",e[4]),p(M,"click",e[3])],H=!0)},p:m,d(e){e&&i(t),H=!1,b(C)}}}function D(e){let t,s,a;return{c(){t=l("picture"),s=l("img"),this.h()},l(e){t=o(e,"PICTURE",{});var l=n(t);s=o(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(i),this.h()},h(){v(s,"class","max-w-320"),s.src!==(a=e[1])&&v(s,"src",a),v(s,"alt","似乎有什么不太对...")},m(e,l){u(e,t,l),f(t,s)},p:m,d(e){e&&i(t)}}}function R(e){let t;let s=(e[0]?D:z)(e);return{c(){t=l("div"),s.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var l=n(t);s.l(l),l.forEach(i),this.h()},h(){v(t,"class","flex justify-center items-center h-full not-found overflow-hidden")},m(e,l){u(e,t,l),s.m(t,null)},p(e,[t]){s.p(e,t)},i:m,o:m,d(e){e&&i(t),s.d()}}}function B(e){const t=Math.random()>.3,s=Math.random()>.5?"/blue/assets/404.51130a9e.gif":"/blue/assets/404-2.9a7d8e0e.jpeg",l=e=>{alert("当前版本的路由导航失效了...")};return[t,s,l,()=>{window.open("https://github.com/fuchunhui/blue")},()=>l()]}const N=[{name:"/",component:class extends e{constructor(e){super(),t(this,e,null,j,s,{})}}},{name:"confirm",component:class extends e{constructor(e){super(),t(this,e,M,V,s,{})}}},{name:"counter",component:class extends e{constructor(e){super(),t(this,e,H,S,s,{})}}},{name:"404",path:"404",component:class extends e{constructor(e){super(),t(this,e,B,R,s,{})}}}];function L(e){let t,s,r,h;return{c(){t=l("header"),s=l("h1"),r=a("Hello Vite, Svelte, TailwindCSS, "),h=a(q),this.h()},l(e){t=o(e,"HEADER",{class:!0});var l=n(t);s=o(l,"H1",{});var a=n(s);r=c(a,"Hello Vite, Svelte, TailwindCSS, "),h=c(a,q),a.forEach(i),l.forEach(i),this.h()},h(){v(t,"class","w-full h-16 flex-center flex-shrink-0 flex-basis-64 bg-gradient-to-r from-green-400 to-blue-500")},m(e,l){u(e,t,l),f(t,s),f(s,r),f(s,h)},p:m,i:m,o:m,d(e){e&&i(t)}}}const q="Now!";class A extends e{constructor(e){super(),t(this,e,null,L,s,{})}}function G(e,t,s){const l=e.slice();return l[1]=t[s].label,l[2]=t[s].value,l[4]=s,l}function _(e){let t,s,p,d,w=e[1]+"";return{c(){t=l("div"),s=l("a"),p=a(w),d=r(),this.h()},l(e){t=o(e,"DIV",{class:!0});var l=n(t);s=o(l,"A",{href:!0});var a=n(s);p=c(a,w),a.forEach(i),d=h(l),l.forEach(i),this.h()},h(){v(s,"href",e[2]),v(t,"class","h-10.5 flex-center")},m(e,l){u(e,t,l),f(t,s),f(s,p),f(t,d)},p:m,d(e){e&&i(t)}}}function F(e){let t,s=e[0],a=[];for(let l=0;l<s.length;l+=1)a[l]=_(G(e,s,l));return{c(){t=l("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=o(e,"DIV",{class:!0});var s=n(t);for(let t=0;t<a.length;t+=1)a[t].l(s);s.forEach(i),this.h()},h(){v(t,"class","w-40 h-full bg-blue-200")},m(e,s){u(e,t,s);for(let l=0;l<a.length;l+=1)a[l].m(t,null)},p(e,[l]){if(1&l){let r;for(s=e[0],r=0;r<s.length;r+=1){const o=G(e,s,r);a[r]?a[r].p(o,l):(a[r]=_(o),a[r].c(),a[r].m(t,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}},i:m,o:m,d(e){e&&i(t),I(a,e)}}}function K(e){return[N.map((({name:e})=>({label:"/"===e?"home":e,value:e})))]}class W extends e{constructor(e){super(),t(this,e,K,F,s,{})}}function J(e){let t,s,a,c,p,d,w,g,b;return s=new A({}),p=new W({}),g=new U({props:{routes:N}}),{c(){t=l("main"),$(s.$$.fragment),a=r(),c=l("div"),$(p.$$.fragment),d=r(),w=l("div"),$(g.$$.fragment),this.h()},l(e){t=o(e,"MAIN",{class:!0});var l=n(t);E(s.$$.fragment,l),a=h(l),c=o(l,"DIV",{class:!0});var r=n(c);E(p.$$.fragment,r),d=h(r),w=o(r,"DIV",{class:!0});var u=n(w);E(g.$$.fragment,u),u.forEach(i),r.forEach(i),l.forEach(i),this.h()},h(){v(w,"class","w-full h-full overflow-auto bg-blue-100 svelte-1ow0oz9"),v(c,"class","flex w-full h-full overflow-hidden svelte-1ow0oz9"),v(t,"class","flex-center flex-col h-full text-base min-h-480 svelte-1ow0oz9")},m(e,l){u(e,t,l),x(s,t,null),f(t,a),f(t,c),x(p,c,null),f(c,d),f(c,w),x(g,w,null),b=!0},p:m,i(e){b||(y(s.$$.fragment,e),y(p.$$.fragment,e),y(g.$$.fragment,e),b=!0)},o(e){T(s.$$.fragment,e),T(p.$$.fragment,e),T(g.$$.fragment,e),b=!1},d(e){e&&i(t),k(s),k(p),k(g)}}}new class extends e{constructor(e){super(),t(this,e,null,J,s,{})}}({target:document.body});