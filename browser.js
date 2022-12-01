// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return t!=t}var n=Math.sqrt,r=Math.floor,e=Math.ceil;function o(t){return t<0?e(t):r(t)}var i=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;function u(t){return t===a||t===i}var f="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty,l=Object.prototype,y=l.toString,p=l.__defineGetter__,b=l.__defineSetter__,v=l.__lookupGetter__,s=l.__lookupSetter__,d=function(){try{return f({},"x",{}),!0}catch(t){return!1}}()?c:function(t,n,r){var e,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(v.call(t,n)||s.call(t,n)?(e=t.__proto__,t.__proto__=l,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&p&&p.call(t,n,r.get),a&&b&&b.call(t,n,r.set),t};function A(t,n,r){d(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var w,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",g=_&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return m.call(t);r=t[U],i=U,n=null!=(o=t)&&h.call(o,i);try{t[U]=void 0}catch(n){return m.call(t)}return e=m.call(t),n?t[U]=r:delete t[U],e}:function(t){return m.call(t)},j="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var t,n,r;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(j&&r instanceof Uint32Array||"[object Uint32Array]"===g(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,N=w,E="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,T="function"==typeof Float64Array?Float64Array:void 0;S=function(){var t,n,r;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),r=n,t=(E&&r instanceof Float64Array||"[object Float64Array]"===g(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?T:function(){throw new Error("not implemented")};var H,G=S,P="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var t,n,r;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),r=n,t=(P&&r instanceof Uint8Array||"[object Uint8Array]"===g(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?M:function(){throw new Error("not implemented")};var V,W=H,k="function"==typeof Uint16Array,x="function"==typeof Uint16Array?Uint16Array:null,Y="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,n,r;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,65536,65537]),r=n,t=(k&&r instanceof Uint16Array||"[object Uint16Array]"===g(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?Y:function(){throw new Error("not implemented")};var q,C={uint16:V,uint8:W};(q=new C.uint16(1))[0]=4660;var z,B,D=52===new C.uint8(q.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new G(1),Q=new N(K.buffer),R=J.HIGH,X=J.LOW;function Z(t,n,r,e){return K[0]=t,n[e]=Q[R],n[e+r]=Q[X],n}function $(t){return Z(t,[0,0],1,0)}A($,"assign",Z);var tt,nt,rt=!0===D?1:0,et=new G(1),ot=new N(et.buffer);function it(t){return et[0]=t,ot[rt]}!0===D?(tt=1,nt=0):(tt=0,nt=1);var at={HIGH:tt,LOW:nt},ut=new G(1),ft=new N(ut.buffer),ct=at.HIGH,lt=at.LOW;function yt(t,n){return ft[ct]=t,ft[lt]=n,ut[0]}var pt=[0,0];function bt(n,r,e,o){return t(n)||u(n)?(r[o]=n,r[o+e]=0,r):0!==n&&function(t){return Math.abs(t)}(n)<22250738585072014e-324?(r[o]=4503599627370496*n,r[o+e]=-52,r):(r[o]=n,r[o+e]=0,r)}A((function(t){return bt(t,[0,0],1,0)}),"assign",bt);var vt=[0,0],st=[0,0];function dt(n,r){var e,o,f,c,l,y;return 0===r||0===n||t(n)||u(n)?n:(bt(n,vt,1,0),r+=vt[1],r+=function(t){var n=it(t);return(n=(2146435072&n)>>>20)-1023|0}(n=vt[0]),r<-1074?(f=0,c=n,$.assign(f,pt,1,0),l=pt[0],l&=2147483647,y=it(c),yt(l|=y&=2147483648,pt[1])):r>1023?n<0?i:a:(r<=-1023?(r+=52,o=2220446049250313e-31):o=1,$.assign(n,st,1,0),e=st[0],e&=2148532223,o*yt(e|=r+1023<<20,st[1])))}var At=1.4426950408889634,wt=1/(1<<28);function _t(n){var r;return t(n)||n===a?n:n===i?0:n>709.782712893384?a:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<wt?1+n:function(t,n,r){var e,o,i,a;return dt(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(n-.6931471803691238*(r=o(n<0?At*n-.5:At*n+.5)),1.9082149292705877e-10*r,r)}return function(r,e){var o;return t(r)||t(e)||e<=0?NaN:((o=_t(e*e))+2)*n(o-1)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).skewness=n();
//# sourceMappingURL=browser.js.map
