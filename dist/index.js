"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(z,q){
function x(e,r,a,o){var i,n,t,u;if(e<=0)return NaN;if(e===1||a===0)return r[o];for(n=o,i=0,t=0,u=0;u<e;u++)t+=1,i+=(r[n]-i)/t,n+=a;return i}q.exports=x
});var c=v(function(A,m){
var j=require('@stdlib/strided-base-stride2offset/dist'),l=s();function R(e,r,a){return l(e,r,a,j(e,a))}m.exports=R
});var y=v(function(B,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=c(),E=s();_(f,"ndarray",E);p.exports=f
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),d,w=b(O(__dirname,"./native.js"));g(w)?d=h:d=w;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
