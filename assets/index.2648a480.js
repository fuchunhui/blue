import{S as e,i as s,s as t,e as l,t as a,a as r,c as o,b as n,d as c,f as i,g as u,h,j as f,l as d,k as p,n as m,m as v,o as b,p as g,r as x,q as E,R as $,u as w,v as y,w as I,x as T,y as U,z as V}from"./vendor.15f0e8bb.js";!function(e=".",s="__import__"){try{self[s]=new Function("u","return import(u)")}catch(t){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[s]=e=>new Promise(((t,r)=>{const o=new URL(e,l);if(self[s].moduleMap[o])return t(self[s].moduleMap[o]);const n=new Blob([`import * as m from '${o}';`,`${s}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){r(new Error(`Failed to import: ${e}`)),a(c)},onload(){t(self[s].moduleMap[o]),a(c)}});document.head.appendChild(c)})),self[s].moduleMap={}}}("/blue/assets/");function D(e){let s,t,v,b,g,x,E,$,w,y,I,T,U,V,D;return{c(){s=l("button"),t=a("Count: "),v=a(e[0]),b=r(),g=l("p"),x=a(e[0]),E=a(" * 2 = "),$=a(e[1]),w=r(),y=l("p"),I=a(e[1]),T=a(" * 2 = "),U=a(e[2])},l(l){s=o(l,"BUTTON",{});var a=n(s);t=c(a,"Count: "),v=c(a,e[0]),a.forEach(i),b=u(l),g=o(l,"P",{});var r=n(g);x=c(r,e[0]),E=c(r," * 2 = "),$=c(r,e[1]),r.forEach(i),w=u(l),y=o(l,"P",{});var h=n(y);I=c(h,e[1]),T=c(h," * 2 = "),U=c(h,e[2]),h.forEach(i)},m(l,a){h(l,s,a),f(s,t),f(s,v),h(l,b,a),h(l,g,a),f(g,x),f(g,E),f(g,$),h(l,w,a),h(l,y,a),f(y,I),f(y,T),f(y,U),V||(D=d(s,"click",e[3]),V=!0)},p(e,[s]){1&s&&p(v,e[0]),1&s&&p(x,e[0]),2&s&&p($,e[1]),2&s&&p(I,e[1]),4&s&&p(U,e[2])},i:m,o:m,d(e){e&&i(s),e&&i(b),e&&i(g),e&&i(w),e&&i(y),V=!1,D()}}}function P(e,s,t){let l,a,r=1;return e.$$.update=()=>{1&e.$$.dirty&&t(1,l=2*r),2&e.$$.dirty&&t(2,a=2*l)},[r,l,a,function(){t(0,r+=1)}]}function M(e){let s,t,p,E,$,w,y;return{c(){s=l("div"),t=l("input"),p=r(),E=l("button"),$=a("count"),this.h()},l(e){s=o(e,"DIV",{class:!0});var l=n(s);t=o(l,"INPUT",{class:!0,type:!0}),p=u(l),E=o(l,"BUTTON",{class:!0});var a=n(E);$=c(a,"count"),a.forEach(i),l.forEach(i),this.h()},h(){v(t,"class","text-indent-3"),v(t,"type","number"),v(E,"class","ml-3"),v(s,"class","p-10")},m(l,a){h(l,s,a),f(s,t),b(t,e[0]),f(s,p),f(s,E),f(E,$),w||(y=[d(t,"input",e[1]),d(E,"click",e[2])],w=!0)},p(e,[s]){1&s&&g(t.value)!==e[0]&&b(t,e[0])},i:m,o:m,d(e){e&&i(s),w=!1,x(y)}}}function H(e,s,t){let l=0;return[l,function(){l=g(this.value),t(0,l)},()=>t(0,l+=1)]}function k(e){let s,t,b,g,x,E,$,w,y,I,T,U,V,D,P,M,H,k,O,S,R,j,B,C;return{c(){s=l("div"),t=l("button"),b=a("dbl Count: "),g=a(e[0]),x=r(),E=l("div"),$=l("p"),w=a("doubled"),y=r(),I=l("p"),T=a(e[0]),U=a(" * 2 = "),V=a(e[1]),D=r(),P=l("div"),M=l("p"),H=a("Quadrupled"),k=r(),O=l("p"),S=a(e[1]),R=a(" * 2 = "),j=a(e[2]),this.h()},l(l){s=o(l,"DIV",{class:!0});var a=n(s);t=o(a,"BUTTON",{class:!0});var r=n(t);b=c(r,"dbl Count: "),g=c(r,e[0]),r.forEach(i),x=u(a),E=o(a,"DIV",{class:!0});var h=n(E);$=o(h,"P",{class:!0});var f=n($);w=c(f,"doubled"),f.forEach(i),y=u(h),I=o(h,"P",{class:!0});var d=n(I);T=c(d,e[0]),U=c(d," * 2 = "),V=c(d,e[1]),d.forEach(i),h.forEach(i),D=u(a),P=o(a,"DIV",{class:!0});var p=n(P);M=o(p,"P",{class:!0});var m=n(M);H=c(m,"Quadrupled"),m.forEach(i),k=u(p),O=o(p,"P",{class:!0});var v=n(O);S=c(v,e[1]),R=c(v," * 2 = "),j=c(v,e[2]),v.forEach(i),p.forEach(i),a.forEach(i),this.h()},h(){v(t,"class","w-40 h-32 bg-blue-300 rounded-lg"),v($,"class","episodes-label"),v(I,"class","episodes-text"),v(E,"class","episodes"),v(M,"class","episodes-label"),v(O,"class","episodes-text"),v(P,"class","episodes"),v(s,"class","px-8 py-4 flex")},m(l,a){h(l,s,a),f(s,t),f(t,b),f(t,g),f(s,x),f(s,E),f(E,$),f($,w),f(E,y),f(E,I),f(I,T),f(I,U),f(I,V),f(s,D),f(s,P),f(P,M),f(M,H),f(P,k),f(P,O),f(O,S),f(O,R),f(O,j),B||(C=d(t,"dblclick",e[3]),B=!0)},p(e,[s]){1&s&&p(g,e[0]),1&s&&p(T,e[0]),2&s&&p(V,e[1]),2&s&&p(S,e[1]),4&s&&p(j,e[2])},i:m,o:m,d(e){e&&i(s),B=!1,C()}}}function O(e,s,t){let l,a,r=1;return e.$$.update=()=>{1&e.$$.dirty&&t(1,l=2*r),2&e.$$.dirty&&t(2,a=2*l)},[r,l,a,function(){t(0,r+=1)}]}function S(e){let s,t,d,p,b,g,x,E,$,w,y,I;return{c(){s=l("div"),t=l("img"),p=r(),b=l("h1"),g=a("Hello World!"),x=r(),E=l("p"),$=a("visit\n    "),w=l("a"),y=a("svelte.dev"),I=a("\n    to learn how to build Svelte apps."),this.h()},l(e){s=o(e,"DIV",{class:!0});var l=n(s);t=o(l,"IMG",{class:!0,src:!0,alt:!0}),p=u(l),b=o(l,"H1",{class:!0});var a=n(b);g=c(a,"Hello World!"),a.forEach(i),x=u(l),E=o(l,"P",{class:!0});var r=n(E);$=c(r,"visit\n    "),w=o(r,"A",{class:!0,href:!0});var h=n(w);y=c(h,"svelte.dev"),h.forEach(i),I=c(r,"\n    to learn how to build Svelte apps."),r.forEach(i),l.forEach(i),this.h()},h(){v(t,"class","w-16 h-16"),t.src!==(d="/blue/assets/svelte.d72399d3.png")&&v(t,"src","/blue/assets/svelte.d72399d3.png"),v(t,"alt","Svelte Logo"),v(b,"class","uppercase text-7xl font-thin my-8 text-yellow-500"),v(w,"class","text-blue-600"),v(w,"href","https://svelte.dev"),v(E,"class","my-4 leading-snug"),v(s,"class","text-center p-4 m-auto")},m(e,l){h(e,s,l),f(s,t),f(s,p),f(s,b),f(b,g),f(s,x),f(s,E),f(E,$),f(E,w),f(w,y),f(E,I)},p:m,i:m,o:m,d(e){e&&i(s)}}}function R(e){let s,t;return{c(){s=l("div"),t=a("待办列表")},l(e){s=o(e,"DIV",{});var l=n(s);t=c(l,"待办列表"),l.forEach(i)},m(e,l){h(e,s,l),f(s,t)},p:m,i:m,o:m,d(e){e&&i(s)}}}function j(e){return[]}function B(e){let s,t,p,b,g,E,$,w,y,I,T,U,V,D,P,M,H,k;return{c(){s=l("div"),t=l("p"),p=a("404"),b=r(),g=l("p"),E=a("Whoops! This page does not exist."),$=r(),w=l("p"),y=a("Try a link below to help you find your way."),I=r(),T=l("div"),U=l("button"),V=a("HOME"),D=r(),P=l("button"),M=a("GITHUB"),this.h()},l(e){s=o(e,"DIV",{class:!0});var l=n(s);t=o(l,"P",{class:!0});var a=n(t);p=c(a,"404"),a.forEach(i),b=u(l),g=o(l,"P",{class:!0});var r=n(g);E=c(r,"Whoops! This page does not exist."),r.forEach(i),$=u(l),w=o(l,"P",{class:!0});var h=n(w);y=c(h,"Try a link below to help you find your way."),h.forEach(i),I=u(l),T=o(l,"DIV",{class:!0});var f=n(T);U=o(f,"BUTTON",{class:!0});var d=n(U);V=c(d,"HOME"),d.forEach(i),D=u(f),P=o(f,"BUTTON",{class:!0});var m=n(P);M=c(m,"GITHUB"),m.forEach(i),f.forEach(i),l.forEach(i),this.h()},h(){v(t,"class","not-1 text-8xl text-gray-200 svelte-1i9ss0n"),v(g,"class","text-2xl text-gray-300 italic"),v(w,"class","text-base text-gray-400 italic"),v(U,"class","w-32 btn-blue mr-8"),v(P,"class","w-32 btn-blue"),v(T,"class","mt-10"),v(s,"class","not-found-text p-10 w-full h-full flex-center flex-col svelte-1i9ss0n")},m(l,a){h(l,s,a),f(s,t),f(t,p),f(s,b),f(s,g),f(g,E),f(s,$),f(s,w),f(w,y),f(s,I),f(s,T),f(T,U),f(U,V),f(T,D),f(T,P),f(P,M),H||(k=[d(U,"click",e[4]),d(P,"click",e[3])],H=!0)},p:m,d(e){e&&i(s),H=!1,x(k)}}}function C(e){let s,t,a;return{c(){s=l("picture"),t=l("img"),this.h()},l(e){s=o(e,"PICTURE",{});var l=n(s);t=o(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(i),this.h()},h(){v(t,"class","max-w-320"),t.src!==(a=e[1])&&v(t,"src",a),v(t,"alt","似乎有什么不太对...")},m(e,l){h(e,s,l),f(s,t)},p:m,d(e){e&&i(s)}}}function N(e){let s;let t=(e[0]?C:B)(e);return{c(){s=l("div"),t.c(),this.h()},l(e){s=o(e,"DIV",{class:!0});var l=n(s);t.l(l),l.forEach(i),this.h()},h(){v(s,"class","flex justify-center items-center h-full not-found overflow-hidden")},m(e,l){h(e,s,l),t.m(s,null)},p(e,[s]){t.p(e,s)},i:m,o:m,d(e){e&&i(s),t.d()}}}function L(e){const s=Math.random()>.3,t=Math.random()>.5?"/blue/assets/404.51130a9e.gif":"/blue/assets/404-2.9a7d8e0e.jpeg",l=e=>{alert("当前版本的路由导航失效了...")};return[s,t,l,()=>{window.open("https://github.com/fuchunhui/blue")},()=>l()]}const z=[{name:"/",component:class extends e{constructor(e){super(),s(this,e,null,S,t,{})}}},{name:"confirm",component:class extends e{constructor(e){super(),s(this,e,P,D,t,{})}}},{name:"counter",component:class extends e{constructor(e){super(),s(this,e,H,M,t,{})}}},{name:"double",component:class extends e{constructor(e){super(),s(this,e,O,k,t,{})}}},{name:"todolist",component:class extends e{constructor(e){super(),s(this,e,j,R,t,{})}}},{name:"404",path:"404",component:class extends e{constructor(e){super(),s(this,e,L,N,t,{})}}}];function A(e){let s,t,r,u;return{c(){s=l("header"),t=l("h1"),r=a("Hello Vite, Svelte, TailwindCSS, "),u=a(G),this.h()},l(e){s=o(e,"HEADER",{class:!0});var l=n(s);t=o(l,"H1",{});var a=n(t);r=c(a,"Hello Vite, Svelte, TailwindCSS, "),u=c(a,G),a.forEach(i),l.forEach(i),this.h()},h(){v(s,"class","w-full h-16 flex-center flex-shrink-0 flex-basis-64 bg-gradient-to-r from-green-400 to-blue-500")},m(e,l){h(e,s,l),f(s,t),f(t,r),f(t,u)},p:m,i:m,o:m,d(e){e&&i(s)}}}const G="Now!";class W extends e{constructor(e){super(),s(this,e,null,A,t,{})}}function _(e,s,t){const l=e.slice();return l[1]=s[t].label,l[2]=s[t].value,l[4]=t,l}function F(e){let s,t,d,p,b=e[1]+"";return{c(){s=l("div"),t=l("a"),d=a(b),p=r(),this.h()},l(e){s=o(e,"DIV",{class:!0});var l=n(s);t=o(l,"A",{href:!0});var a=n(t);d=c(a,b),a.forEach(i),p=u(l),l.forEach(i),this.h()},h(){v(t,"href",e[2]),v(s,"class","h-10.5 flex-center")},m(e,l){h(e,s,l),f(s,t),f(t,d),f(s,p)},p:m,d(e){e&&i(s)}}}function Q(e){let s,t=e[0],a=[];for(let l=0;l<t.length;l+=1)a[l]=F(_(e,t,l));return{c(){s=l("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){s=o(e,"DIV",{class:!0});var t=n(s);for(let s=0;s<a.length;s+=1)a[s].l(t);t.forEach(i),this.h()},h(){v(s,"class","w-40 h-full bg-blue-200")},m(e,t){h(e,s,t);for(let l=0;l<a.length;l+=1)a[l].m(s,null)},p(e,[l]){if(1&l){let r;for(t=e[0],r=0;r<t.length;r+=1){const o=_(e,t,r);a[r]?a[r].p(o,l):(a[r]=F(o),a[r].c(),a[r].m(s,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=t.length}},i:m,o:m,d(e){e&&i(s),E(a,e)}}}function q(e){return[z.map((({name:e})=>({label:"/"===e?"home":e,value:e})))]}class J extends e{constructor(e){super(),s(this,e,q,Q,t,{})}}function K(e){let s,t,a,c,d,p,b,g,x;return t=new W({}),d=new J({}),g=new $({props:{routes:z}}),{c(){s=l("main"),w(t.$$.fragment),a=r(),c=l("div"),w(d.$$.fragment),p=r(),b=l("div"),w(g.$$.fragment),this.h()},l(e){s=o(e,"MAIN",{class:!0});var l=n(s);y(t.$$.fragment,l),a=u(l),c=o(l,"DIV",{class:!0});var r=n(c);y(d.$$.fragment,r),p=u(r),b=o(r,"DIV",{class:!0});var h=n(b);y(g.$$.fragment,h),h.forEach(i),r.forEach(i),l.forEach(i),this.h()},h(){v(b,"class","w-full h-full overflow-auto bg-blue-100 svelte-1ow0oz9"),v(c,"class","flex w-full h-full overflow-hidden svelte-1ow0oz9"),v(s,"class","flex-center flex-col h-full text-base min-h-480 svelte-1ow0oz9")},m(e,l){h(e,s,l),I(t,s,null),f(s,a),f(s,c),I(d,c,null),f(c,p),f(c,b),I(g,b,null),x=!0},p:m,i(e){x||(T(t.$$.fragment,e),T(d.$$.fragment,e),T(g.$$.fragment,e),x=!0)},o(e){U(t.$$.fragment,e),U(d.$$.fragment,e),U(g.$$.fragment,e),x=!1},d(e){e&&i(s),V(t),V(d),V(g)}}}new class extends e{constructor(e){super(),s(this,e,null,K,t,{})}}({target:document.body});
