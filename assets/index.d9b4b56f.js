import{S as e,i as t,s,e as l,t as a,a as n,c as r,b as o,d as c,f as i,g as u,h,j as f,l as d,k as p,n as m,m as v,o as g,p as b,r as w,q as x,R as $,u as E,v as y,w as T,x as I,y as U,z as M}from"./vendor.15f0e8bb.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,n)=>{const r=new URL(e,l);if(self[t].moduleMap[r])return s(self[t].moduleMap[r]);const o=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){s(self[t].moduleMap[r]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/blue/assets/");function H(e){let t,s,v,g,b,w,x,$,E,y,T,I,U,M,H;return{c(){t=l("button"),s=a("Count: "),v=a(e[0]),g=n(),b=l("p"),w=a(e[0]),x=a(" * 2 = "),$=a(e[1]),E=n(),y=l("p"),T=a(e[1]),I=a(" * 2 = "),U=a(e[2])},l(l){t=r(l,"BUTTON",{});var a=o(t);s=c(a,"Count: "),v=c(a,e[0]),a.forEach(i),g=u(l),b=r(l,"P",{});var n=o(b);w=c(n,e[0]),x=c(n," * 2 = "),$=c(n,e[1]),n.forEach(i),E=u(l),y=r(l,"P",{});var h=o(y);T=c(h,e[1]),I=c(h," * 2 = "),U=c(h,e[2]),h.forEach(i)},m(l,a){h(l,t,a),f(t,s),f(t,v),h(l,g,a),h(l,b,a),f(b,w),f(b,x),f(b,$),h(l,E,a),h(l,y,a),f(y,T),f(y,I),f(y,U),M||(H=d(t,"click",e[3]),M=!0)},p(e,[t]){1&t&&p(v,e[0]),1&t&&p(w,e[0]),2&t&&p($,e[1]),2&t&&p(T,e[1]),4&t&&p(U,e[2])},i:m,o:m,d(e){e&&i(t),e&&i(g),e&&i(b),e&&i(E),e&&i(y),M=!1,H()}}}function S(e,t,s){let l,a,n=1;return e.$$.update=()=>{1&e.$$.dirty&&s(1,l=2*n),2&e.$$.dirty&&s(2,a=2*l)},[n,l,a,function(){s(0,n+=1)}]}function V(e){let t,s,p,x,$,E;return{c(){t=l("input"),s=n(),p=l("button"),x=a("count"),this.h()},l(e){t=r(e,"INPUT",{type:!0}),s=u(e),p=r(e,"BUTTON",{});var l=o(p);x=c(l,"count"),l.forEach(i),this.h()},h(){v(t,"type","number")},m(l,a){h(l,t,a),g(t,e[0]),h(l,s,a),h(l,p,a),f(p,x),$||(E=[d(t,"input",e[1]),d(p,"click",e[2])],$=!0)},p(e,[s]){1&s&&b(t.value)!==e[0]&&g(t,e[0])},i:m,o:m,d(e){e&&i(t),e&&i(s),e&&i(p),$=!1,w(E)}}}function k(e,t,s){let l=0;return[l,function(){l=b(this.value),s(0,l)},()=>s(0,l+=1)]}function D(e){let t,s,d,p,g,b,w,x,$,E,y,T;return{c(){t=l("div"),s=l("img"),p=n(),g=l("h1"),b=a("Hello World!"),w=n(),x=l("p"),$=a("visit\n    "),E=l("a"),y=a("svelte.dev"),T=a("\n    to learn how to build Svelte apps."),this.h()},l(e){t=r(e,"DIV",{class:!0});var l=o(t);s=r(l,"IMG",{class:!0,src:!0,alt:!0}),p=u(l),g=r(l,"H1",{class:!0});var a=o(g);b=c(a,"Hello World!"),a.forEach(i),w=u(l),x=r(l,"P",{class:!0});var n=o(x);$=c(n,"visit\n    "),E=r(n,"A",{class:!0,href:!0});var h=o(E);y=c(h,"svelte.dev"),h.forEach(i),T=c(n,"\n    to learn how to build Svelte apps."),n.forEach(i),l.forEach(i),this.h()},h(){v(s,"class","w-16 h-16"),s.src!==(d="/blue/assets/svelte.d72399d3.png")&&v(s,"src","/blue/assets/svelte.d72399d3.png"),v(s,"alt","Svelte Logo"),v(g,"class","uppercase text-7xl font-thin my-8 text-yellow-500"),v(E,"class","text-blue-600"),v(E,"href","https://svelte.dev"),v(x,"class","my-4 leading-snug"),v(t,"class","text-center p-4 m-auto")},m(e,l){h(e,t,l),f(t,s),f(t,p),f(t,g),f(g,b),f(t,w),f(t,x),f(x,$),f(x,E),f(E,y),f(x,T)},p:m,i:m,o:m,d(e){e&&i(t)}}}function O(e){let t,s,p,g,b,x,$,E,y,T,I,U,M,H,S,V,k,D;return{c(){t=l("div"),s=l("p"),p=a("404"),g=n(),b=l("p"),x=a("Whoops! This page does not exist."),$=n(),E=l("p"),y=a("Try a link below to help you find your way."),T=n(),I=l("div"),U=l("button"),M=a("HOME"),H=n(),S=l("button"),V=a("GITHUB"),this.h()},l(e){t=r(e,"DIV",{class:!0});var l=o(t);s=r(l,"P",{class:!0});var a=o(s);p=c(a,"404"),a.forEach(i),g=u(l),b=r(l,"P",{class:!0});var n=o(b);x=c(n,"Whoops! This page does not exist."),n.forEach(i),$=u(l),E=r(l,"P",{class:!0});var h=o(E);y=c(h,"Try a link below to help you find your way."),h.forEach(i),T=u(l),I=r(l,"DIV",{class:!0});var f=o(I);U=r(f,"BUTTON",{class:!0});var d=o(U);M=c(d,"HOME"),d.forEach(i),H=u(f),S=r(f,"BUTTON",{class:!0});var m=o(S);V=c(m,"GITHUB"),m.forEach(i),f.forEach(i),l.forEach(i),this.h()},h(){v(s,"class","not-1 text-8xl text-gray-200 svelte-1i9ss0n"),v(b,"class","text-2xl text-gray-300 italic"),v(E,"class","text-base text-gray-400 italic"),v(U,"class","w-32 btn-blue mr-8"),v(S,"class","w-32 btn-blue"),v(I,"class","mt-10"),v(t,"class","not-found-text p-10 w-full h-full flex-center flex-col svelte-1i9ss0n")},m(l,a){h(l,t,a),f(t,s),f(s,p),f(t,g),f(t,b),f(b,x),f(t,$),f(t,E),f(E,y),f(t,T),f(t,I),f(I,U),f(U,M),f(I,H),f(I,S),f(S,V),k||(D=[d(U,"click",e[4]),d(S,"click",e[3])],k=!0)},p:m,d(e){e&&i(t),k=!1,w(D)}}}function P(e){let t,s,a;return{c(){t=l("picture"),s=l("img"),this.h()},l(e){t=r(e,"PICTURE",{});var l=o(t);s=r(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(i),this.h()},h(){v(s,"class","max-w-320"),s.src!==(a=e[1])&&v(s,"src",a),v(s,"alt","似乎有什么不太对...")},m(e,l){h(e,t,l),f(t,s)},p:m,d(e){e&&i(t)}}}function R(e){let t;let s=(e[0]?P:O)(e);return{c(){t=l("div"),s.c(),this.h()},l(e){t=r(e,"DIV",{class:!0});var l=o(t);s.l(l),l.forEach(i),this.h()},h(){v(t,"class","flex justify-center items-center h-full not-found overflow-hidden")},m(e,l){h(e,t,l),s.m(t,null)},p(e,[t]){s.p(e,t)},i:m,o:m,d(e){e&&i(t),s.d()}}}function j(e){const t=Math.random()>.3,s=Math.random()>.5?"/blue/assets/404.51130a9e.gif":"/blue/assets/404-2.9a7d8e0e.jpeg",l=e=>{alert("当前版本的路由导航失效了...")};return[t,s,l,()=>{window.open("https://github.com/fuchunhui/blue")},()=>l()]}const B=[{name:"/",component:class extends e{constructor(e){super(),t(this,e,null,D,s,{})}}},{name:"confirm",component:class extends e{constructor(e){super(),t(this,e,S,H,s,{})}}},{name:"counter",component:class extends e{constructor(e){super(),t(this,e,k,V,s,{})}}},{name:"404",path:"404",component:class extends e{constructor(e){super(),t(this,e,j,R,s,{})}}}];function L(e){let t,s,n,u;return{c(){t=l("header"),s=l("h1"),n=a("Hello Vite, Svelte, TailwindCSS, "),u=a(N),this.h()},l(e){t=r(e,"HEADER",{class:!0});var l=o(t);s=r(l,"H1",{});var a=o(s);n=c(a,"Hello Vite, Svelte, TailwindCSS, "),u=c(a,N),a.forEach(i),l.forEach(i),this.h()},h(){v(t,"class","w-full h-16 flex-center flex-shrink-0 flex-basis-64 bg-gradient-to-r from-green-400 to-blue-500")},m(e,l){h(e,t,l),f(t,s),f(s,n),f(s,u)},p:m,i:m,o:m,d(e){e&&i(t)}}}const N="Now!";class C extends e{constructor(e){super(),t(this,e,null,L,s,{})}}function z(e,t,s){const l=e.slice();return l[1]=t[s].label,l[2]=t[s].value,l[4]=s,l}function A(e){let t,s,d,p,g=e[1]+"";return{c(){t=l("div"),s=l("a"),d=a(g),p=n(),this.h()},l(e){t=r(e,"DIV",{class:!0});var l=o(t);s=r(l,"A",{href:!0});var a=o(s);d=c(a,g),a.forEach(i),p=u(l),l.forEach(i),this.h()},h(){v(s,"href",e[2]),v(t,"class","h-10.5 flex-center")},m(e,l){h(e,t,l),f(t,s),f(s,d),f(t,p)},p:m,d(e){e&&i(t)}}}function G(e){let t,s=e[0],a=[];for(let l=0;l<s.length;l+=1)a[l]=A(z(e,s,l));return{c(){t=l("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=r(e,"DIV",{class:!0});var s=o(t);for(let t=0;t<a.length;t+=1)a[t].l(s);s.forEach(i),this.h()},h(){v(t,"class","w-40 h-full bg-blue-200")},m(e,s){h(e,t,s);for(let l=0;l<a.length;l+=1)a[l].m(t,null)},p(e,[l]){if(1&l){let n;for(s=e[0],n=0;n<s.length;n+=1){const r=z(e,s,n);a[n]?a[n].p(r,l):(a[n]=A(r),a[n].c(),a[n].m(t,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=s.length}},i:m,o:m,d(e){e&&i(t),x(a,e)}}}function W(e){return[B.map((({name:e})=>({label:"/"===e?"home":e,value:e})))]}class _ extends e{constructor(e){super(),t(this,e,W,G,s,{})}}function F(e){let t,s,a,c,d,p,g,b,w;return s=new C({}),d=new _({}),b=new $({props:{routes:B}}),{c(){t=l("main"),E(s.$$.fragment),a=n(),c=l("div"),E(d.$$.fragment),p=n(),g=l("div"),E(b.$$.fragment),this.h()},l(e){t=r(e,"MAIN",{class:!0});var l=o(t);y(s.$$.fragment,l),a=u(l),c=r(l,"DIV",{class:!0});var n=o(c);y(d.$$.fragment,n),p=u(n),g=r(n,"DIV",{class:!0});var h=o(g);y(b.$$.fragment,h),h.forEach(i),n.forEach(i),l.forEach(i),this.h()},h(){v(g,"class","w-full h-full overflow-auto bg-blue-100 svelte-1ow0oz9"),v(c,"class","flex w-full h-full overflow-hidden svelte-1ow0oz9"),v(t,"class","flex-center flex-col h-full text-base min-h-480 svelte-1ow0oz9")},m(e,l){h(e,t,l),T(s,t,null),f(t,a),f(t,c),T(d,c,null),f(c,p),f(c,g),T(b,g,null),w=!0},p:m,i(e){w||(I(s.$$.fragment,e),I(d.$$.fragment,e),I(b.$$.fragment,e),w=!0)},o(e){U(s.$$.fragment,e),U(d.$$.fragment,e),U(b.$$.fragment,e),w=!1},d(e){e&&i(t),M(s),M(d),M(b)}}}new class extends e{constructor(e){super(),t(this,e,null,F,s,{})}}({target:document.body});
