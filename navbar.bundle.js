!function(n){function a(a){for(var t,s,l=a[0],i=a[1],c=a[2],u=0,v=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t]);for(p&&p(a);v.length;)v.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var n,a=0;a<o.length;a++){for(var e=o[a],t=!0,l=1;l<e.length;l++){var i=e[l];0!==r[i]&&(t=!1)}t&&(o.splice(a--,1),n=s(s.s=e[0]))}return n}var t={},r={5:0},o=[];function s(a){if(t[a])return t[a].exports;var e=t[a]={i:a,l:!1,exports:{}};return n[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=n,s.c=t,s.d=function(n,a,e){s.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:e})},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,a){if(1&a&&(n=s(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var t in n)s.d(e,t,function(a){return n[a]}.bind(null,t));return e},s.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(a,"a",a),a},s.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},s.p="/bootstrap-live-demo/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var p=i;o.push([9,0]),e()}({12:function(n,a,e){},7:function(n,a){n.exports='<template>\r\n    <nav \r\n        class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">\r\n        <a class="navbar-brand" href="#">\r\n            <img src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" href="#cover-section">\r\n        </a>\r\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">\r\n            <span class="navbar-toggler-icon"></span>\r\n        </button>\r\n        <div class="collapse navbar-collapse text-center" id="navbarCollapse">\r\n            <ul class="navbar-nav mr-auto">\r\n                <li class="nav-item active js-nav-item">\r\n                    <a class="nav-link" href="#introduction-section">Introdução</a>\r\n                </li>\r\n                <li class="nav-item active js-nav-item">\r\n                    <a class="nav-link" href="#why-bootstrap-section">Razoes</a>\r\n                </li>\r\n                <li class="nav-item active js-nav-item">\r\n                    <a class="nav-link" href="#instalation-section">Instalação</a>\r\n                </li>\r\n                <li class="nav-item active js-nav-item">\r\n                    <a class="nav-link" href="#responsive-section">Responsividade</a>\r\n                </li>\r\n                <li class="nav-item active js-nav-item">\r\n                    <a class="nav-link" href="#components-section">Componentes</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</template>'},9:function(n,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return l}));var t=e(0),r=e.n(t),o=e(7),s=e.n(o);e(12);class l{static render(){return r()(s.a).html()}}}});