"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=s(function(h,m){
function y(r,e,i){var n,a,u,t;if(r<=0)return NaN;if(r===1||i===0)return e[0];for(i<0?a=(1-r)*i:a=0,n=0,u=0,t=0;t<r;t++)u+=1,n+=(e[a]-n)/u,a+=i;return n}m.exports=y
});var q=s(function(k,f){
function j(r,e,i,n){var a,u,t,v;if(r<=0)return NaN;if(r===1||i===0)return e[n];for(u=n,a=0,t=0,v=0;v<r;v++)t+=1,a+=(e[u]-a)/t,u+=i;return a}f.exports=j
});var w=s(function(z,p){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=d(),R=q();l(c,"ndarray",R);p.exports=c
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=w(),o,x=E(_(__dirname,"./native.js"));O(x)?o=b:o=x;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
