!function(r){function n(n){for(var t,u,i=n[0],s=n[1],l=n[2],c=0,d=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(r[t]=s[t]);for(p&&p(n);d.length;)d.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var r,n=0;n<a.length;n++){for(var e=a[n],t=!0,i=1;i<e.length;i++){var s=e[i];0!==o[s]&&(t=!1)}t&&(a.splice(n--,1),r=u(u.s=e[0]))}return r}var t={},o={2:0},a=[];function u(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return r[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=r,u.c=t,u.d=function(r,n,e){u.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},u.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},u.t=function(r,n){if(1&n&&(r=u(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var t in r)u.d(e,t,function(n){return r[n]}.bind(null,t));return e},u.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return u.d(n,"a",n),n},u.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},u.p="/bootstrap-live-demo/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var p=s;a.push([3,0]),e()}([,,function(r,n){r.exports='<template id="group-box">\r\n    <div class="group-box-container">\r\n        <div class="row">\r\n            <div class="col">\r\n                <span>Nº usp</span>\r\n            </div>\r\n                <div class="col">\r\n                <span>Nome</span>\r\n            </div>\r\n        </div>\r\n        {{#group}}\r\n            <div class="row">\r\n                <div class="col">\r\n                    <span>{{usp_number}}</span>\r\n                </div>\r\n                <div class="col">\r\n                    <span class="name-text">{{name}}</span>\r\n                </div>\r\n            </div>\r\n        {{/group}}\r\n    </div>\r\n</template>'},function(r,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var t=e(0),o=e.n(t),a=e(1),u=e.n(a),i=e(2),s=e.n(i);e(4);class l{static render(){let r=o()(s.a).html();return u.a.render(r,{group:this.getGroup()})}static getGroup(){return[{usp_number:10314875,name:"Leonardo Coelho Negri"},{usp_number:9360951,name:"Lucas Borelli Amarali"},{usp_number:10403280,name:"Lucas Gabriel Arantes Moreira"},{usp_number:10258970,name:"Lucas Masayuki Tamaribuchi"}]}}},function(r,n,e){}]);