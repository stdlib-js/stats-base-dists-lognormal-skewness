"use strict";var i=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=i(function(p,u){
var s=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-sqrt/dist'),q=require('@stdlib/math-base-special-exp/dist');function v(t,r){var e;return s(t)||s(r)||r<=0?NaN:(e=q(r*r),(e+2)*a(e-1))}u.exports=v
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
