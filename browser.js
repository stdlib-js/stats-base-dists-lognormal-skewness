// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=function(n){return n!=n},r=Math.sqrt,e=Math.floor,o=Math.ceil,i=e,u=o,f=function(n){return n<0?u(n):i(n)},c=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY,y=a,l=c,p=function(n){return n===y||n===l},A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,w=b,v=function(n){return w.call(n)},U=Object.prototype.hasOwnProperty,d=function(n,t){return null!=n&&U.call(n,t)},m="function"==typeof Symbol?Symbol.toStringTag:"",s=d,h=m,I=b,N=v,g=function(n){var t,r,e;if(null==n)return I.call(n);r=n[h],t=s(n,h);try{n[h]=void 0}catch(t){return I.call(n)}return e=I.call(n),t?n[h]=r:delete n[h],e},F=A&&"symbol"==typeof Symbol.toStringTag?g:N,S=F,H="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,T=function(n){return H&&n instanceof Uint32Array||"[object Uint32Array]"===S(n)},j=O,E=function(){var n,t;if("function"!=typeof j)return!1;try{t=new j(t=[1,3.14,-3.14,4294967296,4294967297]),n=T(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},G="function"==typeof Uint32Array?Uint32Array:void 0,L=function(){throw new Error("not implemented")},M=E()?G:L,W=F,x="function"==typeof Float64Array,P="function"==typeof Float64Array?Float64Array:null,V=function(n){return x&&n instanceof Float64Array||"[object Float64Array]"===W(n)},Y=P,_=function(){var n,t;if("function"!=typeof Y)return!1;try{t=new Y([1,3.14,-3.14,NaN]),n=V(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},k="function"==typeof Float64Array?Float64Array:void 0,q=function(){throw new Error("not implemented")},z=_()?k:q,B=F,C="function"==typeof Uint8Array,D="function"==typeof Uint8Array?Uint8Array:null,J=function(n){return C&&n instanceof Uint8Array||"[object Uint8Array]"===B(n)},K=D,Q=function(){var n,t;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,256,257]),n=J(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},R="function"==typeof Uint8Array?Uint8Array:void 0,X=function(){throw new Error("not implemented")},Z=Q()?R:X,$=F,nn="function"==typeof Uint16Array,tn="function"==typeof Uint16Array?Uint16Array:null,rn=function(n){return nn&&n instanceof Uint16Array||"[object Uint16Array]"===$(n)},en=tn,on=function(){var n,t;if("function"!=typeof en)return!1;try{t=new en(t=[1,3.14,-3.14,65536,65537]),n=rn(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},un="function"==typeof Uint16Array?Uint16Array:void 0,fn=function(){throw new Error("not implemented")},cn={uint16:on()?un:fn,uint8:Z};(n=new cn.uint16(1))[0]=4660;var an,yn,ln=52===new cn.uint8(n.buffer)[0];!0===ln?(an=1,yn=0):(an=0,yn=1);var pn,An,bn=M,wn={HIGH:an,LOW:yn},vn=new z(1),Un=new bn(vn.buffer),dn=wn.HIGH,mn=wn.LOW,sn=function(n,t){return vn[0]=t,n[0]=Un[dn],n[1]=Un[mn],n},hn=function(n,t){return 1===arguments.length?sn([0,0],n):sn(n,t)},In=hn,Nn=M,gn=!0===ln?1:0,Fn=new z(1),Sn=new Nn(Fn.buffer),Hn=function(n){return Fn[0]=n,Sn[gn]};!0===ln?(pn=1,An=0):(pn=0,An=1);var On=M,Tn={HIGH:pn,LOW:An},jn=new z(1),En=new On(jn.buffer),Gn=Tn.HIGH,Ln=Tn.LOW,Mn=function(n,t){return En[Gn]=n,En[Ln]=t,jn[0]},Wn=In,xn=Hn,Pn=Mn,Vn=[0,0],Yn=p,_n=t,kn=function(n){return Math.abs(n)},qn=function(n,t){return _n(t)||Yn(t)?(n[0]=t,n[1]=0,n):0!==t&&kn(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)},zn=function(n,t){return 1===arguments.length?qn([0,0],n):qn(n,t)},Bn=Hn,Cn=function(n){var t=Bn(n);return(t=(2146435072&t)>>>20)-1023|0},Dn=a,Jn=c,Kn=t,Qn=p,Rn=function(n,t){var r,e;return Wn(Vn,n),r=Vn[0],r&=2147483647,e=xn(t),Pn(r|=e&=2147483648,Vn[1])},Xn=zn,Zn=Cn,$n=In,nt=Mn,tt=[0,0],rt=[0,0],et=function(n,t){var r,e;return 0===t||0===n||Kn(n)||Qn(n)?n:(Xn(tt,n),t+=tt[1],(t+=Zn(n=tt[0]))<-1074?Rn(0,n):t>1023?n<0?Jn:Dn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,$n(rt,n),r=rt[0],r&=2148532223,e*nt(r|=t+1023<<20,rt[1])))},ot=et,it=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},ut=t,ft=f,ct=c,at=a,yt=function(n,t,r){var e,o,i;return i=(e=n-t)-(o=e*e)*it(o),ot(1-(t-e*i/(2-i)-n),r)},lt=1.4426950408889634,pt=1/(1<<28),At=function(n){var t;return ut(n)||n===at?n:n===ct?0:n>709.782712893384?at:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<pt?1+n:(t=ft(n<0?lt*n-.5:lt*n+.5),yt(n-.6931471803691238*t,1.9082149292705877e-10*t,t))};return function(n,e){var o;return t(n)||t(e)||e<=0?NaN:((o=At(e*e))+2)*r(o-1)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).skewness=t();
//# sourceMappingURL=browser.js.map
