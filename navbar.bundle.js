!function(n){function a(a){for(var t,l,i=a[0],s=a[1],c=a[2],p=0,v=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(e,l)&&e[l]&&v.push(e[l][0]),e[l]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t]);for(u&&u(a);v.length;)v.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var n,a=0;a<o.length;a++){for(var r=o[a],t=!0,i=1;i<r.length;i++){var s=r[i];0!==e[s]&&(t=!1)}t&&(o.splice(a--,1),n=l(l.s=r[0]))}return n}var t={},e={5:0},o=[];function l(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=n,l.c=t,l.d=function(n,a,r){l.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:r})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,a){if(1&a&&(n=l(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var t in n)l.d(r,t,function(a){return n[a]}.bind(null,t));return r},l.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(a,"a",a),a},l.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},l.p="/bootstrap-live-demo/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=s;o.push([9,0]),r()}({12:function(n,a,r){},7:function(n,a){n.exports='<template>\r\n    <nav \r\n        class="bg-dark bd-navbar navbar navbar-expand navbar-dark sticky-top">\r\n        <a class="navbar-brand" href="#">\r\n            <img src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">\r\n        </a>\r\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\r\n            <span class="navbar-toggler-icon"></span>\r\n        </button>\r\n        <div class="collapse navbar-collapse" id="navbarNav">\r\n            <ul class="navbar-nav">\r\n                <li class="nav-item active js-nav-item">\r\n                    <a class="nav-link" href="#introduction-section">Introdução</a>\r\n                </li>\r\n                <li class="nav-item active js-nav-item">\r\n                    <a class="nav-link" href="#instalation-section">Instalação</a>\r\n                </li>\r\n                <li class="nav-item active js-nav-item">\r\n                    <a class="nav-link" href="#responsive-section">Responsividade</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</template>'},9:function(n,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return i}));var t=r(0),e=r.n(t),o=r(7),l=r.n(o);r(12);class i{static render(){return e()(l.a).html()}}}});