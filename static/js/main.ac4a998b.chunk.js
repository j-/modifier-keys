(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a,c,l,s=n(0),r=n(6),m=n(3),i=n(4);!function(e){e.SHIFT="Shift",e.CONTROL="Control",e.META="Meta",e.ALT="Alt"}(a||(a={})),function(e){e[e.SHIFT=a.SHIFT]="SHIFT",e[e.CONTROL=a.CONTROL]="CONTROL",e[e.WINDOWS=a.META]="WINDOWS",e[e.ALT=a.ALT]="ALT"}(c||(c={})),function(e){e[e.SHIFT=a.SHIFT]="SHIFT",e[e.CONTROL=a.CONTROL]="CONTROL",e[e.COMMAND=a.META]="COMMAND",e[e.OPTION=a.ALT]="OPTION"}(l||(l={}));var o=n(2),u=n(1),E=n.n(u),d=(n(13),function(e){var t=e.pressed,n=e.className,a=Object(o.a)(e,["pressed","className"]);return s.createElement("div",Object.assign({className:E()("Key",t&&"Key--pressed",n)},a))}),O=(n(15),function(e){var t=e.className,n=Object(o.a)(e,["className"]);return s.createElement(d,Object.assign({className:E()("KeyWin",t)},n))}),N=function(e){return s.createElement(O,Object.assign({className:"KeyWinShift"},e),s.createElement("span",{className:"Key-text"},"Shift"))},h=function(e){return s.createElement(O,Object.assign({className:"KeyWinControl"},e),s.createElement("span",{className:"Key-text"},"Ctrl"))},f=function(e){return s.createElement(O,Object.assign({className:"KeyWinAlt"},e),s.createElement("span",{className:"Key-text"},"Alt"))},v=function(e){return s.createElement(O,Object.assign({className:"KeyWinWindows"},e),s.createElement("svg",{className:"Key-symbol",width:64,height:64,viewBox:"0 0 64 64"},s.createElement("path",{d:"M.022 32L0 12.495l24-3.259V32zM28 8.655L59.992 4v28H28zM60 36l-.008 28L28 59.499V36zM24 58.99L.02 55.703.019 36h23.982z"})))},T=(n(17),function(e){var t=e.className,n=Object(o.a)(e,["className"]);return s.createElement(d,Object.assign({className:E()("KeyMac",t)},n))}),y=function(e){return s.createElement(T,Object.assign({className:"KeyMacShift"},e),s.createElement("span",{className:"Key-text"},"Shift"))},M=function(e){return s.createElement(T,Object.assign({className:"KeyMacCommand"},e),s.createElement("span",{className:"Key-text"},"Command"),s.createElement("svg",{className:"Key-symbol",width:64,height:64,viewBox:"0 0 64 64"},s.createElement("path",{d:"M46 56c-5.514 0-10-4.486-10-10v-6h-8v6c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10h6v-8h-6c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10v6h8v-6c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10h-6v8h6c5.514 0 10 4.486 10 10s-4.486 10-10 10zM40 40v6c0 3.308 2.692 6 6 6s6-2.692 6-6-2.692-6-6-6h-6zM18 40c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6v-6h-6zM28 36h8v-8h-8v8zM40 24h6c3.308 0 6-2.692 6-6s-2.692-6-6-6-6 2.692-6 6v6zM18 12c-3.308 0-6 2.692-6 6s2.692 6 6 6h6v-6c0-3.308-2.692-6-6-6z"})))},p=function(e){return s.createElement(T,Object.assign({className:"KeyMacControl"},e),s.createElement("span",{className:"Key-text"},"Control"),s.createElement("svg",{className:"Key-symbol",width:64,height:64,viewBox:"0 0 64 64"},s.createElement("path",{d:"M46.001 28a1.994 1.994 0 01-1.506-.683L32 13.037l-12.495 14.28a2 2 0 11-3.01-2.634l14-16a2 2 0 013.01 0l14 16A2 2 0 0146.001 28z"})))},b=function(e){return s.createElement(T,Object.assign({className:"KeyMacOption"},e),s.createElement("span",{className:"Key-text"},"Option"),s.createElement("svg",{className:"Key-symbol",width:64,height:64,viewBox:"0 0 64 64"},s.createElement("path",{d:"M58 52H42a2 2 0 01-1.828-1.188L24.7 16H6a2 2 0 010-4h20c.79 0 1.507.466 1.828 1.188L43.3 48H58a2 2 0 110 4zM58 16H38a2 2 0 010-4h20a2 2 0 010 4z"})))},w=(n(19),function(){var e=function(){var e,t=s.useState(!1),n=Object(i.a)(t,2),c=n[0],l=n[1],r=s.useState(!1),o=Object(i.a)(r,2),u=o[0],E=o[1],d=s.useState(!1),O=Object(i.a)(d,2),N=O[0],h=O[1],f=s.useState(!1),v=Object(i.a)(f,2),T=v[0],y=v[1];return s.useEffect(function(){var e=function(e){l(e.getModifierState(a.SHIFT)),E(e.getModifierState(a.CONTROL)),h(e.getModifierState(a.ALT)),y(e.getModifierState(a.META))},t=function(){l(!1),E(!1),h(!1),y(!1)};return window.addEventListener("keydown",e),window.addEventListener("keyup",e),window.addEventListener("blur",t),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",e),window.removeEventListener("blur",t)}}),e={},Object(m.a)(e,a.SHIFT,c),Object(m.a)(e,a.CONTROL,u),Object(m.a)(e,a.ALT,N),Object(m.a)(e,a.META,T),e}();return s.createElement("table",{className:"Modifiers"},s.createElement("colgroup",null,s.createElement("col",{style:{width:"8em"}}),s.createElement("col",{style:{width:"5em"}}),s.createElement("col",{style:{width:"5em"}}),s.createElement("col",{style:{width:"6em"}})),s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,s.createElement("code",null,"Shift")),s.createElement("th",null,s.createElement("code",null,"Control")),s.createElement("th",null,s.createElement("code",null,"Meta")),s.createElement("th",null,s.createElement("code",null,"Alt")))),s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",null,s.createElement(N,{pressed:e[c.SHIFT]})),s.createElement("td",null,s.createElement(h,{pressed:e[c.CONTROL]})),s.createElement("td",null,s.createElement(f,{pressed:e[c.ALT]})),s.createElement("td",null,s.createElement(v,{pressed:e[c.WINDOWS]}))),s.createElement("tr",null,s.createElement("td",null,s.createElement(y,{pressed:e[l.SHIFT]})),s.createElement("td",null,s.createElement(p,{pressed:e[l.CONTROL]})),s.createElement("td",null,s.createElement(b,{pressed:e[l.OPTION]})),s.createElement("td",null,s.createElement(M,{pressed:e[l.COMMAND]})))))}),L=function(){return s.createElement("div",{className:"App"},s.createElement(w,null))},S=(n(21),document.getElementById("root"));Object(r.render)(s.createElement(L,null),S)}],[[7,2,1]]]);
//# sourceMappingURL=main.ac4a998b.chunk.js.map